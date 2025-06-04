
import yamlReader from '../../../datasource/yaml/yamlReader.js'
import iconBuilder from '../../../datasource/icons/iconBuilder.js';
import { useState, useEffect } from 'react';
import './career.css';

function CareerContent() {
    const [careerStages, setCareerStages] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await yamlReader.readYamlFile('/inputData/careerstages.yaml');
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
                                    <span className="career-icon">{iconBuilder.getCareerStageIcon(key)}</span>
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
