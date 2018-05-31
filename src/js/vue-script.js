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