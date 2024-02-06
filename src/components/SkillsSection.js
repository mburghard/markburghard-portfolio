import React from "react";
import { motion } from "framer-motion";
import SkillsChart from "./SkillsChart";

const SkillsSection = ({ skillsRef, skillsInView }) => (
  <motion.div ref={skillsRef} className="skills-chart-section">
    <h2>Technical Skill Proficiencies</h2>
    <SkillsChart isVisible={skillsInView} />
  </motion.div>
);

export default SkillsSection;
