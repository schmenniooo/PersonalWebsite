import yamlReader from '../datasource/yamlReader.js'
import { useState, useEffect } from 'react';
import './projects.css';

function Projects() {
    const [projects, setProjects] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await yamlReader.readYamlFile('./src/assets/inputFiles/projects.yaml');
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

    // Project emojis based on technology
    const getTechEmoji = (tech) => {
        if (!tech) return "💻"; // Default emoji

        const techLower = tech.toLowerCase();
        if (techLower.includes("react")) return "⚛️";
        if (techLower.includes("javascript")) return "🟨";
        if (techLower.includes("html")) return "🌐";
        if (techLower.includes("css")) return "🎨";
        return "💻"; // Default emoji
    };

    return (
        <div className="projectsContainer">
            <div className="projects-card">
                <h1 className="projects-title">My Projects</h1>
                <div className="projects-divider"></div>

                {loading && <div className="loading-spinner">Loading projects information...</div>}
                {error && <div className="error-message">{error}</div>}
                {projects && (
                    <div className="projectsItemContainer">
                        {Object.entries(projects).map(([key, project]) => (
                            <div key={key} className="projectItem">
                                <div className="project-content">
                                    <span className="project-icon">{getTechEmoji(project.usedTech || project.UsedTech)}</span>
                                    <div className="project-details">
                                        <h2 className="project-title">{project.title || project.Title}</h2>
                                        <p className="project-tech">{project.usedTech || project.UsedTech || "Various technologies"}</p>
                                        <p className="project-description">{project.description || project.Description}</p>
                                        {(project.Repo_Link || project.repo_link) && (
                                            <a 
                                                href={project.Repo_Link || project.repo_link} 
                                                className="project-link" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                            >
                                                View Repository
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Projects
