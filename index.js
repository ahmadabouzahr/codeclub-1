export default {

	fetch(request) {
		const url = new URL(request.url)
		const ORIGINS = {
			'https://my-project.ahmadaz.workers.dev' : 'https://localhost'
		}
		const tablelookup = {
			'1': 'I am Number ONE',
			'2': 'I am Number TWO',
			'3': 'I am Number THREE',
			firstName: "Ahmad",
			lastName: "Abou-Zaher",
			fullName : function() {
			  return "I am Number FOUR, Please Try again Mr. " + this.firstName + " " + this.lastName;
		}
	}
	let index = Math.floor(Math.random() * 4)
	console.log(index)
	if(request.method.toUpperCase() === 'GET')
	{
		if (url.origin in ORIGINS & index === 1 )
		{ 
			return new Response ( (tablelookup[1]),
			{	headers: {
				'content-type': 'text/plain',
				},
			}

			);	
		}
		if (url.origin in ORIGINS & index === 2 )
		{ 
			return new Response ( (tablelookup[2]),
			{	headers: {
				'content-type': 'text/plain',
				},
			}

			);	
		}
		if (url.origin in ORIGINS & index === 3 )
		{ 
			return new Response ( (tablelookup[3]),
			{	headers: {
				'content-type': 'text/plain',
				},
			}

			);	
		}
		else {
			return new Response (tablelookup.fullName())
		}
	}
	else
	{
		return new Response ('Failed, Method is NOT GET')
	}
}
};
