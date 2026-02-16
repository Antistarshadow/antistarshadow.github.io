'use strict';

document.addEventListener('DOMContentLoaded', function ()
{
	const a = document.getElementById('link-conversion');

	a.setAttribute('href', a.getAttribute('href')
		.replace('-', '.guzman.librarian+')
		.replace('-e', '@g')
		.replace('/', '.com')
		.replace('the', 'mailto:robert')
	);
});  
