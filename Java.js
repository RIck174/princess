let slideGroup = [
    { className: "myimage",  interval: 5000 },
    { className: "myimage1", interval: 6000 },
    { className: "myimage2", interval: 5000 },
    { className: "myimage3", interval: 4080 },
    { className: "myimage4", interval: 6000 },
    { className: "myimage5", interval: 4000 },
    { className: "myimage6", interval: 5000 },
    { className: "myimage7", interval: 6000 },
    { className: "myimage8", interval: 4000 },
    { className: "myimage9", interval: 4000 },
    { className: "myimage10", interval: 4000 },
    { className: "myimage11", interval: 4000 },
    { className: "myimage12", interval: 4000 },


];

slideGroup.forEach(function(group, index) {
    let slideIndex = 0;
    const slides = document.getElementsByClassName(group.className);

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, group.interval);
    }

    showSlides();
});