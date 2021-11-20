if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.querySelector(".sun-logo").classList.toggle("animate-sun");
    document.querySelector(".moon-logo").classList.toggle("animate-moon");
    document.querySelector("body").classList.toggle("dark");
}

/*document.getElementById("toggleTheme").addEventListener("click",() => {
  document.documentElement.classList.toggle("dark")
}) */

document.querySelector(".container").addEventListener("click", () => {
    document.querySelector(".sun-logo").classList.toggle("animate-sun");
    document.querySelector(".moon-logo").classList.toggle("animate-moon");
    document.querySelector("body").classList.toggle("dark");
})

var Target = document.getElementById("clock");
var Target_apm = document.getElementById("apm");
function clock() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var AmPm ="AM";
    if(hours > 12){   
        var AmPm ="PM";
        hours %= 12;
    }

    Target.innerText = 
    `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

    Target_apm.innerText = `${AmPm}`;

}
clock();
setInterval(clock, 1000);



const se = document.createElement('script');
se.src = 'https://ipinfo.io?callback=callback';
document.body.appendChild(se);
document.body.removeChild(se);

function callback(data) {
    document.getElementById('client-ip').textContent = data.ip;
}

function copyip() {
    var ip = document.querySelector('.copy-ip');
    navigator.clipboard.writeText(ip.textContent)
}

var msgTimer = 0;
function showToast(msg, slot) {
    clearToast();

    var toast = $('#toast');

    if(slot == 'top') {
        toast.css('top', '33px');
        toast.css('bottom', '');
    } else if(slot == 'bottom') {
        toast.css('top', '');
        toast.css('bottom', '-13px');
    } else {
        toast.css('top', '50%');
        toast.css('bottom', '');
    }

    toast.children().html(msg);
    setTimeout(function() {
        toast.fadeIn(500, function() {
            msgTimer = setTimeout(function() {
                toast.fadeOut(500);
            }, 1000);
        });
    }, 200);
}
    
function clearToast() {
    if(msgTimer != 0) {
        clearTimeout(msgTimer);
        msgTimer = 0;
    }
}

