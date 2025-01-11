'use strict';

// Вариант 1

function getPromise(num, delay) {
    return new Promise((resolve) => {
        const timeStart = Date.now();

        setTimeout(() => {
            resolve({numberPromise: `${num}`, leadTime: `${Date.now() - timeStart}`});
        }, delay);
    });
}

async function race1() {
    try {
        const data = await Promise.allSettled([
            getPromise('1', 400),
            getPromise('2', 200),
            getPromise('3', 100)
        ]);
        data.sort((a, b) => a.value.leadTime - b.value.leadTime);
        console.log(`Cамый быстрый запрос номер: ${data[0].value.numberPromise}, результат: ${data[0].status}`);
    } catch(e) {
        console.error(e);
    }
}

race1();
// -------------------


// Вариант 2

const arrPromises = [
    getPromise('1', 130),
    getPromise('2', 120),
    getPromise('3', 110)
];

async function race2(promises) {
    try {
        const data = await Promise.allSettled(promises);
        data.sort((a, b) => a.value.leadTime - b.value.leadTime);
        console.log(`Cамый быстрый запрос номер: ${data[0].value.numberPromise}, результат: ${data[0].status}`);
    } catch(e) {
        console.error(e);
    }
}

race2(arrPromises);
