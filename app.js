//Варіант 1 на колбеках але так зараз не роблять

// const fs = require('node:fs');

// const sortFiles = (readFolder, writeFolder, gender) => {
//     fs.readdir(readFolder, {withFileTypes: true}, (err, files) => {
//
//         for (const file of files) {
//
//             if (file.isFile()) {
//                 fs.readFile(`${readFolder}/${file.name}`, (err, data) => {
//
//                     if (JSON.parse(data).gender === gender) {
//
//                         fs.rename(`${readFolder}/${file.name}`, `${writeFolder}/${file.name}`, (err) => {
//                             console.log(err);
//                         })
//                     }
//
//                 });
//             }
//
//         }
//
//     });
// }
// sortFiles('./boys', './girls', 'female');
// sortFiles('./girls', './boys', 'male');




//Варіант 2 на промісах

const fs = require('fs/promises');
const path = require('path');

const sorter = async (readFolder, writeFolder, gender) => {
    try {
        const folderPath = path.join(__dirname, readFolder);

        const files = await fs.readdir(folderPath);

        for (const file of files) {
            const filePath = path.join(folderPath, file);
            const data = await fs.readFile(filePath);
            const user = JSON.parse(data);

            if (user.gender === gender) {
                await fs.rename(filePath, path.join(__dirname, writeFolder, file));
            }
        }
    } catch (e) {
        console.error(e)
    }
}

sorter('boys', 'girls', 'female');
sorter('girls', 'boys', 'male');
