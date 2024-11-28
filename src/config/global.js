export default {
  global: {
    componenteFormativo: 'Las aleaciones y análisis en los metales preciosos',
    descripcionCurso:
      'Las aleaciones de metales preciosos, como oro y plata, son combinaciones que mejoran sus propiedades físicas y químicas. El análisis de estas aleaciones permite determinar su pureza y composición, lo que es fundamental en la joyería y la industria. Estos procesos garantizan calidad y autenticidad, además de influir en el valor del material, asegurando la confianza en el mercado.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
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
        titulo: 'Aleación del metal',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Soldadura',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'La fundición y las variables que definen la calidad de aleación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Depurantes y fundentes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Ensayos químicos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'El riesgo higiénico en la joyería',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Manejo de residuos',
        desarrolloContenidos: true,
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
        download: 'downloads/prueba.pdf',
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
      tema: 'Metales preciosos y aleaciones para joyería',
      referencia: 'Repositorio SENA',
      tipo: 'Video',
      link: 'https://youtu.be/echh5DT0IzA?si=vMgFe9AHVO6iJsT1  ',
    },
  ],
  glosario: [
    {
      termino: 'Aleación eutéctica',
      significado:
        'Como la solidificación de la aleación eutéctica se presenta a temperatura constante, su curva de enfriamiento sería la misma que la de un metal puro o cualquier aleación de fusión congruente; sin embargo, la solidificación eutéctica es incongruente, ya que hay una diferencia en composición entre el líquido y las fases.',
    },
    {
      termino: 'Cobre fosforoso',
      significado:
        'Aleación de cobre con un 10 % de fósforo, muy dura y quebradiza. Tiene una fractura típica; se utiliza técnicamente como medio de introducir fósforo en el cobre y en diversas aleaciones del mismo con objeto de procurar su desoxidación.',
    },
    {
      termino: 'Copela',
      significado:
        'son fabricadas de cemento y cenizas de hueso o magnesita, se utilizan para separar el oro y la plata del plomo que ha actuado como colector y además de otras impurezas metálicas que generalmente acompañan al botón auro argentífero.',
    },
    {
      termino: 'Copelación',
      significado:
        'la copelación es un proceso de oxidación a altas temperaturas por lo cual los metales nobles se separan de todas las impurezas o metales no nobles que pueden acompañarlos. Las impurezas (metales) se mezclan con el plomo sobre la copela y después de someterse a altas temperaturas y una atmosfera oxidante.',
    },
    {
      termino: 'Crisol de Arcilla',
      significado: 'este crisol sirve para fundir el mineral con el fundente.',
    },
    {
      termino: 'Dore',
      significado: 'botón auro argentífero, producto de la copelación.',
    },
    {
      termino: 'Encuartar',
      significado:
        'es la adición de plata que se hace para que producto de la copelación se obtenga un dore que sea soluble, para esto es necesario que este en relación (1: 3 oro: plata respectivamente).',
    },
    {
      termino: 'Escoria',
      significado:
        'sustancia vítrea, formada por las impurezas, que flota en el crisol de los hornos metalúrgicos.',
    },
    {
      termino: 'Fundente',
      significado:
        'es una mezcla de sales que se usan durante la fundición, estas sales son Litargirio, bórax, Carbonato de sodio los cuales se mezclan en proporciones diferentes dependiendo de la naturaleza de las impurezas que se trata de eliminar en la escoria.',
    },
    {
      termino: 'Llama neutra',
      significado:
        'Esta la obtenemos por medio de la mezcla de volúmenes iguales de oxígeno y acetileno se le conoce como destructora de óxidos metálicos, esta llama se utiliza para soldar aceros al carbono y cobre.',
    },
    {
      termino: 'Llama reductora',
      significado:
        'Se genera cuando hay exceso de acetileno, partiendo de la llama de acetileno puro, al aumentarse el porcentaje de oxígeno se hace visible una zona brillante, dardo, seguido de un penacho de acetileno de color verde pálido, que desaparece al igualarse las proporciones. Esta se utiliza para soldar hierro fundido, aluminio, plomo y soldaduras de recubrimientos duros.',
    },
    {
      termino: 'Llama oxidante',
      significado:
        'Hay un exceso de oxígeno que tiende a estrechar la llama a la salida de la boquilla. Esta llama se utiliza para soldar bronce y latón. Soldadura autógena. En este tipo de soldadura, la combustión se realiza por la mezcla de acetileno y oxígeno que arden a la salida de una boquilla (soplete). La soldadura autógena no requiere de aporte de material.',
    },
    {
      termino: 'Tiourea',
      significado:
        'a temperatura ambiente se presenta como un sólido inodoro, incoloro. Es un compuesto nocivo, peligroso para el medio ambiente, tóxico para la reproducción.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alcina B, J. (1989). Los metales en la joyería moderna. 2 ed. Barcelona: s.n. p. 65-124. Alvarado, R.(2011). Manual de Buenas Prácticas de Joyerías. Bolivia, Ed. Nitrance publicidad.Normas técnicas sectorial',
      link: 'http:// noticias.juridicas.com/base_datos/Admin/rd197-1988.html',
    },
    {
      referencia:
        'Aimme, L.G. (2010). Los metales tóxicos en joyería y bisutería. España.',
      link: '',
    },
    {
      referencia:
        'Alvarado, R.(2011). Manual de Buenas Prácticas de Joyerías. Bolivia, Ed. Nitrance publicidad.',
      link: '',
    },
    {
      referencia:
        'Alsina, Benavente (1989). Los metales en la joyería moderna. Ed.Alsina.',
      link: '',
    },
    {
      referencia: 'Codina, carles. (2000). La Joyería. Barcelona: Parramon.',
      link: '',
    },
    {
      referencia:
        'López, Aniceto. (2007). Metales preciosos: el oro. Córdoba: Real Academia de Córdoba.',
      link: '',
    },
    {
      referencia:
        'Montero simó, Rosa. riesgos higiénicos en el sector de la joyería. centro de seguridad e higiene en el trabajo de córdoba consejería de empleo y desarrollo tecnológico junta de andalucía.',
      link:
        'http://www.insht.es/InshtWeb/Contenidos/Documentacion/TextosOnline/Rev_ INSHT/2001/12/seccionTecTextCompl2.pdf',
    },
    {
      referencia:
        'Prevención de riesgos en el rubro de joyería y bisutería. subgerencia de capacitación y publicaciones.',
      link:
        'https://www.yumpu.com/es/document/view/14712509/prevencion-de-riesgos-en-el-rubro-dejoyeria-y-bisuteria-achs',
    },
    {
      referencia:
        'Real Decreto 197/1988, por el que se Aprueba el Reglamento de la ... Retrieved 12,2016, from ',
      link: 'http://legislacionespanola.leyderecho.org/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Leonor Bolívar Castaño',
          cargo: 'Experta temática',
          centro:
            'Centro de gestión administrativa y fortalecimiento empresarial - Regional Boyacá.',
        },
        {
          nombre: 'Pedro Nel Cabrera Vanegas',
          cargo: 'Diseñador gráfico',
          centro: 'Centro Comercio y Servicio - Regional Tolima.',
        },
        {
          nombre: 'Diana Katherine Osorio Useche',
          cargo: 'Diseñadora gráfica',
          centro: 'Centro Comercio y Servicio - Regional Tolima.',
        },
        {
          nombre: 'Ricardo palacio Peña',
          cargo: 'Asesor pedagógico',
          centro: 'Centro Comercio y Servicio - Regional Tolima.',
        },
        {
          nombre: 'Genny Carolina Mora Rojas',
          cargo: 'Guionista del equipo',
          centro: 'Centro Comercio y Servicio - Regional Tolima.',
        },
        {
          nombre: 'Jesús Bernardo Novoa Ortiz',
          cargo: 'Guionista del equipo',
          centro: 'Centro Comercio y Servicio - Regional Tolima.',
        },
        {
          nombre: 'Claudia Rocio Varón Buitrago',
          cargo: 'Líder del Equipo ',
          centro: 'Centro Comercio y Servicio - Regional Tolima.',
        },
        {
          nombre: 'Fabian Cuartas Donado',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Hernando Junior Strusberg Perez',
          cargo: 'Diseñador <em>web</em>',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carlo Andrés Díaz Pinto',
          cargo: 'Desarrollador <em>Fullstack</em>',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador de contenidos inclusivos y accesibles ',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles ',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validador y vinculador de recursos digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
