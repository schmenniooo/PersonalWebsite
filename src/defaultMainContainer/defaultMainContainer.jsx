
import yaml from 'js-yaml';
import { useState, useEffect } from 'react';

async function readYamlFile(filePath) {
    try {
        const response = await fetch(filePath);
        const fileContents = await response.text();
        return yaml.load(fileContents);
    } catch (e) {
        console.error('Error reading YAML file:', e);
        throw e;
    }
}

function DefaultMainContainer() {

    const [paragraphs, setParagraphs] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await readYamlFile('./src/assets/inputFiles/description.yaml');
                setParagraphs(data.paragraphContent);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching YAML data:', err);
                setError('Failed to load content. Please try again later.');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="mainContainer">
            <main className="mainContent">
                {loading && <div className="loading-spinner">Loading content...</div>}
                {error && <div className="error-message">{error}</div>}
                {paragraphs && (
                    <div className="profile-card">
                        <h1 className="profile-title">About Me</h1>
                        <div className="profile-divider"></div>
                        <div className="paragraphContainer">
                            {Object.entries(paragraphs).map(([key, text], index) => {
                                // Select an appropriate emoji based on paragraph content
                                let emoji = "👨‍💻"; // Default developer emoji

                                if (index === 0) {
                                    emoji = "🚀"; // First paragraph - passion and growth
                                } else if (index === 1) {
                                    emoji = "💻"; // Second paragraph - skills
                                } else if (index === 2) {
                                    emoji = "⏱️"; // Third paragraph - experience
                                }

                                return (
                                    <div key={key} className="paragraphItem">
                                        <div className="paragraph-content">
                                            <span className="paragraph-icon">{emoji}</span>
                                            <p className="paragraph">{text}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </main>
        </div>
    )
}

export default DefaultMainContainer
