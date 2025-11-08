
import yamlReader from '../../../datasource/yaml/YamlReader.js'
import iconBuilder from '../../../datasource/icons/IconHandler.js';
import { useState, useEffect } from 'react';

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
        <div className="mainContainer">
            <div className="background-decoration">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
            </div>
            <main className="mainContent">
                {loading && <div className="loading-spinner">Loading content...</div>}
                {error && <div className="error-message">{error}</div>}
                {paragraphs && (
                    <>
                        <div className="glass-header">
                            <h1 className="profile-title">About Me</h1>
                            <p className="profile-subtitle">Developer • Sportsman • Problem Solver</p>
                        </div>
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
                    </>
                )}
            </main>
        </div>
    )
}

export default MainView
