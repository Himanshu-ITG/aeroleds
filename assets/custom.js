$( document ).ready(function() {
$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  infinite:false,
  loop: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  vertical: true,
  asNavFor: ".slider-for",
  dots: false,
  focusOnSelect: true,
  infinite:false,
  loop: true,
  prevArrow:
    '<button class="slide-arrow prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--token-e8e137d1-ef9b-4f8e-a26f-2ed221e422b7, rgb(255, 255, 255))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;"><polyline points="15 18 9 12 15 6"></polyline></svg></button>',
  nextArrow:
    '<button class="slide-arrow next-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--token-e8e137d1-ef9b-4f8e-a26f-2ed221e422b7, rgb(255, 255, 255))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;"><polyline points="9 18 15 12 9 6"></polyline></svg></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        vertical: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        vertical: true,
      },
    },
    {
      breakpoint: 750,
      settings: {
        vertical: false,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 380,
      settings: {
        vertical: false,
        slidesToShow: 2,
      },
    },
  ],
});



// var dataId = $(document).find('.product__info-container').data('id');
// $(document).find(".slider-nav li").each(function() {
//   var dataMedia = $(this).data("variant");
//   if (dataId == dataMedia) {
//       var indexData = $(this).data("index");
//       $(".slider-nav").slick("slickGoTo", indexData)
//   }
// });

/* about-us page js start */

$('.ledcenter-slider').slick({
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    prevArrow:
    '<button class="ledcenter-slider prev-arrow"><svg width="30" height="30" viewBox="0 0 30 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7188 0.90625H29.0508L10.3987 25.1214L29.0508 48.6624H20.7188L0.746925 25.1214L20.7188 0.90625Z" fill="black"/></svg></button>',
    nextArrow:
    '<button class="ledcenter-slider next-arrow"><svg width="30" height="30" viewBox="0 0 29 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.02734 0.90625H0.695312L19.3474 25.1214L0.695312 48.6624H9.02734L28.9992 25.1214L9.02734 0.90625Z" fill="black"/></svg></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: '40px'
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: '40px'
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: '40px'
        }
      }
    ]
  });

});
/* about-us page js end */





// Dawn theme nav on hover
let items = document
  .querySelector(".header__inline-menu")
  .querySelectorAll("details");

items.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.setAttribute("open", true);
  });

  item.addEventListener("mouseleave", () => {
    item.removeAttribute("open");
  });
});

// Menus hover images change
document.addEventListener(
  "mouseover",
  function (event) {
    const submenuItem = event.target.closest(
      ".mega-menu[open] .submenu_custom li"
    );
    if (submenuItem) {
      document
        .querySelectorAll(".mega-menu[open] .submenu_custom li")
        .forEach(function (el) {
          el.classList.remove("active_submenu");
        });

      submenuItem.classList.add("active_submenu");
      const checkVal = submenuItem.getAttribute("data-title");

      document
        .querySelectorAll(".mega-menu[open] .child_list-img")
        .forEach(function (img) {
          img.classList.remove("active_first");

          if (img.getAttribute("data-title") === checkVal) {
            img.classList.add("active_first");
          }
        });
    }
  },
  { passive: false }
);

document.addEventListener("DOMContentLoaded", () => {
  Fancybox.bind('[data-fancybox="gallery"]', {
    infinite: false, // Disable infinite scrolling
    loop: false, // Disable looping back to the first image
    arrows: false, // Disable previous and next arrows
    Toolbar: false, // Hide the toolbar
    Buttons: ["close"], // Only show the close button
  });
});

/* archived tab*/
const tabTitles = document.querySelectorAll(".faq-list");
const tabContents = document.querySelectorAll(".faqGrid");

