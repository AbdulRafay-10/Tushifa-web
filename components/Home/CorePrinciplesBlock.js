"use client";
import React from "react";
import Link from "next/link";

const CorePrinciplesBlock = () => {
  return (
    <section className="section bg-white pb-5">
      <div className="container">
        
        {/* Header Section */}
        <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
                <div className="section-title d-flex justify-content-center align-items-center mb-2">
                     <span className="line mr-3"></span>
                     <h6 className="text-uppercase fw-bold text-muted mb-0" style={{letterSpacing: "1px", fontSize: "14px"}}>OUR CORE PRINCIPLES</h6>
                     <span className="line ml-3"></span>
                </div>
                <h3 className="font-weight-bold" style={{color: "#223A66"}}>We ensure trusted, accessible, and adaptable healthcare for everyone.</h3>
            </div>
        </div>

        <div className="row">
          {/* Transparency Card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card border-0 h-100 p-4" style={{borderRadius: "30px"}}>
              <div className="card-body">
                <h5 className="card-title font-weight-bold mb-4" style={{color: "black"}}>Transparency</h5>
                <p className=" mb-0" style={{lineHeight: "1.6"}}>
                  We ensure donors and patients remain fully informed about fund usage. All processes are conducted with clarity, accountability, and strict confidentiality to protect patient privacy.
                </p>
                <div className="text-right mt-3">
                  <Link href="/about" className="text-primary font-weight-bold" style={{fontSize: "14px", textDecoration: "none"}}>
                    Read More <i className="fa fa-arrow-right ml-1" style={{fontSize: "12px"}}></i>
                  </Link>
                </div>
                
              </div>
            </div>
          </div>

          {/* Accessibility Card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card border-0 h-100 p-4" style={{borderRadius: "30px"}}>
              <div className="card-body">
                <h5 className="card-title font-weight-bold mb-4" style={{color: "black"}}>Accessibility</h5>
                <p className="text-muted mb-0" style={{lineHeight: "1.6"}}>
                  We believe healthcare is a basic right. We make outpatient treatment accessible to everyone by removing barriers through streamlined, technology-driven solutions.
                </p>
                <div className="text-right mt-3">
                  <Link href="/about" className="text-primary font-weight-bold" style={{fontSize: "14px", textDecoration: "none"}}>
                    Read More <i className="fa fa-arrow-right ml-1" style={{fontSize: "12px"}}></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Flexibility Card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card border-0 h-100 p-4" style={{borderRadius: "30px"}}>
              <div className="card-body">
                <h5 className="card-title font-weight-bold mb-4" style={{color: "black"}}>Flexibility</h5>
                 <p className="text-muted mb-0" style={{lineHeight: "1.6"}}>
                  We adapt to the evolving needs of our patients. Every situation is unique, so we provide personalized support, stay open to new ideas, and respond quickly and effectively.
                </p>
                <div className="text-right mt-3">
                  <Link href="/about" className="text-primary font-weight-bold" style={{fontSize: "14px", textDecoration: "none"}}>
                    Read More <i className="fa fa-arrow-right ml-1" style={{fontSize: "12px"}}></i>
                  </Link>
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
      `}</style>
    </section>
  );
};

export default CorePrinciplesBlock;
