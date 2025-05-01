
import yamlReader from '../datasource/yamlReader.js'

function careerContent() {

    const careerContent = [
        ["Test1", "Content1"],
        ["Test1", "Content1"],
        ["Test3", "Content3"]
    ];

    return (
        <div className="careerContainer">
            <h1>My Career</h1>
            <ul className="careerItemContainer">
                {careerContent.map(([text, content]) => (
                    <li className="careerItem" key={text}>{content}</li>
                ))}
            </ul>
        </div>
    )
}

export default careerContent