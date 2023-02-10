getData();

async function getData() {
  try {
    const response = await fetch(
      //insert your gitUserName in the $ sign
      `https://api.github.com/users/${gitUserName}/starred`
    );
    const data = await response.json();
    console.log("printing data");
    console.log(data);

    //calls the function printObject and passes the data as a parameter
    renderObjects(data);
  } catch (error) {
    console.error(error);
  }
}

//this function is called from the getData function
function renderObjects(obj) {
  let cards = "";
  for (let i = 0; i < obj.length; i++) {
    if (
      obj[i].hasOwnProperty("owner") &&
      obj[i].owner.hasOwnProperty("login") &&
      obj[i].owner.login === gitUserName
    ) {
      cards += `
  <div class="card">
    <h2>${obj[i].name}</h2>
    <p>${obj[i].description}</p>
    <div class="card-links">
      <a href="${obj[i].html_url}"><i class="fas fa-code-branch"></i> Repo</a>
      <a href="${obj[i].homepage}"><i class="fas fa-globe"></i> Website</a>
    </div>
  </div>
`;
    }
  }
  document.getElementById("cards").innerHTML = cards;
}