// RECEIVER
// will be called every time you set any value of localStorage in any other tab.
const EVENT_COMMUNICATION = 'storage';
window.addEventListener(EVENT_COMMUNICATION, ({originalEvent}) => {
    // only catch data useful for our action
    if (originalEvent.key === 'message') {
        const message = JSON.parse(originalEvent.key);
    }
}, false);




// SENDER
window.localStorage.setItem('message', JSON.stringify({data: 'results'}));
window.localStorage.removeItem('message');
