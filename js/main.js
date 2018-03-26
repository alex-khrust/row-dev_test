//---------- Preloader ----------
$(window).on('load', function () {
    $preloader = $('#preloader'),
        $loader = $preloader.find('#loader');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});
//---------- validator ------------------------
// $(function(){
//     $('#order__form').validate({
//         rules: {
//             name: {
//                 required: true,
//                 minlength: 2
//             },
//             phone: {
//                 digits:true,
//                 required: true
//             },
//             email: {
//                 required: true,
//                 email: true
//             },
//         },
//         messages: {
//             name: {
//                 required: "Поле 'Имя' обязательно к заполнению",
//                 minlength: "Введите не менее 2-х символов в поле 'Имя'"
//             },
//             email: {
//                 required: "Поле 'Email' обязательно к заполнению",
//                 email: "Необходим формат адреса email"
//             },
//             phone: {
//                 required: "Поле 'Телефон' обязательно к заполнению",
//                 digits: "Номер телефона должен содержать только цифры"
//             }
//         },
//
//     });
// });
// $(function(){
//     $('#order__form--1').validate({
//         rules: {
//             name: {
//                 required: true,
//                 minlength: 2
//             },
//             phone: {
//                 digits:true,
//                 required: true
//             },
//             email: {
//                 required: true,
//                 email: true
//             },
//         },
//         messages: {
//             name: {
//                 required: "Поле 'Имя' обязательно к заполнению",
//                 minlength: "Введите не менее 2-х символов в поле 'Имя'"
//             },
//             email: {
//                 required: "Поле 'Email' обязательно к заполнению",
//                 email: "Необходим формат адреса email"
//             },
//             phone: {
//                 required: "Поле 'Телефон' обязательно к заполнению",
//                 digits: "Номер телефона должен содержать только цифры"
//             }
//         }
//     });
// });
// $(function(){
//     $('#order__form--2').validate({
//         rules: {
//             name: {
//                 required: true,
//                 minlength: 2
//             },
//             phone: {
//                 digits:true,
//                 required: true
//             },
//             email: {
//                 required: true,
//                 email: true
//             },
//         },
//         messages: {
//             name: {
//                 required: "Поле 'Имя' обязательно к заполнению",
//                 minlength: "Введите не менее 2-х символов в поле 'Имя'"
//             },
//             email: {
//                 required: "Поле 'Email' обязательно к заполнению",
//                 email: "Необходим формат адреса email"
//             },
//             phone: {
//                 required: "Поле 'Телефон' обязательно к заполнению",
//                 digits: "Номер телефона должен содержать только цифры"
//             }
//         }
//     });
// });
//=================================
$('form').submit(function(e) {
    var empty = $(this).parent().find("input").filter(function() {
        return this.value === "";
    });
    if (!empty.length) {
        //Если все графы заполнены, то показываем popup
        $('.popup__thanks--inner').show();
        //очищаем все данные текстовых полей, кроме кнопок
        $('form input').not(':button, :submit').val('');
    }
    e.preventDefault();
});
//=================================
//------------ mmenu---------------------------------
$(document).ready(function() {
    $("#menu").mmenu({
        "extensions": [
            "fx-menu-slide",
            "fx-panels-zoom",
            "fx-listitems-slide",
            "listview-justify",
            "pagedim-black",
            "theme-dark"
        ],
        counters: true,
        navbar : {
            title: 'Меню'
        },
        "iconPanels": true
    });
});
//----------- magnific-popup -------------------
$('.calc-btn').magnificPopup({
    // type: 'inline',
    mainClass: 'my-mfp-zoom-in',
    mainClass: 'mfp-fade'
});
$.magnificPopup.close();






//----------------- popup thx ajax------------- https://toster.ru/q/369834
// $("form").submit(function(e) { //Change
//     e.preventDefault();
//     var th = $(this);
//     $.ajax({
//         type: "POST",
//         url: "mail.php", //Change
//         data: th.serialize()
//     }).done(function() {
//         th.trigger("reset");
//         $.magnificPopup.open({
//             items: {
//                 src: '.popup__thanks--inner'
//             }
//         });
//         setTimeout(function() {
//             // Done Functions
//             $.magnificPopup.close();
//         }, 3000);
//     });
// });