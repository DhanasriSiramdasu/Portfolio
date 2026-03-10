import React, { Component } from "react";
import "./Projects.css";
import project1Img from "../assets/agri_image.jpg";
import project2Img from "../assets/newsapp_image.jpg";
import project3Img from "../assets/sentiment_img.png";

export class Projects extends Component {
  componentDidMount() {
    const cards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            entry.target.style.transitionDelay = `${index * 0.15}s`;
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }

  render() {
    const projects = [
      {
        img: project1Img,
        title: "AI Agri-ChatBot",
        desc: "AI-powered chatbot for agricultural advice and support.",
        tech: "Python • Flask • SQLite",
        live_link:"https://ai-agri-chat-bot-project-di2p.vercel.app?_vercel_share=7RhPNf8ZywPjfegPDfR8wQj73CTMGo2G",
        code_link:"https://github.com/DhanasriSiramdasu/AI-AgriChatBot-Project",
      },
      {
        img: project2Img,
        title: "News App",
        desc: "Live news application using public APIs.",
        tech: "React • API • Bootstrap",
        live_link:"https://drive.google.com/file/d/1f4mWQWtqD-7anvzsk_isBZ0U2-9pbiam/view?usp=sharing",
        code_link:"https://github.com/DhanasriSiramdasu/newsapp",
      },
      {
        img: project3Img,
        title: "Sentiment Analysis Tool",
        desc: "Analyzes sentiment in text using NLP techniques.",
        tech: "Python • NLP • Flask",
        live_link:"https://drive.google.com/file/d/1TtOyIbIFmNbPoZK-UD_fnVKs70el3oTX/view?usp=sharing",
        code_link:"https://github.com/DhanasriSiramdasu/SENTIMENT-ANALYSIS-WITH-NLP",
      },
    ];

    return (
      <section className="projects container" id="projects">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card hidden" key={index}>
              <img
                src={project.img}
                alt={project.title}
                className="project-image"
              />

              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <span>{project.tech}</span>

              <div className="project-buttons">
                <a href={project.live_link} className="btn" target="_blank" rel="noopener noreferrer">
                  Live
                </a>
                <a href={project.code_link} className="btn outline" target="_blank" rel="noopener noreferrer">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Projects;