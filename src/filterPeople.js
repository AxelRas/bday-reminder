import peopleObj from './people.json';

let today = new Date();
let todayDay = String(today.getDate()).padStart(2, '0');
let todayMonth = String(today.getMonth() + 1).padStart(2, '0');
let todayDM = todayDay + '-' + todayMonth;


export const peeps = peopleObj.people.filter(person => person.birthday.slice(0, 5) === todayDM);
console.log(peeps);