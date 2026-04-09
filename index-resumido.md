<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <style>
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
        :root{--accent:#00f0ff;--ar:0,240,255;--sec:#ff0066;--sr:255,0,102;--ter:#ff6b00;--tr:255,107,0;--bg:#0a0a0f;--card:rgba(10,10,20,0.85);--t1:#e0e0e0;--t2:#888;--t3:#555}
        html{scroll-behavior:smooth}
        body{font-family:'Rajdhani',sans-serif;background:var(--bg);color:var(--t1);overflow-x:hidden;line-height:1.6}

        .grain{position:fixed;inset:0;pointer-events:none;z-index:10000;opacity:.06;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");animation:gr .3s steps(3) infinite}
        @keyframes gr{0%,100%{transform:translate(0,0)}33%{transform:translate(-2px,1px)}66%{transform:translate(1px,-1px)}}
        .scan{position:fixed;inset:0;pointer-events:none;z-index:9999;background:repeating-linear-gradient(0deg,rgba(0,0,0,.12) 0px,rgba(0,0,0,.12) 1px,transparent 1px,transparent 3px);animation:sc 8s linear infinite}
        @keyframes sc{0%{background-position:0 0}100%{background-position:0 100px}}
        #pc{position:fixed;inset:0;z-index:5;pointer-events:none}

        .blobs{position:fixed;inset:0;z-index:1;pointer-events:none;overflow:hidden}
        .blobs div{position:absolute;border-radius:50%;filter:blur(120px);opacity:.15;animation:bf 20s ease-in-out infinite}
        .blobs div:nth-child(1){width:500px;height:500px;background:var(--accent);top:-10%;left:-5%}
        .blobs div:nth-child(2){width:400px;height:400px;background:var(--sec);bottom:-10%;right:-5%;animation-delay:-7s}
        .blobs div:nth-child(3){width:300px;height:300px;background:var(--ter);top:40%;left:50%;animation-delay:-14s}
        @keyframes bf{0%,100%{transform:translate(0,0) scale(1)}25%{transform:translate(50px,-30px) scale(1.1)}50%{transform:translate(-20px,40px) scale(.95)}75%{transform:translate(30px,20px) scale(1.05)}}

        nav{position:fixed;top:0;left:0;width:100%;z-index:1000;padding:1rem 2rem;display:flex;justify-content:space-between;align-items:center;transition:all .4s ease;background:transparent}
        nav.scrolled{background:rgba(10,10,15,.92);backdrop-filter:blur(20px);border-bottom:1px solid rgba(var(--ar),.15);padding:.7rem 2rem}
        .nlogo{font-family:'Orbitron',sans-serif;font-size:1.2rem;font-weight:700;color:var(--accent);text-decoration:none;text-shadow:0 0 15px rgba(var(--ar),.5);letter-spacing:.1em}
        .nlinks{display:flex;gap:2rem;list-style:none}
        .nlinks a{font-family:'Rajdhani',sans-serif;font-size:.95rem;font-weight:500;color:var(--t2);text-decoration:none;text-transform:uppercase;letter-spacing:.15em;position:relative;transition:color .3s}
        .nlinks a::after{content:'';position:absolute;bottom:-4px;left:0;width:0;height:1px;background:var(--accent);box-shadow:0 0 8px rgba(var(--ar),.5);transition:width .3s}
        .nlinks a:hover{color:var(--accent)}.nlinks a:hover::after{width:100%}
        .ntog{display:none;background:none;border:none;color:var(--accent);font-size:1.5rem;cursor:pointer}

        .hero{position:relative;min-height:100vh;display:flex;align-items:center;justify-content:center;overflow:hidden;z-index:10}
        .hc{text-align:center;padding:2rem;max-width:900px}
        .htag{display:inline-block;font-family:'Orbitron',sans-serif;font-size:.75rem;letter-spacing:.4em;text-transform:uppercase;color:var(--accent);border:1px solid rgba(var(--ar),.4);padding:.4rem 1.5rem;margin-bottom:2rem;opacity:0;animation:fsu .8s ease .3s forwards}
        .htitle{font-family:'Orbitron',sans-serif;font-size:clamp(2.5rem,8vw,5.5rem);font-weight:900;color:#fff;line-height:1.1;margin-bottom:1.5rem;position:relative;opacity:0;animation:fsu .8s ease .5s forwards}
        .htitle .gl{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}
        .htitle .gc{color:var(--accent);animation:ga 3s infinite;clip-path:polygon(0 0,100% 0,100% 42%,0 42%)}
        .htitle .gm{color:var(--sec);animation:gb 3s infinite;clip-path:polygon(0 58%,100% 58%,100% 100%,0 100%)}
        @keyframes ga{0%,100%{transform:translateX(0)}20%{transform:translateX(-3px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(3px)}}
        @keyframes gb{0%,100%{transform:translateX(0)}20%{transform:translateX(2px)}40%{transform:translateX(-3px)}60%{transform:translateX(1px)}80%{transform:translateX(-2px)}}
        @keyframes fsu{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
        .hsub{font-size:clamp(1.1rem,3vw,1.4rem);font-weight:300;color:var(--t2);line-height:1.8;max-width:600px;margin:0 auto 2.5rem;opacity:0;animation:fsu .8s ease .7s forwards}
        .hact{display:flex;gap:1.5rem;justify-content:center;flex-wrap:wrap;opacity:0;animation:fsu .8s ease .9s forwards}

        .btn{display:inline-flex;align-items:center;gap:.7rem;font-family:'Orbitron',sans-serif;font-size:.85rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;padding:1rem 2.5rem;position:relative;overflow:hidden;cursor:pointer;transition:all .4s ease;border:none}
        .bp{background:var(--accent);color:var(--bg);box-shadow:0 0 25px rgba(var(--ar),.3)}
        .bp::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);transition:left .6s}
        .bp:hover::before{left:100%}.bp:hover{box-shadow:0 0 40px rgba(var(--ar),.5),0 0 80px rgba(var(--ar),.2);transform:translateY(-2px)}
        .bo{background:transparent;color:var(--accent);border:1px solid rgba(var(--ar),.5)}
        .bo:hover{background:rgba(var(--ar),.1);border-color:var(--accent);box-shadow:0 0 25px rgba(var(--ar),.2),inset 0 0 25px rgba(var(--ar),.05);transform:translateY(-2px)}

        .shint{position:absolute;bottom:2.5rem;left:50%;transform:translateX(-50%);z-index:10;display:flex;flex-direction:column;align-items:center;gap:.5rem;opacity:0;animation:fsu .8s ease 1.2s forwards}
        .shint span{font-size:.7rem;letter-spacing:.3em;text-transform:uppercase;color:var(--t3);font-family:'Orbitron',sans-serif}
        .shint .sl{width:1px;height:40px;background:linear-gradient(to bottom,var(--accent),transparent);animation:sp 2s ease infinite}
        @keyframes sp{0%,100%{opacity:.3;transform:scaleY(.6)}50%{opacity:1;transform:scaleY(1)}}

        .sec{position:relative;z-index:10;padding:7rem 2rem;max-width:1300px;margin:0 auto}
        .shdr{margin-bottom:4rem}
        .slbl{font-family:'Orbitron',sans-serif;font-size:.7rem;letter-spacing:.4em;text-transform:uppercase;color:var(--accent);margin-bottom:.8rem;display:block}
        .sttl{font-family:'Orbitron',sans-serif;font-size:clamp(1.8rem,4vw,2.8rem);font-weight:700;color:#fff;position:relative;display:inline-block}
        .sttl::after{content:'';position:absolute;bottom:-12px;left:0;width:80px;height:3px;background:linear-gradient(90deg,var(--accent),var(--sec));border-radius:2px}

        .sgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem}
        .scard{background:var(--card);border:1px solid rgba(var(--ar),.1);padding:2.5rem 2rem;position:relative;overflow:hidden;transition:all .4s ease;cursor:default;backdrop-filter:blur(10px)}
        .scard::before{content:'';position:absolute;top:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,var(--accent),var(--sec));transform:scaleX(0);transform-origin:left;transition:transform .4s}
        .scard::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,transparent 50%,rgba(var(--ar),.04) 100%);opacity:0;transition:opacity .4s}
        .scard:hover{transform:translateY(-8px);border-color:rgba(var(--ar),.3);box-shadow:0 20px 60px rgba(0,0,0,.4),0 0 30px rgba(var(--ar),.08)}
        .scard:hover::before{transform:scaleX(1)}.scard:hover::after{opacity:1}
        .sico{width:55px;height:55px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;color:var(--accent);background:rgba(var(--ar),.08);border:1px solid rgba(var(--ar),.2);margin-bottom:1.5rem;position:relative;z-index:2;transition:all .3s}
        .scard:hover .sico{background:rgba(var(--ar),.15);box-shadow:0 0 20px rgba(var(--ar),.2)}
        .sname{font-family:'Orbitron',sans-serif;font-size:1.15rem;font-weight:600;color:#fff;margin-bottom:.8rem;position:relative;z-index:2}
        .stxt{color:var(--t2);font-size:.95rem;line-height:1.7;position:relative;z-index:2}

        .pgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:1.5rem}
        .pitem{position:relative;overflow:hidden;aspect-ratio:4/3;cursor:pointer;border:1px solid rgba(var(--ar),.1)}
        .pitem img{width:100%;height:100%;object-fit:cover;transition:transform .6s ease,filter .4s;filter:saturate(.7) brightness(.8)}
        .pitem:hover img{transform:scale(1.08);filter:saturate(1) brightness(1)}
        .pov{position:absolute;inset:0;background:linear-gradient(to top,rgba(10,10,15,.95) 0%,rgba(10,10,15,.3) 50%,transparent 100%);display:flex;flex-direction:column;justify-content:flex-end;padding:2rem;transition:all .4s}
        .pov .pt{font-family:'Orbitron',sans-serif;font-size:.65rem;letter-spacing:.3em;text-transform:uppercase;color:var(--accent);margin-bottom:.5rem}
        .pov .ph{font-family:'Orbitron',sans-serif;font-size:1.2rem;font-weight:600;color:#fff;margin-bottom:.5rem;transform:translateY(10px);opacity:0;transition:all .4s ease .1s}
        .pov .pd{color:var(--t2);font-size:.9rem;transform:translateY(10px);opacity:0;transition:all .4s ease .2s}
        .pitem:hover .ph,.pitem:hover .pd{transform:translateY(0);opacity:1}

        .tl{position:relative;padding-left:3rem}
        .tl::before{content:'';position:absolute;left:8px;top:0;height:100%;width:2px;background:linear-gradient(to bottom,var(--accent),var(--sec),var(--ter))}
        .tli{position:relative;padding:2rem;margin-bottom:2rem;background:var(--card);border:1px solid rgba(var(--ar),.12);backdrop-filter:blur(10px);transition:all .4s}
        .tli::before{content:'';position:absolute;left:-2.65rem;top:2.2rem;width:12px;height:12px;background:var(--accent);border-radius:50%;box-shadow:0 0 15px rgba(var(--ar),.6);transition:all .3s}
        .tli:hover{transform:translateX(8px);border-color:rgba(var(--ar),.35);box-shadow:0 0 30px rgba(var(--ar),.1),inset 0 0 30px rgba(var(--ar),.03)}
        .tli:hover::before{background:var(--sec);box-shadow:0 0 20px rgba(var(--sr),.6)}
        .tlp{font-family:'Orbitron',sans-serif;font-size:.8rem;color:var(--accent);letter-spacing:.1em;margin-bottom:.5rem}
        .tlh{font-family:'Orbitron',sans-serif;font-size:1.2rem;font-weight:600;color:#fff;margin-bottom:.3rem}
        .tlpl{font-size:.9rem;color:var(--sec);margin-bottom:.8rem}
        .tld{color:var(--t2);font-size:.95rem;line-height:1.7}

        .tband{position:relative;z-index:10;background:linear-gradient(135deg,rgba(5,5,10,.95),rgba(15,10,20,.95));padding:6rem 2rem;margin:2rem 0}
        .tband::before{content:'';position:absolute;top:0;left:0;width:100%;height:1px;background:linear-gradient(90deg,transparent,var(--accent),var(--sec),transparent)}
        .tband::after{content:'';position:absolute;bottom:0;left:0;width:100%;height:1px;background:linear-gradient(90deg,transparent,var(--sec),var(--accent),transparent)}
        .tinner{max-width:1200px;margin:0 auto}
        .tgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem;margin-top:3rem}
        .tcard{padding:2rem;background:rgba(0,0,0,.35);border-left:3px solid var(--accent);transition:all .3s}
        .tcard:nth-child(2){border-left-color:var(--sec)}.tcard:nth-child(3){border-left-color:var(--ter)}
        .tcard:hover{background:rgba(var(--ar),.04);transform:translateX(5px)}
        .tstars{color:var(--ter);font-size:.85rem;margin-bottom:1rem;letter-spacing:.15em}
        .ttxt{font-size:1.05rem;font-style:italic;line-height:1.8;color:var(--t1);margin-bottom:1.2rem}
        .ttxt .cb{display:inline-block;width:2px;height:1.1em;background:var(--accent);margin-left:2px;vertical-align:text-bottom;animation:cbk .7s infinite}
        @keyframes cbk{0%,50%{opacity:1}51%,100%{opacity:0}}
        .taut{font-family:'Orbitron',sans-serif;font-size:.8rem;color:var(--t2);text-transform:uppercase;letter-spacing:.15em}

        .clayout{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:start}
        .ciitem{display:flex;align-items:flex-start;gap:1.2rem;margin-bottom:2rem}
        .ciico{width:50px;height:50px;min-width:50px;display:flex;align-items:center;justify-content:center;font-size:1.1rem;color:var(--accent);border:1px solid rgba(var(--ar),.25);background:rgba(var(--ar),.06);transition:all .3s}
        .ciitem:hover .ciico{background:rgba(var(--ar),.12);box-shadow:0 0 20px rgba(var(--ar),.2)}
        .cilbl{font-family:'Orbitron',sans-serif;font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;color:var(--t3);margin-bottom:.3rem}
        .cival{font-size:1.1rem;color:var(--t1)}
        .cival a{color:var(--t1);text-decoration:none;transition:color .3s}.cival a:hover{color:var(--accent)}

        .cform{display:flex;flex-direction:column;gap:1.2rem}
        .cform input,.cform textarea{width:100%;background:rgba(var(--ar),.04);border:1px solid rgba(var(--ar),.15);color:var(--t1);font-family:'Rajdhani',sans-serif;font-size:1rem;padding:1rem 1.2rem;outline:none;transition:all .3s}
        .cform input:focus,.cform textarea:focus{border-color:var(--accent);box-shadow:0 0 20px rgba(var(--ar),.15),inset 0 0 20px rgba(var(--ar),.03)}
        .cform input::placeholder,.cform textarea::placeholder{color:var(--t3);font-weight:300}
        .cform textarea{min-height:140px;resize:vertical}
        .frow{display:grid;grid-template-columns:1fr 1fr;gap:1.2rem}

        .toast{position:fixed;bottom:2rem;right:2rem;z-index:10001;background:rgba(10,10,20,.95);border:1px solid var(--accent);color:var(--t1);padding:1rem 2rem;font-family:'Rajdhani',sans-serif;font-size:1rem;box-shadow:0 0 30px rgba(var(--ar),.3);transform:translateY(120%);transition:transform .4s;backdrop-filter:blur(20px)}
        .toast.show{transform:translateY(0)}

        footer{position:relative;z-index:10;padding:3rem 2rem;text-align:center;border-top:1px solid rgba(var(--ar),.08)}
        .fsoc{display:flex;justify-content:center;gap:1.5rem;margin-bottom:1.5rem}
        .fsoc a{width:44px;height:44px;display:flex;align-items:center;justify-content:center;color:var(--t2);border:1px solid rgba(var(--ar),.15);text-decoration:none;font-size:1.1rem;transition:all .3s}
        .fsoc a:hover{color:var(--accent);border-color:var(--accent);box-shadow:0 0 15px rgba(var(--ar),.2);transform:translateY(-3px)}
        .fcopy{font-size:.85rem;color:var(--t3)}.fcopy span{color:var(--sec)}

        @media(max-width:900px){.clayout{grid-template-columns:1fr;gap:3rem}}
        @media(max-width:768px){
            .nlinks{display:none}.nlinks.open{display:flex;flex-direction:column;position:absolute;top:100%;left:0;width:100%;background:rgba(10,10,15,.97);backdrop-filter:blur(20px);padding:2rem;gap:1.5rem;border-bottom:1px solid rgba(var(--ar),.15)}.ntog{display:block}
            .frow{grid-template-columns:1fr}.tl{padding-left:2rem}.tli::before{left:-1.8rem;width:10px;height:10px}.pgrid{grid-template-columns:1fr}
        }
        @media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}
    </style>
