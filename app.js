const ratingBtn = document.querySelectorAll('.rating-button');
const submit = document.getElementById('#submit');
const main1 = document.querySelector('.main');
const main2 = document.querySelector('.main-2');
const ratingNo = document.getElementById('rating-no');

for(let i = 0; i < ratingBtn.length; i++) {
    ratingBtn[i].addEventListener('click', function(){
        let rate = ratingBtn[i].innerHTML;
        for(let j = 0; j < ratingBtn.length; j++) {
            if(ratingBtn[j].classList.contains('selected')){
                ratingBtn[j].classList.remove('selected');
            }
        }
       
        ratingBtn[i].classList.add('selected');

        submit.addEventListener('click',function(){
            console.log(rate);
            main1.style.display = 'none';
            main2.style.display = 'flex';
            ratingNo.innerHTML  = rate;
        })
    })
}

