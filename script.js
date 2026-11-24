const modal = document.getElementById("modal");
const closeBtn = document.getElementById("modal-close");
const spine = document.getElementById("modal-spine");
const titleEl = document.getElementById("modal-title");
const authorEl = document.getElementById("modal-author");
const descEl = document.getElementById("modal-description");
const imgEl = document.getElementById("modal-img");
const imgPlaceholder = document.getElementById("modal-img-placeholder");

const SPINE_IMAGE = "Spine1.png";

document.querySelectorAll(".book-btn").forEach(function (book) {
  const spineSrc = book.dataset.spineImage || SPINE_IMAGE;

  // Spine on the shelf
  book.style.backgroundImage = `url("${spineSrc}")`;

  // Show the modal when a clickable book is clicked
  book.addEventListener("click", function () {
    titleEl.textContent = book.dataset.title;
    authorEl.textContent = book.dataset.author;
    descEl.textContent = book.dataset.description;

    // Spine in the modal
    spine.style.backgroundImage = `url("${spineSrc}")`;

    // Picture (shows placeholder if no image path is set)
    if (book.dataset.image) {
      imgEl.src = book.dataset.image;
      imgEl.alt = book.dataset.title;
      imgEl.hidden = false;
      imgPlaceholder.hidden = true;
    } else {
      imgEl.hidden = true;
      imgPlaceholder.hidden = false;
    }

    // Modal background image (placeholder shown when none is set)
    const bg = modal.dataset.backgroundImage;
    if (bg) {
      modal.style.backgroundImage = `url("${bg}")`;
      modal.classList.add("has-bg");
    } else {
      modal.style.backgroundImage = "none";
      modal.classList.remove("has-bg");
    }

    modal.hidden = false;
  });
});

function hideModal() {
  modal.hidden = true;
}

closeBtn.addEventListener("click", hideModal);

// Close with the Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") hideModal();
});