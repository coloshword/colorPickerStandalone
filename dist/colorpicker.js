"use strict";
// opens the color picker
function colorPicker() {
    // implement
    $(".dropDownMenu").css("visibility", "visible");
}
function updateSliderVal(inputID, thumbXVal, thumbLeftBound, thumbRightBound) {
    let amountFilled = thumbXVal - thumbLeftBound; // set by coordinate of the slider 
    let fullAmount = thumbRightBound - thumbLeftBound;
    // RGB val = 255 * amtFIlled / full amount 
    let RGBVal = Math.round((255 * amountFilled) / fullAmount);
    $("#" + inputID).val(RGBVal);
    console.log(RGBVal);
}
var redThumb = document.getElementById("text");
redThumb.onmousedown = function (event) {
    // Slider range constraints 
    let sliderY = redThumb.getBoundingClientRect().top; // the y-cor of the slider thumb
    //let thumbLeftBound:number = redThumb.getBoundingClientRect().left;
    let thumbLeftBound = $(".sliderTrack").get(0).getBoundingClientRect().left + (redThumb.offsetWidth / 2);
    let thumbRightBound = thumbLeftBound + 180; // the right bound is the left bound plus size of slider
    // shifting of the thumb
    let shiftX = event.clientX - redThumb.getBoundingClientRect().left;
    redThumb.style.position = 'absolute';
    redThumb.style.zIndex = 1000;
    // move it from any existing parents directly to the body
    // to position it relative to the body
    document.body.append(redThumb);
    // and put this absolutely positioned text under the pointer
    moveAt(event.pageX, sliderY);
    // centers the text on the coordinates (pageX, pageY)
    function moveAt(pageX, yCor) {
        if (pageX < thumbLeftBound) {
            pageX = thumbLeftBound;
        }
        if (pageX > thumbRightBound) {
            pageX = thumbRightBound;
        }
        redThumb.style.left = pageX - shiftX + 'px';
        redThumb.style.top = yCor + 'px';
        updateSliderVal("red_value", pageX, thumbLeftBound, thumbRightBound); // update the pcolor value 
    }
    function onMouseMove(event) {
        moveAt(event.pageX, sliderY);
    }
    //  move the text on mousemove
    document.addEventListener('mousemove', onMouseMove);
    // drop the text, remove unneeded handlers
    document.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        redThumb.onmouseup = null;
    };
};
redThumb.ondragstart = function () {
    return false;
};
redThumb.onselectstart = function () {
    return false;
};
