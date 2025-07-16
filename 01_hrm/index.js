let in_out_time = 0;

function Check_In_time() {

    setInterval(() => {
        in_out_time++;

        let hrs = parseInt(in_out_time / 3600);
        let mins = parseInt((in_out_time % 3600) / 60);
        let secs = in_out_time % 60;

        let timeStr =
        (hrs < 10 ? '0' : '') + hrs + ':' +
        (mins < 10 ? '0' : '') + mins + ':' +
        (secs < 10 ? '0' : '') + secs;

        document.getElementById('in-out-time').innerHTML = timeStr;
    }, 1000)

}

// Check_In_time()