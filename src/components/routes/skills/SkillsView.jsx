
import yamlReader from "../../../datasource/yaml/yamlReader.js";
import iconBuilder from "../../../datasource/icons/iconBuilder.js";
import DefaultRouteContainer from "../model/defaultContainer/DefaultRouteContainer.jsx";
import './SkillsView.css';
import { useEffect, useState } from "react";

function SkillsView() {

    const [skills, setSkills] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await yamlReader.readYamlFile('/inputData/skills.yaml');
                console.log("Loaded skills:", data.skills);
                setSkills(data.skills);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching skills:', err);
                setError('Failed to load skills. Please try again later.');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <DefaultRouteContainer title="My SkillsView">

            {loading && <div className="loading-spinner">Loading skills...</div>}
            {error && <div className="error-message">{error}</div>}
            {skills && (
                <div className="skillGroupContainer">
                    {Object.entries(skills).map(([category, skillGroup]) => (
                        <section key={category} className="skillGroupItem">
                            <h2 className="skillGroupHeading">
                                <span className="skill-category-icon">{iconBuilder.getIcon(category)}</span>
                                {category}
                            </h2>
                            {category === "Softskills" ? (
                                <div className="softSkillsGrid">
                                    {Object.entries(skillGroup).map(([key, skill]) => (
                                        <div key={key} className="softSkillItem">
                                            <h3 className="softSkillName">
                                                <span className="softSkillIcon">{skill.icon}</span>
                                                {skill.name}
                                            </h3>
                                            <p className="softSkillDescription">{skill.description}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                Object.entries(skillGroup).map(([key, skill]) => (
                                    <section key={key} className="skillItem">
                                        <h3 className="skillHeading">{skill.name}</h3>
                                        <div className="skill-progress-container">
                                            <progress
                                                className="skillProgressBar"
                                                max="100"
                                                value={skill.percent}
                                            ></progress>
                                            <span className="skill-percent">{skill.percent}%</span>
                                        </div>
                                    </section>
                                ))
                            )}
                        </section>
                    ))}

                </div>
            )}
        </DefaultRouteContainer>
    );
}

export default SkillsView;
