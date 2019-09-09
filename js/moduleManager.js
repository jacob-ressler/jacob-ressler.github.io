let activeModuleName = 'home'; // the current active module
const animDuration = 500; // milliseconds

function loadModule(name) {
	if (name == activeModuleName) {
		// module is already loaded
		return;
	}

	// enable the new module
	document.getElementById(name).style.display = 'block';

	// fade out old module, fade in new one
	document.getElementById(name).style.animation = 'blurFadeIn ' + animDuration + 'ms';
	document.getElementById(activeModuleName).style.animation = 'blurFadeOut ' + animDuration + 'ms';

	// finalize the new opacities
	document.getElementById(name).style.opacity = 1;
	document.getElementById(activeModuleName).style.opacity = 0;

	// update the active module name
	document.getElementById(activeModuleName).style.display = 'none';
	activeModuleName = name;
}
