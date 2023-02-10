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
      obj[i].owner.login === "ToJoh123"
    ) {
      let repoUrl = obj[i].html_url;
      let pageUrl = "";
      if (obj[i].has_pages) {
        pageUrl = `https://${obj[i].owner.login}.github.io/${obj[i].name}`;
      }
      cards += `
      <div class="card">
        <h2><a href="${repoUrl}">${obj[i].name}</a></h2>
        <p>${obj[i].description}</p>
        <div class="icons">
          <a href="${repoUrl}">
            <i class="fas fa-code-branch"></i>
          </a>
          ${
            pageUrl
              ? `<a href="${pageUrl}">
                <i class="fas fa-globe"></i>
              </a>`
              : ""
          }
        </div>
      </div>
    `;
    }
  }
  document.getElementById("cards").innerHTML = cards;
}