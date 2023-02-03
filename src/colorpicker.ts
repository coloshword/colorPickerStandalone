// opens the color picker
function colorPicker(): void {
    // implement
    $(".dropDownMenu").css("visibility", "visible");
}

var redThumb:any = document.getElementById("text")

redThumb.onmousedown = function(event:any) { 
    // Slider range constraints 
    let sliderY: number = redThumb.getBoundingClientRect().top; // the y-cor of the slider thumb
    //let thumbLeftBound:number = redThumb.getBoundingClientRect().left;

    let thumbLeftBound: number = $(".sliderTrack").get(0)!.getBoundingClientRect().left + (redThumb.offsetWidth / 2);
    let thumbRightBound = thumbLeftBound + 180;// the right bound is the left bound plus size of slider
    // shifting of the thumb
    let shiftX = event.clientX - redThumb.getBoundingClientRect().left;
    console.log(sliderY);
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
