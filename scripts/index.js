const cardData6 = {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
};
const cardData5 = {
  name: "Lake Louise",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
};
const cardData4 = {
  name: "Bald Mountains",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
};
const cardData3 = {
  name: "Latemar",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
};
const cardData2 = {
  name: "Vanoise National Park",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
};
const cardData1 = {
  name: "Lago di Braies",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
};
const initialCards = [
  cardData1,
  cardData2,
  cardData3,
  cardData4,
  cardData5,
  cardData6,
];

/*Elements*/
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const newCardAddButton = document.querySelector("#profile-add-button");
const newCardAddModal = document.querySelector("#card-add-modal");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const cardTitleInput = document.querySelector("#card-title-input");
const cardURLInput = document.querySelector("#card-url-input");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardEditForm = newCardAddModal.querySelector(".modal__form");
const profileCloseButton = document.querySelector("#profile-modal-close");
const cardCloseButton = document.querySelector("#card-modal-close");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardListEl = document.querySelector(".cards__list");
const previewImageModal = document.querySelector("#preview-image-modal");
const previewImage = document.querySelector(".modal__image");
const previewCloseButton = document.querySelector("#preview-modal-close");
const previewText = document.querySelector(".modal__preview-text");
const placeholderText = document.querySelector(".modal__input::placeholder");
// const modalContainer = document.querySelector(".modal__container");

/*Functions*/
function closePopup(modal) {
  modal.classList.remove("modal_opened");

  // modal.classList.remove('show');
}
function openPopup(modal) {
  // modalContainer) {
  modal.classList.add("modal_opened");
  // modal.classList.add('show');
  //modalContainer.classList.add('show');
}
function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const trashButton = cardElement.querySelector(".card__trash-button");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  trashButton.addEventListener("click", () => {
    cardElement.remove();
  });

  // cardImageEl.src = cardData.link;
  // cardImageEl.alt = cardData.name;

  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  cardTitleEl.textContent = cardData.name;

  cardImageEl.addEventListener("click", () => {
    openPopup(previewImageModal);
    previewImage.src = cardImageEl.src;
    previewImage.alt = cardImageEl.alt;
    previewText.textContent = cardTitleEl.textContent;
  });

  return cardElement;
}
function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
}

/*Event Handlers*/
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}

function handleCardEditSubmit(e) {
  e.preventDefault();
  const cardNewData = {
    name: cardTitleInput.value,
    link: cardURLInput.value,
  };
  renderCard(cardNewData, cardListEl);
  closePopup(newCardAddModal);
  cardEditForm.reset();
}
/*Event Listeners*/
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(profileEditModal); //, modalContainer);
});

profileCloseButton.addEventListener("click", () => {
  closePopup(profileEditModal);
});
profileEditForm.addEventListener("submit", handleProfileEditSubmit);

newCardAddButton.addEventListener("click", () => {
  openPopup(newCardAddModal); //, modalContainer);
});

cardCloseButton.addEventListener("click", () => {
  closePopup(newCardAddModal);
});
cardEditForm.addEventListener("submit", handleCardEditSubmit);

previewCloseButton.addEventListener("click", () => {
  closePopup(previewImageModal);
});

initialCards.forEach((cardData) => {
  renderCard(cardData, cardListEl);
});

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

