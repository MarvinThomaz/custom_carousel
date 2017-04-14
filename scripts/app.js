$(document).ready(function () {

    const IMAGE_ONE = ".image_one",
        IMAGE_TWO = ".image_two",
        IMAGE_THREE = ".image_three";

    function fadeIn(container, index, callback) {
        $(container).addClass('orientation_' + index);
        $(container).fadeIn(2000, callback);
    }

    fadeIn(IMAGE_ONE, 1, function () {
        fadeIn(IMAGE_TWO, 2, function () {
            fadeIn(IMAGE_THREE, 3);
        });
    });

});