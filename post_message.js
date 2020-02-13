// https://github.com/fernandoPalaciosGit/proxy_tabs

// RECIEVER
const EVENT_COMMUNICATION = 'message';
window.addEventListener(EVENT_COMMUNICATION, (data) => console.info(data), false);


// SENDER
window.open('http://www.google.com', 'testing');
window.opener.parent.postMessage('hola', 'https://www.edreams.es'); // location.origin
