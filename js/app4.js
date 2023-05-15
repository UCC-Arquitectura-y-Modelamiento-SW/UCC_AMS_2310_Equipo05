//historias
const request = new XMLHttpRequest();
request.open('GET', 'https://gxb3je2dcflpjlacqoh363nnci0utres.lambda-url.us-east-1.on.aws/');
request.onload = function() {
  if (request.status === 200) {
    const data = JSON.parse(request.responseText);
    console.log(data); 
    const json = data;
    let contentHTML = '';
    for (const hero of json.data.results) {
      let urlHero = hero.urls ? hero.urls[0].url : '';
      let title = hero.name;
      let thumbnailPath = '';
      if (hero.thumbnail && hero.thumbnail.path && hero.thumbnail.extension) {
        thumbnailPath = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;
      }
      contentHTML += `
        <div class="col-md-4">
          <a href="${urlHero}" target="_blank">
            <img src="${thumbnailPath}" alt="${hero.name}" class="img-thumbnail">
          </a>
          <h3 class="title">${title}</h3>
        </div>`;
    }
    document.getElementById("data").innerHTML = contentHTML;
  } else {
    console.error('Error al hacer la solicitud: ' + request.statusText);
  }
};
request.onerror = function() {
  console.error('Error de red al hacer la solicitud');
};
request.send();
