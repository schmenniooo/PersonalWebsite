
import yamlReader from "../../datasource/yamlReader.js";
import './skills.css'
import {useEffect, useState} from "react";

function Skills() {

    const [skills, setSkills] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const data = await yamlReader.readYamlFile('/data/skills.yaml');
                setSkills(data.skills);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching skills:', err);
                setError('Failed to load skills. Please try again later.');
                setLoading(false);
            }
        }

        fetchData();
    })

    return (
        <div className="skillsContainer">
            <div className="skills-card">
                <h1 className="skills-title">My Skills</h1>
                <div className="skills-divider"></div>

                {loading && <div className="loading-spinner">Loading skills...</div>}
                {error && <div className="error-message">{error}</div>}

                // Todo: Add skills
            </div>
        </div>
    )
}

export default Skills
