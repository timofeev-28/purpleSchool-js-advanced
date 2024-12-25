'use strict';

function getLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => resolve(position),
            (error) => reject(new Error(error.message))
        )
    })
}

getLocation()
    .then(position => console.log(position.coords.latitude, position.coords.longitude))
    .catch(error => console.log(error));
