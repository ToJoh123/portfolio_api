async function getData() {
	try {
	  const response = await fetch("https://api.github.com/users/ToJoh123/starred");
	  const data = await response.json();
	  console.log("printing data");
	  console.log(data);
	} catch (error) {
	  console.error(error);
	}
  }
  
  getData();
  