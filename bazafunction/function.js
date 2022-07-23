let br;
function deliteFilms() {

    let element = document.querySelector('div');
    element.remove();

    let element2 = document.querySelector('div.alert');
    element2.remove();

}

function deliteFilmButton() {

    let element = document.querySelector('div.alert');
    element.remove();
    let element2 = document.querySelector('div.alert');
    element2.remove();
    let element3 = document.querySelector('img.alert');
    element3.remove();
    let element4 = document.querySelector('img.alert');
    element4.remove();
    let element5 = document.querySelector('button.alert');
    element5.remove();
    let element6 = document.querySelector('button.alert');

    element.remove();
    element2.remove();
    element3.remove();
    element4.remove();

    element6.remove();

}

function deliteButton() {
    let element5 = document.querySelector('button.alert');
    element5.remove();
    let element6 = document.querySelector('button.alert');
    element6.remove();
}

function showButton(buttonFunction, buttonFunction2) {




    let buttonElement1 = document.createElement('button');
    buttonElement1.setAttribute("onClick", buttonFunction);
    buttonElement1.textContent = "Выбрать 1";
    buttonElement1.className = "alert";
    document.body.append(buttonElement1);





    let buttonElement2 = document.createElement('button');
    buttonElement2.setAttribute("onClick", buttonFunction2);
    buttonElement2.textContent = "Выбрать 2";
    buttonElement2.className = "alert";
    document.body.append(buttonElement2);


 

}

function funkButton(arr1, arr2) {
    funkButton1 = 'buttonVib1(0, ' + arr1 + ', ' + arr2 + ')';
    funkButton2 = 'buttonVib1(1, ' + arr1 + ', ' + arr2 + ')';
}

function deliteYouTube() {

    let element = document.querySelector('iframe.alert');
    element.remove();

}

function showYou(UrlYouTube, i) {

    youTube1 = document.createElement("iframe");
    youTube1.setAttribute("width", "800");
    youTube1.setAttribute("height", "500");
    youTube1.setAttribute("src", UrlYouTube[i][2]);
    youTube1.className = "alert";
    document.body.append(youTube1);
}




