let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3000';
        break;
        case 'dls-choreme-client.herokuapp.com':
        APIURL = 'https://dls-choreme-client.herokuapp.com'
}
//hi
export default APIURL;