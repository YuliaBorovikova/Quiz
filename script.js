    
const btnOne = document.querySelector('.btnOne');
btnOne.addEventListener('click', result);



function result(e) {
    e.preventDefault();
    let ball = 0;
    if (document.querySelector('.answer1').checked) {
        ball++;
    }
    if (document.querySelector('.answer2').checked) {
        ball++;
    }
    if (document.querySelector('.answer3').checked) {
        ball++;
    }
    if (document.querySelector('.answer4').checked) {
        ball++;
    }
    if (document.querySelector('.answer5').checked) {
        ball++;
    }
    if (document.querySelector('.answer6').checked) {
        ball++;
    }
    if (document.querySelector('.answer7').checked) {
        ball++;
    }
    if (document.querySelector('.answer8').checked) {
        ball++;
    }
    if (document.querySelector('.answer9').checked) {
        ball++;
    }
    if (document.querySelector('.answer10').checked) {
        ball++;
    }
    if (document.querySelector('.answer11').checked) {
        ball++;
    }
    if (document.querySelector('.answer12').checked) {
        ball++;
    }
    if (document.querySelector('.answer13').checked) {
        ball++;
    }
    if (document.querySelector('.answer14').checked) {
        ball++;
    }
    if (document.querySelector('.answer15').checked) {
        ball++;
    }
    if (document.querySelector('.answer16').checked) {
        ball++;
    }
    if (document.querySelector('.answer17').checked) {
        ball++;
    }
    if (document.querySelector('.answer18').checked) {
        ball++;
    }
    if (document.querySelector('.answer19').checked) {
        ball++;
    }
    if (document.querySelector('.answer20').checked) {
        ball++;
    }
    if (document.querySelector('.answer21').checked) {
        ball++;
    }
    if (document.querySelector('.answer22').checked) {
        ball++;
    }
    if (document.querySelector('.answer23').checked) {
        ball++;
    }
    if (document.querySelector('.answer24').checked) {
        ball++;
    }
    if (document.querySelector('.answer25').checked) {
        ball++;
    }
    document.querySelector('h6').textContent = `Правильных ответов ${ball} из 25`;
}
