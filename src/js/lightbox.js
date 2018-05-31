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