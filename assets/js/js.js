
const comercios = [
    { nombre: 'Papa Johns', img: './assets/img/content/picture.jpg', descripcion: 'Mejores ingredientes, mejor pizza.', link: 'https://www.instagram.com/papajohns_sv/' },
    { nombre: 'Mak Meats', img: './assets/img/content/picture-01.jpg', descripcion: '🔥Tenemos las carnes, mariscos, papas y más que necesitas en tu negocio.', link: 'https://www.instagram.com/makmeats.sv/?hl=es' },
    { nombre: 'Banco Atlantida', img: './assets/img/content/picture-02.jpg', descripcion: 'Una institución centenaria con trayectoria regional.', link: 'https://www.instagram.com/bancatlan/?hl=es' },
    { nombre: 'El Sin Rival', img: './assets/img/content/picture-03.jpg', descripcion: '¡Sorbetes NATURALES! 🍨👌😉', link: 'https://www.instagram.com/elsinrivaloficial/?hl=es' },
    { nombre: 'Farmacias Camila', img: './assets/img/content/picture 05.jpg', descripcion: 'Nuestro compromiso es TU SALUD💚', link: 'https://www.instagram.com/farmaciascamilasv/?hl=es' },
    { nombre: 'Bodeganga Hilasal', img: './assets/img/content/picture 06.jpg', descripcion: 'Toallas Hilasal con precios especiales al mayoreo y al detalle.', link: 'https://www.instagram.com/bodegangashilasal/?hl=es' },
    { nombre: 'Soya Nutribar', img: './assets/img/content/picture 07.jpg', descripcion: 'Comida saludable, naturalmente deliciosa.', link: 'https://www.instagram.com/soyanutribar/?hl=es' },
    { nombre: 'Cabal Internet', img: './assets/img/content/picture 08.jpg', descripcion: 'Proveedor de servicios de internet', link: 'https://www.facebook.com/cabalinternet/' },
    { nombre: 'MyCeviche', img: './assets/img/content/picture 09.jpg', descripcion: 'En My Ceviche te preparamos nuestro Ceviche Original perfecto hecho con la salsa especial del chef🤤', link: 'https://www.instagram.com/myceviche/?hl=es' },
    { nombre: 'TenGo Market', img: './assets/img/content/picture 10.jpg', descripcion: 'Hacemos que cada día sea más fácil y mejor!', link: 'https://www.instagram.com/tengo.todomarket/?hl=es' },
    { nombre: 'Cheers', img: './assets/img/content/picture 11.jpg', descripcion: 'Boutique de Licores, Vinos & Deli', link: 'https://www.instagram.com/cheers.sv/?hl=es' },
    { nombre: 'Porta Real Estate', img: './assets/img/content/picture 12.jpg', descripcion: 'Lo mejor del Real Estate en El Salvador ya esta en Surf City 🏄‍♂️.', link: 'https://www.instagram.com/portarealestate/?hl=es' },
    { nombre: 'La Neveria', img: './assets/img/content/picture 13.jpg', descripcion: '"Siempre Algo Nuevo" Helados, paletas, pasteles de helado.', link: 'https://www.instagram.com/laneveria_oficial/?hl=es' },
    { nombre: 'Movistar', img: './assets/img/content/picture 14.jpg', descripcion: 'Telefonía móvil y fija, Internet, celulares, promociones y más.', link: 'https://www.instagram.com/movistar_sv/?hl=es' },
    { nombre: 'Don Chicharron', img: './assets/img/content/picture 15.jpg', descripcion: 'Siempre en ruta! 🐷🚗 ES 📍 Los mejores chicharrones de C.A.', link: 'https://www.instagram.com/donchicharron.sv/?hl=es' },
    { nombre: 'Seaside Sourdough', img: './assets/img/content/picture 16.jpg', descripcion: 'Imperdiet purus pellentesque sit mi nibh sit integer faucibus.', link: 'https://www.instagram.com/seaside.sourdough/' }
];



// Array de logos
logos = [
    './assets/img/logo/agua-inmaculada-logo.png',
    './assets/img/logo/banco-atlantida.svg',
    './assets/img/logo/Logo Cabal.png',
    './assets/img/logo/Logo La Nevería.svg',
    './assets/img/logo/logo-hilasal.svg',
    './assets/img/logo/Movistar_2020.svg',
    './assets/img/logo/MyCevi logox2.svg',
    './assets/img/logo/Papa Johns Wordmark.svg',
    './assets/img/logo/PORTA_logo.png',
    './assets/img/logo/soya-nutribar-logo.svg',
    './assets/img/logo/tengo-market-logo.svg'

];

// Renderiza las tarjetas de comercio en la sección del carrusel
const carousel = document.querySelector('.carousel');
comercios.forEach(comercio => {
    const card = document.createElement('div');
    card.className = 'slide';
    card.innerHTML = `
        <div class="card">
            <img src="${comercio.img}" class="card-img-top" alt="${comercio.nombre}">
            <div class="card-body">
                <h5 class="card-title" style="height: 25px;">${comercio.nombre}</h5>
                <p class="text-start" style="height: 79px;">${comercio.descripcion}</p>
                <a href="${comercio.url}" class="btn-link" target="_blank">More Info <i class="bi bi-arrow-right"></i></a>
            </div>
        </div>`;
    carousel.appendChild(card);
});

// Inicializa el carrusel
$(document).ready(function () {
    $('.carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1424,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1021,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 555,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// Renderiza los logos en la sección del carrusel de logos
const logoCarousel = document.querySelector('.scroller-home');
logos.forEach(logo => {
    const logoItem = document.createElement('div');
    logoItem.className = 'scroller-home__inner logocarruel';
    logoItem.innerHTML = `<img src="${logo}" alt="">`;
    logoCarousel.appendChild(logoItem);
});

// Inicializa el carrusel de logos
$(document).ready(function () {
    $('.scroller-home').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        infinite: true,
        speed: 5000,
        cssEase: 'linear',
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
