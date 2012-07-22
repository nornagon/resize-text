// Copyright (c) 2012, Jeremy Apthorp.
// Do whatever you want with this. It'd be nice to get a shoutout if you use
// it :)

function resizeText(el, opts) {
  opts = opts || {}
  var width = opts.width, height = opts.height
  if (!width && !height) { 
    console.error("Must specify a size to resize the text into!")
    return
  }
  el.style.fontSize = "1px"
  var size = 1
  while ((width && el.offsetWidth < width) &&
         (height && el.offsetHeight < height)) {
    size++
    el.style.fontSize = size + "px"
  }
  // Without smacking the layout, sometimes the text will leave a scrollbar in
  // the window, which changes the width/height.
  el.style.fontSize = "1px"
  // Force a relayout.
  el.offsetHeight
  // Be 1px smaller than the size which exceeded the given rect.
  el.style.fontSize = (size-1) + "px"
}
function fitTextToWindow(el, ratioH, ratioW) {
  // By default, fit to the window width and 80% of its height.
  if (!ratioW) ratioW = 1
  if (!ratioH) ratioH = 0.8
  function resizeToWindow() {
    resizeText(el, { width: window.innerWidth * ratioW,
                     height: window.innerHeight * ratioH })
  }
  resizeToWindow()
  window.addEventListener('resize', resizeToWindow)
}
