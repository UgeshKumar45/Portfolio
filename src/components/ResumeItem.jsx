import parse from "html-react-parser";

const ResumeItem = ({ icon, title, desc }) => {
  return (
    <div className="resume-item">
      <div className="resume-icon">{icon}</div>

      <h3 className="resume-subtitle">{parse(title)}</h3>

      <p className="resume-description">{desc}</p>
    </div>
  );
};

export default ResumeItem;