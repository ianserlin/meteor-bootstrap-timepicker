Package.describe({
	summary: "Easily select a time for a text input using your mouse or keyboards arrow keys."
});

Package.on_use(function (api) {
	api.add_files([
		'lib/bootstrap-timepicker/css/bootstrap-timepicker.css',
		'lib/bootstrap-timepicker/js/bootstrap-timepicker.js'
		], 'client');
});