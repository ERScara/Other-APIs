const fs = require('fs');

fs.readFile('newFile.txt', 'utf8', (err, data) => {
    if (err) throw err;
    fs.writeFile('name.txt', data, (err) => {
        if (err) throw err;
        console.log("File updated");
    })
})

fs.mkdir('newFolder', (err) => {
    if (err) throw err;
    console.log("Folder created");
});
