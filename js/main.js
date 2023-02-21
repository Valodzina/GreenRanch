const tripleSliderConfig = {
    arrows: true,
    dots: false,
    prevArrow: "<img src='photo/left.svg' class='prev' alt='1'>",
    nextArrow: "<img src='photo/right.svg' class='next' alt='2'>",
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
};

const tripleSliderResponsiveConfig = {
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                arrows: true,
                dots: false,
            },
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const tripleSliderCommonConfig = {
    ...tripleSliderConfig,
    ...tripleSliderResponsiveConfig,
};

const rev_slider = () => {
    $(".rev_slider").slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        speed: 3000,
    });
};

const slider2 = () => {
    $(".slider2").slick({
        ...tripleSliderCommonConfig,
    });
};

const slider3 = () => {
    $(".slider3").slick({
        ...tripleSliderCommonConfig,
    });
};

const slider4 = () => {
    $(".slider4").slick({
        ...tripleSliderCommonConfig,
    });
};

const slider5 = () => {
    $(".slider5").slick({
        ...tripleSliderCommonConfig,
    });
};

const slider6 = () => {
    $(".slider6").slick({
        ...tripleSliderCommonConfig,
    });
};
const slider7 = () => {
    $(".slider7").slick({
        ...tripleSliderCommonConfig,
    });
};

const slider8 = () => {
    $(".slider8").slick({
        ...tripleSliderCommonConfig,
    });
};

const slider9 = () => {
    $(".slider9").slick({
        ...tripleSliderConfig,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    arrows: false,
                    dots: false,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
};

const slider10 = () => {
    $(".slider10").slick({
        ...tripleSliderCommonConfig,
    });
};


const body = document.getElementsByTagName("body")[0];

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
          isMobile.Android() ||
          isMobile.BlackBerry() ||
          isMobile.iOS() ||
          isMobile.Opera() ||
          isMobile.Windows()
        );
    },
};

$(function () {
    rev_slider();
    slider2();
    slider3();
    slider4();
    slider5();
    slider6();
    slider7();
    slider8();
    slider9();
    slider10();

    function handleClick() {
        $(".header_burger,.header_menu").toggleClass("active");
        $(".body").toggleClass("lock");
    }

    $(".header_burger").on("click", handleClick);
    $(".submenu_link").on("click", handleClick);
    $(".header_link").on("click", handleClick);

    $(".nav a").on("click", function () {
        //выбрать ссылки из меню
        // let offset = $('.nav').innerHeight();//Высота меню, получаем динамически
        let target = $(this).attr("href"); //Сохраняем значение атрибута href
        target = "#" + target.split("#")[1];

        $("html, body").animate(
          {
              scrollTop: $(target).offset().top - 60, //вычесть высоту меню
          },
          500
        ); //время анимации
        $(".nav a").removeClass("active"); //удалить класс active у всех пунктов меню
        $(this).addClass("active"); //добавить класс active активной ссылке
        return false;
    });

    $(".linkk a").on("click", function () {
        //выбрать ссылки из меню
        //let offset = $('.linkk').innerHeight();//Высота меню, получаем динамически
        let target = $(this).attr("href"); //Сохраняем значение атрибута href
        target = "#" + target.split("#")[1];

        $("html, body").animate(
          {
              scrollTop: $(target).offset().top - 100, //вычесть высоту меню
          },
          500
        ); //время анимации
        //$('.linkk a').removeClass('active');//удалить класс active у всех пунктов меню
        //$(this).addClass('active');//добавить класс active активной ссылке
        return false;
    });
});

if (isMobile.any()) {
    body.classList.add("touch");
    let arrow = document.querySelectorAll(".arrow");
    for (let i = 0; i < arrow.length; i++) {
        let thisLink = arrow[i].previousElementSibling;
        let subMenu = arrow[i].nextElementSibling;
        let thisArrow = arrow[i];

        thisLink.classList.add("parent");
        arrow[i].addEventListener("click", function () {
            subMenu.classList.toggle("open");
            thisArrow.classList.toggle("active");
        });
    }
} else {
    body.classList.add("mouse");
}

function backToTop() {
    const button = $(".backtobegin");

    $(window).on("scroll", () => {
        const scrollTop = $(window).scrollTop();
        if (scrollTop >= 100) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });

    button.on("click", (e) => {
        e.preventDefault();
        $("html").animate({ scrollTop: 0 }, 700);
    });
}

backToTop();
