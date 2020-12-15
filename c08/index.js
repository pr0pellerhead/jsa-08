const cfg = require('./pkg/config');
require('./pkg/db');

const express = require('express');
const bodyParser = require('body-parser');
const auth = require('./handlers/auth');

const api = express();

api.use(bodyParser.json());

// create user account (user registration)
api.post('/api/v1/auth', auth.create); // http://domain.com/api/v1/auth
// user login (sign in)
api.post('/api/v1/auth/login', auth.login);
// refresh token
api.get('/api/v1/auth/refresh-token', auth.refreshToken);
// * forgot password
api.post('/api/v1/auth/forgot-password', auth.forgotPassword);
// * reset password
api.post('/api/v1/auth/reset-password', auth.resetPassword);
// * change password
api.post('/api/v1/auth/change-password', auth.changePassword);
// list all user accounts
api.get('/api/v1/auth/accounts', auth.listAccounts);

api.listen(cfg.get('server').port, err => {
    if(err) {
        return console.error('Could not start server:', err);
    }
    console.log('Server successfully started on port', cfg.get('server').port);
});
