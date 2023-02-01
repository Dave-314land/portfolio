const container = document.querySelectorAll(".container-fluid");
const toggleBtn = document.getElementById("toggle");

window.onload=() => {
    toggleBtn.addEventListener("click", () => {
        console.log(toggleBtn.firstElementChild.className)
        container.classList.toggle("dark-mode") ? (toggleBtn.firstElementChild.className == "fa-solid fa-toggle-off") : (toggleBtn.firstElementChild.className == "fa-solid fa-toggle-on");
      });
}
