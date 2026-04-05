// Para fotógrafo
const CONFIG = {
    accent: '#ff4d4d',
    accentRGB: '255, 77, 77',
    secondary: '#4dffff',
    secondaryRGB: '77, 255, 255',
    tertiary: '#ffcc4d',
    tertiaryRGB: '255, 204, 77',

    brand: 'LENS STUDIO',
    heroTag: 'Fotografía de Autor',
    heroTitle: 'LENS\nSTUDIO',
    heroSubtitle: 'Congelo momentos que no quieres olvidar. Retratos, bodas, productos y eventos con una mirada única.',

    services: [
        { icon: 'fa-camera', name: 'Retratos', text: 'Sesiones de retrato en estudio o exterior que capturan tu esencia.' },
        { icon: 'fa-rings-wedding', name: 'Bodas', text: 'Cobertura completa del día: desde la preparación hasta la fiesta, reportaje y álbum.' },
        { icon: 'fa-box-open', name: 'Producto', text: 'Fotografía comercial para ecommerce, catálogos y redes sociales.' },
        { icon: 'fa-building', name: 'Corporativo', text: 'Retratos profesionales, documentación de eventos y fotografía de espacios.' },
        { icon: 'fa-child', name: 'Familia', text: 'Sesiones familiares, newborn, bautizos y comuniones con estilo natural.' },
        { icon: 'fa-film', name: 'Video', text: 'Videoclips, mini-documentales y contenido audiovisual para marcas.' },
    ],

    portfolio: [
        { img: 'https://picsum.photos/seed/photo1/800/600.jpg', tag: 'Retrato', title: 'Luz Natural', desc: 'Sesión en golden hour urbana' },
        { img: 'https://picsum.photos/seed/photo2/800/600.jpg', tag: 'Boda', title: 'Laura & Pablo', desc: 'Reportaje íntimo en cortijo' },
        { img: 'https://picsum.photos/seed/photo3/800/600.jpg', tag: 'Producto', title: 'Cerámica Arte', desc: 'Catálogo para tienda online' },
        { img: 'https://picsum.photos/seed/photo4/800/600.jpg', tag: 'Corporativo', title: 'Startup Tech', desc: 'Fotografía de oficinas y equipo' },
        { img: 'https://picsum.photos/seed/photo5/800/600.jpg', tag: 'Familia', title: 'Nuevo Miembro', desc: 'Sesión newborn en domicilio' },
        { img: 'https://picsum.photos/seed/photo6/800/600.jpg', tag: 'Evento', title: 'Fashion Week', desc: 'Cobertura de pasarela' },
    ],

    timeline: [
        { period: '2022 - Actual', title: 'Fundador', place: 'Lens Studio', desc: 'Estudio propio con clientes nacionales e internacionales, especializado en retrato y boda.' },
        { period: '2018 - 2022', title: 'Fotógrafo Senior', place: 'Agencia Visual Press', desc: 'Reportajes de eventos, retratos para prensa y campañas publicitarias.' },
        { period: '2015 - 2018', title: 'Fotógrafo Asistente', place: 'Estudio de Miguel Ángel' }, 
    ],

    testimonials: [
        { text: 'Las fotos de nuestra boda son una obra de arte. Cada imagen cuenta una historia, no solo documenta un momento.', author: 'Laura y Pablo' },
        { text: 'Desde que contraté a Lens para mis productos, las ventas subieron un 40%. La diferencia visual es brutal.', author: 'Elena - Cerámica Arte' },
        { text: 'Me hizo sentir tan cómoda que las fotos salieron naturales y genuinas. La mejor inversión en mí misma.', author: 'Sofía Martín' },
    ],

    contact: [
        { icon: 'fa-location-dot', label: 'Estudio', value: 'Calle de la Luz 8, Valencia' },
        { icon: 'fa-phone', label: 'Teléfono', value: '+34 655 111 222', href: 'tel:+34655111222' },
        { icon: 'fa-envelope', label: 'Email', value: 'hola@lensstudio.es', href: 'mailto:hola@lensstudio.es' },
        { icon: 'fa-clock', label: 'Horario', value: 'Lun-Vie 10:00 - 19:00' },
    ],

    socials: [
        { icon: 'fa-brands fa-instagram', url: '#' },
        { icon: 'fa-brands fa-behance', url: '#' },
        { icon: 'fa-brands fa-youtube', url: '#' },
    ],

    footerText: 'Hecho con luz por <span>Lens Studio</span> — Todos los derechos reservados',
};