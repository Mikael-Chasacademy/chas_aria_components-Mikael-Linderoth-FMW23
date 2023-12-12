const openDialogButton = document.getElementById("openbutton");
const closeDialogButton = document.getElementById("closeDialogBtn");
const dialogOverlay = document.getElementById("overlay");
const dialog = document.getElementById("accessibleDialog");
const menuButton = document.getElementById("menuButton");
const menuContent = document.getElementById("menuContent");

function openDialog() {
  dialog.style.display = "block";
  dialogOverlay.style.display = "block";
  closeDialogButton.focus();
}

function closeDialog() {
  dialog.style.display = "none";
  dialogOverlay.style.display = "none";
  openDialogButton.focus();
}

closeDialogButton.addEventListener("click", closeDialog);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && dialog.style.display === "block") {
    closeDialog();
  }
});

menuButton.addEventListener("click", () => {
  if (menuContent.classList.contains("open")) {
    menuContent.classList.remove("open");
    menuContent.setAttribute("aria-expanded", "false");
  } else {
    menuContent.classList.add("open");
    menuContent.setAttribute("aria-expanded", "true");
    const firstListItem = menuContent.querySelector("ul li:first-child");
    if (firstListItem) {
      firstListItem.querySelector("a").focus();
    }
  }
});
