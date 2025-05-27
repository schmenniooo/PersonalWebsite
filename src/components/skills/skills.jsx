
import yamlReader from "../../datasource/yamlReader.js";
import './skills.css';
import { useEffect, useState } from "react";

function Skills() {
    const [skills, setSkills] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await yamlReader.readYamlFile('/inputData/skills.yaml');
                console.log("Loaded skills:", data.skills); // optional debug
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

    // Get appropriate emoji for each skill category
    const getCategoryIcon = (category) => {
        if (!category) return "💻"; // Default emoji

        const categoryLower = category.toLowerCase();
        if (categoryLower.includes("frontend")) return "🎨";
        if (categoryLower.includes("backend")) return "⚙️";
        if (categoryLower.includes("tools")) return "🔧";
        if (categoryLower.includes("database")) return "🗄️";
        if (categoryLower.includes("devops")) return "🚀";
        if (categoryLower.includes("mobile")) return "📱";
        if (categoryLower.includes("design")) return "✏️";
        if (categoryLower.includes("language")) return "🔤";
        return "💻"; // Default emoji
    };

    return (
        <div className="skillsContainer">
            <div className="skills-card">
                <h1 className="skills-title">My Skills</h1>
                <div className="skills-divider"></div>

                {loading && <div className="loading-spinner">Loading skills...</div>}
                {error && <div className="error-message">{error}</div>}
                {skills && (
                    <div className="skillGroupContainer">
                        {Object.entries(skills).map(([category, skillGroup]) => (
                            <section key={category} className="skillGroupItem">
                                <h2 className="skillGroupHeading">
                                    <span className="skill-category-icon">{getCategoryIcon(category)}</span>
                                    {category}
                                </h2>
                                {Object.entries(skillGroup).map(([key, skill]) => (
                                    <section key={key} className="skillItem">
                                        <h3 className="skillHeading">{skill.name}</h3>
                                        <div className="skill-progress-container">
                                            <progress className="skillProgressBar" max="100" value={skill.percent}></progress>
                                            <span className="skill-percent">{skill.percent}%</span>
                                        </div>
                                    </section>
                                ))}
                            </section>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Skills;
