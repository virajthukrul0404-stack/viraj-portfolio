import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Engineering</h4>
                <h5>Smt. Indira Gandhi College, Mumbai University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently a first-year engineering student learning new skills and doing B.Tech. I have a strong passion for aesthetic UI/UX and vibe coding.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathon Participant</h4>
                <h5>Various Competitions</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Participated in two hackathons. Although I haven't won any yet, the learning experience has been invaluable and there are more to come in the future.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Coder & Editor</h4>
                <h5>Self-Taught</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed strong knowledge in Python, JavaScript, HTML, CSS, React, and Tailwind CSS. Built various games and web applications from scratch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
