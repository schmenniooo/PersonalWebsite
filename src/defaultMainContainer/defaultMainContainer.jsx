
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
                {loading && <p className="paragraph">Loading content...</p>}
                {error && <p className="paragraph error">{error}</p>}
                {paragraphs && (
                    <ul className="paragraphContainer">
                        {Object.entries(paragraphs).map(([key, text]) => (
                            <li key={key} className="paragraphItem">
                                <p className="paragraph">{text}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </main>
        </div>
    )
}

export default DefaultMainContainer
