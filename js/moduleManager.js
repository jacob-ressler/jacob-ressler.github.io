let activeModuleName = 'home'; // the current active module
const animDuration = 500; // milliseconds

function loadModule(name) {
	// module is already loaded
	if (name == activeModuleName) return;

	document.getElementById(name).style.animation = 'blurFadeIn ' + animDuration + 'ms';
	document.getElementById(activeModuleName).style.animation = 'blurFadeOut ' + animDuration + 'ms';

	// finalize the opacity values and update activeModuleName
	setTimeout(() => {
		document.getElementById(name).style.opacity = 1;
		document.getElementById(activeModuleName).style.opacity = 0;
		activeModuleName = name;
	}, animDuration);
}
