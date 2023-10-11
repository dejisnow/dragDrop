window.onload = function() {
  // find the element that you want to drag.
  let box = document.getElementById('box');
  
  /* listen to the touchMove event,
  every time it fires, grab the location
  of touch and assign it to box */
  
  box.addEventListener('touchmove', function(e) {
    // grab the location of touch
    let touchLocation = e.targetTouches[0];
    
    // assign box new coordinates based on the touch.
    box.style.left = touchLocation.pageX + 'px';
    box.style.top = touchLocation.pageY + 'px';
  })
  
  /* record the position of the touch
  when released using touchend event.
  This will be the drop position. 
  */
  box.addEventListener('touchend', function(e) {
    // current box position.
    let x = parseInt(box.style.left);
    let y = parseInt(box.style.top);
  })
  
  
}￼Enter
