let activeModule = 'home'; // the current active module

function loadModule(name) {
	// deload the active module with a fade out
	// load the specified module
	// maybe use a crossfade-style animation?

	if (name == activeModule) return; // module is already loaded

	setTimeout(() => {}, 1000);
}
