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
}
function componentToHex(c) {
    var hex = (c.toString(16)).toUpperCase();
    return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
    let ans = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    return ans;
}
function updateHexVal() {
    let r = +document.getElementById("red_value").value;
    let g = +document.getElementById("green_value").value;
    let b = +document.getElementById("blue_value").value;
    let hex_val = rgbToHex(r, g, b);
    $(".HEXInput").val(hex_val);
    // update the preview and background 
    updatePreview(hex_val);
}
function updatePreview(hex) {
    $(".preview").css("background-color", hex);
    $("body").css("background-color", hex);
}
var redThumb = document.getElementById("redThumb");
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
        updateHexVal();
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
var greenThumb = document.getElementById("greenThumb");
greenThumb.onmousedown = function (event) {
    // Slider range constraints 
    let sliderY = greenThumb.getBoundingClientRect().top; // the y-cor of the slider thumb
    let thumbLeftBound = $(".sliderTrack").get(0).getBoundingClientRect().left + (redThumb.offsetWidth / 2);
    let thumbRightBound = thumbLeftBound + 180; // the right bound is the left bound plus size of slider
    // shifting of the thumb
    let shiftX = event.clientX - greenThumb.getBoundingClientRect().left;
    greenThumb.style.position = 'absolute';
    greenThumb.style.zIndex = 1000;
    // move it from any existing parents directly to the body
    // to position it relative to the body
    document.body.append(greenThumb);
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
        greenThumb.style.left = pageX - shiftX + 'px';
        greenThumb.style.top = yCor + 'px';
        updateSliderVal("green_value", pageX, thumbLeftBound, thumbRightBound); // update the pcolor value 
        updateHexVal();
    }
    function onMouseMove(event) {
        moveAt(event.pageX, sliderY);
    }
    //  move the text on mousemove
    document.addEventListener('mousemove', onMouseMove);
    // drop the text, remove unneeded handlers
    document.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        greenThumb.onmouseup = null;
    };
};
var blueThumb = document.getElementById("blueThumb");
blueThumb.onmousedown = function (event) {
    // Slider range constraints 
    let sliderY = blueThumb.getBoundingClientRect().top; // the y-cor of the slider thumb
    let thumbLeftBound = $(".sliderTrack").get(0).getBoundingClientRect().left + (redThumb.offsetWidth / 2);
    let thumbRightBound = thumbLeftBound + 180; // the right bound is the left bound plus size of slider
    // shifting of the thumb
    let shiftX = event.clientX - blueThumb.getBoundingClientRect().left;
    blueThumb.style.position = 'absolute';
    blueThumb.style.zIndex = 1000;
    // move it from any existing parents directly to the body
    // to position it relative to the body
    document.body.append(blueThumb);
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
        blueThumb.style.left = pageX - shiftX + 'px';
        blueThumb.style.top = yCor + 'px';
        updateSliderVal("blue_value", pageX, thumbLeftBound, thumbRightBound); // update the pcolor value 
        updateHexVal();
    }
    function onMouseMove(event) {
        moveAt(event.pageX, sliderY);
    }
    //  move the text on mousemove
    document.addEventListener('mousemove', onMouseMove);
    // drop the text, remove unneeded handlers
    document.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        blueThumb.onmouseup = null;
    };
};
blueThumb.ondragstart = function () {
    return false;
};
// SETUP
let body = document.querySelector("body");
body.onselectstart = function () {
    return false;
};
