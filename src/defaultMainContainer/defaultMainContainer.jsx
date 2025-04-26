
import yaml from 'js-yaml'; // Use `import` instead of `require`

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

    var currentYamlDate = readYamlFile('../src/assets/inputFiles/description.yaml');
    console.log(currentYamlDate);

    return (
        <div className="mainContainer">
            <main className="mainContent">
                <ul className="paragraphContainer">
                    <li className="paragraphItem">
                        <p className="paragraph">text</p>
                    </li>
                    <li className="paragraphItem">
                        <p className="paragraph">text</p>
                    </li>
                    <li className="paragraphItem">
                        <p className="paragraph">text</p>
                    </li>
                </ul>
            </main>
        </div>
    )
}

export default DefaultMainContainer