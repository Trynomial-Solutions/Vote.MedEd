const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function copyToClip(content) {
    // https://dev.to/stegriff/copy-rich-html-with-the-native-clipboard-api-5ah8
    try {
        const blobInput = new Blob([content], { type: 'text/html' });
        const clipboardItemInput = new ClipboardItem({ 'text/html': blobInput });
        navigator.clipboard.write([clipboardItemInput]);
    } catch (e) {
        console.log(e);
    }
};

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(get_state, error => {
        console.log("Error obtaining position");
        console.log(error);
    });
} else {
    console.log("Geolocation not supported");
}

async function get_state(position) {
    // console.log(position);
    const params = new URLSearchParams({
        lat: position.coords.latitude,
        long: position.coords.longitude
    });
    const response = await fetch('php/q_locationstate.php?' + params.toString());
    const state = await response.json();
    console.log(state);
}