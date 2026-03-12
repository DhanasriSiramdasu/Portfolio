import React from "react";
import "./EducationTimeline.css";

function EducationTimeline() {
  return (
    <section className="timeline-section" id="education">
      <h2 className="section-title">Education</h2>

      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Bachelor of Technology (B.Tech)</h3>
            <p>Computer Science and Engineering(AI & ML)</p>
            <p>RVR & JC College of Engineering , Guntur</p>
            <span>2023 – 2027</span>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Intermediate (MBiPC)</h3>
            <p>Pre-University Course</p>
            <p>RGUKT(IIIT Ongole )</p>
            <span>2021 – 2023</span>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Secondary School</h3>
            <p>SSC</p>
            <p>TM Rao High School, Bhattiprolu</p>
            <span>2020 – 2021</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default EducationTimeline;