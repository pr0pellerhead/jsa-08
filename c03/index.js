const { fail } = require('assert');
const fs = require('fs');

let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue quam libero, id congue nisi pulvinar a. Ut et ornare nisl, non commodo arcu. Cras auctor elit vel neque ornare venenatis. Nam posuere luctus finibus. Phasellus faucibus enim et lorem imperdiet, nec molestie ligula accumsan. Quisque fermentum, enim sit amet tempor finibus, enim odio sollicitudin nisl, et rhoncus sapien libero quis augue. Sed eu aliquam nisi, ac tincidunt diam. Sed quis erat imperdiet, posuere massa quis, feugiat mi. Nulla sit amet hendrerit sem, eget dictum nibh. Aenean ac faucibus sapien. Duis nec erat bibendum, viverra eros nec, eleifend metus. Etiam viverra arcu nec laoreet rhoncus. Aliquam condimentum nunc sem, at facilisis ex dapibus a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque vitae faucibus est, non aliquam purus. Duis ultrices malesuada nunc, nec efficitur nisl viverra nec. 😎`;

// fs.writeFile('data.txt', text, err => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log('Successfull write!');

//     fs.readFile('data.txt', 'utf8', (err, data) => {
//         if (err) {
//             return console.log(err);
//         }
//         console.log(data);
        
//         fs.appendFile('data.txt', "\n\n😂🔥🔥🔥🎉\n\n", err => {
//             if (err) {
//                 return console.log(err);
//             }
//             console.log('Successfull append!');
//         });
//     });
// });

const fileWrite = (file, content) => {
    return new Promise((success, fail) => {
        fs.writeFile(file, content, err => {
            if(err) {
                return fail(err);
            }
            return success();
        });
    });
};

const fileAppend = (file, content) => {
    return new Promise((success, fail) => {
        fs.appendFile(file, content, err => {
            if (err) {
                return fail(err);
            }
            return success();
        })
    })
};

const fileRead = (file) => {
    return new Promise((success, fail) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if(err) {
                return fail(err);
            }
            return success(data);
        })
    });
};

// fileWrite('data.txt', 'PERO')
//     .then(() => {
//         console.log('Successfull promise write!');
//         return fileAppend('data.txt', '🔥🔥🔥');
//     })
//     .then(() => {
//         console.log('Successfull append from promise!');
//         return fileRead('data.txt');
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });

const fileOps = async () => {
    try {
        await fileWrite('data.txt', 'JANKO');
        await fileAppend('data.txt', '🎉🎉🎉');
        let c = await fileRead('data.txt');
        console.log(c);
    } catch(err) {
        console.log(err);
    }
};

fileOps();