import singleCountry from '../templates/singleCountry.hbs';
import countriesList from '../templates/countriesList.hbs';
import {error} from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const refs={
    input: document.querySelector('#searchCountry'),
    countryInfo: document.querySelector('#countryInfo'),
    countryList: document.querySelector('.country-list'),
};

function renderMarkup(data){
    if(!data){
        return;
    }
    if(data.status > 399){
        error({
            text: 'Not found! Try again!'
        })
        console.log('error', data.message);
        clearInput();
        return;
    }
    if(data.length===1){
        const markup1 = singleCountry(data);
        refs.countryInfo.insertAdjacentHTML('beforeend', markup1);
        clearInput();
        return;
        
    }if(data.length >1 && data.length <= 10){
        const markup2 = countriesList(data);
        refs.countryList.insertAdjacentHTML('beforeend', markup2);
        clearInput();
        return;
        
    }if(data.length>10){
        error({
            text: 'Too many matches found. Please enter a more specific query!'
        })
        clearInput();
        return;
    }
}

function clearInput(){
refs.input.value = '';
}
export default renderMarkup;