const btnns = document.querySelectorAll("[data-target]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

btnns.forEach((btnn) => {
  btnn.addEventListener("click", () => {
    document.querySelector(btnn.dataset.target).classList.add("active");
    overlay.classList.add("active");
  });
});

close_modals.forEach((btnn) => {
  btnn.addEventListener("click", () => {
    const modal = btnn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});

window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};