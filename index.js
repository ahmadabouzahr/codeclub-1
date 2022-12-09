export default {

	 fetch(request, env , context) {
		let newRequest = new Request("https://http.cat/401" , request);
		if (request.cf.botManagement < 30)
		{
			const pack = {
				"bot" : true,
				"score": request.cf.botManagement.score,
				"userAgent": request.headers.get("User-Agent") || "Unknown"
			}

			return new Response(JASON.stringify(pack, null, 2));
			// return JASON
		}
		return fetch (newRequest)
	}
			
}