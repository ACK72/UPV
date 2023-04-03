// Enable right click and keyboard shortcuts
$(document).unbind("keydown mousedown contextmenu")

// Extend session
const loop = () => {
	sessionExtension();
	setTimeout(loop, 60*1000);
}
setTimeout(loop, 60*1000);