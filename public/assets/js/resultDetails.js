
const patient = JSON.parse(sessionStorage.getItem("patient"));

console.log(patient);

const dateFormat = (date) => {
    let d = new Date(date);
    d = d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear();
    return d;
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
patient?.length && patient.forEach((element, i) => {
    const resDate = dateFormat(element.resultDate);
    const expirindDate = dateFormat(addDays(element.resultDate, 3));
    document.getElementById("content").innerHTML += ` <div class="main">
        <p class=${element.result === "Negative" ? "cleared" : element.result === "Positive" ? "notcleared" : "uncleared"}>
        ${element.result === "Negative" ? "CLEARED" : element.result === "Positive" ? "NOT CLEARED" : "INCONCLUSIVE"}
        </p>
        <div class="center">
            <div class="card_row">
                <span class="row">
                    <i class="material-icons">account_circle</i>
                    <p class="title">Name</p>
                </span>
                <p>${element.fullname}</p>
            </div>
            <div class="card_row">
                <span class="row">
                    <i class="material-icons">stars</i>
                    <p class="title">Test Result</p>
                </span>
                <p>${element.result  ? element.result: "Pending"}</p>
            </div>
            <div class="card_row">
                <span class="row">
                    <i class="material-icons">perm_contact_calendar</i>
                    <p class="title">Test Date</p>
                </span>
                <p>${element.result ? resDate : "Pending"}</p>
            </div>
            <div class="card_row">
                <span class="row">
                    <i class="material-icons">perm_contact_calendar</i>
                    <p class="title">Health Screening</p>
                </span>
                <p>${element.result ? "Complete" : "Pending"}</p>
            </div>
            <div class="card_row">
                <span class="row">
                    <i class="material-icons">stars</i>
                    <p class="title">Expires on</p>
                </span>
                <p>${element.result ? expirindDate : "Pending"}</p>
                </div>
                <div class="qr_row">
                    <div id=${i + 1}></div>
                </div>
        </div>`
    setTimeout(() => {
        new QRCode(document.getElementById(i + 1), {
            text: element.resultPdf,
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        }, 0);
    })
});
