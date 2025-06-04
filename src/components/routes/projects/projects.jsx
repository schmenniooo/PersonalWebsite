
import yamlReader from '../../../datasource/yaml/yamlReader.js'
import iconBuilder from "../../../datasource/icons/iconBuilder.js";
import DefaultRouteContainer from "../model/defaultContainer/defaultRouteContainer.jsx";
import { useState, useEffect } from 'react';
import './projects.css';

function Projects() {

    const [projects, setProjects] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await yamlReader.readYamlFile('/inputData/projects.yaml');
                setProjects(data.projects);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching projects:', err);
                setError('Failed to load projects information. Please try again later.');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (

        <DefaultRouteContainer title="My Projects">

            {loading && <div className="loading-spinner">Loading projects information...</div>}
            {error && <div className="error-message">{error}</div>}
            {projects && (
                <div className="projectsItemContainer">
                    {Object.entries(projects).map(([key, project]) => (
                        <div key={key} className="projectItem">
                            <div className="project-content">
                                <span className="project-icon">{iconBuilder.getIcon(project.usedTech)}</span>
                                <div className="project-details">
                                    <h2 className="project-title">{project.title}</h2>
                                    <p className="project-tech">{project.usedTech}</p>
                                    <p className="project-description">{project.description}</p>
                                    <a
                                        href={project.repo_Link}
                                        className="project-link"
                                        target="_blank"
                                    >
                                        View GitHub-Repository
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </DefaultRouteContainer>
    );
}

export default Projects
