import startDbConnection from "@/libs/db";
import PatientStoryModel from "@/models/patientStoryModel";
import PatientModel from "@/models/patientModel";
import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const POST = async (req) => {
  try {
    const data = await req.formData();
    const name = data.get("name");
    const diagnosis = data.get("diagnosis");
    const location = data.get("location");
    const age = data.get("age");
    const story = data.get("story");
    const fullStory = data.get("fullStory");
    const imageFile = data.get("image");

    let imageUrl = "";
    if (imageFile && imageFile.name) {
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      imageUrl = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          { folder: "patient-stories", resource_type: "image" },
          (err, result) => {
            if (err) return reject(err);
            resolve(result.secure_url);
          }
        ).end(buffer);
      });
    }

    await startDbConnection();

    const storyDoc = await PatientStoryModel.create({
      name,
      diagnosis,
      location,
      age,
      story,
      fullStory,
      image: imageUrl,
    });

    return NextResponse.json(
      { success: true, message: "Story added successfully!", story: storyDoc },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating patient story:", error);
    return NextResponse.json(
      { success: false, message: error?.message || "Server Error", error },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    await startDbConnection();
    
    // Fetch from both models
    const [stories, patients] = await Promise.all([
      PatientStoryModel.find().lean(),
      PatientModel.find().lean()
    ]);

    // Normalize patients to match stories schema
    const normalizedPatients = patients.map(p => ({
      _id: p._id,
      name: p.name,
      diagnosis: p.patient_condition || "",
      location: p.address || "",
      age: p.age,
      story: p.narrative ? (p.narrative.length > 300 ? p.narrative.substring(0, 300) + "..." : p.narrative) : "",
      fullStory: p.narrative || "",
      image: p.cnic?.photocopy || "/assets/images/patient.png",
      createdAt: p.createdAt,
      type: "patient" // for identification if needed
    }));

    // Merge and sort
    const allStories = [...stories, ...normalizedPatients].sort((a, b) => 
      new Date(b.createdAt) - new Date(a.createdAt)
    );

    return NextResponse.json({ success: true, data: allStories });
  } catch (error) {
    console.error("Error fetching stories:", error);
    return NextResponse.json(
      { success: false, message: error?.message || "Server Error", error },
      { status: 500 }
    );
  }
};