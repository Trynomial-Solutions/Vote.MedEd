function copyToClip(el) {
    // https://dev.to/stegriff/copy-rich-html-with-the-native-clipboard-api-5ah8
    const emailDiv = el.dataset.emailtext;
    const tTip = bootstrap.Tooltip.getInstance('#' + emailDiv + "ClipDiv");
    // console.log(tTip);

    const content = document.getElementById(emailDiv).innerHTML;
    try {
        const blobInput = new Blob([content], { type: 'text/html' });
        const clipboardItemInput = new ClipboardItem({ 'text/html': blobInput });
        navigator.clipboard.write([clipboardItemInput]);

        // update clipboad icon to indicate copied
        tTip.hide();
        el.querySelector('.clipBtncopy').classList.add('d-none');
        el.querySelector('.clipBtnCopyDone').classList.remove('d-none');
        tTip._config.title = "Copied!";
        tTip.show();

        // re-display after 5s
        setTimeout(() => {
            el.querySelector('.clipBtncopy').classList.remove('d-none');
            el.querySelector('.clipBtnCopyDone').classList.add('d-none');
            tTip._config.title = "Copy to Clipboard";
        }, 5000);
    } catch (e) {
        console.log(e);
    }
};

// get US state
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(get_state, error => {
//         console.log("Error obtaining position");
//         console.log(error);
//     });
// } else {
//     console.log("Geolocation not supported");
// }

// async function get_state(position) {
//     // console.log(position);
//     const params = new URLSearchParams({
//         lat: position.coords.latitude,
//         long: position.coords.longitude
//     });
//     const response = await fetch('php/q_locationstate.php?' + params.toString());
//     const state = await response.json();
//     // console.log(state);
// }

// get election dates
fetch('php/q_electiondate.php').then(response => {
    response.json().then(dates => {
        // console.log(dates);
        document.getElementById('dt1').value = dates.genElec;
        document.getElementById('nvrdFormatted').textContent = dates.nvrdFormatted;
        document.getElementById('nvrdPlusOneMonthFormatted').textContent = dates.nvrdPlusOneMonthFormatted;
        document.getElementById('genElecFormatted').textContent = dates.genElecFormatted;
    });
});

// add clipboard copy button
addClipCopyBtn('divNvrd');

function addClipCopyBtn(emailDiv) {
    // add copy button to the div specified by emailDivCopyBtn
    // will read the email text that is in the div called emailDiv
    const copyBtnTemplate = document.getElementById('copyButton');
    const clone = copyBtnTemplate.content.cloneNode(true);
    clone.querySelector('a').dataset.emailtext = emailDiv;
    clone.querySelector('.clipDiv').id = emailDiv + "ClipDiv";
    document.getElementById(emailDiv + 'CopyBtn').appendChild(clone);    
}

// enable tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
