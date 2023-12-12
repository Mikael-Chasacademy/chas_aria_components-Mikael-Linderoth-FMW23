const openModalButton = document.getElementById("openbutton");
const closeModalButton = document.getElementById("closeModalBtn");
const modalOverlay = document.getElementById("overlay");
const modal = document.getElementById("accessibleModal");

function openModal() {
  modal.style.display = "block";
  modalOverlay.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
  openModalButton.setAttribute("aria-expanded", "true");
  closeModalButton.focus();
}

function closeModal() {
  modal.style.display = "none";
  modalOverlay.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  openModalButton.setAttribute("aria-expanded", "false");
  openModalButton.focus();
  modalOverlay.focus();
}

closeModalButton.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && modal.style.display === "block") {
    closeModal();
  }
});

/* const accessibleModal = document.getElementById("accessibleModal");
const showNonModalDialogBtn = document.getElementById("showNonModalDialogBtn");
const closeButton = accessibleModal.querySelector("button");

// Event listener to show the non-modal dialog
showNonModalDialogBtn.addEventListener("click", () => {
  accessibleModal.style.display = "block";
});

// Event listener to close the non-modal dialog
closeButton.addEventListener("click", () => {
  accessibleModal.style.display = "none";
}); */
