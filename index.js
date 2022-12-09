export default {

	 fetch(request, env , context) {
		let newRequest = new Request("https://http.cat/401" , request);
		let resp;
		if (request.cf.botManagement < 30)
		{
			//Define JASON result
			let jsonResponse = JASON.stringify ({
				result: {

					action: "blocked",
					reason: "Bad Bot Detected",
					botScore: request.cf.botManagement.score,
				},

			});
			// Define Init
			let init = {
				status: 403,
				headers: {
					"content-type": "application/json"
				}
			};
			// Create a response object that has a JASON indicating the request is being blocked and why
			resp = new Response(jsonResponse, init);
			
		} else {
			resp =  fetch (new Request ("https://http.cat/401" , {
					cf: { resolveOverride: "http.cat" },
				})
				);
		} 
		return resp;
	},
			
}