import './styles.css';
import * as _debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries';

const refs={
    input: document.querySelector('#searchCountry'),
   
};

const inputHandler = _debounce(()=>{
    fetchCountries()
    
},500);
    
refs.input.addEventListener('input', inputHandler);





