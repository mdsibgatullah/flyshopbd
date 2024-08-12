
const newsItems = document.querySelector('.qqq');
const newsSliderIcon = document.querySelectorAll('.btn_img');
firstCard = 200;
newsSliderIcon.forEach(icon => {
    icon.addEventListener('click', () => {
        newsItems.scrollLeft += icon.id == 'sliderLeft' ? -firstCard : firstCard;
    });
});


const newsItem = document.querySelector('.qqqs');
const newsSliderIcons = document.querySelectorAll('.btn_img');
firstCard = 200;
newsSliderIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        newsItem.scrollLeft += icon.id == 'sliderProduct' ? -firstCard : firstCard;
    });
});