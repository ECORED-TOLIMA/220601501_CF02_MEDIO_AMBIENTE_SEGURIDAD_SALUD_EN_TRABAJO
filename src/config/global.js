export default {
  global: {
    componenteFormativo:
      'Legislación en medio ambiente, seguridad y salud en el trabajo',
    descripcionCurso:
      'En este componente formativo se presenta la legislación legal vigente en términos de medio ambiente, seguridad y salud en el trabajo. Es importante tener en cuenta que la normativa es la base para la ejecución de actividades que promueven lugares de trabajo seguros y el cuidado del medio ambiente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Legislación en medio ambiente, seguridad y salud en el trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Legislación ambiental',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Legislación en materia de prevención y riesgos laborales',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sistema de Gestión Ambiental (SGA)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Contexto de la organización',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Liderazgo y compromiso ambiental',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Planificación: identificación de aspectos e impactos ambientales',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Objetivos ambientales y planificación para lograrlos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Apoyo: recursos, competencias, comunicación y documentación',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo:
              'Operación: control operacional y preparación ante emergencias',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo:
              'Evaluación del desempeño: seguimiento, medición y análisis',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Mejora continua del SGA',
            hash: 't_2_8',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Compromiso y política en SST',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Liderazgo, roles y responsabilidades en SST',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Planificación y gestión del riesgo en SST',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Implementación, control operacional y preparación ante emergencias',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Seguimiento, medición y análisis del desempeño SST',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Auditoría interna y evaluación del cumplimiento',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Mejora continua del SG-SST',
            hash: 't_3_7',
          },
          {
            numero: '3.8',
            titulo: 'Derechos y deberes de los trabajadores',
            hash: 't_3_8',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_02_220601501_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Legislación en medio ambiente, seguridad y salud en el trabajo',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Normatividad Que Debe Contener La Matriz Legal [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=5noygTuYJL0',
    },
    {
      tema:
        '2.3. Planificación: identificación de aspectos e impactos ambientales',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). Desempeño ambiental [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=WCqlNKyQs2c',
    },
    {
      tema: '2.7. Evaluación del desempeño: seguimiento, medición y análisis',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). Monitorear los vertimientos, emisiones y normatividad ambiental [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=h9QbCVd-7vI',
    },
    {
      tema:
        '3.4. Implementación, control operacional y preparación ante emergencias',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). Características de la seguridad y salud en el trabajo [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=etYDnPNQQrw',
    },
  ],
  glosario: [
    {
      termino: 'Alta dirección',
      significado:
        'persona o grupo de personas que dirigen y controlan una empresa.',
    },
    {
      termino: 'Auditoría interna',
      significado:
        'evaluación sistemática realizada dentro de una organización para verificar el cumplimiento de sus políticas y procedimientos.',
    },
    {
      termino: 'Capacitación',
      significado:
        'proceso mediante el cual se fortalecen las competencias y conocimientos del personal en temas de seguridad, salud o ambiente.',
    },
    {
      termino: 'Control operacional',
      significado:
        'conjunto de acciones planificadas para asegurar que las operaciones se realicen de forma segura y conforme a los procedimientos establecidos.',
    },
    {
      termino: 'Emergencia',
      significado:
        'situación imprevista que requiere una acción inmediata para proteger la vida, la salud o el medio ambiente.',
    },
    {
      termino: 'Impacto ambiental',
      significado:
        'efecto positivo o negativo que una actividad humana produce sobre el medio ambiente.',
    },
    {
      termino: 'Legislación ambiental',
      significado:
        'normas jurídicas que regulan el uso, protección y conservación del medio ambiente en una región o país.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'proceso constante de revisión y optimización de los sistemas de gestión para incrementar su eficacia.',
    },
    {
      termino: 'Riesgo laboral',
      significado:
        'probabilidad de que un trabajador sufra un accidente o enfermedad relacionada con su trabajo.',
    },
  ],
  referencias: [
    {
      referencia:
        'ICONTEC. (2012). Guía Técnica Colombiana GTC 45: Guía para la identificación de los peligros y la valoración de los riesgos en seguridad y salud ocupacional. Bogotá: Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC).',
    },
    {
      referencia:
        'ICONTEC. (2015). Norma Técnica Colombiana NTC-ISO 14001:2015. Sistemas de gestión ambiental. Requisitos con orientación para su uso. ICONTEC.',
    },
    {
      referencia:
        'ICONTEC. (2018). Norma Técnica Colombiana NTC-ISO 45001:2018. Sistemas de gestión de la seguridad y salud en el trabajo. Requisitos con orientación para su uso. ICONTEC.',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2021). Listado de impactos ambientales específicos (Versión 4).',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2022/04/Listado-de-Impactos-Ambientales-Especificos-2021-V.4.pdf',
    },
    {
      referencia:
        'Ministerio del Trabajo de Colombia. (s.f.). Marco legal vigente en Colombia.',
      link: 'https://www.mintrabajo.gov.co/marco-legal',
    },
    {
      referencia:
        'Programa de las Naciones Unidas para el Medio Ambiente. (s.f.). Inicio.',
      link: 'https://www.unep.org/es',
    },
    {
      referencia:
        'Sistema Único de Información Normativa del Estado Colombiano. (s.f.). Normatividad colombiana.',
      link: 'http://www.suin-juriscol.gov.co/legislacion/normatividad.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Ligia Marcela Arévalo Guio',
          cargo: 'Experta disciplinar',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Nidya Solórzano Ochoa',
          cargo: 'Experta disciplinar',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Germán Leonel Sarmiento Cruz',
          cargo: 'Experto disciplinar',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Diseñadora Instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Natalia Andrea Bueno Pizarro',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Julieth Paola Vital López',
          cargo: 'Revisora de estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
