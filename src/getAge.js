export default function getAge(yearOfBirth) {
    let today = new Date();
    let todayYear = String(today.getFullYear()).padStart(2, '0');

    return todayYear - yearOfBirth + " years old"
}