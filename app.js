// script.js
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("img-ampliada");
    var close = document.querySelector(".close");

    document.querySelectorAll(".foto-galeria img").forEach(function(image) {
        image.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    close.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
