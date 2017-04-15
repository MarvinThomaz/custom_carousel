function Carousel(container, images) {

    if (container == null)
        throw "Parameter 'container' cannot be null";
    if (images == null)
        throw "Parameter 'images' cannot be null";
    if ($ == null && jQuery == null)
        throw "This plugin required jQuery to work";
    if ($ == null)
        $ = jQuery;

    var _container = $(container);

    function _createImage(images, index) {
        image = document.createElement('img');
        image.src = images[index];
        image = $(image);
        image.addClass('mtn__hidden');

        return image;
    }

    function _setLocationClass(image, index) {
        if (index % 3 == 0)
            image.addClass('mtn__orientation_3');
        else if (index % 2 == 0)
            image.addClass('mtn__orientation_2');
        else
            image.addClass('mtn__orientation_1');
    }

    function _setImageInContainer(image) {
        _container.append(image);
    }

    function _showImage(images, index) {
        if(index == null)
            index = 0;
        if (index < images.length) {
            image = _createImage(images, index);
            _setLocationClass(image, (index + 1));
            _setImageInContainer(image);
            index++;
            image.fadeIn(2000, function () {
                _showImage(images, index);
            });
        }
    }

    _showImage(images);
}