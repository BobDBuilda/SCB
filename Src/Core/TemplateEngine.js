import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

class TemplateEngine {
    file ;
    data;

    convertToString() {
        let template = fs.readFileSync(file, 'utf-8');
    }

    Render(template, data) {
        //parse the template
        let filePath = path.join(__dirname, 'views', template);
    }
}