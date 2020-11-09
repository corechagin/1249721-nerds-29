const contactsButton = document.querySelector(".contacts-button");
const modalPopup = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const modalForm = document.querySelector(".send-form");
const sendName = document.querySelector(".send-name-input");
const sendEmail = document.querySelector(".send-email-input");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

contactsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.add("modal-show");

  if (storage) {
    sendName.value = storage;
    sendEmail.focus();
  } else {
    sendName.focus();
  }

  sendName.focus();
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.remove("modal-show");
  modalPopup.classList.remove("modal-error");
});

modalForm.addEventListener("submit", function (evt) {
  if (!sendName.value || !sendEmail.value) {
    evt.preventDefault();
    modalPopup.classList.remove("modal-error");
    modalPopup.offsetWidth = modalPopup.offsetWidth;
    modalPopup.classList.add("modal-error");
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem("name", sendName.value);
      localStorage.setItem("email", sendEmail.value );
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      modalPopup.classList.remove("modal-show");
      modalPopup.classList.remove("modal-error");
    }
  }
});
