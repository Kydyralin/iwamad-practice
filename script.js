const likeButton = document.querySelector("#likeButton");

likeButton.addEventListener("click", function () {

    likeButton.classList.toggle("liked");

    if (likeButton.classList.contains("liked")) {
        likeButton.textContent = "♥ Liked";
    } else {
        likeButton.textContent = "♡ Like";
    }

});