</head>
<body>
    <div class="grain"></div>
    <div class="scan"></div>
    <div class="blobs"><div></div><div></div><div></div></div>
    <canvas id="pc"></canvas>

    <nav id="nav">
        <a href="#" class="nlogo" id="nlogo"></a>
        <ul class="nlinks" id="nlinks"></ul>
        <button class="ntog" id="ntog" aria-label="Menú"><i class="fas fa-bars"></i></button>
    </nav>

    <header class="hero">
        <div class="hc">
            <span class="htag" id="htag"></span>
            <h1 class="htitle" id="htitle"></h1>
            <p class="hsub" id="hsub"></p>
            <div class="hact">
                <a href="#contacto" class="btn bp"><i class="fas fa-paper-plane"></i> Contactar</a>
                <a href="#portfolio" class="btn bo"><i class="fas fa-eye"></i> Ver trabajo</a>
            </div>
        </div>
        <div class="shint"><span>Scroll</span><div class="sl"></div></div>
    </header>

    <section class="sec" id="servicios">
        <div class="shdr"><span class="slbl" id="slblS"></span><h2 class="sttl" id="sttlS"></h2></div>
        <div class="sgrid" id="sgrid"></div>
    </section>

    <section class="sec" id="portfolio">
        <div class="shdr"><span class="slbl" id="slblP"></span><h2 class="sttl" id="sttlP"></h2></div>
        <div class="pgrid" id="pgrid"></div>
    </section>

    <section class="sec" id="experiencia">
        <div class="shdr"><span class="slbl" id="slblE"></span><h2 class="sttl" id="sttlE"></h2></div>
        <div class="tl" id="tl"></div>
    </section>

    <div class="tband">
        <div class="tinner">
            <div class="shdr" style="text-align:center"><span class="slbl" id="slblT"></span><h2 class="sttl" id="sttlT" style="display:block"></h2></div>
            <div class="tgrid" id="tgrid"></div>
        </div>
    </div>

    <section class="sec" id="contacto">
        <div class="shdr"><span class="slbl" id="slblC"></span><h2 class="sttl" id="sttlC"></h2></div>
        <div class="clayout">
            <div id="cinfo"></div>
            <form class="cform" id="cform">
                <div class="frow">
                    <input type="text" placeholder="Nombre" required>
                    <input type="email" placeholder="Email" required>
                </div>
                <input type="text" placeholder="Asunto">
                <textarea placeholder="Tu mensaje..." required></textarea>
                <button type="submit" class="btn bp" style="align-self:flex-start"><i class="fas fa-arrow-right"></i> Enviar mensaje</button>
            </form>
        </div>
    </section>

    <footer>
        <div class="fsoc" id="fsoc"></div>
        <p class="fcopy" id="fcopy"></p>
    </footer>

    <div class="toast" id="toast"></div>

    <script>
    /* ═══════════════════════════════════════════════════
       CONFIG — CAMBIA SOLO ESTO PARA CADA PROFESIÓN
       ═══════════════════════════════════════════════════ */
    const C = {
        accent:'#00f0ff', ar:'0,240,255',
        sec:'#ff0066', sr:'255,0,102',
        ter:'#ff6b00', tr:'255,107,0',

        brand:'DANA WALKER',
        heroTag:'Estudio de Danza Contemporánea',
        heroTitle:'DANA\nWALKER',
        heroSub:'Creamos experiencias de movimiento que conectan cuerpo, emoción y espacio. Clases, coreografías y espectáculos personalizados.',

        nav:['Servicios','Portfolio','Experiencia','Testimonios','Contacto'],
        ids:['servicios','portfolio','experiencia','testimonios','contacto'],

        sectionLabels:['Lo que hago','Mi trabajo','Mi trayectoria','Opiniones','Hablemos'],
        sectionTitles:['Servicios','Portfolio','Experiencia','Testimonios','Contacto'],

        services:[
            {icon:'fa-person-walking',name:'Clases de Danza',text:'Sesiones individuales y grupales de danza contemporánea, ballet y danza urbana para todos los niveles.'},
            {icon:'fa-masks-theater',name:'Coreografías',text:'Diseño de coreografías para espectáculos, videoclips, eventos corporativos y competiciones.'},
            {icon:'fa-graduation-cap',name:'Talleres',text:'Workshops intensivos de fin de semana enfocados en técnica, expresión corporal e improvisación.'},
            {icon:'fa-video',name:'Online',text:'Clases virtuales en directo con corrección personalizada y acceso a grabaciones.'},
            {icon:'fa-calendar-days',name:'Eventos',text:'Organización integral de galas de danza, showcases y presentaciones artísticas.'},
            {icon:'fa-child-reaching',name:'Infantil',text:'Programas adaptados para niños a partir de 4 años, estimulando creatividad y coordinación.'},
        ],

        portfolio:[
            {img:'https://picsum.photos/seed/dance1/800/600.jpg',tag:'Espectáculo',title:'Nocturno en Escena',desc:'Coreografía para el Festival de Artes 2024'},
            {img:'https://picsum.photos/seed/dance2/800/600.jpg',tag:'Videoclip',title:'Movimiento Fluid',desc:'Dirección de movimiento para clip musical'},
            {img:'https://picsum.photos/seed/dance3/800/600.jpg',tag:'Corporativo',title:'Team Flow',desc:'Performance para evento de empresa'},
            {img:'https://picsum.photos/seed/dance4/800/600.jpg',tag:'Clases',title:'Estudio Abierto',desc:'Sesión de formación avanzada'},
            {img:'https://picsum.photos/seed/dance5/800/600.jpg',tag:'Infantil',title:'Pequeños Artistas',desc:'Gala anual del programa infantil'},
            {img:'https://picsum.photos/seed/dance6/800/600.jpg',tag:'Workshop',title:'Improvisación Total',desc:'Taller intensivo de fin de semana'},
        ],

        timeline:[
            {period:'2024 - Actual',title:'Directora Artística',place:'Estudio Luna Dance',desc:'Gestión del estudio, creación de programas formativos y dirección de la compañía residente.'},
            {period:'2021 - 2024',title:'Coreógrafa Principal',place:'Compañía Movimiento',desc:'Creación de 12 montajes originales, giras nacionales y festivales internacionales.'},
            {period:'2018 - 2021',title:'Bailarina Profesional',place:'Ballet Nacional Contemporáneo',desc:'Más de 200 representaciones, giras por 15 países.'},
            {period:'2015 - 2018',title:'Profesora de Danza',place:'Conservatorio Municipal',desc:'Formación de alumnos de grados medio y superior.'},
        ],

        testimonials:[
            {text:'Las clases de Luna transformaron mi relación con el cuerpo. Su enfoque es técnico pero profundamente emocional.',author:'Marta Sánchez'},
            {text:'La coreografía que creó para nuestro evento dejó a todos sin palabras. Profesionalismo impecable.',author:'Carlos Ruiz'},
            {text:'Mi hija lleva tres años en el programa infantil y su confianza y creatividad han crecido increíblemente.',author:'Ana Beltrán'},
        ],

        contact:[
            {icon:'fa-location-dot',label:'Ubicación',value:'Calle de la Danza 12, Madrid'},
            {icon:'fa-phone',label:'Teléfono',value:'+34 612 345 678',href:'tel:+34612345678'},
            {icon:'fa-envelope',label:'Email',value:'hola@lundance.es',href:'mailto:hola@lundance.es'},
            {icon:'fa-clock',label:'Horario',value:'Lun-Vie 9:00 - 21:00'},
        ],

        socials:[
            {icon:'fa-brands fa-instagram',url:'#'},
            {icon:'fa-brands fa-youtube',url:'#'},
            {icon:'fa-brands fa-tiktok',url:'#'},
            {icon:'fa-brands fa-whatsapp',url:'#'},
        ],

        footer:'Hecho por <span>PESGUICOM</span> — © 2026 Todos los derechos reservados',
    };

    /* ═══════════════════════════════════════════════════
       APLICAR COLORES
       ═══════════════════════════════════════════════════ */
    const r=document.documentElement.style;
    r.setProperty('--accent',C.accent);r.setProperty('--ar',C.ar);
    r.setProperty('--sec',C.sec);r.setProperty('--sr',C.sr);
    r.setProperty('--ter',C.ter);r.setProperty('--tr',C.tr);

    /* ═══════════════════════════════════════════════════
       GENERAR HTML
       ═══════════════════════════════════════════════════ */
    const $=s=>document.getElementById(s);

    // Nav
    $('nlogo').textContent=C.brand;
    $('nlinks').innerHTML=C.nav.map((n,i)=>`<li><a href="#${C.ids[i]}">${n}</a></li>`).join('');

    // Hero
    $('htag').textContent=C.heroTag;
    const tl=C.heroTitle.split('\n').join('<br>');
    $('htitle').innerHTML=tl+`<span class="gl gc" aria-hidden="true">${tl}</span><span class="gl gm" aria-hidden="true">${tl}</span>`;
    $('hsub').textContent=C.heroSub;

    // Section labels/titles
    ['S','P','E','T','C'].forEach((k,i)=>{
        const l=$('slbl'+k),t=$('sttl'+k);
        if(l)l.textContent=C.sectionLabels[i];
        if(t)t.textContent=C.sectionTitles[i];
    });

    // Services
    $('sgrid').innerHTML=C.services.map(s=>`
        <article class="scard">
            <div class="sico"><i class="fas ${s.icon}"></i></div>
            <h3 class="sname">${s.name}</h3>
            <p class="stxt">${s.text}</p>
        </article>`).join('');

    // Portfolio
    $('pgrid').innerHTML=C.portfolio.map(p=>`
        <article class="pitem">
            <img src="${p.img}" alt="${p.title}" loading="lazy">
            <div class="pov">
                <span class="pt">${p.tag}</span>
                <h3 class="ph">${p.title}</h3>
                <p class="pd">${p.desc}</p>
            </div>
        </article>`).join('');

    // Timeline
    $('tl').innerHTML=C.timeline.map(t=>`
        <article class="tli">
            <span class="tlp">${t.period}</span>
            <h3 class="tlh">${t.title}</h3>
            <p class="tlpl">${t.place}</p>
            <p class="tld">${t.desc}</p>
        </article>`).join('');

    // Testimonials
    $('tgrid').innerHTML=C.testimonials.map(t=>`
        <article class="tcard">
            <div class="tstars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
            <blockquote class="ttxt" data-q="${t.text}"></blockquote>
            <cite class="taut">${t.author}</cite>
        </article>`).join('');

    // Contact
    $('cinfo').innerHTML=C.contact.map(c=>`
        <div class="ciitem">
            <div class="ciico"><i class="fas ${c.icon}"></i></div>
            <div><div class="cilbl">${c.label}</div><div class="cival">${c.href?`<a href="${c.href}">${c.value}</a>`:c.value}</div></div>
        </div>`).join('');

    // Socials
    $('fsoc').innerHTML=C.socials.map(s=>`<a href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="Red social"><i class="${s.icon}"></i></a>`).join('');

    // Footer
    $('fcopy').innerHTML=C.footer;

    /* ═══════════════════════════════════════════════════
       PARTÍCULAS
       ═══════════════════════════════════════════════════ */
    const cv=$('pc'),cx=cv.getContext('2d');
    let pts=[],af=null;

    function rsz(){cv.width=innerWidth;cv.height=innerHeight}

    class P{
        constructor(init){this.reset(init)}
        reset(init){
            this.x=Math.random()*cv.width;
            this.y=init?Math.random()*cv.height:Math.random()*-cv.height;
            this.sp=Math.random()*2+1;
            this.sz=Math.max(.1,Math.random()*2+.5);
            this.op=Math.random()*.4+.1;
            this.dr=(Math.random()-.5)*.5;
            this.ph=Math.random()*Math.PI*2;
        }
        update(){
            this.y+=this.sp;this.x+=this.dr+Math.sin(this.ph)*.3;this.ph+=.02;
            if(this.y>cv.height+10)this.reset(false);
        }
        draw(){
            cx.beginPath();cx.arc(this.x,this.y,this.sz,0,Math.PI*2);
            cx.fillStyle=`rgba(${C.ar},${this.op})`;cx.fill();
            if(this.sz>1.5){cx.beginPath();cx.arc(this.x,this.y,this.sz*3,0,Math.PI*2);cx.fillStyle=`rgba(${C.ar},${this.op*.15})`;cx.fill();}
        }
    }

    function initP(){
        pts=[];const n=Math.min(Math.floor(cv.width*cv.height/12000),180);
        for(let i=0;i<n;i++)pts.push(new P(true));
    }
    function animP(){cx.clearRect(0,0,cv.width,cv.height);pts.forEach(p=>{p.update();p.draw()});af=requestAnimationFrame(animP);}

    /* ═══════════════════════════════════════════════════
       NAV SCROLL + MOBILE
       ═══════════════════════════════════════════════════ */
    addEventListener('scroll',()=>{$('nav').classList.toggle('scrolled',scrollY>80)},{passive:true});

    $('ntog').onclick=()=>{
        const nl=$('nlinks'),o=nl.classList.toggle('open');
        $('ntog').innerHTML=o?'<i class="fas fa-xmark"></i>':'<i class="fas fa-bars"></i>';
    };
    $('nlinks').onclick=e=>{if(e.target.tagName==='A'){$('nlinks').classList.remove('open');$('ntog').innerHTML='<i class="fas fa-bars"></i>';}};

    /* ═══════════════════════════════════════════════════
       SCROLL REVEAL
       ═══════════════════════════════════════════════════ */
    function reveal(sel,hid,show,delay=100){
        const els=document.querySelectorAll(sel);
        const obs=new IntersectionObserver(ents=>{
            ents.forEach(en=>{
                if(en.isIntersecting){
                    const i=Array.from(els).indexOf(en.target);
                    setTimeout(()=>Object.assign(en.target.style,show),i*delay);
                    obs.unobserve(en.target);
                }
            });
        },{threshold:.15});
        els.forEach(el=>{Object.assign(el.style,hid);obs.observe(el);});
    }

    reveal('.scard',{opacity:'0',transform:'translateY(30px)'},{opacity:'1',transform:'translateY(0)',transition:'all .5s ease'},80);
    reveal('.pitem',{opacity:'0',transform:'scale(.95)'},{opacity:'1',transform:'scale(1)',transition:'all .5s ease'},100);
    reveal('.tli',{opacity:'0',transform:'translateX(-30px)'},{opacity:'1',transform:'translateX(0)',transition:'all .6s ease'},120);
    reveal('.tcard',{opacity:'0',transform:'translateY(20px)'},{opacity:'1',transform:'translateY(0)',transition:'all .5s ease'},150);

    /* ═══════════════════════════════════════════════════
       TYPEWRITER
       ═══════════════════════════════════════════════════ */
    function tw(el,txt,sp=25){
        let i=0;el.innerHTML='';
        (function go(){if(i<txt.length){el.innerHTML=txt.substring(0,++i)+'<span class="cb"></span>';setTimeout(go,sp);}else el.innerHTML=txt;})();
    }

    const qObs=new IntersectionObserver(ents=>{
        ents.forEach(en=>{
            if(en.isIntersecting){
                const el=en.target.querySelector('.ttxt');
                if(el&&!el.dataset.done){el.dataset.done='1';setTimeout(()=>tw(el,el.dataset.q),Math.random()*200);}
            }
        });
    },{threshold:.5});
    document.querySelectorAll('.tcard').forEach(c=>qObs.observe(c));

    /* ═══════════════════════════════════════════════════
       FORMULARIO
       ═══════════════════════════════════════════════════ */
    $('cform').onsubmit=e=>{
        e.preventDefault();
        const ins=$('cform').querySelectorAll('input,textarea');
        let ok=true;ins.forEach(i=>{if(i.required&&!i.value.trim())ok=false;});
        if(!ok){showToast('Completa los campos obligatorios.');return;}
        showToast('Mensaje enviado correctamente.');$('cform').reset();
    };

    function showToast(m){const t=$('toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3500);}

    /* ═══════════════════════════════════════════════════
       INIT
       ═══════════════════════════════════════════════════ */
    const prm=matchMedia('(prefers-reduced-motion:reduce)');
    function start(){if(!prm.matches){rsz();initP();animP();}}
    addEventListener('resize',()=>{rsz();initP();});
    prm.onchange=()=>{if(prm.matches&&af){cancelAnimationFrame(af);cx.clearRect(0,0,cv.width,cv.height);}else start();};
    start();
    </script>
</body>
</html>