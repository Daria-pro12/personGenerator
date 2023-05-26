
document.querySelector('#generete').addEventListener('click', () => {
    const initPerson = personGenerator.getPerson();
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#surnameOutput').innerText = initPerson.surname;
    document.querySelector('#patronymicOutput').innerText = initPerson.patronymic;
    document.querySelector('#birthMonthAndDayOutput').innerText = initPerson.monthAndDay;
    document.querySelector('#birthYearOutput').innerText = initPerson.year;
    document.querySelector('#ProfessionOutput').innerText = initPerson.profession;
});

document.querySelector('#clear').addEventListener('click', () => {
    document.querySelector('#genderOutput').innerText = 'Генерация пола';
    document.querySelector('#firstNameOutput').innerText = 'Имя';
    document.querySelector('#surnameOutput').innerText = 'Фамилия';
    document.querySelector('#patronymicOutput').innerText = 'Отчество';
    document.querySelector('#birthMonthAndDayOutput').innerText = 'Число Месяц';
    document.querySelector('#birthYearOutput').innerText = 'Год';
    document.querySelector('#ProfessionOutput').innerText = 'Генерация профессии';
});

