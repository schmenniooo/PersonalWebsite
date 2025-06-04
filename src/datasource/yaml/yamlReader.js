
import yaml from "js-yaml";

class YamlReader {

    async readYamlFile(filePath) {
        try {
            const response = await fetch(filePath);
            const fileContents = await response.text();
            return yaml.load(fileContents);
        } catch (e) {
            console.error('Error reading YAML file:', e);
            throw e;
        }
    }
}

export default new YamlReader();