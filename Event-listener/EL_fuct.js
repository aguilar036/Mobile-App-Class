const search_input = document.getElementById('search');
const movie_result = document.getElementById('movie-result');
const movies = document.querySelectorAll('.hover-background');
const names = Array.from(movies).map(container => container.querySelector('p').textContent.trim());

function Results() {
    const search = search_input.value.toLowerCase();

    if(search.trim() === ''){
        movie_result.style.display = 'none';
        return;
    }

    const filters = names.filter(result => result.toLowerCase().includes(search));

    displayResults(filters);
}

function displayResults(results) {
    if(results.length > 0) {
        const resultsHTML = results.map( result => `<div>${result}</div>`).join('');
        movie_result.style.display = 'block';
        movie_result.innerHTML = resultsHTML;
    } else {
        movie_result.style.display = 'none';
    }
}