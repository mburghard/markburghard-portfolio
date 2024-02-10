import "../styles/Sidebar.css";

const Sidebar = ({ sections, activeSection, onSectionClick }) => {
  return (
    <div className="sidebar">
      {sections.map((section, index) => (
        <div
          key={section.id}
          className={`sidebar-item ${index === activeSection ? "active" : ""}`}
          onClick={() => onSectionClick(index)}
          title={section.title}
        />
      ))}
    </div>
  );
};

export default Sidebar;
