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


const se = document.createElement('script');
se.src = 'https://ipinfo.io?callback=callback';
document.body.appendChild(se);
document.body.removeChild(se);

function callback(data) {
    document.getElementById('client-ip').textContent = data.ip;
}

function copyToClipBoard() {

    var content = data.ip;
    
    content.select();
    document.execCommand('copy');
}
