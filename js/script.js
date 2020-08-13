const smallImages = document.querySelectorAll(".small");
const close = document.querySelectorAll(".close");
const fullImagesWrapper = document.querySelector(".image__full");
const screenWidth = window.outerWidth;
console.log(screenWidth);

if (screenWidth > 767) {

    smallImages.forEach(item => {
        item.addEventListener("click", () => {
            const fullImage = fullImagesWrapper.parentElement;
            const imageNumber = item.dataset.forImage;
            const imageToActivate = fullImage.querySelector(`.image[data-image="${imageNumber}"]`);

            fullImagesWrapper.classList.add("active");
            imageToActivate.classList.add("image__active");

        });

    });


    close.forEach(item => {
        item.addEventListener("click", () => {
            const closeImage = document.querySelectorAll(".image").forEach(item => {
                item.classList.remove("image__active");
            })

            fullImagesWrapper.classList.remove("active");

        });
    });

}