import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import './database';

function init() {
    let port = app.get('port')
    app.listen(port);
    console.log('Server on port', port);
};

init();
