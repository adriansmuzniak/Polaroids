$(document).ready(function() {
var imagesLibrary = ["img/pic0001.jpg", "img/pic0002.jpg", "img/pic0003.jpg", "img/pic0004.jpg", "img/pic0005.jpg", "img/pic0006.jpg", "img/pic0007.jpg", "img/pic0008.jpg", "img/pic0009.jpg", "img/pic0010.jpg", "img/pic0011.jpg", "img/pic0012.jpg", "img/pic0013.jpg", "img/pic0014.jpg", "img/pic0015.jpg", "img/pic0016.jpg", ];
    
var images = $(".polaroid-pictures").find("img");
var myModal = $("#myModal");
var modalContent = $(".modal-content");
var modalContent2 = $(".modal-content2");
var closeButton = $(".close");
var nextButton = $(".next");
var prevButton = $(".prev");
var counter = null;

images.on("click", function () {
    var imgUrl = $(event.target).attr("src");
    counter = images.index(this);
    images.css("z-index", "1")
    modalContent2.css("background-image", "url(" + imgUrl + ")")
    myModal.css("display", "block");
    // --------------------------------------
    nextButton.on("click", function () {
        modalContent2.stop().animate({ opacity: 0 }, 100, function () {
            modalContent2.css("background-image", "url(" + imagesLibrary[counter] + ")")
            .animate({ opacity: 1 }, { duration: 50 });        
        })
        counter++;
        if (counter >= imagesLibrary.length) {
            counter = 0;
        }
    })
    // -----------------------------------------
    prevButton.on("click", function () {
        modalContent2.stop().animate({ opacity: 0 }, 100, function () {
            modalContent2.css("background-image", "url(" + imagesLibrary[counter] + ")")
            .animate({ opacity: 1 }, { duration: 50 });
        })
        counter--;
        if (counter == -1) {
            counter = imagesLibrary.length - 1;
        }
    })
    // -------------------------------------------
    closeButton.on("click", function (e) {
            e.preventDefault();
            myModal.slideUp(300);
        });
    // -------------------------------------------
    $(myModal).click(function (event){
        if (!$(event.target).closest(modalContent).length && !$(event.target).is(modalContent)) {
            myModal.slideUp(300)
            }
        })
    });
});
