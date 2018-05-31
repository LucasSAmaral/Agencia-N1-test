$(document).ready(function () {

    if (($(window).width()) > 1023) {
        Lightbox.init();
    }

    $('.menu-responsivo').click(function () {
        $('.menu').slideToggle();
        $('.container-submenu').slideUp();
    });

    $('.search-button-mobile').click(function () {
        $('.search-area input[type=text]').slideToggle();
    });

    if (($(window).width()) <= 1023) {

        $('.menu-item').click(function () {
            $(this).children('.container-submenu').stop().slideToggle();
            $(this).siblings().children('.container-submenu').stop().slideUp();
        });
    }

    $('.seu-nome').blur(function () {
        $(this).css('border', '1px solid #ffffff');
    });

    $('.seu-email').blur(function () {
        $(this).css('border', '1px solid #ffffff');
    });

    $('.banner-carousel').slick({
        dots: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.product-carousel').slick({
        dots: false,
        slidesToShow: 3,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                infinite: false,
            }
        }]
    });

});

var Lightbox = {
    "init": function () {
        var container = $('<div>');

        container.attr({
            'id': 'lightbox',
            'class': 'container-lightbox'
        });

        var fundo = $('<div>');
        fundo.attr('class', 'fundo');
        fundo.appendTo(container);
        fundo.click(function () {
            container.remove();
        });

        var box = $('<div>');
        box.attr('class', 'conteudo');
        box.appendTo(container);

        var boxImage = $('<div>');
        boxImage.attr('class', 'lightbox-image');
        boxImage.appendTo(box);

        var image = $('<img>');
        image.attr({
            'src': 'files/img/Mortal-Kombat-logo.png',
            'alt': 'Mortal Kombat Logo'
        });
        image.appendTo(boxImage);

        var cadastro = $('<div>');
        cadastro.attr('class', 'container-cadastro');
        cadastro.appendTo(box);

        var cadastroTitle = $('<p>');
        cadastroTitle.attr('class', 'cadastro-title');
        cadastroTitle.text('CHOOSE YOUR DESTINY');
        cadastroTitle.appendTo(cadastro);

        var cadastroCaption = $('<p>');
        cadastroCaption.attr('class', 'cadastro-caption');
        cadastroCaption.text('Faça seu cadastro e receba descontos');
        cadastroCaption.appendTo(cadastro);

        var cadastrarNome = $('<input>');
        cadastrarNome.attr({
            'type': 'text',
            'placeholder': 'Seu nome',
            'class': 'seu-nome'
        });
        cadastrarNome.appendTo(cadastro);

        var cadastrarEmail = $('<input>');
        cadastrarEmail.attr({
            'type': 'text',
            'placeholder': 'Seu email',
            'class': 'seu-email'
        });
        cadastrarEmail.appendTo(cadastro);

        var btn_cadastrar = $('<button>');
        btn_cadastrar.attr({
            'class': 'btn-cadastrar',
            'onclick': 'Lightbox.cadastrar()'
        });
        btn_cadastrar.text('Cadastrar');
        btn_cadastrar.appendTo(cadastro);

        var btn_fechar = $('<a>');
        btn_fechar.attr('class', 'fechar');
        btn_fechar.text('X');
        btn_fechar.click(function () {
            container.remove();
        });
        btn_fechar.appendTo(box);

        container.appendTo($('body'));

    },

    "cadastrar": function () {
        var nome = $('.seu-nome').val();
        var email = $('.seu-email').val();

        var cadastroCompleto = $('<div>');
        cadastroCompleto.attr('class', 'cadastro-completo');

        var cadastroCompletoTitle = $('<p>');
        cadastroCompletoTitle.attr('class', 'cadastro-completo-title');
        cadastroCompletoTitle.text('Obrigado por se cadastrar');
        cadastroCompletoTitle.appendTo(cadastroCompleto);

        var nomeCadastrado = $('<p>');
        nomeCadastrado.attr('class', 'nome-cadastrado');
        nomeCadastrado.text(nome);
        nomeCadastrado.appendTo(cadastroCompleto);

        if (nome != "" && email != "") {
            $('.lightbox-image, .container-cadastro').fadeOut();
            setTimeout(function () {
                cadastroCompleto.appendTo('.conteudo');
            }, 500);
        } else if (nome == "") {
            $('.seu-nome').css('border', '1px solid red');
            $('.seu-nome').focus();
        } else {
            $('.seu-email').css({
                'border': '1px solid red'
            });
            $('.seu-email').focus();
        }
    }
}

var carousel = new Vue({
    el: "#carousel",
    data: {
        banners: [{
            src: "Banner_scorpion.png",
            alt: "Scorpion"
        },
        {
            src: "Banner_ryu.png",
            alt: "Ryu"
        },
        {
            src: "Banner_kung-lao.png",
            alt: "Kung Lao"
        },
        {
            src: "Banner_Motaro.png",
            alt: "Motaro"    
        }]
    }
});

var features = new Vue({
    el: "#featuredProducts",
    data: {
        featuredCards: [{
            src: "ryu.jpg",
            alt: "Ryu",
            title: "Ryu",
            caption: "vem com hadouken",
            price: 37
        },
        {
            src: "ken.jpg",
            alt: "Ken",
            title: "Ken",
            caption: "vem com shoryuken",
            price: 27
        },
        {
            src: "akuma.jpg",
            alt: "Akuma",
            title: "Akuma",
            caption: "especial tela preta",
            price: 27
        }]
    }
});

var news = new Vue({
    el: "#newProducts",
    data: {
        newCards: [{
            src: "iori.jpg",
            alt: "Iori",
            title: "Iori",
            caption: "imcorporado",
            price: 37
        },
        {
            src: "streets.jpg",
            alt: "Street of Rage",
            title: "Street of Rage",
            caption: "com especial",
            price: 27
        },
        {
            src: "pacman.jpg",
            alt: "Pacman",
            title: "Pacman",
            caption: "corra dos fantasmas",
            price: 27
        }]
    }
});