'use strict';

function getData(url, errorMessage, method = 'GET') {
    return fetch(url, {method})
        .then(response => {
            if (!response.ok) {
                throw new Error(`${errorMessage} ${response.status}`);
            }
            return response.json()
        })
}

function getProperties() {
    const errorMessage = 'Не удалось загрузить данные, ошибка';

    getData('https://pokeapi.co/api/v2/pokemon/ditto', errorMessage)
    .then(({ abilities }) => {
        console.log(abilities);
        return getData(abilities[0].ability.url, errorMessage);
    })
    .then(({ effect_entries }) => {
        console.log(effect_entries[1]);
    })
    .catch(error => {
        console.log(error.message);
        document.querySelector('.error').textContent = `${error.message}`;
    });
}

getProperties();
