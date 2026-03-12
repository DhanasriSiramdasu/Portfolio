import React, { Component } from "react";
import "./Projects.css";
import project1Img from "../assets/agri_image.jpg";
import project2Img from "../assets/newsapp_image.jpg";
import project3Img from "../assets/sentiment_img.png";

export class Projects extends Component {

  state = {
    selectedProject: null
  };

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

  openDetails = (project) => {
    this.setState({ selectedProject: project });
  };

  closeDetails = () => {
    this.setState({ selectedProject: null });
  };

  render() {

    const projects = [
      {
        img: project1Img,
        title: "AI Agri-ChatBot",
        desc: "AI-powered chatbot for agricultural advice and support.",
        tech: "Python • Flask • SQLite",
       details: `
<h4>Overview</h4>
<p>
AI Agri-ChatBot is an intelligent web application designed to assist farmers by providing quick agricultural guidance through an interactive chatbot interface.
</p>

<h4>Problem</h4>
<p>
Farmers often face difficulty accessing timely information about crops, fertilizers, pest control, and plant diseases.
</p>

<h4>Solution</h4>
<p>
This project provides an AI-based chatbot that answers farming-related questions and also allows users to upload plant leaf images to analyze plant health.
</p>

<h4>Key Features</h4>
<ul>
<li>Interactive chatbot for agricultural queries</li>
<li>Secure user registration and login system</li>
<li>Admin dashboard to manage chatbot knowledge base</li>
<li>Leaf image analysis to detect healthy, stressed, or diseased plants</li>
<li>Multilingual responses (English, Hindi, Tamil)</li>
<li>Chat history management</li>
</ul>

<h4>Tech Stack</h4>
<p>
Python • Flask • SQLite • HTML • CSS • Bootstrap • JavaScript • Pillow (Image Processing)
</p>

<h4>Outcome</h4>
<p>
The system demonstrates how AI and NLP-based assistants can help farmers access agricultural knowledge quickly and improve farming decision-making.
</p>
`,
        live_link:
          "https://ai-agri-chat-bot-project-di2p.vercel.app?_vercel_share=7RhPNf8ZywPjfegPDfR8wQj73CTMGo2G",
        code_link:
          "https://github.com/DhanasriSiramdasu/AI-AgriChatBot-Project",
      },
      {
        img: project2Img,
        title: "News App",
        desc: "Live news application using public APIs.",
        tech: "React • API • Bootstrap",
        details: `
<h4>Overview</h4>
<p>
The News App is a responsive web application that displays real-time news headlines by integrating external news APIs. 
It provides users with quick access to the latest news across multiple categories in a clean and interactive interface.
</p>

<h4>Problem</h4>
<p>
Users often need to browse multiple websites to stay updated with current events, which can be time-consuming and inefficient.
</p>

<h4>Solution</h4>
<p>
This application fetches real-time news articles using a public News API and presents them in categorized sections within a single platform.
</p>

<h4>Key Features</h4>
<ul>
<li>Real-time news fetching from external APIs</li>
<li>Category-based browsing (technology, sports, business, entertainment, etc.)</li>
<li>Dynamic news cards displaying headline, description, and source</li>
<li>Responsive user interface for desktop and mobile devices</li>
<li>Fast rendering using reusable React components</li>
</ul>

<h4>Tech Stack</h4>
<p>
React.js • JavaScript • News API • Bootstrap • HTML • CSS
</p>

<h4>Outcome</h4>
<p>
The project demonstrates how modern web applications can integrate external APIs to fetch live data and display it dynamically in a user-friendly interface.
</p>
`,
        live_link:
          "https://drive.google.com/file/d/1f4mWQWtqD-7anvzsk_isBZ0U2-9pbiam/view?usp=sharing",
        code_link:
          "https://github.com/DhanasriSiramdasu/newsapp",
      },
      {
        img: project3Img,
        title: "Sentiment Analysis Tool",
        desc: "Analyzes sentiment in text using NLP techniques.",
        tech: "Python • NLP • Flask",
        details: `
<h4>Problem</h4>
<p>Analyzing large volumes of text such as reviews or feedback manually is time-consuming and inefficient.</p>

<h4>Solution</h4>
<p>This project applies Natural Language Processing techniques to classify text into positive or negative sentiment using machine learning.</p>

<h4>Key Features</h4>
<ul>
<li>Text preprocessing and cleaning</li>
<li>TF-IDF vectorization for feature extraction</li>
<li>Sentiment classification using Logistic Regression</li>
<li>Model evaluation using classification report and confusion matrix</li>
<li>Prediction for new user reviews</li>
</ul>

<h4>Tech Stack</h4>
<p>Python • Scikit-learn • NLP • TF-IDF Vectorizer • Logistic Regression • Jupyter Notebook</p>
`,
        live_link:
          "https://drive.google.com/file/d/1TtOyIbIFmNbPoZK-UD_fnVKs70el3oTX/view?usp=sharing",
        code_link:
          "https://github.com/DhanasriSiramdasu/SENTIMENT-ANALYSIS-WITH-NLP",
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

                <a
                  href={project.live_link}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>

                <a
                  href={project.code_link}
                  className="btn outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>

                <button
                  className="btn details"
                  onClick={() => this.openDetails(project)}
                >
                  Details
                </button>

              </div>
            </div>
          ))}
        </div>

        {this.state.selectedProject && (
          <div className="modal-overlay">
            <div className="modal">

              <h2>{this.state.selectedProject.title}</h2>
              <div
                className="project-details"
                dangerouslySetInnerHTML={{
                  __html: this.state.selectedProject.details,
                }}
              ></div>

              <button
                className="close-btn"
                onClick={this.closeDetails}
              >
                Close
              </button>

            </div>
          </div>
        )}

      </section>
    );
  }
}

export default Projects;