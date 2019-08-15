const list = document.querySelector('#results');

const insertMovies = (data) => {
  data.Search.forEach((result) => {
    const movie = `<li class="list-inline-item align-top" style="max-width: 150px;">
      <img src="${result.Poster}" alt="" class="img-fluid" style="height:120px"/>
    </li>`;
    list.insertAdjacentHTML('beforeend', movie);
  });
};

const fetchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then(insertMovies);
};

const searchMovies = (event) => {
  event.preventDefault();
  list.innerHTML = '';
  const input = document.querySelector('#search-input');
  fetchMovies(input.value);
};

export { fetchMovies, searchMovies };