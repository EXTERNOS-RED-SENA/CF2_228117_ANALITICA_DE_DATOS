export default {
  global: {
    componenteFormativo: 'Organización de datos y variables estadísticas',
    descripcionCurso:
      'Este componente orientado al nivel técnico ofrece un enfoque sobre los principios y metodologías para la organización de datos estadísticos, abarcando la clasificación y el agrupamiento de variables cualitativas y cuantitativas. Incluye técnicas específicas para evitar errores y optimizar la precisión de los datos. Proporciona herramientas que mejoran la claridad y confiabilidad de los resultados en análisis estadísticos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.svg'),
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
        titulo: 'Definición de variable y clasificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de variable en estadística',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Variables cualitativas (categóricas)',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Variables cuantitativas (numéricas)',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Escalas de medición',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Variables dependientes e independientes',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo:
              'Relación entre los tipos de variables y los métodos estadísticos',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Niveles de medición',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Nivel de medición nominal',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Nivel de medición ordinal',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Nivel de medición de intervalo',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Nivel de medición de razón',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Importancia de los niveles de medición en el análisis estadístico',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Técnicas de agrupación de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Definición de datos agrupados y no agrupados',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Criterios para agrupar datos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Métodos de agrupación de datos cuantitativos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Métodos de agrupación de datos cualitativos',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Organización de la muestra de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Criterios para organizar datos según el tipo de variable',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Técnicas de agrupación de datos para análisis estadístico',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Importancia de una organización coherente de los datos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Métodos para evitar errores en la organización de datos',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Organización de datos en estudios con múltiples variables',
            hash: 't_4_5',
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
        download: 'downloads/228117_CF02_DU.pdf',
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
      tema: 'El muestreo en procesos estadísticos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022a, agosto 26). El muestreo en procesos estadísticos. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=yGbtOWCHY4I',
    },
    {
      tema: 'Estadística descriptiva, gráficas e informes estadísticos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023b, marzo 24). Estadística descriptiva, gráficas e informes estadísticos.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=v5UMlXHe2nM',
    },
    {
      tema: 'Estadísticas básicas',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022c, diciembre 9). Estadísticas básicas.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=UKdYYtCdvKw',
    },
    {
      tema:
        'Etapas del procesamiento de datos y métodos estadísticos - Introducción',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023d, marzo 26). Etapas del procesamiento de datos y métodos estadísticos - Introducción.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ndzj15PQEVw',
    },
    {
      tema:
        'Introducción a la aplicación de herramientas estadísticas en la presentación de datos.',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023c, marzo 24). Introducción a la aplicación de herramientas estadísticas en la presentación de datos.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=M9q9zxX8Evc',
    },
    {
      tema: 'Introducción a la estadística.',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023e, septiembre 20). Introducción a la estadística.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=wMCDkknpUVw',
    },
    {
      tema:
        'Modelos matemáticos y estadísticos aplicados en Big Data – Introducción',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023a, marzo 23). Modelos matemáticos y estadísticos aplicados en Big Data – Introducción.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=eH2X2oWgggk',
    },
    {
      tema: 'Principales elementos de la estadística',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022b, octubre 26). Principales elementos de la estadística.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Ad5gxB9PhKQ',
    },
  ],
  glosario: [
    {
      termino: 'Agrupación de datos',
      significado:
        'Proceso de organizar datos en categorías o intervalos para facilitar su análisis.',
    },
    {
      termino: 'Amplitud de intervalos',
      significado:
        'Rango o tamaño de cada clase en una agrupación de datos cuantitativos.',
    },
    {
      termino: 'Análisis estadístico',
      significado:
        'Estudio detallado de datos mediante técnicas estadísticas para extraer conclusiones.',
    },
    {
      termino: 'Categorización',
      significado:
        'Clasificación de datos en grupos específicos según sus características.',
    },
    {
      termino: 'Clasificación',
      significado: 'Organización de datos o variables en grupos o tipos.',
    },
    {
      termino: 'Coherencia de datos',
      significado:
        'Consistencia en la organización de los datos para evitar errores en el análisis.',
    },
    {
      termino: 'Control de calidad',
      significado:
        'Procedimientos para asegurar la precisión y confiabilidad de los datos.',
    },
    {
      termino: 'Datos agrupados',
      significado:
        'Datos organizados en clases o intervalos, ideales para volúmenes grandes.',
    },
    {
      termino: 'Datos cualitativos',
      significado:
        'Datos que representan categorías o atributos sin valores numéricos.',
    },
    {
      termino: 'Datos cuantitativos',
      significado:
        'Datos numéricos que representan cantidades y permiten operaciones matemáticas.',
    },
    {
      termino: 'Escala de intervalo',
      significado:
        'Nivel de medición para variables cuantitativas sin un cero absoluto; permite suma y resta.',
    },
    {
      termino: 'Escala de medición',
      significado:
        'Tipo de escala utilizada para medir una variable, como nominal, ordinal, intervalo o razón.',
    },
    {
      termino: 'Escala nominal',
      significado:
        'Nivel de medición que clasifica datos en categorías sin orden ni jerarquía.',
    },
    {
      termino: 'Escala ordinal',
      significado:
        'Nivel de medición que organiza datos en categorías con un orden pero sin cuantificar las diferencias.',
    },
    {
      termino: 'Escala de razón',
      significado:
        'Nivel de medición con un cero absoluto que permite todas las operaciones matemáticas.',
    },
    {
      termino: 'Frecuencia',
      significado:
        'Número de veces que ocurre una categoría o valor en un conjunto de datos.',
    },
    {
      termino: 'Intervalo',
      significado: 'Rango de valores dentro de un conjunto de datos agrupados.',
    },
    {
      termino: 'Medición',
      significado:
        'Proceso de asignar valores a una variable de acuerdo con una escala específica.',
    },
    {
      termino: 'Variable independiente',
      significado:
        'Variable que se manipula para observar su efecto en otra variable dependiente.',
    },
    {
      termino: 'Variable dependiente',
      significado:
        'Variable cuyo valor depende de la manipulación de otra variable, llamada independiente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Batanero, C. (2001). Didáctica de la estadística. Granada: Universidad de Granada.',
      link: '',
    },
    {
      referencia:
        'Cochran, W. G. (1980). Técnicas de muestreo (3.ª ed.). México: CECSA.',
      link: '',
    },
    {
      referencia:
        'Hernández Sampieri, R., Fernández Collado, C., & Baptista Lucio, P. (2014). Metodología de la investigación (6.ª ed.). México: McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Martínez, J. (2004). Muestreo estadístico. Madrid: Alianza Editorial.',
      link: '',
    },
    {
      referencia:
        'Montgomery, D. C., & Runger, G. C. (2015). Probabilidad y estadística aplicada a la ingeniería (5.ª ed.). México: McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Scheaffer, R. L., Mendenhall, W., & Ott, R. L. (2007). Elementos de muestreo (6.ª ed.). México: Thomson.',
      link: '',
    },
    {
      referencia:
        'Triola, M. F. (2018). Estadística (12.ª ed.). México: Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Walpole, R. E., Myers, R. H., Myers, S. L., & Ye, K. (2012). Probabilidad y estadística para ingenieros (9.ª ed.). México: Pearson Educación.',
      link: '',
    },
  ],
}
