"use client";
import React from "react";

const InfographicsBlock = () => {
  return (
    <section className="section section-infographics bg-white">
      <div className="container">
        
        {/* Header Section */}
        <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
                <div className="section-title d-flex justify-content-center align-items-center mb-2">
                     <span className="line mr-3"></span>
                     <h6 className="text-uppercase fw-bold text-muted mb-0" style={{letterSpacing: "1px", fontSize: "14px"}}>INFOGRAPHICS — TUSHIFA PATIENT OVERVIEW</h6>
                     <span className="line ml-3"></span>
                </div>
                <h3 className="font-weight-bold" style={{color: "#223A66"}}>Quick summary of patient and expense information.</h3>
            </div>
        </div>

        <div className="row">
          {/* Patients Overview Card */}
          <div className="col-lg-4 col-md-6">
            <div className="card border-0  h-100 p-3" style={{borderRadius: "30px"}}>
              <div className="card-body">
                <h5 className="card-title font-weight-bold mb-5" style={{color: "black"}}>Patients Overview</h5>
                
                <div className="mb-4">
                  <p className="mb-1">Registered Patients: <span className="font-weight-bold text-dark">193</span></p>
                </div>
                
                <div>
                  <p className="mb-0 text-xl">Active Patients: <span className="font-weight-bold text-[#223A66]">152</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Patients Categories Card */}
          <div className="col-lg-4 col-md-6">
            <div className="card border-0  h-100 p-3" style={{borderRadius: "30px"}}>
              <div className="card-body">
                <h5 className="card-title font-weight-bold mb-4" style={{color: "black"}}>Patients Categories</h5>
                <ul className="list-unstyled text-xl">
                    <li className="mb-3">• Thalassemia</li>
                    <li className="mb-3">• Leukemia</li>
                    <li className="mb-3">• Anemia</li>
                    <li className="mb-0">• Myeloma</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Monthly Expenses Card */}
          <div className="col-lg-4 col-md-12">
            <div className="card border-0 h-100 p-3" style={{borderRadius: "30px"}}>
              <div className="card-body">
                <h5 className="card-title font-weight-bold mb-2" style={{color: "black"}}>Monthly Expenses per Patient</h5>
                <p className="text-muted mb-4">PKR 10,000 - PKR 25,000</p>
                
                <h5 className="card-title font-weight-bold mb-3" style={{color: "black"}}>Guardian Profession & Income</h5>
                
                <div className="row text-muted">
                    <div className="col-6 mb-2">Labor: <span className="font-weight-bold text-[#223A66]">71%</span></div>
                    <div className="col-6 mb-2">Driver: <span className="font-weight-bold text-[#223A66]">15%</span></div>
                    <div className="col-6">Shopkeeper<span className="font-weight-bold text-[#223A66]">4%</span></div>
                    <div className="col-6">Jobless: <span className="font-weight-bold text-[#223A66]">10%</span></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <style jsx>{`
        .line {
            height: 2px;
            width: 50px;
            background-color: #adb5bd;
            display: inline-block;
        }
        .text-black {
            color: black !important;
        }
      `}</style>
    </section>
  );
};

export default InfographicsBlock;
