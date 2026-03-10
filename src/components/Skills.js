import React, { useRef, useEffect } from "react";

import htmlimg from "../assets/languages/html icon.png";
import cssimg from "../assets/languages/css icon.jpg";
import bootstrap from "../assets/languages/bootstrap icon.jpg";
import c from "../assets/languages/c lan icon.png";
import java from "../assets/languages/java lan icon.png";
import javascript from "../assets/languages/javascript icon.png";
import r from "../assets/languages/r lan icon.png";
import python from "../assets/languages/python lan icon.png";
import mysql from "../assets/languages/mysql icon.jpg";
import sql from "../assets/languages/sql icon.jpg";
import sqlite from "../assets/languages/sqlite icon.jpg";
import postregresql from "../assets/languages/postregresql icon.png";
import mongodb from "../assets/languages/mongodb icon.png";
import git from "../assets/languages/git icon.png";
import github from "../assets/languages/github icon.png";
import numpy from "../assets/languages/numpy icon.png";
import pandas from "../assets/languages/pandas icon.png";
import vscode from "../assets/languages/vs code icon.png";

import "./skills.css";

function Skills() {

  const containerRef = useRef(null);

  const skills = [
    { src: c }, { src: htmlimg }, { src: cssimg }, { src: java },
    { src: javascript }, { src: bootstrap }, { src: mongodb },
    { src: mysql }, { src: sql }, { src: sqlite }, { src: postregresql },
    { src: python }, { src: r }, { src: numpy }, { src: pandas },
    { src: git }, { src: github }, { src: vscode }
  ];

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {

          const icons = containerRef.current.querySelectorAll(".skill-icon");

          const positions = [];
          const minDistance = 90; // space between icons

          icons.forEach((icon) => {

            let x, y;
            let validPosition = false;

            while (!validPosition) {

              x = Math.random() * 900 - 450;
              y = Math.random() * 500 - 250;

              validPosition = true;

              for (let pos of positions) {

                const dx = x - pos.x;
                const dy = y - pos.y;

                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < minDistance) {
                  validPosition = false;
                  break;
                }

              }

            }

            positions.push({ x, y });

            icon.style.setProperty("--x", `${x}px`);
            icon.style.setProperty("--y", `${y}px`);

            // spread from center
            setTimeout(() => {
              icon.classList.add("spread");
            }, 100);

            // start floating after spread
            setTimeout(() => {
              icon.classList.add("float");
            }, 2100);

          });

          observer.disconnect(); // run animation only once

        }

      },
      { threshold: 0.4 } // triggers when 40% visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

  }, []);

  return (
    <>
     <h2 className="section-title" id="skills">Skills</h2>
    <div className="skills-container" ref={containerRef}>
      {skills.map((skill, index) => (
        <img
          key={index}
          src={skill.src}
          alt="skill"
          className="skill-icon"
        />
      ))}
    </div>
    </>
  );
}

export default Skills;