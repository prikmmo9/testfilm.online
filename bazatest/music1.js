let div;
let l;
l = 1;
let divNameFilm1;
let imgFilm1;
let divNameFilm2;
let x;
let arrFilm13;
let arrFilm2 = [];
let v;
v = 1;
let s;
s = 1;
let countElementsArr;
let countElementsArr2;
let funkButton1;
let funkButton2;
let arrSerial1;
let arrFilm16;
let arrFilm8;
let arrFilm4;
let arrFilm22;
let arrFilm12 = [];
let countElementsArr12;
let countElementsArr13;
let arr1 = 'arrFilm1';
let arr2 = 'arrFilm2';
let arrFilm1;

let youTube1;
let youTube2;

arrFilm1 = [
    ff1 = {
        1: 'Мурат Насыров – Мальчик хочет в Тамбов',
        2: 'https://www.youtube.com/embed/i853cmySVq0?start=13',
        3: 1,
        4: 2013,
    },
    ff2 = {
        1: 'Иванушки Int. - Тополиный пух',
        2: 'https://www.youtube.com/embed/lvCErYl62Zs?start=44',
        3: 2,
        4: 2012,
    },
    ff3 = {
        1: 'Михаил Шуфутинский - 3 сентября',
        2: 'https://www.youtube.com/embed/IwHNiLYy3M8?start=85',
        3: 3,
        4: 2004
    },
    ff4 = {
        1: 'Айдамир Мугу - Черные глаза',
        2: 'https://www.youtube.com/embed/4-DRyntwBz0?start=45',
        3: 4,
        4: 1994
    },
    ff5 = {
        1: 'Агата Кристи - Как на войне',
        2: 'https://www.youtube.com/embed/1fm1XCJAY0s?start=70',
        3: 5,
        4: 2013
    },
    ff6 = {
        1: 'ВИА Гра - Попытка №5',
        2: 'https://www.youtube.com/embed/0fmOMnjHGuA?start=48',
        3: 6,
        4: 2008
    },
    ff7 = {
        1: 'STIGMATA - СЕНТЯБРЬ',
        2: 'https://www.youtube.com/embed/EziHx_07vX0?start=64',
        3: 7,
        4: 2005
    },
    ff8 = {
        1: 'Валерий Меладзе - Небеса',
        2: 'https://www.youtube.com/embed/mHTx0mhRFws?start=26',
        3: 8,
        4: 1999
    },
    ff9 = {
        1: 'Ария - Я свободен',
        2: 'https://www.youtube.com/embed/_91mQPe-7-o?start=134',
        3: 9,
        4: 1973
    },
    ff10 = {
        1: 'Сплин - Мое сердце',
        2: 'https://www.youtube.com/embed/yaKTJ1atdEA?start=15',
        3: 10,
        4: 2007
    },
    ff11 = {
        1: 'Ласковый май - "Белые розы"',
        2: 'https://www.youtube.com/embed/LktkNlsGh34?start=100',
        3: 11,
        4: 2001
    },
    ff12 = {
        1: 'Григорий Лепс - Рюмка водки на столе',
        2: 'https://www.youtube.com/embed/42t-NCCbShQ?start=69',
        3: 12,
        4: 2005
    },
    ff13 = {
        1: 'СПЛИН - Выхода нет',
        2: 'https://www.youtube.com/embed/SDTD4pL0mLc?start=44',
        3: 13,
        4: 2011
    },
    ff14 = {
        1: 'Би-2 - Варвара',
        2: 'https://www.youtube.com/embed/T18deTeV0RI?start=47',
        3: 14,
        4: 2004
    },
    ff15 = {
        1: 'Валентин Стрыкало - Наше лето',
        2: 'https://www.youtube.com/embed/VMS30oV8ApE?start=31',
        3: 15,
        4: 2021
    },
    ff16 = {
        1: 'Руки Вверх! - 18 мне уже',
        2: 'https://www.youtube.com/embed/Hxab_Sr132o?start=11',
        3: 16,
        4: 2011
    },
    ff17 = {
        1: 'Lumen - Гореть',
        2: 'https://www.youtube.com/embed/dwHhyfZXLU0?start=31',
        3: 17,
        4: 1979
    },
    ff18 = {
        1: 'Алла Пугачева - Позови меня с собой',
        2: 'https://www.youtube.com/embed/DPOO7A_mOKQ?start=26',
        3: 18,
        4: 2010
    },
    ff19 = {
        1: 'Звери - До скорой встречи',
        2: 'https://www.youtube.com/embed/DF6W1XD25Dc?start=88',
        3: 19,
        4: 2018
    },
    ff20 = {
        1: 'Форум - Белая ночь',
        2: 'https://www.youtube.com/embed/XaiWLGTP-7E?start=74',
        3: 20,
        4: 1999
    },
    ff21 = {
        1: 'Игорь Николаев - Выпьем за любовь',
        2: 'https://www.youtube.com/embed/QwPYW8Cra8E?start=62',
        3: 21,
        4: 2010
    },
    ff22 = {
        1: 'Технология - Нажми На Кнопку',
        2: 'https://www.youtube.com/embed/JOWt3y6tq8A?start=57',
        3: 22,
        4: 2014
    },
    ff23 = {
        1: 'Ёлка - Прованс',
        2: 'https://www.youtube.com/embed/U0vduC21YwI?start=57',
        3: 23,
        4: 2018
    },
    ff24 = {
        1: 'Татьяна Буланова - Ясный мой свет',
        2: 'https://www.youtube.com/embed/R8r8BX57RNM?start=55',
        3: 24,
        4: 1998
    },
    ff25 = {
        1: 'Animal ДжаZ - Три полоски',
        2: 'https://www.youtube.com/embed/spDy95Sww6k?start=52',
        3: 25,
        4: 2004
    },
    ff26 = {
        1: 'Нервы - Кофе мой друг',
        2: 'https://www.youtube.com/embed/_tHtpFXcjUA?start=27',
        3: 26,
        4: 1994
    },
    ff17 = {
        1: 'Бумбокс - Вахтерам',
        2: 'https://www.youtube.com/embed/tnZPDs9qepA?start=72',
        3: 27,
        4: 2002
    },
    ff18 = {
        1: 't.A.T.u. - Я сошла с ума',
        2: 'https://www.youtube.com/embed/-F-JfWqMG6g?start=19',
        3: 28,
        4: 1997
    },
    ff19 = {
        1: 'Виктор Цой - Звезда По Имени Солнце',
        2: 'https://www.youtube.com/embed/jQV5VXfKDYc?start=153',
        3: 29,
        4: 2019
    },
    ff20 = {
        1: 'Градусы — Голая',
        2: 'https://www.youtube.com/embed/fou72UMdG0k?start=60',
        3: 30,
        4: 2009
    },
    ff21 = {
        1: 'Жуки - Батарейка',
        2: 'https://www.youtube.com/embed/9IPvUmLCLBM?start=40',
        3: 31,
        4: 2014
    },
    ff22 = {
        1: 'Братья Грим - Ресницы',
        2: 'https://www.youtube.com/embed/ZENCTedP0Ec?start=37',
        3: 32,
        4: 2007
    },
    ff23 = {
        1: 'UMA2RMAN - Проститься',
        2: 'https://www.youtube.com/embed/-8L9AmmtgG8?start=60',
        3: 33,
        4: 2007
    },
    ff24 = {
        1: 'Пятница - Я Солдат',
        2: 'https://www.youtube.com/embed/F1fQFCCMtg4?start=41',
        3: 34,
        4: 1997
    },
    ff25 = {
        1: 'Quest Pistols Show - Ты Так Красива',
        2: 'https://www.youtube.com/embed/mYcl6p3oiCc?start=65',
        3: 35,
        4: 2016
    },
    ff26 = {
        1: 'Lumen - Сид и Нэнси',
        2: 'https://www.youtube.com/embed/F3NUQUSIiMs?start=70',
        3: 36,
        4: 2018
    },
    ff17 = {
        1: 'Звери - Районы-кварталы',
        2: 'https://www.youtube.com/embed/Ezfv3J0jsnY?start=50',
        3: 37,
        4: 2015
    },
    ff18 = {
        1: 'Tatu - Нас не догонят',
        2: 'https://www.youtube.com/embed/BjZ4pN5xqxM?start=80',
        3: 38,
        4: 2018
    },
    ff19 = {
        1: 'Серега - Черный бумер',
        2: 'https://www.youtube.com/embed/xCvD7Rf5i2I?start=70',
        3: 39,
        4: 2019
    },
    ff20 = {
        1: 'Ляпис Трубецкой - Ау',
        2: 'https://www.youtube.com/embed/-1V1oZ3IGPw?start=67',
        3: 40,
        4: 1999
    },
    ff21 = {
        1: 'КОРНИ - Ты узнаешь её',
        2: 'https://www.youtube.com/embed/du-zWWpnZSw?start=74',
        3: 41,
        4: 2001
    },
    ff22 = {
        1: 'Земфира — Искала',
        2: 'https://www.youtube.com/embed/Jn1kng-nFuY?start=40',
        3: 42,
        4: 2012
    },
    ff23 = {
        1: 'Дискотека Авария — Новогодняя',
        2: 'https://www.youtube.com/embed/xviBEvbxgZ0?start=48',
        3: 43,
        4: 2020
    },
    ff24 = {
        1: 'UMA2RMAH - Ума Турман',
        2: 'https://www.youtube.com/embed/JHrKZVosvD0?start=43',
        3: 44,
        4: 2017
    },
    ff25 = {
        1: 'Quest Pistols Show - Белая стрекоза любви',
        2: 'https://www.youtube.com/embed/XhF5fswJ6hY?start=50',
        3: 45,
        4: 2011
    },
    ff26 = {
        1: 'Градусы — Режиссер',
        2: 'https://www.youtube.com/embed/V1MK9244sE8?start=45',
        3: 46,
        4: 2014
    },
    ff17 = {
        1: 'Дискотека Авария feat. Жанна Фриске — Малинки',
        2: 'https://www.youtube.com/embed/dylbA7M3B5Y?start=123',
        3: 47,
        4: 2016
    },
    ff18 = {
        1: 'Юрий Шатунов - Седая ночь',
        2: 'https://www.youtube.com/embed/qlb4ZyJgUZ8?start=53',
        3: 48,
        4: 2006
    },
    ff19 = {
        1: 'Альянс - На заре',
        2: 'https://www.youtube.com/embed/tUBVEKzsZ-k?start=120',
        3: 49,
        4: 2018
    },
    ff20 = {
        1: 'Потап и Настя - Не пара',
        2: 'https://www.youtube.com/embed/N2i0xvcFUZ0?start=48',
        3: 50,
        4: 2014
    },
    ff21 = {
        1: 'Братья Грим - Кустурица',
        2: 'https://www.youtube.com/embed/hLATRbK1MuM?start=25',
        3: 51,
        4: 2016
    },
    ff22 = {
        1: 'ЛЕПРИКОНСЫ - Хали-гали, паратрупер',
        2: 'https://www.youtube.com/embed/rUd2diUWDyI?start=70',
        3: 52,
        4: 2017
    },
    ff23 = {
        1: 'ГОРОД 312 - Останусь',
        2: 'https://www.youtube.com/embed/4tVriTuoll8?start=58',
        3: 53,
        4: 2019
    },
    ff24 = {
        1: 'Катя Лель - Мой мармеладный',
        2: 'https://www.youtube.com/embed/Tn-z95ev64s?start=50',
        3: 54,
        4: 1940
    },
    ff25 = {
        1: 'Глюкоза - Невеста',
        2: 'https://www.youtube.com/embed/9P_wHDW2VJY?start=80',
        3: 55,
        4: 2010
    },
    ff26 = {
        1: 'Валерий Меладзе и Виа Гра - Притяженья больше нет',
        2: 'https://www.youtube.com/embed/Rav-frJx_7w?start=105',
        3: 56,
        4: 2015
    },
    ff17 = {
        1: 'МакSим - Знаешь ли ты',
        2: 'https://www.youtube.com/embed/Q8WJz-DmPVg?start=54',
        3: 57,
        4: 2011
    },
    ff18 = {
        1: 'Иванушки Int - Билетик в кино',
        2: 'https://www.youtube.com/embed/GHOIVp-Jsoc?start=75',
        3: 58,
        4: 2017
    },
    ff19 = {
        1: 'БандЭрос - Коламбия Пикчерз не представляет',
        2: 'https://www.youtube.com/embed/z2AmjZbEWgE?start=74',
        3: 59,
        4: 1989
    },
    ff20 = {
        1: 'Звери - Все, что тебя касается',
        2: 'https://www.youtube.com/embed/llDRNXjUwNc?start=20',
        3: 60,
        4: 1976
    },
    ff21 = {
        1: 'Андрей Губин - Девушки, как звёзды',
        2: 'https://www.youtube.com/embed/8xcx3SdqL8g?start=0',
        3: 61,
        4: 2012
    },
    ff22 = {
        1: 'Николай Носков - Это здорово',
        2: 'https://www.youtube.com/embed/C3LW0F44V80?start=18',
        3: 62,
        4: 2015
    },
    ff23 = {
        1: 'Лолита Милявская - пошлю его на...',
        2: 'https://www.youtube.com/embed/5vHaMJ7emjM?start=35',
        3: 63,
        4: 2017
    },
    ff24 = {
        1: 'REFLEX — Non Stop',
        2: 'https://www.youtube.com/embed/8W6BQlJY0Oc?start=55',
        3: 64,
        4: 1998
    },




]

