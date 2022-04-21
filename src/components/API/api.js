const urls = [
  
   "https://swapi.dev/api/films/2/",
		"https://swapi.dev/api/films/6/",
		"https://swapi.dev/api/films/3/",
		"https://swapi.dev/api/films/1/",


  ]

//fetching my API URL's
  export const fetchData = async () => {
    try {
      const response = await Promise.all(
        urls.map(url => fetch(url).then(res => res.json()))
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log("Error", error);
    }
  };