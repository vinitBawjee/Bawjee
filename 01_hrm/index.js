let in_out_time = 0;
let intervalId = null; 

function Check_In_time() {
    if (intervalId !== null) return;

    intervalId = setInterval(() => {
        in_out_time++;

        let hrs = parseInt(in_out_time / 3600);
        let mins = parseInt((in_out_time % 3600) / 60);
        let secs = in_out_time % 60;

        let timeStr =
            (hrs < 10 ? '0' : '') + hrs + ':' +
            (mins < 10 ? '0' : '') + mins + ':' +
            (secs < 10 ? '0' : '') + secs;

        document.getElementById('in-out-time').innerHTML = timeStr;
    }, 1000);
}

let check_in_btn = document.getElementById('check_in_btn');
let check_stop_btn = document.getElementById('check_stop_btn');

check_in_btn.addEventListener('click', function () {
    Check_In_time();
    console.log(intervalId);
    
});

check_stop_btn.addEventListener('click', function () {
    clearInterval(intervalId);
    intervalId = null; 
});

