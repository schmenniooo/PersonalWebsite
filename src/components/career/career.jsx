
import yamlReader from '../../datasource/yamlReader.js'
import { useState, useEffect } from 'react';
import './career.css';

function CareerContent() {
    const [careerStages, setCareerStages] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await yamlReader.readYamlFile('./src/assets/inputFiles/careerstages.yaml');
                setCareerStages(data.content);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching career stages:', err);
                setError('Failed to load career information. Please try again later.');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Career stage emojis
    const stageEmojis = {
        career_stage1: "🚀", // First encounter
        career_stage2: "💼", // Apprenticeship
        career_stage3: "🌱", // Growth
    };

    return (
        <div className="careerContainer">
            <div className="career-card">
                <h1 className="career-title">My Career Journey</h1>
                <div className="career-divider"></div>

                {loading && <div className="loading-spinner">Loading career information...</div>}
                {error && <div className="error-message">{error}</div>}
                {careerStages && (
                    <div className="careerItemContainer">
                        {Object.entries(careerStages).map(([key, stage]) => (
                            <div key={key} className="careerItem">
                                <div className="career-content">
                                    <span className="career-icon">{stageEmojis[key] || "👨‍💻"}</span>
                                    <div className="career-details">
                                        <h2 className="career-stage-title">{stage.title}</h2>
                                        <p className="career-date">{stage.date}</p>
                                        <p className="career-description">{stage.description}</p>
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

export default CareerContent
