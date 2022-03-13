const amount = document.getElementById('amount');
const totalPageViews = document.getElementById('total');
const slider = document.getElementById('slider');
const toggle = document.querySelector('.toggle-container');
const discount = document.querySelector('.two');
const discountText = document.querySelector('.discount');
let fill = document.querySelector('.fill');

window.addEventListener('load', windowSizeDiscountFormatting);

window.addEventListener('resize', windowSizeDiscountFormatting);

function windowSizeDiscountFormatting() {
    if(document.body.clientWidth >= 1440){
        discountText.innerHTML = '25% discount';
        discountText.style.width = '80px';
    }
    
    if(document.body.clientWidth <= 1440){
        discountText.innerHTML = '25%';
        discountText.style.width = '42px';
    }
}

toggle.addEventListener('click', (e) => {
    const buttons = Array.from(toggle.children);

    buttons.forEach(button => {
        if(button.classList.contains('checked')){
            button.classList.remove('checked');
        }else{
            button.classList.add('checked');
        }
    });

    setBar();
})

function setBar() {
    let valuePercent = (slider.value / slider.max) * 100;
    fill.style.width = `${valuePercent}%`;

    checkForDiscount(valuePercent);
}


function checkForDiscount(percentage) {

    const planPrices = [8,12,16,24,36];

    if(discount.classList.contains('checked')){
        amount.innerHTML = `${planPrices[checkPercentage(percentage)] * .75}.00`;
        toggle.style.backgroundColor = '#7aeadf';
    }else{
        amount.innerHTML = `${planPrices[checkPercentage(percentage)]}.00`;
        toggle.style.backgroundColor = '#cfd8ef';
    }

    setPageviews(percentage);
}

function checkPercentage(percentage) {
    if(percentage < 25){
        return 0;
    }else if(percentage >= 25 && percentage < 50){
        return 1;
    }else if(percentage >= 50 && percentage < 75){
        return 2;
    }else if(percentage >= 75 && percentage < 99){
        return 3;
    }else{
        return 4;
    }
}

function setPageviews(percentage){
    const pageViews = ['10K', '50K', '100K', '500K', '1M'];

    if(percentage < 25){
        totalPageViews.innerHTML = pageViews[0];
    }else if(percentage >= 25 && percentage < 50){
        totalPageViews.innerHTML = pageViews[1];
    }else if(percentage >= 50 && percentage < 75){
        totalPageViews.innerHTML = pageViews[2];
    }else if(percentage >= 75 && percentage < 99){
        totalPageViews.innerHTML = pageViews[3];
    }else{
        totalPageViews.innerHTML = pageViews[4];
    }


}




