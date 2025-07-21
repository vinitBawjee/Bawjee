function showContent(page) {
    let file = "";

    if(page === "workAssigned") {
        file = "../page/workAssigned.html";
    } else if(page === "meeting") {
        file = "../page/meeting.html";
    } else if(page === "salaryDetail") {
        file = "../page/salaryDetail.html";
    } else if(page === "leaveApply") {
        file = "../page/leaveApply.html";
    } else if(page === "account") {
        file = "../page/account.html";
    } else {
        file = "../page/dashboard.html";
    }

    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error("Page not found");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("main").innerHTML = data;
        })
        .catch(error => {
            document.getElementById("main").innerHTML = `<p style="color:red;">${error.message}</p>`;
        });   
}
