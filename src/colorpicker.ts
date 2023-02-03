// opens the color picker
function colorPicker(): void {
    // implement
    $(".dropDownMenu").css("visibility", "visible");
}

function updateSliderVal(inputID:string, thumbXVal:number, thumbLeftBound:number, thumbRightBound:number) : void{
    let amountFilled: number = thumbXVal - thumbLeftBound; // set by coordinate of the slider 
    let fullAmount: number = thumbRightBound - thumbLeftBound;
    // RGB val = 255 * amtFIlled / full amount 
    let RGBVal = Math.round((255 * amountFilled) / fullAmount);
    $("#" + inputID).val(RGBVal);
}

function componentToHex(c:number) {
  var hex = (c.toString(16)).toUpperCase();
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r:number, g:number, b:number): string{
    let ans: string = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    return ans;
}

function updateHexVal():void{
    let r:number= +(<HTMLInputElement>document.getElementById("red_value")).value;
    let g:number= +(<HTMLInputElement>document.getElementById("green_value")).value;
    let b:number= +(<HTMLInputElement>document.getElementById("blue_value")).value;
    let hex_val: string = rgbToHex(r, g, b);
    $(".HEXInput").val(hex_val);
    // update the preview and background 
    updatePreview(hex_val);
}

function updatePreview(hex: string ): void {
    $(".preview").css("background-color", hex);
    $("body").css("background-color", hex);
}

var redThumb:any = document.getElementById("redThumb")

redThumb.onmousedown = function(event:any) { 
    // Slider range constraints 
    let sliderY: number = redThumb.getBoundingClientRect().top; // the y-cor of the slider thumb
    //let thumbLeftBound:number = redThumb.getBoundingClientRect().left;

    let thumbLeftBound: number = $(".sliderTrack").get(0)!.getBoundingClientRect().left + (redThumb.offsetWidth / 2);
    let thumbRightBound = thumbLeftBound + 180;// the right bound is the left bound plus size of slider
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
    function moveAt(pageX:number, yCor:number) {
        if(pageX < thumbLeftBound) {
            pageX = thumbLeftBound;
        }
        if(pageX > thumbRightBound) {
            pageX = thumbRightBound;
        }
      redThumb.style.left = pageX - shiftX + 'px';
      redThumb.style.top = yCor + 'px';
      updateSliderVal("red_value", pageX, thumbLeftBound, thumbRightBound)// update the pcolor value 
      updateHexVal();

    }
    function onMouseMove(event:any) {
      moveAt(event.pageX, sliderY);
    }
    //  move the text on mousemove
    document.addEventListener('mousemove', onMouseMove);
    // drop the text, remove unneeded handlers
    document.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      redThumb.onmouseup = null;
    };
  };

redThumb.ondragstart = function() : boolean{
    return false;
};

var greenThumb:any = document.getElementById("greenThumb")

greenThumb.onmousedown = function(event:any) { 
    // Slider range constraints 
    let sliderY: number = greenThumb.getBoundingClientRect().top; // the y-cor of the slider thumb

    let thumbLeftBound: number = $(".sliderTrack").get(0)!.getBoundingClientRect().left + (redThumb.offsetWidth / 2);
    let thumbRightBound = thumbLeftBound + 180;// the right bound is the left bound plus size of slider
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
    function moveAt(pageX:number, yCor:number) {
        if(pageX < thumbLeftBound) {
            pageX = thumbLeftBound;
        }
        if(pageX > thumbRightBound) {
            pageX = thumbRightBound;
        }
      greenThumb.style.left = pageX - shiftX + 'px';
      greenThumb.style.top = yCor + 'px';
      updateSliderVal("green_value", pageX, thumbLeftBound, thumbRightBound)// update the pcolor value 
      updateHexVal();
    }
    function onMouseMove(event:any) {
      moveAt(event.pageX, sliderY);
    }
    //  move the text on mousemove
    document.addEventListener('mousemove', onMouseMove);
    // drop the text, remove unneeded handlers
    document.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      greenThumb.onmouseup = null;
    };
  };
 

var blueThumb:any = document.getElementById("blueThumb")

blueThumb.onmousedown = function(event:any) { 
    // Slider range constraints 
    let sliderY: number = blueThumb.getBoundingClientRect().top; // the y-cor of the slider thumb

    let thumbLeftBound: number = $(".sliderTrack").get(0)!.getBoundingClientRect().left + (redThumb.offsetWidth / 2);
    let thumbRightBound = thumbLeftBound + 180;// the right bound is the left bound plus size of slider
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
    function moveAt(pageX:number, yCor:number) {
        if(pageX < thumbLeftBound) {
            pageX = thumbLeftBound;
        }
        if(pageX > thumbRightBound) {
            pageX = thumbRightBound;
        }
      blueThumb.style.left = pageX - shiftX + 'px';
      blueThumb.style.top = yCor + 'px';
      updateSliderVal("blue_value", pageX, thumbLeftBound, thumbRightBound)// update the pcolor value 
      updateHexVal();
    }
    function onMouseMove(event:any) {
      moveAt(event.pageX, sliderY);
    }
    //  move the text on mousemove
    document.addEventListener('mousemove', onMouseMove);
    // drop the text, remove unneeded handlers
    document.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      blueThumb.onmouseup = null;
    };
  };

blueThumb.ondragstart = function() : boolean{
    return false;
};

// SETUP
let body = document.querySelector("body");
body!.onselectstart = function() : boolean {
    return false;
}

