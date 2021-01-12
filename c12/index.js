const mailer = require('./pkg/mailer');

// mailer.send(
//     ['bojang@gmail.com'],
//     'WELCOME',
//     {
//         name: 'Bojan Gavrovski'
//     }
// );

mailer.send(
    ['bojang@gmail.com'],
    'RESET_PASSWORD',
    {
        name: 'Bojan Gavrovski',
        link: 'http://google.com'
    }
);