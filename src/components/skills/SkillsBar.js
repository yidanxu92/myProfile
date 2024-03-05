import React from 'react';  
import Col from "react-bootstrap/Col";
import "./skillsbar.css"
import ProgressBar from "react-bootstrap/ProgressBar";

const SkillsSection = ({ isScrolled, skillAnimations ,skills,offset }) => {  
    console.log("Skills array after slicing:", skills);
    console.log("Skills array length:", skills.length);
    return (
        <>
            {skills.map((skill, index) => (
                <div key={index} style={{ width: "95%" }}>
                    <p className="lead mb-1 mt-2">{skill.name}</p>
                    <ProgressBar 
                        className={!isScrolled ? "progress" : "progress-bar-animation"}
                        now={skill.value}
                        variant="success"
                        style={{ width: skillAnimations[index + offset] }}
                    />
                </div>    
            ))}
        </>
    );
};

const SkillsBar = ({ skills, isScrolled }) => {
    console.log("SkillsBar is called! Skills is:", skills);
    if (!skills || !Array.isArray(skills)) {
        return <div>No skills available</div>;
    }

    const middleIndex = Math.floor(skills.length / 2); // 计算中间索引
    const leftSkills = skills.slice(0, middleIndex); // 左边的技能数组
    const rightSkills = skills.slice(middleIndex); // 右边的技能数组

    const skillAnimations = skills.map(skill => isScrolled ? `${skill.value}%` : '0%');

    return (
        <>
        <Col xs={12} md={6}>
        <SkillsSection
          skills={leftSkills}
          isScrolled={isScrolled}
          skillAnimations={skillAnimations.slice(0, middleIndex)}
          offset={0}// 左边部分的偏移量为0
        />
         </Col>
         <Col xs={12} md={6}>
            <SkillsSection
            skills={rightSkills}
            isScrolled={isScrolled}
            skillAnimations={skillAnimations.slice(middleIndex)}
            offset={middleIndex} // 右边部分的偏移量为中间索引
            />
            </Col>       
        </>
    );
};

export default ({ skills, isScrolled }) => <SkillsBar skills={skills} isScrolled={isScrolled}  />;