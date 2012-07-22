This is the script I use to resize text to fit the window on
[nornagon.net](http://nornagon.net). It operates by trial and error: starting
at 1px and moving up, it looks for the largest text size that fits in the
bounds you give it. Handy for reactive/responsive web design. Should work fine
on mobile.

Example:
```html
<div>Huge text.</div>
<script>
var div = document.getElementsByTagName('div')[0]
resizeText(div, {width: 400})
</script>
```
```html
<div>Window-sized text.</div>
<script>
var div = document.getElementsByTagName('div')[0]
fitTextToWindow(div)
</script>
```
