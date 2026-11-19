const modal = document.getElementById("modal");
const closeBtn = document.getElementById("modal-close");
const spine = document.getElementById("modal-spine");
const titleEl = document.getElementById("modal-title");
const authorEl = document.getElementById("modal-author");
const descEl = document.getElementById("modal-description");
const imgEl = document.getElementById("modal-img");
const imgPlaceholder = document.getElementById("modal-img-placeholder");

// Show the modal when a clickable book is clicked
document.querySelectorAll(".book-btn").forEach(function (book) {
  book.addEventListener("click", function () {
    titleEl.textContent = book.dataset.title;
    authorEl.textContent = book.dataset.author;
    descEl.textContent = book.dataset.description;

    // spine in the modal matches the clicked book's color
    spine.style.backgroundColor = getComputedStyle(book).backgroundColor;

    // picture (shows placeholder if no image path is set)
    if (book.dataset.image) {
      imgEl.src = book.dataset.image;
      imgEl.alt = book.dataset.title;
      imgEl.hidden = false;
      imgPlaceholder.hidden = true;
    } else {
      imgEl.hidden = true;
      imgPlaceholder.hidden = false;
    }

    modal.hidden = false;
  });
});

// Hide the modal when an X is clicked
function hideModal() {
  modal.hidden = true;
}

closeBtn.addEventListener("click", hideModal);

// The X button in the page header hides the modal too
document.getElementById("header-close").addEventListener("click", hideModal);

// Also close with the Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") hideModal();
});