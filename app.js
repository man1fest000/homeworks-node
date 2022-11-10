const fs = require('node:fs');

fs.readdir("./boys", { withFileTypes: true }, (err, files) => {
    for (const file of files) {
        if (file.isFile()){
            fs.readFile(`./boys/${file.name}`, (err, data) => {
                if (JSON.parse(data).gender === 'female'){
                    fs.rename(`./boys/${file.name}`, `./girls/${file.name}`, (err)=>{
                        console.log(err);
                    })
                }
            });
        }
    }
});

fs.readdir("./girls", { withFileTypes: true }, (err, files) => {
    for (const file of files) {
        if (file.isFile()){
            fs.readFile(`./girls/${file.name}`, (err, data) => {
                if (JSON.parse(data).gender === 'male'){
                    fs.rename(`./girls/${file.name}`, `./boys/${file.name}`, (err)=>{
                        console.log(err);
                    })
                }
            });
        }
    }
});





