const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Марина",
            "id_2": "Анна",
            "id_3": "Полина",
            "id_4": "Дарья",
            "id_5": "Софья",
            "id_6": "Елена",
            "id_7": "Ксения",
            "id_8": "Юлия",
            "id_9": "Наталья",
            "id_10": "Анастасия"
        }
    }`,
    patronymicJson: `{
        "count": 10,
        "list": {     
            "id_1": "Петров",
            "id_2": "Евгеньев",
            "id_3": "Владимиров",
            "id_4": "Вадимов",
            "id_5": "Алексеев",
            "id_6": "Анатольев",
            "id_7": "Антонов",
            "id_8": "Николаев",
            "id_9": "Константинов",
            "id_10": "Максимов"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "слесарь",
            "id_2": "плотник",
            "id_3": "пожарный",
            "id_4": "сварщик",
            "id_5": "шахтер",
            "id_6": "водитель",
            "id_7": "охранник",
            "id_8": "милиционер",
            "id_9": "баскетболист",
            "id_10": "футболист"
        }
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "медсестра",
            "id_2": "психолог",
            "id_3": "инспектор отдела кадров",
            "id_4": "методист",
            "id_5": "секретарь",
            "id_6": "педиатр",
            "id_7": "терапевт",
            "id_8": "инструктор профилактики",
            "id_9": "фитнес-тренер",
            "id_10": "учитель"
        }
    }`,
 
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),
    
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function() {
        return this.randomIntNumber() == 0 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomFirstName: function() {
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } return this.randomValue(this.firstNameFemaleJson);
                
    },

     randomSurname: function() {
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.surnameJson);
        } return this.randomValue(this.surnameJson) + 'a';
    
    },

    randomPatronymic: function() {
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.patronymicJson) + 'ич';
        } return this.randomValue(this.patronymicJson) + 'нa';
    
    },
    
    randomProfession: function() {
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.professionMaleJson);
        } return this.randomValue(this.professionFemaleJson);
    },
   
    randomMonthAndDay: function () { 
        let month = Math.floor(Math.random() * 3);
        let days31 = ["января", "марта", "мая",	"июля",	"августа", "октября", "декабря"];
        let days30 = ["апреля", "июня", "сентября", "ноября"];
        let days28 = "февраля";
        if (month === 0) {
            randomMonth = days28;
            randomDay = this.randomIntNumber(28, 1);
            return randomDay + ' ' + randomMonth;
        } else if (month === 1) {
            randomMonth = days31[Math.floor(Math.random() * days31.length)];
            randomDay = this.randomIntNumber(31, 1);
            return randomDay + ' ' + randomMonth;
        } else if (month === 2) {
            randomMonth = days30[Math.floor(Math.random() * days30.length)];
            randomDay = this.randomIntNumber(30, 1);
            return randomDay + ' ' + randomMonth;
        }
        },
    
    randomYear: function () {
        return this.randomIntNumber(2005, 1970) + ' года';
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
        this.person.monthAndDay = this.randomMonthAndDay();
        this.person.year = this.randomYear();
        this.person.profession = this.randomProfession();
        return this.person;
    },

 
};
