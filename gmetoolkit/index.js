// restrict dates for dt2
document.getElementById('dt1').addEventListener('change', () => {
    document.getElementById('dt2').min = document.getElementById('dt1').value;
});


function copyToClip(el) {
    // https://dev.to/stegriff/copy-rich-html-with-the-native-clipboard-api-5ah8
    const emailDiv = el.dataset.emailtext;
    const tTip = bootstrap.Tooltip.getInstance('#' + emailDiv + "ClipDiv");
    // console.log(tTip);

    const content = document.getElementById(emailDiv).innerHTML;
    // const txtContent = document.getElementById(emailDiv).textContent;
    try {
        const blobHTML = new Blob([content], { type: 'text/html' });
        const clipHTML = new ClipboardItem({ 'text/html': blobHTML });
        // const blobTxt = new Blob([txtContent], { type: 'text/plain' });
        // const clipTxt = new ClipboardItem({ 'text/plain': blobTxt });
        // const clipItem = new ClipboardItem({ 'text/plain': blobTxt }, { 'text/html': blobHTML });
        navigator.clipboard.write([clipHTML]);

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
    } catch ({ name, message }) {
        // firefox does not support ClipboardItem
        if (message == "ClipboardItem is not defined") {
            function listener(e) {
                e.clipboardData.setData("text/html", content);
                e.preventDefault();
            }
            document.addEventListener("copy", listener);
            document.execCommand("copy");
            document.removeEventListener("copy", listener);
            console.log("Backup Copy triggered");
        }
        else {
            console.log(name);
            console.log(message);
        }
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
        document.getElementById('genElecFormatted').textContent = dates.genElecFormatted;
        document.getElementById('nvrdBox').dataset.nvrd = dates.nvrd;
    });
});

// add clipboard copy button
addClipCopyBtn('divNvrd');
addClipCopyBtn('divNextElec');

function addClipCopyBtn(emailDiv) {
    // add copy button to the div specified by emailDivCopyBtn
    // will read the email text that is in the div called emailDiv
    const copyBtnTemplate = document.getElementById('copyButton');
    const clone = copyBtnTemplate.content.cloneNode(true);
    clone.querySelector('a').dataset.emailtext = emailDiv;
    clone.querySelector('.clipDiv').id = emailDiv + "ClipDiv";
    document.getElementById(emailDiv + 'CopyBtn').appendChild(clone);
}

// button press - update email templates
document.getElementById('do_templates').addEventListener('click', () => {
    // update vot-er links
    const newLink = "https://vote.health/" + document.getElementById('votertag').value;
    const listLinks = document.querySelectorAll('.votErLink');
    listLinks.forEach(el => { el.href = newLink });
    const listLinkText = document.querySelectorAll('.votErLinkText');
    listLinkText.forEach(el => { el.textContent = newLink });

    // update dates
    const today = new Date();
    today.setHours(12, 0, 0);
    const nvrd = new Date(document.getElementById('nvrdBox').dataset.nvrd + " 12:00:00");

    const nextElec = new Date(document.getElementById('dt1').value + " 12:00:00");
    document.getElementById('nextElecFormatted').textContent = nextElec.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "long", day: "numeric" });

    const nextElecMinus = new Date(document.getElementById('dt1').value + " 12:00:00");
    nextElecMinus.setDate(nextElec.getDate() - (6 * 7));
    if (nextElecMinus <= today) {
        // this would be in past - set today
        document.getElementById('nextElecMinusFormatted').textContent = "ASAP";
    }
    else {
        document.getElementById('nextElecMinusFormatted').textContent = "on " + nextElecMinus.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    }

    if (document.getElementById('dt2').value != "") {
        subsequentElec = new Date(document.getElementById('dt2').value + " 12:00:00");
        if (subsequentElec <= nextElec) {
            alert("Date for subsequent election should be after the upcoming election");
            document.getElementById('dt2').value = "";
            document.getElementById('dt2').min = document.getElementById('dt1').value;
            document.getElementById('dt2').focus();
            return;
        }
        document.querySelector("#divNextElec p.nextElecTxt").innerHTML = "After this, the <b>next election is on " + subsequentElec.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "long", day: "numeric" }) + ".</b> Register to vote and sign up for an absentee ballot today!";
    }
    
    // non-NVRD box is shown only if the next election is not november or it is november AND it's after NVRD
    if ((nextElec.getMonth() != 10) || ((nextElec.getMonth() == 10) && (today >= nvrd))) {
        document.getElementById('nextElecBox').classList.remove('d-none');
        if (nextElecMinus < nvrd) {
            // this box is dated before nvrd, move above it
            const el = document.getElementById('nextElecBox');
            el.parentNode.insertBefore(el, el.previousElementSibling);
        }
    }
    document.getElementById('nvrdBox').classList.remove('d-none');
});

// enable tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
