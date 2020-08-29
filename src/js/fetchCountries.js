import renderMarkup from './renderMarkup';

const baseURL = 'https://restcountries.eu/rest/v2/';
let countryToSearch = '';

const refs={
    input: document.querySelector('#searchCountry'),
    counryInfo: document.querySelector('#countryInfo'),
    countryList: document.querySelector('.country-list'),
};


export default function fetchCountries(){
    countryToSearch = refs.input.value;
    const searchQuery = baseURL + 'name/' + countryToSearch;
    if(countryToSearch = ""){
        return;
    };
    fetch(searchQuery)
    .then(response=>response.json())
    .then(data=>renderMarkup(data));
    
}