tabTitles.forEach(function (tab) {
  tab.addEventListener("click", function (e) {
    e.preventDefault();
    tabTitles.forEach((tits) => {
      tits.classList.remove("is-active");
    });
    this.classList.add("is-active");
    let dataid = this.getAttribute("data-faq-name");
    let th = this.parentElement.closest(".faq-names").nextElementSibling;
    let vv = th.querySelectorAll(".faqGrid");
    vv.forEach(function (content) {
      let ff = content.getAttribute("data-faq-id");
      if (content.getAttribute("data-faq-id") === dataid) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});

const titles = document.querySelectorAll(".accordion-faq-list");
titles.forEach((title) => {
  title.addEventListener("click", function () {
    const isActive = this.classList.contains("is-active");
    titles.forEach((item) => {
      item.classList.remove("is-active");
      item.nextElementSibling.classList.remove("is-active");
    });
    if (!isActive) {
      this.classList.toggle("is-active");
      this.nextElementSibling.classList.toggle("is-active");
    }
  });
});


  document.addEventListener('DOMContentLoaded', function() {
    var selectBox = document.querySelectorAll('input[name="led_text"]');
    var block = document.querySelectorAll('.pma-block');
    var radioElement = document.querySelector('input[name="led_text"]:checked');
    var radio = radioElement ? radioElement.value : '';
    getChekVal(radio);
    
    selectBox.forEach(function(title) {
    title.addEventListener('change', function() {
      var selectedAlt = title.value;
      getChekVal(selectedAlt);
    }); 

   });

function getChekVal(radio){
     block.forEach(function(val) {
       if(radio == ''){
          val.style.display = 'flex';
       }
        else{
        if (radio === val.getAttribute('data-title')) {
            val.style.display = 'flex';
        } else {
            val.style.display = 'none';
        }
      }
    });
}


document.querySelectorAll('.item-ledContent input[type="radio"]').forEach((input) => {
  input.addEventListener('click', function () {
    document.querySelectorAll('.item_led').forEach((item) => {
      item.classList.remove('installation-active');
    });

    if (this.checked) {
      this.closest('.item_led').classList.add('installation-active');
    }
  });
});

document.querySelectorAll('.item_led').forEach((item) => {
  const input = item.querySelector('input[type="radio"]');
  if (input && input.checked) {
    item.classList.add('installation-active');
  }
});


  // Fancybox.bind("[data-fancybox]", {
  //   infinite: false, // Disable infinite scrolling
  //   loop: false, // Disable looping back to the first image
  //   arrows: false, // Disable previous and next arrows
  //   Toolbar: false,
  //   Buttons: ["close"],
  // });

});


document.addEventListener("DOMContentLoaded", function () {
  let videoWrappers = document.querySelectorAll(".video_img_wrapper");

  videoWrappers.forEach(function (videoWrapper) {
    let videoBlocks = videoWrapper.querySelectorAll(".video_block");
    let totalBlocks = videoBlocks.length;
    
    function isMobile() {
      return window.innerWidth <= 768; 
    }

    // Logic for slider activation
    if (totalBlocks > 3 || (isMobile() && totalBlocks >= 3)) {
      videoWrapper.classList.add("video-grid-slider");
      if (!$(videoWrapper).hasClass("slick-initialized")) {
        $(videoWrapper).slick({
          slidesToShow: isMobile() ? 2 : 3, 
          slidesToScroll: isMobile() ? 2 : 3, 
          arrows: true, 
          dots: isMobile(), 
          infinite: true,
          loop: true,
          prevArrow:
            '<button class="video-grid-slider prev-arrow"><svg width="15" height="15" viewBox="0 0 30 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7188 0.90625H29.0508L10.3987 25.1214L29.0508 48.6624H20.7188L0.746925 25.1214L20.7188 0.90625Z" fill="black"/></svg></button>',
          nextArrow:
            '<button class="video-grid-slider next-arrow"><svg width="15" height="15" viewBox="0 0 29 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.02734 0.90625H0.695312L19.3474 25.1214L0.695312 48.6624H9.02734L28.9992 25.1214L9.02734 0.90625Z" fill="black"/></svg></button>',
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
                dots: true,
              },
            },
          ],
        });
      }
    }
  });
});



document.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll('.led_item');
    blocks.forEach(block => {
        const tabs = block.querySelectorAll('.led-tab');
        const contents = block.querySelectorAll('.rte.led-choose-rte');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                if (tab.classList.contains('active')) return;
                tabs.forEach(t => t.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));
                tab.classList.add('active');
                const target = tab.getAttribute('data-get');
                block.querySelector(`.rte.led-choose-rte[data-get="${target}"]`).classList.add('active');
            });
        });

        //tabs[0].classList.add('active');
        //contents[0].classList.add('active');
    });
});



// window.onload = function () {
//     const element = document.querySelector('#more-payment-options-link');
//     if (element) {
//         element.textContent = 'Buy Now';
//         element.classList.add('custom-buy-button');
//     }
// }


