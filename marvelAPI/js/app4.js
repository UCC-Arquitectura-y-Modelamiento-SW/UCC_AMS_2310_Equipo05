//historias
const marvel = {
  render: () => {
    const urlAPI = 'https://gateway.marvel.com:443/v1/public/stories/comics?apikey=07ebebd3f780dca8ffa3760e7a1a41f5&hash=dcf4e728034739a335af4e6076fa0b53';
    const container = document.querySelector('#marvel-row');
    let contentHTML = '';
    fetch(urlAPI)
      .then(res => res.json())
      .then((json) => {
        for (const hero of json.data.results) {
          let urlHero = hero.urls[0].url;
          let title = hero.title;
          console.log(hero.thumbnail.path + hero.thumbnail.extension)
          contentHTML += `
            <div class="col-md-4">
                <a href="${urlHero}" target="_blank">
                <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                </a>
                <h3 class="title">${title}</h3>
            </div>`;
        }
        container.innerHTML = contentHTML;
      })
  }
};
marvel.render();

