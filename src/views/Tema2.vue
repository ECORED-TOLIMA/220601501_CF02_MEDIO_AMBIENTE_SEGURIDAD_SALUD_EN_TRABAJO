<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sistema de Gestión Ambiental (SGA)
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 El Sistema de Gestión Ambiental (SGA) es un enfoque estructurado y sistemático que las organizaciones adoptan para gestionar sus impactos sobre el medio ambiente, cumplir con las normativas legales y mejorar continuamente su desempeño ambiental. Su implementación no solo permite a las empresas reducir sus riesgos ambientales, sino también optimizar el uso de recursos, mejorar la eficiencia operativa y fortalecer su competitividad en mercados cada vez más exigentes en cuanto a sostenibilidad.

    p.mb-5 El SGA se basa en el ciclo PHVA (Planificar, Hacer, Verificar y Actuar), lo que permite una mejora continua en la gestión ambiental. A través de este sistema, las organizaciones pueden identificar y evaluar los aspectos e impactos ambientales significativos de sus actividades, productos y servicios, y establecer mecanismos para prevenir, reducir y controlar dichos impactos. Este ciclo es una metodología clave para la mejora continua, guiando a las organizaciones en la implementación y el perfeccionamiento del SGA. Cada fase del ciclo cumple un papel fundamental para asegurar que las prácticas ambientales de la organización sean cada vez más eficientes y efectivas. A continuación, se presentan las fases del ciclo PHVA:

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 2.
          i Ciclo PHVA (Planear, Hacer, Verificar y Actuar)
        figure.d-lg-flex.d-none(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/img02.svg' alt="La figura 2 se presenta el ciclo PHVA, una metodología de mejora continua que incluye cuatro fases: planear, donde se establecen objetivos y procesos; hacer, que implica la implementación de lo planeado; verificar, para evaluar los resultados frente a los objetivos; y actuar, donde se toman acciones para corregir y mejorar continuamente.")
        figure.d-lg-none.d-flex(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/img02a.svg' alt="La figura 2 se presenta el ciclo PHVA, una metodología de mejora continua que incluye cuatro fases: planear, donde se establecen objetivos y procesos; hacer, que implica la implementación de lo planeado; verificar, para evaluar los resultados frente a los objetivos; y actuar, donde se toman acciones para corregir y mejorar continuamente.")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9(data-aos="fade-right")
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-1.col-4.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img03.svg' alt="Imagen decorativa")
          .col-lg-11
            p.mb-0 Un SGA eficiente proporciona herramientas para alcanzar la certificación ambiental, como la ISO 14001, lo que aumenta la credibilidad de la organización y mejora su reputación frente a clientes, inversores, autoridades y otras partes interesadas. Además, promueve la sostenibilidad corporativa, garantizando que las operaciones de la empresa no solo sean rentables, sino también respetuosas con el medio ambiente y responsables socialmente.
        p Beneficios clave del SGA:
        .row
          .col-lg-4.col-6.mb-4
            .BGB04.h-100.p-4
              .h4 Cumplimiento normativo
              p.mb-0 Asegura que la organización cumpla con las leyes y regulaciones ambientales locales, nacionales e internacionales.
          .col-lg-4.col-6.mb-4
            .BGB04.h-100.p-4
              .h4 Reducción de riesgos ambientales
              p.mb-0 Identifica posibles impactos negativos y proporciona medidas para mitigarlos.
          .col-lg-4.col-6.mb-4
            .BGB04.h-100.p-4
              .h4 Mejora de la eficiencia operativa
              p.mb-0 Permite un uso más eficiente de los recursos naturales, reduciendo costos y aumentando la productividad.
          .col-lg-4.col-6.mb-4
            .BGB04.h-100.p-4
              .h4 Reputación empresarial
              p.mb-0 Incrementa la imagen positiva de la empresa ante los consumidores, inversionistas y otras partes interesadas.
          .col-lg-4.col-6.mb-4
            .BGB04.h-100.p-4
              .h4 Acceso a mercados sostenibles
              p.mb-0 Facilita la participación en mercados que priorizan la sostenibilidad y la responsabilidad social empresarial.
      .col-lg-3.d-lg-flex.d-none(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img04.png' alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.col-2.px-0.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' alt="Imagen decorativa")
      .col-lg-11(data-aos="fade-left")
        p.mb-0 La implementación de un SGA es un paso esencial para las organizaciones que buscan contribuir de manera activa a la protección del medio ambiente y la promoción de la sostenibilidad.
    
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Contexto de la organización
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img05.png' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        p Comprender el contexto de la organización es el primer paso para implementar un Sistema de Gestión Ambiental (SGA) eficaz. Esta etapa permite identificar los factores internos y externos que influyen en el desempeño ambiental y en la capacidad de la organización para alcanzar los resultados esperados del sistema.
        .tarjeta.BG01.p-4.mb-4
          p.mb-0 Analizar el contexto no solo implica reconocer los riesgos y oportunidades ambientales, sino también comprender cómo influyen las condiciones sociales, económicas, culturales, tecnológicas, regulatorias y ecológicas en la gestión ambiental de la organización. Este análisis debe tener en cuenta tanto el entorno inmediato como las partes interesadas clave, es decir, aquellas personas, grupos u organizaciones que pueden afectar o verse afectadas por las decisiones ambientales de la empresa.
        p.mb-0 Aspectos clave del contexto de la organización:

    .row.justify-content-center.mb-4
      .col-lg-4.col-sm-6.col-10.mb-4(data-aos="fade-right")
        .tarjeta.color-primario.h-100.p-4
          .row.mb-4
            .col-lg-3.col-5
              img(src='@/assets/curso/tema2/img06.svg' alt="Imagen decorativa")
          p.mb-0 #[b Factores externos:] incluyen el marco normativo ambiental vigente, las políticas gubernamentales, las condiciones climáticas, las presiones del mercado hacia prácticas sostenibles, los cambios tecnológicos, y las expectativas sociales sobre responsabilidad ambiental.
      .col-lg-4.col-sm-6.col-10.mb-4(data-aos="flip-up")
        .tarjeta.color-secundario.h-100.p-4
          .row.mb-4
            .col-lg-3.col-5
              img(src='@/assets/curso/tema2/img07.svg' alt="Imagen decorativa")
          p.mb-0 #[b Factores internos:] hacen referencia a la cultura organizacional, la disponibilidad de recursos, las competencias del personal, la estructura organizacional, las políticas ambientales ya existentes y los procesos operativos que impactan el medio ambiente.
      .col-lg-4.col-sm-6.col-10.mb-4(data-aos="fade-left")
        .tarjeta.color-acento-contenido.h-100.p-4
          .row.mb-4
            .col-lg-3.col-5
              img(src='@/assets/curso/tema2/img08.svg' alt="Imagen decorativa")
          p.mb-0 #[b Necesidades y expectativas de las partes interesadas:] es fundamental identificar quiénes son los actores relevantes (clientes, comunidad, entes reguladores, trabajadores, ONGs, entre otros) y cuáles son sus intereses, requisitos legales y compromisos ambientales esperados.
      .col-lg-10(data-aos="fade-right")
        p Este análisis permite establecer el alcance del SGA y definir con precisión los procesos y áreas que deben ser incluidos en el sistema. Además, facilita la formulación de políticas ambientales realistas, coherentes con las capacidades de la organización y alineadas con sus objetivos estratégicos.
        p.mb-0 En resumen, comprender el contexto de la organización garantiza que el SGA no sea un conjunto de procedimientos aislados, sino un sistema integrado y pertinente que responde eficazmente a la realidad ambiental, legal y operativa en la que la organización se desenvuelve.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Liderazgo y compromiso ambiental
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p El liderazgo y el compromiso ambiental son elementos fundamentales para el éxito de un Sistema de Gestión Ambiental (SGA). La alta dirección tiene la responsabilidad de asumir un rol activo en la implementación, mantenimiento y mejora continua del sistema, garantizando que se integren los principios ambientales en la estrategia general de la organización.
        .tarjeta.BG01.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img09.svg' alt="Imagen decorativa")
            .col-lg-10
              p.mb-0 Un liderazgo efectivo implica no solo tomar decisiones conscientes sobre el uso sostenible de los recursos y la prevención de la contaminación, sino también inspirar y motivar al personal en todos los niveles para adoptar una cultura ambiental sólida y coherente.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img10.png' alt="Imagen decorativa")

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #B0EBD5; border-radius: 5px;")
        img(src='@/assets/curso/temas/img04.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Funciones clave de la alta dirección en el SGA

    .row.justify-content-center.mb-5
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta BG04" data-aos="zoom-in")
          .row.justify-content-center.align-items-center(titulo="Establecer la política ambiental")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 La dirección debe definir una política clara que refleje el compromiso con la protección del medio ambiente, el cumplimiento de los requisitos legales y otros compromisos, así como la mejora continua del desempeño ambiental.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img11.jpg' alt="Imagen decorativa")
          .row.justify-content-center.align-items-center(titulo="Asignar recursos")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Se deben garantizar los recursos humanos, técnicos, tecnológicos y financieros necesarios para implementar y mantener el SGA de forma efectiva.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img12.jpg' alt="Imagen decorativa") 
          .row.justify-content-center.align-items-center(titulo="Comunicar el compromiso")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Es esencial que el liderazgo transmita la importancia del cumplimiento de los requisitos del sistema a todo el personal y que promueva activamente la conciencia ambiental en la organización.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img13.jpg' alt="Imagen decorativa") 
          .row.justify-content-center.align-items-center(titulo="Asignar responsabilidades")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 La alta dirección debe definir funciones claras, incluidos roles de supervisión, coordinación y seguimiento del sistema de gestión ambiental.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img14.jpg' alt="Imagen decorativa") 
          .row.justify-content-center.align-items-center(titulo="Dar ejemplo")
            .col-lg-6.order-lg-1.order-2
              p.mb-0 El compromiso se demuestra mediante la coherencia entre las decisiones y acciones de los líderes y los principios ambientales adoptados. Esto incluye prácticas sostenibles, participación activa en actividades del SGA y cumplimiento ejemplar de la normativa ambiental.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img15.jpg' alt="Imagen decorativa") 

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.px-0.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img16.svg' alt="Imagen decorativa")
      .col-lg-8.px-0(data-aos="fade-left")
        .BG08.h-100.p-xl-5.p-4
          p.mb-0 Cuando la dirección lidera con convicción y propósito, se fortalece el compromiso organizacional, se facilita la participación del personal y se asegura la integración del enfoque ambiental en todos los procesos de la empresa. Esto genera valor tanto para la organización como para sus partes interesadas, al consolidar una cultura basada en la sostenibilidad.

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Planificación: identificación de aspectos e impactos ambientales
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-2.px-0.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img15.svg' alt="Imagen decorativa")
      .col-lg-11(data-aos="fade-left")
        p.mb-0 La planificación es un pilar fundamental del Sistema de Gestión Ambiental (SGA) y comienza con la identificación y evaluación de los aspectos e impactos ambientales asociados a las actividades, productos y servicios de una organización. Este proceso permite establecer prioridades de acción, prevenir daños al medio ambiente y cumplir con la normativa vigente.
  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.px-lg-0.order-lg-1.order-2(data-aos="fade-right")
        .BG06.p-4
          .row.mb-3
            .col-lg-2.col-3
              img(src='@/assets/curso/tema2/img17.svg' alt="Imagen decorativa")
          p.mb-0 Un aspecto ambiental se refiere a cualquier elemento de las operaciones de la organización que puede interactuar con el medio ambiente, como el consumo de recursos, generación de residuos, emisiones al aire o vertimientos al agua. Por su parte, un impacto ambiental es el cambio que resulta en el entorno como consecuencia de estos aspectos, ya sea positivo o negativo.
      .col-lg-6.col-10.px-lg-0.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img18.jpg' alt="Imagen decorativa")

    p.mb-5 Pasos clave en la planificación ambiental:
    
    .BGIMG03.px-md-5.px-4.mb-4
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="zoom-in")
        .tarjeta.BGIMG02.p-4
          .row.justify-content-center.mb-4
            .col-5
              img(src='@/assets/curso/tema2/img19.svg' alt="Imagen decorativa")
          .h4 Identificación de aspectos ambientales
          p.mb-0 Se realiza un inventario detallado de todas las actividades que tienen interacción con el medio ambiente. Ejemplo: el uso de maquinaria genera consumo de energía eléctrica; un proceso de pintura produce emisiones al aire; la limpieza de equipos utiliza productos químicos.
        .tarjeta.BGIMG02.p-4
          .row.justify-content-center.mb-4
            .col-5
              img(src='@/assets/curso/tema2/img20.svg' alt="Imagen decorativa")
          .h4 Evaluación de impactos
          p.mb-0 A cada aspecto identificado se le asigna un impacto potencial, considerando su severidad, frecuencia, probabilidad de ocurrencia y cumplimiento legal. Ejemplo: el vertimiento de aguas residuales no tratadas puede contaminar fuentes hídricas cercanas; el uso excesivo de papel implica deforestación indirecta.
        .tarjeta.BGIMG02.p-4
          .row.justify-content-center.mb-4
            .col-5
              img(src='@/assets/curso/tema2/img21.svg' alt="Imagen decorativa")
          .h4 Determinación de criterios de significancia
          p.mb-0 La organización define criterios para establecer qué impactos son significativos y deben gestionarse con prioridad. Ejemplo: se considera significativo un derrame de aceite en el suelo por su potencial daño al ecosistema y por su incumplimiento de la norma.
        .tarjeta.BGIMG02.p-4
          .row.justify-content-center.mb-4
            .col-5
              img(src='@/assets/curso/tema2/img22.svg' alt="Imagen decorativa")
          .h4 Documentación y actualización
          p.mb-0 La identificación debe revisarse periódicamente, especialmente cuando cambian procesos, tecnología o normativa ambiental. Ejemplo: si la empresa cambia de proveedor de insumos químicos, debe reevaluar los posibles riesgos asociados.
        .tarjeta.BGIMG02.p-4
          .row.justify-content-center.mb-4
            .col-5
              img(src='@/assets/curso/tema2/img23.svg' alt="Imagen decorativa")
          .h4 Base para los objetivos
          p.mb-0 La información obtenida sirve para establecer objetivos ambientales concretos, metas medibles y planes de acción. Ejemplo: reducir en un 15 % el consumo de agua en procesos industriales en un año; implementar un sistema de tratamiento de aguas residuales.

      p.mb-5 Realizar una correcta identificación de aspectos e impactos ambientales permite anticiparse a consecuencias negativas, optimizar el uso de recursos y reforzar el compromiso de la organización con la sostenibilidad. Esta etapa es esencial para construir un SGA sólido, basado en la prevención, el cumplimiento normativo y la mejora continua.

    .tarjeta.BG06.p-4.mb-4(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src='@/assets/curso/temas/img02.svg' alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-sm-0.mb-4
              h4.TC3 Ministerio de Ambiente y Desarrollo Sostenible de Colombia
              p.mb-0 Para ampliar la información sobre los impactos ambientales específicos según el tipo de actividad o sector, se recomienda consultar el documento oficial publicado por el Ministerio de Ambiente y Desarrollo Sostenible de Colombia: 
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.minambiente.gov.co/wp-content/uploads/2022/04/Listado-de-Impactos-Ambientales-Especificos-2021-V.4.pdf" target="_blank")
                span Descargar
                i.fas.fa-file-download

    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Objetivos ambientales y planificación para lograrlos
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img24.png' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        p Los objetivos ambientales son metas específicas que la organización establece para mejorar su desempeño ambiental, alineados con su política ambiental, el contexto organizacional y los requisitos legales aplicables. Estos objetivos deben ser medibles, alcanzables y coherentes con los compromisos adquiridos, como la prevención de la contaminación, la eficiencia en el uso de recursos y la mejora continua.
        .tarjeta.BG01.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-3.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img25.svg' alt="Imagen decorativa")
            .col-lg-10
              p.mb-0 La planificación para lograrlos implica definir qué se va a hacer, cómo se va a hacer, quién lo va a hacer, cuándo se va a hacer y con qué recursos se cuenta. En este proceso se identifican los medios necesarios, se asignan responsabilidades, se establecen indicadores de seguimiento y se calendarizan las acciones.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p Dentro de esta planificación, se estructuran los programas ambientales, que representan el conjunto de actividades y estrategias diseñadas para alcanzar los objetivos definidos. Estos programas permiten traducir los compromisos ambientales en acciones concretas, facilitando el monitoreo de resultados y la rendición de cuentas interna y externa.
        p Ejemplos de programas ambientales:
        .tarjeta.BG01.p-4.mb-4
          ul.lista-ul--color.mb-0
            li
              i.fa-solid.fa-helmet-safety.TC2
              p.mb-0 Programa de eficiencia energética, que promueve la optimización de equipos e iluminación.
            li
              i.fa-solid.fa-helmet-safety.TC2
              p.mb-0 Programa de manejo integral de residuos sólidos, con metas de reducción, clasificación y reciclaje.
            li
              i.fa-solid.fa-helmet-safety.TC2
              p.mb-0 Programa de uso eficiente del agua, enfocado en la reducción del consumo y la reutilización.
            li
              i.fa-solid.fa-helmet-safety.TC2
              p.mb-0 Programa de formación y sensibilización ambiental, para fomentar una cultura organizacional responsable.
            li
              i.fa-solid.fa-helmet-safety.TC2
              p.mb-0 Programa de control de emisiones atmosféricas, si aplica por tipo de operación.
        .row.justify-content-center.align-items-center
          .col-lg-2.col-3.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/img03.svg' alt="Imagen decorativa")
          .col-lg-10
            p.mb-0 La correcta formulación y seguimiento de estos programas es clave para demostrar la eficacia del Sistema de Gestión Ambiental y para cumplir con los compromisos establecidos ante las partes interesadas y los entes de control ambiental.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img26.jpg' alt="Imagen decorativa")

    separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5 Apoyo: recursos, competencias, comunicación y documentación
    
    p.mb-5 El éxito de un Sistema de Gestión Ambiental (SGA) depende en gran medida del apoyo efectivo que reciba en términos de recursos, personal competente, comunicación adecuada y documentación organizada. Esta sección del sistema asegura que existan las condiciones necesarias para implementar, mantener y mejorar continuamente el desempeño ambiental de la organización.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta BG04" data-aos="zoom-in")
          div(titulo="Recursos")
            p.mb-0 La organización debe asignar los recursos humanos, tecnológicos, financieros y físicos necesarios para garantizar el cumplimiento de los objetivos ambientales. Esto incluye la disponibilidad de herramientas, infraestructura y servicios requeridos para el control de impactos ambientales significativos.
          div(titulo="Competencias")
            p.mb-0 Es fundamental que el personal involucrado en el SGA tenga las competencias necesarias para desempeñar sus funciones. Esto implica identificar las habilidades requeridas, planificar actividades de formación, evaluar su efectividad y asegurar que los colaboradores comprendan la importancia de su rol en el sistema ambiental.
          div(titulo="Comunicación")
            p.mb-0 Se deben establecer mecanismos eficaces para la comunicación interna y externa relacionados con el SGA. Esto incluye definir qué se comunica, a quién, cómo y cuándo. La comunicación clara y oportuna fortalece la participación del personal y mejora las relaciones con las partes interesadas, como comunidades, autoridades y proveedores.
          div(titulo="Información documentada")
            p.mb-0 La documentación del sistema debe mantenerse actualizada, ser accesible y estar controlada. Esto abarca desde la política ambiental, objetivos, procedimientos, registros de seguimiento, hasta los resultados de auditorías internas. La información documentada sirve como evidencia del cumplimiento de los requisitos del sistema y facilita su trazabilidad y mejora continua.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img27.jpg' alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-2.px-0.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' alt="Imagen decorativa")
      .col-lg-11(data-aos="fade-left")
        p.mb-0 Para complementar la estructura documental del SGA, es útil representar jerárquicamente los distintos niveles de documentación que lo componen. Esta jerarquía permite mantener la coherencia del sistema, asegurar la trazabilidad de la información y facilitar el cumplimiento de los requisitos normativos. A continuación, se presenta un esquema visual que ilustra la relación entre manuales, procedimientos, instructivos y registros:

    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 3.
          i Niveles de documentación en un SGA 
        figure.d-lg-flex.d-none(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/img28.svg' alt="En la figura 3, se representan los niveles jerárquicos de documentación dentro de un Sistema de Gestión Ambiental (SGA), organizados desde los manuales generales hasta los registros y documentos externos. Se incluyen manuales, procedimientos, instructivos, y registros tanto internos como externos, junto con especificaciones y catálogos, los cuales garantizan la trazabilidad, control y coherencia del sistema.")
        figure.d-lg-none.d-flex(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/img28a.svg' alt="En la figura 3, se representan los niveles jerárquicos de documentación dentro de un Sistema de Gestión Ambiental (SGA), organizados desde los manuales generales hasta los registros y documentos externos. Se incluyen manuales, procedimientos, instructivos, y registros tanto internos como externos, junto con especificaciones y catálogos, los cuales garantizan la trazabilidad, control y coherencia del sistema.")

    p En conjunto, estos elementos de apoyo permiten garantizar la solidez y sostenibilidad del Sistema de Gestión Ambiental (SGA) dentro de cualquier organización.

    separador
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.6 Operación: control operacional y preparación ante emergencias
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p En el marco del Sistema de Gestión Ambiental (SGA), la operación se refiere a la implementación y control de procesos planificados para alcanzar los objetivos ambientales de la organización. Para ello, se establecen mecanismos de control operacional, que consisten en definir y aplicar procedimientos, prácticas, recursos y responsabilidades para evitar, mitigar o eliminar los impactos ambientales negativos generados por las actividades, productos o servicios.
        p Algunos ejemplos de control operacional incluyen:
        .row
          .col-lg-4.col-sm-6.col-10.mb-4
            .tarjeta.BGIMG01.h-100.p-4
              .row.mb-4
                .col-4
                  img(src='@/assets/curso/temas/img01.svg' alt="Imagen decorativa")
              p.mb-0 Procedimientos para el manejo y disposición de residuos.
          .col-lg-4.col-sm-6.col-10.mb-4
            .tarjeta.BGIMG01.h-100.p-4
              .row.mb-4
                .col-4
                  img(src='@/assets/curso/temas/img01.svg' alt="Imagen decorativa")
              p.mb-0 Instrucciones para el uso racional de agua, energía y materias primas.
          .col-lg-4.col-sm-6.col-10.mb-4
            .tarjeta.BGIMG01.h-100.p-4
              .row.mb-4
                .col-4
                  img(src='@/assets/curso/temas/img01.svg' alt="Imagen decorativa")
              p.mb-0 Requisitos ambientales aplicables a contratistas y proveedores.
          .col-lg-4.col-sm-6.col-10.mb-4
            .tarjeta.BGIMG01.h-100.p-4
              .row.mb-4
                .col-4
                  img(src='@/assets/curso/temas/img01.svg' alt="Imagen decorativa")
              p.mb-0 Controles sobre emisiones, vertimientos o generación de ruido.
          .col-lg-4.col-sm-6.col-10.mb-4
            .tarjeta.BGIMG01.h-100.p-4
              .row.mb-4
                .col-4
                  img(src='@/assets/curso/temas/img01.svg' alt="Imagen decorativa")
              p.mb-0 Protocolos de operación segura para sustancias peligrosas.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img29.jpg' alt="Imagen decorativa")

    .BG07.p-4.mb-5(data-aos="fade-right")
      p.mb-0 Complementario al control operacional, es esencial contar con mecanismos eficaces de preparación y respuesta ante emergencias, los cuales deben integrar tanto el componente ambiental como el de Seguridad y Salud en el Trabajo (SST). Esto implica estar preparados para eventos como incendios, explosiones, derrames químicos, colapsos estructurales, sismos, entre otros, que puedan afectar al entorno, a las personas y a la operación misma de la organización.

    p.mb-5 Partes clave de un plan integral de emergencias:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6(data-aos="fade-right")
        LineaTiempoD.color-acento-botones
          p(numero="1" titulo="Análisis de vulnerabilidades") Determinación de los activos, procesos y personas expuestos al riesgo.
          p(numero="2" titulo="Objetivo y alcance") Delimitación del propósito del plan y los escenarios que cubre.
          p(numero="3" titulo="Organización para la atención de emergencias") Roles y responsabilidades, brigadas, coordinadores y enlaces con organismos externos.
          p(numero="4" titulo="Procedimientos de respuesta") Acciones para cada tipo de emergencia (evacuación, control de incendios, contención de derrames, primeros auxilios, entre otros).
          p(numero="5" titulo="Recursos y equipos disponibles") Elementos de respuesta rápida, señalización, rutas de evacuación, sistemas de alarma, kits ambientales, entre otros.
          p(numero="6" titulo="Comunicación en emergencia") Protocolos para la notificación interna y externa.
          p(numero="7" titulo="Capacitación y simulacros") Formación del personal, evaluación de tiempos de respuesta y mejora continua.
          p(numero="8" titulo="Revisión periódica") Actualización del plan conforme a cambios organizacionales, lecciones aprendidas y normativa aplicable.
      .col-lg-4.d-lg-flex.d-none(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img30.jpg' alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-2.px-0.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' alt="Imagen decorativa")
      .col-lg-11(data-aos="fade-left")
        p.mb-0 Contar con un plan de emergencias articulado con el SGA y el SG-SST permite a las organizaciones anticiparse a eventos críticos, proteger a las personas, preservar el ambiente y garantizar la continuidad operativa.

    separador
    #t_2_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.7 Evaluación del desempeño: seguimiento, medición y análisis
    
    p La evaluación del desempeño en un Sistema de Gestión Ambiental (SGA) permite verificar la eficacia de las acciones implementadas, así como el grado de cumplimiento de los objetivos ambientales, los requisitos legales y otros compromisos adquiridos por la organización. Este proceso implica el seguimiento sistemático de los indicadores clave, la medición de los aspectos ambientales significativos y el análisis de los resultados para identificar oportunidades de mejora.
    p.mb-5 El seguimiento y la medición deben enfocarse especialmente en los aspectos ambientales significativos, indicadores clave de desempeño (KPIs), el cumplimiento legal y los resultados de los programas ambientales. Para ello, la organización debe establecer:

    .row.justify-content-center.mb-5
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.color-primario.h-100
          figure
            img(src='@/assets/curso/tema2/img31.png' alt="Imagen decorativa")
          .p-4
            p.mb-0 Qué se va a medir (por ejemplo, consumo de agua, generación de residuos y emisiones atmosféricas).
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="flip-right")
        .tarjeta.color-secundario.h-100
          figure
            img(src='@/assets/curso/tema2/img32.png' alt="Imagen decorativa")
          .p-4
            p.mb-0 Con qué frecuencia se realizará la medición.
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="flip-left")
        .tarjeta.color-primario.h-100
          figure
            img(src='@/assets/curso/tema2/img33.png' alt="Imagen decorativa")
          .p-4
            p.mb-0 Qué métodos se utilizarán (instrumentos, metodologías estandarizadas y auditorías internas).
      .col-lg-3.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta.color-secundario.h-100
          figure
            img(src='@/assets/curso/tema2/img34.png' alt="Imagen decorativa")
          .p-4
            p.mb-0 Quién será el responsable de recolectar, registrar y analizar los datos.
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img35.jpg' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        p Una parte fundamental de esta evaluación son las #[b auditorías internas], las cuales revisan de manera objetiva si el SGA ha sido implementado correctamente, si se mantiene actualizado y si cumple con los requisitos establecidos en la norma ISO 14001, así como con la normativa legal vigente. Estas auditorías deben planificarse periódicamente y ser realizadas por personal competente e imparcial.
        p Además, la organización puede someterse a #[b auditorías externas], ya sea con fines de certificación, vigilancia o por parte de autoridades ambientales. Estas auditorías aportan una visión independiente y permiten validar la conformidad del sistema con estándares internacionales o requerimientos regulatorios.
        .tarjeta.BG01.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-3.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img36.svg' alt="Imagen decorativa")
            .col-lg-10
              p.mb-0 Los resultados obtenidos del seguimiento, la medición y las auditorías se documentan y analizan para facilitar la toma de decisiones informadas, fortalecer el compromiso ambiental y garantizar la mejora continua del sistema.

    separador
    #t_2_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.8 Mejora continua del SGA
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img37.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 La mejora continua constituye uno de los pilares fundamentales de un Sistema de Gestión Ambiental (SGA) efectivo, según lo establece la norma ISO 14001. Este enfoque implica una revisión constante del desempeño ambiental de la organización, con el fin de identificar oportunidades de optimización en sus procesos, reducir impactos negativos al entorno y aumentar la eficiencia en el uso de recursos.
    
    p.mb-5 Este proceso no se limita a la corrección de errores, sino que busca evolucionar el sistema hacia niveles más altos de desempeño, innovación y sostenibilidad. Para lograrlo, la organización debe integrar mecanismos sistemáticos que permitan:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        .BG06.p-4
          ul.lista-ul--color.mb-0
            li
              i.fa-solid.fa-helmet-safety.TC2
              p.mb-0 Revisar periódicamente el cumplimiento de los objetivos ambientales.
            li
              i.fa-solid.fa-helmet-safety.TC2
              p.mb-0 Analizar los resultados del seguimiento, la medición, las auditorías y la revisión por la dirección.
            li
              i.fa-solid.fa-helmet-safety.TC2
              p.mb-0 Establecer acciones correctivas, preventivas y de mejora basadas en datos objetivos.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img38.png' alt="Imagen decorativa")

    p.mb-5 A continuación, se presentan algunas herramientas clave para la mejora continua:

    .BGIMG03.px-md-5.px-4.mb-5
      .row.justify-content-center.mb-5
        .col-lg-3.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema2/img39.png' alt="Imagen decorativa")
        .col-lg-9(data-aos="fade-left")
          SlyderF(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--blanca.bs.p-4
              .row.justify-content-center.mb-4
                .col-6
                  img(src='@/assets/curso/tema2/img40.svg' alt="Imagen decorativa")
              .h4.text-center #[mark.BG10.px-1 Auditorías internas y externas]
              p.mb-0 Permiten identificar desviaciones del sistema, oportunidades de mejora y fortalezas del SGA.
            .tarjeta.tarjeta--blanca.bs.p-4
              .row.justify-content-center.mb-4
                .col-6
                  img(src='@/assets/curso/tema2/img41.svg' alt="Imagen decorativa")
              .h4.text-center #[mark.BG10.px-1 Indicadores clave de desempeño ambiental (KPIs)]
              p.mb-0 Miden el progreso en variables como consumo energético, uso de agua, generación de residuos o emisiones atmosféricas.
            .tarjeta.tarjeta--blanca.bs.p-4
              .row.justify-content-center.mb-4
                .col-6
                  img(src='@/assets/curso/tema2/img42.svg' alt="Imagen decorativa")
              .h4.text-center #[mark.BG10.px-1 Análisis de causa raíz]
              p.mb-0 Se aplica ante no conformidades ambientales significativas para evitar su recurrencia.
            .tarjeta.tarjeta--blanca.bs.p-4
              .row.justify-content-center.mb-4
                .col-6
                  img(src='@/assets/curso/tema2/img43.svg' alt="Imagen decorativa")
              .h4.text-center #[mark.BG10.px-1 Círculos de mejora y sugerencias del personal]
              p.mb-0 Fomentan la participación activa de los trabajadores y promueven la innovación desde la base de la organización.
            .tarjeta.tarjeta--blanca.bs.p-4
              .row.justify-content-center.mb-4
                .col-6
                  img(src='@/assets/curso/tema2/img44.svg' alt="Imagen decorativa")
              .h4.text-center #[mark.BG10.px-1 #[em Benchmarking] ambiental]
              p.mb-0 Comparación con estándares de referencia o buenas prácticas del sector para identificar nuevas metas y procesos más eficientes.
    
    p.mb-5 Para fomentar la mejora continua, la organización debe implementar y documentar los siguientes tipos de acciones:

    .row.justify-content-center.mb-4
      .col-lg-4.col-sm-6.col-10.mb-4(data-aos="fade-right")
        .tarjeta.color-primario.h-100.p-4
          .row.mb-4
            .col-lg-3.col-5
              img(src='@/assets/curso/tema2/img45.svg' alt="Imagen decorativa")
          p.mb-0 #[b Acciones correctivas:] eliminan las causas de no conformidades reales, como incumplimientos o fallas de control. Ejemplo: ante una descarga no autorizada de aguas residuales, se implementa una acción correctiva que incluye la reparación del sistema de tratamiento y la capacitación del personal responsable.
      .col-lg-4.col-sm-6.col-10.mb-4(data-aos="flip-up")
        .tarjeta.color-secundario.h-100.p-4
          .row.mb-4
            .col-lg-3.col-5
              img(src='@/assets/curso/tema2/img46.svg' alt="Imagen decorativa")
          p.mb-0 #[b Acciones preventivas:] buscan evitar la ocurrencia de incidentes ambientales mediante la gestión proactiva de riesgos. Ejemplo: para prevenir derrames de sustancias peligrosas, se instalan cubetas de contención en las zonas de almacenamiento y se actualizan los procedimientos de manejo seguro.
      .col-lg-4.col-sm-6.col-10.mb-4(data-aos="fade-left")
        .tarjeta.color-acento-contenido.h-100.p-4
          .row.mb-4
            .col-lg-3.col-5
              img(src='@/assets/curso/tema2/img47.svg' alt="Imagen decorativa")
          p.mb-0 #[b Acciones de mejora:] promueven el fortalecimiento del desempeño ambiental más allá del cumplimiento normativo. Ejemplo: la empresa decide reducir voluntariamente su huella de carbono implementando paneles solares, aunque no exista una exigencia legal al respecto.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p La mejora continua requiere un liderazgo activo por parte de la alta dirección, así como la asignación clara de responsabilidades y la provisión de los recursos necesarios. Además, es fundamental fomentar una cultura organizacional orientada al aprendizaje y la sostenibilidad, en la que todos los colaboradores comprendan su rol en el desempeño ambiental y participen activamente en la implementación de acciones de mejora.
        p Como resultado de este enfoque integral, el SGA aporta numerosos beneficios para la organización, entre los cuales se destacan:
        .BG06.p-4
          ul.lista-ul--color.mb-0
            li
              i.fa-solid.fa-helmet-safety.TC2
              p.mb-0 Reducción de riesgos ambientales y cumplimiento legal constante.
            li
              i.fa-solid.fa-helmet-safety.TC2
              p.mb-0 Optimización del uso de recursos naturales y materiales.
            li
              i.fa-solid.fa-helmet-safety.TC2
              p.mb-0 Mejora de la reputación organizacional y relaciones con partes interesadas.
            li
              i.fa-solid.fa-helmet-safety.TC2
              p.mb-0 Generación de valor agregado mediante procesos más sostenibles y eficientes.
            li
              i.fa-solid.fa-helmet-safety.TC2
              p.mb-0 Preparación proactiva ante cambios normativos, tecnológicos o del entorno.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img48.png' alt="Imagen decorativa")

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
