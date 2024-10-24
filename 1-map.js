'use srtict';

let arr = [
    {id: 1, name: 'Вася'},
    {id: 2, name: 'Петя'},
    {id: 1, name: 'Вася'},
    {id: 2, name: 'Петя'},
    {id: 5, name: 'Софа'},
];

const arrId = arr.map(el => el.id);
arr = [...new Set(arrId)].map(el => arr.find(obj => obj.id === el));

console.log(arr);
