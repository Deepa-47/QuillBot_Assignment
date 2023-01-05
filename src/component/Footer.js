import React from "react";
import "../style/Footer.css";

export const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-title">
          <p className="footer-head-title">
            Write better, faster, and clearer instantly
          </p>
          <p className="footer-sub-title">
            QuillBot is trusted by students, professional writers, and business
            people who want to write more effectively.
          </p>
        </div>

        <div className="circles">
          <div>
            <div className="circle per-75">
              <div className="inner">
                <label className="percentage">75%</label>
                <label className="percentage-title">time saved</label>
              </div>
            </div>
            <div className="circle-title">
              Average time savings per writing project.
            </div>
          </div>
          <div>
            <div className="circle per-50">
              <div className="inner">
                <label className="percentage">50+</label>
                <label className="percentage-title">millions</label>
              </div>
            </div>
            <div className="circle-title">Trusted by millions worldwide.</div>
          </div>
          <div>
            <div className="circle per-85">
              <div className="inner">
                <label className="percentage">85%</label>
                <label className="percentage-title">to students</label>
              </div>
            </div>
            <div className="circle-title">
              Who reported their grades improved after using QuillBot.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
