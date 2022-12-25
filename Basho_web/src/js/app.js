
const list = document.querySelector('.list');
const click_list = document.querySelector('#click_list');
const search = document.querySelector('#search');
const modal_like = document.querySelector('#modal_like');
const close_search_x = document.querySelector('.bi-x');
const sub_btn = document.querySelectorAll('#sub_btn');
const Sub_text = document.querySelectorAll('#Sub_text');
const hero_content = document.querySelector('#hero-content');
const hero_content2 = document.querySelector('.col-lg-12');
const head_line = document.querySelector('#head_line');
const span_trans = document.querySelector('#span_trans');
const subcribe = document.querySelector('.subcribe');
const load_carts = document.querySelector('#load_carts');
const downfi_load = document.querySelector('.downfi_load');
const form = document.querySelector('.form');
const upside = document.querySelector('.upside');
const h2_click = document.querySelector('#h2_click');
const click_x = document.querySelector('.click_x');
const first = document.querySelector('#first');
const second = document.querySelector('#second');
const third = document.querySelector('#third');
if (click_list) {
    click_list.addEventListener('click', () => {
        list.classList.toggle('active');

    })

}

if (click_x) {
    click_x.addEventListener('click' , ()=>{
        // first.style.transform = "translate(0px, 14px ) rotate(45deg)"
        // second.style.display = "none"
        // third.style.transform = "translate(0px, 2px) rotate(-45deg)"
        click_x.classList.toggle('active');

    })
    
}


// if (close_search_x) {
//     close_search_x.addEventListener('click', () => {
//         modal_like.style.transform = 'translateY(-1000px)'
//        window.onclick=function(e){
//            if (e.target = modal_like) {
//          modal_like.style.display = 'none'
//            }

//        }

//     })

// }
// window.onclick = function (event) {
//     if (event.target == modal_like) {
//         modal_like.style.transform = 'translateY(-1000px)'
//     }
// }
 
if (sub_btn) {
    for (let index = 0; index < sub_btn.length; index++) {
        sub_btn[index].addEventListener('click', () => {
        sub_btn[index].style.transform = 'translateX(30px)';
        span_trans.style.transform = 'translateX(30px)';

        window.onclick = function (e) {
            if (e.target == hero_content || e.target == head_line || e.target == subcribe || e.target == span_trans) {
                sub_btn[index].style.transform = 'translateX(0px)'
                span_trans.style.transform = 'translateX(0px)';
            }
        }
    })
        
    }
}
if (Sub_text) {
    for (let index = 0; index < sub_btn.length; index++) {
        Sub_text[index].addEventListener('click', () => {
        sub_btn[index].style.transform = 'translateX(30px)';
        span_trans.style.transform = 'translateX(30px)';

        window.onclick = function (e) {
            if (e.target == hero_content || e.target == head_line || e.target == subcribe || e.target == span_trans || e.target == form || e.target == h2_click) {
                sub_btn[index].style.transform = 'translateX(0px)'
                span_trans.style.transform = 'translateX(0px)';
            }
        }
    })
        
    }
}

var swiper = new Swiper(".cart_slide", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        342: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 20,
        },
        1600: {
          slidesPerView: 4.5,
          spaceBetween: 20,
        },

      },
    });







if (load_carts) {
    

    load_carts.addEventListener('click' , (e)=>{
            e.preventDefault();
 

          load_carts.style.display = "none"
            downfi_load.style.display = "block"
        
    
       

        
    })
    
}


