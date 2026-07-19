import { useState, useEffect } from "react";

function About() {
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/iamZainabKhalid")
      .then((res) => res.json())
      .then((data) => setGithubData(data))
      .catch((err) => console.log("Error fetching GitHub data:", err));
  }, []);

  return (
    <section id="about">
      <p className="eyebrow">GET TO KNOW ME</p>
      <h2>About Me</h2>
      <p className="about-text">
        I'm Zainab Khalid, a Computer Science student at FAST University Lahore,
        currently in my 4th semester. I'm passionate about building clean,
        functional software — from games and desktop applications to full web
        platforms. I'm currently working as an iOS Developer Intern at Applead,
        Faisalabad, where I'm gaining hands-on experience in mobile app
        development. My goal is to become a well-rounded full-stack and mobile
        developer.
      </p>

      <div className="about-details">
        <div className="detail-card">
          <h4>🎓 Education</h4>
          <p>BS Computer Science, FAST University Lahore (4th Semester)</p>
        </div>
        <div className="detail-card">
          <h4>💼 Current Role</h4>
          <p>iOS Developer Intern at Applead, Faisalabad</p>
        </div>
      </div>

      {githubData && (
        <div className="github-card">
          <img src={githubData.avatar_url} alt="GitHub avatar" className="github-avatar" />
          <div className="github-info">
            <h4>@{githubData.login}</h4>
            <p>{githubData.bio || "Building things, one commit at a time."}</p>
            <div className="github-stats">
              <div>
                <strong>{githubData.public_repos}</strong>
                <span>Repos</span>
              </div>
              <div>
                <strong>{githubData.followers}</strong>
                <span>Followers</span>
              </div>
              <div>
                <strong>{githubData.following}</strong>
                <span>Following</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default About;