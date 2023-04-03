// Enable right click and keyboard shortcuts
$(document).unbind("keydown mousedown contextmenu")

// Extend session
let loop = () => {
	sessionExtension();
	setTimeout(loop, 1000);
}
setTimeout(loop, 1000);