import React from "react";
import "./Github.css";

function Github() {
  return (
    <section id="github" className="github-section">

      <h2>My GitHub Activity</h2>

      <div className="github-stats">

        <img
          src="https://github-readme-stats.vercel.app/api?username=DhanasriSiramdasu&show_icons=true&theme=tokyonight"
          alt="GitHub Stats"
        />

        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=DhanasriSiramdasu&layout=compact&theme=tokyonight"
          alt="Top Languages"
        />

      </div>

    </section>
  );
}

export default Github;