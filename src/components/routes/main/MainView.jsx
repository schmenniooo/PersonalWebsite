
import yamlReader from '../../../datasource/yaml/YamlReader.js'
import iconBuilder from '../../../datasource/icons/IconHandler.js';
import { useState, useEffect } from 'react';
import DefaultRouteContainer from "../model/defaultContainer/DefaultRouteContainer.jsx";

function MainView() {

    const [paragraphs, setParagraphs] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await yamlReader.readYamlFile('/inputData/description.yaml');
                setParagraphs(data.paragraphContent);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching YAML inputData:', err);
                setError('Failed to load content. Please try again later.');
                setLoading(false);
            }
        };

        fetchData().then(r => r.json("Failed to load content. Please try again later."));
    }, []);

    return (
        <DefaultRouteContainer title="About Me">
            {loading && <div className="loading-spinner">Loading content...</div>}
            {error && <div className="error-message">{error}</div>}
            {paragraphs && (
                <div className="glass-container">
                    {Object.entries(paragraphs).map(([key, paragraph], index) => (
                        <div key={key} className="glass-card" style={{"--delay": `${index * 0.1}s`}}>
                            <div className="card-shine"></div>
                            <div className="paragraph-content">
                                <span className="paragraph-icon">{iconBuilder.getParagraphIcon(index)}</span>
                                <p className="paragraph">{paragraph.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </DefaultRouteContainer>
    )
}

export default MainView
