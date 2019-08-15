import { fetchMovies, searchMovies } from './movies';
import { initSortable } from './plugins/init_sortable';
import { initMarkdown } from './plugins/init_markdown';
import { initSelect2 } from './plugins/init_select2';

initSortable();
initMarkdown();
initSelect2();

fetchMovies('harry potter'); // on 1st page load

const form = document.querySelector('#search-form');
form.addEventListener('submit', searchMovies);