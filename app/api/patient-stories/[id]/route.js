import startDbConnection from "@/libs/db";
import PatientStoryModel from "@/models/patientStoryModel";
import PatientModel from "@/models/patientModel";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    await startDbConnection();
    
    // Try PatientStoryModel first
    let story = await PatientStoryModel.findById(params.id).lean();
    
    // If not found, try PatientModel
    if (!story) {
      const patient = await PatientModel.findById(params.id).lean();
      if (patient) {
        // Normalize patient to match story schema
        story = {
          _id: patient._id,
          name: patient.name,
          diagnosis: patient.patient_condition || "",
          location: patient.address || "",
          age: patient.age,
          story: patient.narrative ? (patient.narrative.length > 300 ? patient.narrative.substring(0, 300) + "..." : patient.narrative) : "",
          fullStory: patient.narrative || "",
          image: patient.cnic?.photocopy || "/assets/images/patient.png",
          createdAt: patient.createdAt,
          type: "patient"
        };
      }
    }

    if (!story) {
      return NextResponse.json(
        { success: false, error: "Story not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, story });
  } catch (error) {
    console.error("GET /patient-stories/[id] error:", error);
    return NextResponse.json(
      { success: false, message: error?.message || "Server error" },
      { status: 500 }
    );
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await startDbConnection();
    const deleted = await PatientStoryModel.findByIdAndDelete(params.id);
    if (!deleted) {
      return NextResponse.json(
        { success: false, message: "Story not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { success: true, message: "Story deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE /patient-stories/[id] error:", error);
    return NextResponse.json(
      { success: false, message: error?.message || "Server error" },
      { status: 500 }
    );
  }
};