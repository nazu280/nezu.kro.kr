if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
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

