const fs = require('fs');

export async function readLocation(filepath, encoding) {
    console.log(filepath + "    " + encoding);
    if (typeof (encoding) == 'undefined') {
        encoding = 'utf8';
    }

    var file = fs.readFileSync(filepath, encoding);
    const fileData = [JSON.parse(file)];
    let location = []
    fileData.map((value, i) => {
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                // console.log(key + " -> " + JSON.stringify(value[key]));
                location.push(value[key])
            }
        }
    })
    return location
}