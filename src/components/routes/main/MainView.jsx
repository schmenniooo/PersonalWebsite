
import yamlReader from '../../../datasource/yaml/yamlReader.js'
import iconBuilder from '../../../datasource/icons/iconBuilder.js';
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
                            {Object.entries(paragraphs).map(([key, paragraph], index) => (
                                <div key={key} className="paragraphItem">
                                    <div className="paragraph-content">
                                        <span className="paragraph-icon">{iconBuilder.getParagraphIcon(index)}</span>
                                        <p className="paragraph">{paragraph.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </main>
        </div>
    )
}

export default MainView
