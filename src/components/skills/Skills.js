import React ,{ useRef, useState ,useEffect}from "react";
import SkillsBar from "./SkillsBar";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Container } from "react-bootstrap";

const skills={
    techSkill: [
        { name: "Javascript", value: 90 },
        { name: "HTML/CSS", value: 90 },   
        { name: "Python", value: 70 }, 
        { name: "Java", value: 70 }
    ],
    techStack: [
        { name: "React", value: 90 },   
        { name: "Node.js", value: 80 }, 
        { name: "Express", value: 80 }, 
        { name: "MongoDB", value: 80 },
    ]

}


const Skills = React.forwardRef(({techSkill,techStack }, ref)  => {  
    const skillsTabRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

       // 监听滚动位置
       useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (!isScrolled && scrollPosition > 400) {
                setIsScrolled(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isScrolled]);

    return (
        <div className="m-0" id="skills" style={{ backgroundColor: "#fffaf4" }}>
            <Container className="p-5"> 
            <h2 className="display-4 text-center pb-5">Skills</h2>
            <Tabs className="Skills-tabs" defaultActiveKey="techSkill" id="skills-tabs" ref={ref} fill >
                <Tab tabClassName="skills-tab lead" eventKey="techSkill"  title="Tech Skill" >
                    <Row className="pt-3 px-1"> 
                    <SkillsBar skills={skills.techSkill} isScrolled={isScrolled} />
                    </Row>
                </Tab>
                <Tab tabClassName="skills-tab lead" eventKey="techStack" title="Tech Stack"> 
                    <Row className="pt-3 px-1">
                        <SkillsBar skills={skills.techStack} isScrolled={isScrolled} />
                    </Row>
                </Tab>
                </Tabs> 
            </Container>

        </div>
    );
})

export default Skills;

