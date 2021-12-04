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

function filter() {
        let search = document.getElementById("search").value.toLowerCase();
        let listInner = document.getElementsByClassName("card");

        for (let i = 0; i < listInner.length; i++) {
          text = listInner[i].getElementsByClassName("card-text");
          newicon = listInner[i].getElementsByClassName("new");
          if (text[0].innerHTML.toLowerCase().indexOf(search) != -1 ||
            newicon[0].innerHTML.toLowerCase().indexOf(search) != -1
          ) {
            listInner[i].style.display = "flex"
          } else {
            listInner[i].style.display = "none"
          }
        }
      }
