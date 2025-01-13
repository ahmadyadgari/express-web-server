import fs from 'fs';

const getTechniques = () => {
    let techniques = fs.readFileSync("./db/techniques.json");
    techniques = JSON.parse(techniques);
    return techniques;
}

export default {
    getTechniques
}