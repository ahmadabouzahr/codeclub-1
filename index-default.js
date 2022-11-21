export default {
	fetch(request) {
		
		if(request.method.toUpperCase() === 'POST') {
			return new Response('It is a POST request, return JSON', {
				headers: {
					'content-type': 'application/jason',
				},

		});
	}
	else {
		
		return new Response('Sorry, NOT POST' , {
			headers: {
				'content-type': 'text/plain',
			},
		});
	}
		
	},
};
