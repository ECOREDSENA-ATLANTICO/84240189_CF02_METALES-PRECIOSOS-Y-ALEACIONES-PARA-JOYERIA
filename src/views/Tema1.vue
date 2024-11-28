<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Aleación del metal
    
    p.text-bold.mb-5 Los metales nunca se trabajan absolutamente puros, por dos razones:

    .row.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/1.svg', alt='Imagen decorativa')
      .col-lg-8.align-content-center
        ul.lista-ul--color
          li.mb-5.d-flex 
            i.fas.fa-check-circle.bgr
            | Porque la pureza total, la perfección, no existe. A veces las impurezas son aparentemente insignificantes, de solo algunas partes por millón, pero suficientes para impedir que el metal sea químicamente puro.
          li.mb-5.d-flex 
            i.fas.fa-check-circle.bgr
            | No siempre los metales más puros son los que ofrecen mejores propiedades mecánicas o químicas. Generalmente, suele ser lo contrario. 

        p Al alearse dos o más metales, sus propiedades cambian, unas veces para empeorar y otras para mejorar, pero siempre cambian. 
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/2.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Todos los metales tienen un punto de fusión determinado, pero cuando nos referimos a aleaciones, suele haber un punto de fusión inicial y otro punto más alto donde se complementa la fusión. Estos puntos de fusión suelen estar situados entre los puntos de fusión del metal que funde a más grados y del que funde a menos grados. Sin embargo, existe un tipo de aleación llamado eutéctico, formado por unas proporciones críticas, cuyo punto de fusión queda por debajo del de todos los componentes. 
    
    p.mb-5 En esta oportunidad vamos a dividir la información sobre las aleaciones en dos grupos: aleaciones que contienen metales nobles y aleaciones que no los contienen.

    h3.bgr_1 Aleaciones que no contienen metales nobles 

    p.mt-4 Entre estas aleaciones se destacan las siguientes:
    p El bronce (cobre y estaño), el latón (cobre y zinc) y la alpaca (cobre, níquel y zinc) son aleaciones versátiles con aplicaciones industriales, decorativas y eléctricas por su resistencia y estética.
  
    .row
      .col-md-3
        figure
          img(src='@/assets/curso/temas/tema1/6.png', alt='Imagen de apoyo')
      .col-md-9.mb-4.mb-md-0.align-content-center
        h3 Bronce
        p.mb-0 El bronce es una aleación de cobre y estaño, conocida por su resistencia a la corrosión y durabilidad. Se utiliza en monedas, estatuas y componentes de maquinaria, siendo valorado tanto en artesanía como en la industria por su color dorado y propiedades mecánicas.

    .row.mb-3
      .col-auto
        figure
          img(src="@/assets/template/fri.svg", alt="alt")
      .col.p-0
        h4 El latón
    
    p El latón, a diferencia del bronce, se usa principalmente en bisutería, joyería y aleaciones para soldaduras y oro de color. Para preparar aleaciones, es esencial conocer las proporciones de cobre y zinc. En joyería, se recomienda usar únicamente latón compuesto de estos dos elementos, ya que otras variantes con hierro, plomo, aluminio o manganeso no son adecuadas para este propósito.

    SlyderA(tipo="b").bgr_3.mb-5
      .row.justify-content-center
        .col-md-7.mb-4.mb-md-0.align-content-center.text-white
          h3 Propiedades físicas 
          p.mb-0 El color varía según la proporción cobre /zinc 
          p.mb-0 50 al 66% de cobre……………amarillo fuerte 
          p.mb-0 66 al 75% de cobre……………amarillos pálidos 
          p.mb-0 75 al 86% de cobre……………amarillo rojizo 
          p.mb-0 86 al 98% de cobre……………rojo amarillento
        .col-md-3
          figure
            img(src='@/assets/curso/temas/tema1/9.png', alt='Imagen de apoyo')
      .row.justify-content-center
        .col-md-8.mb-4.mb-md-0.align-content-center
          h3.text-white Propiedades químicas 
          p.text-white El latón no es muy resistente frente a los ácidos sulfúricos y clorhídricos. Es estable frente a las bases, a excepción del amoniaco, es rápidamente atacado por el ácido nítrico. 
          p.text-bold.text-white Temperaturas de fusión y de colada 
          .tabla-a.color-acento-botones.bgr_6.mb-5.text-center 
            table
              thead
                tr.bgr_4
                  th COBRE/ZINC
                  th FUSION
                  th TEMP.DE COLADA
                  th DENSIDAD
              tbody.bgr_5
                tr
                  td 60/40
                  td 900 °C
                  td 1000 A 1020 °C
                  td 8,11
                tr
                  td 63/37
                  td 920 °C
                  td 1040 A 1060 °C
                  td 8,17
                tr
                  td 72/28
                  td 970 °C
                  td 1130 A 1150 °C
                  td 8,34
        .col-md-3.align-content-center
          figure
            img(src='@/assets/curso/temas/tema1/10.png', alt='Imagen de apoyo')
      .row.justify-content-center
        .col-md-8.mb-4.mb-md-0.align-content-center
          h3.text-white En bisutería también se utilizan los latones como
          p.mb-0.text-white.text-bold Tombak o tumbaga 
          p.text-white La tumbaga es un latón compuesto solo por cobre y zinc, cuyo contenido oscila entre el 80 y el 90%. 
          p.mb-0.text-white.text-bold Similor 
          p.text-white El similor no tiene una composición fija determinada. Existen investigaciones para encontrar una aleación con un color más o menos parecido al oro. Algunos son: 
 
          p.text-bold.text-white Temperaturas de fusión y de colada 
          .tabla-a.color-acento-botones.bgr_6.mb-5.text-center 
            table
              thead
                tr.bgr_4
                  th COBRE
                  th ESTAÑO
                  th ZINC
                  th NIQUEL
                  th ALUMINIO
                  th DENSIDAD
              tbody.bgr_5
                tr
                  td 920
                  td 80
                  td 
                  td 
                  td 
                  td 8,77
                tr
                  td 900
                  td 
                  td 
                  td 100
                  td 100
                  td 7,25
                tr
                  td 865
                  td 13 
                  td 122
                  td 
                  td
                  td 8,64
                tr
                  td 583
                  td
                  td 250
                  td 
                  td 
                  td 8,38
                tr
                  td 935
                  td 55
                  td
                  td
                  td
                  td 8,81
        .col-md-3.align-content-center
          figure
            img(src='@/assets/curso/temas/tema1/11.png', alt='Imagen de apoyo')
    
    LineaTiempoD.color-primario.mb-5
      .row(numero="1" titulo="Alpaca")
        .col-md-8.mb-4.mb-md-0
          p La alpaca plateada o sin platear ha sido muy utilizada en la fabricación de cuberterías y vajillas tratando de sustituir la plata.
          p Siempre que tengamos que utilizar algún tipo de alpaca, si podemos elegir, debemos utilizar la alpaca laminada. Por regla general, los metales laminados siempre suelen ofrecer mayores garantías en su composición que los que solamente han sido fundidos. 
          p La alpaca es conocida por diferentes nombres comerciales tales como: plata nueva, plata alemana, níquel silver, argentan, etc.      
        .col-md-4
          figure
            img(src="@/assets/curso/temas/tema1/12.png", alt="alt")
      .row(numero="2" titulo="Composición")
        .col-md-8.mb-4.mb-md-0
          p Níquel: .............. del 12 al 22 % 
          p Cobre: .............. del 60 al 65% 
          p Zinc: ................... del 18 al 23 %
     
        .col-md-4
          figure
            img(src="@/assets/curso/temas/tema1/13.png", alt="alt")
      .row(numero="3" titulo="Propiedades")
        .col-md-8.mb-4.mb-md-0
          p El color depende de la composición, especialmente de la cantidad de níquel 

          P.mb-0 33% Níquel........ azul blanco 
          P.mb-0 27% Níquel ........ Blanco de níquel 
          P.mb-0 22% Níquel ........ algo más blanco que el anterior 
          P.mb-0 18% Níquel ........ Blanco 
          P.mb-0 10% Níquel ........ Blanco grisáceo 
          P.mb-0 7 % Níquel ........ Blanco amarillento
     
        .col-md-4
          figure
            img(src="@/assets/curso/temas/tema1/14.png", alt="alt")
    
    .bg_img
      .row.mb-3
        .col-auto
          figure
            img(src="@/assets/template/fri.svg", alt="alt")
        .col.p-0
          h4 Peltre
      
      p En principio el peltre era una aleación que contenía estaño y plomo en proporción de cuatro a seis veces de estaño por una de plomo. Actualmente se ha eliminado el plomo, mayormente porque daba un color oscuro a la aleación. Sustituyéndolo por cobre, antimonio o zinc. 
      p Aprovechando su bajo punto de fusión, suele utilizarse en bisutería para piezas de fundición centrifugada en moldes de caucho o de siliconas. 

      .row.mb-5
        .col-lg-7
          .tabla-a.color-acento-botones.bgr_6.mb-3.text-center
            table
              thead
                tr.bgr_4
                  th ESTAÑO
                  th ANTIMONIO
                  th COBRE
                  th DENSIDAD
              tbody.bgr_5
                tr
                  td 94
                  td 6
                  td 
                  td 7,24                 
                tr
                  td 96
                  td 
                  td 0,4
                  td 7,28                 
                tr
                  td 92
                  td 8 
                  td 
                  td 7,22                
                tr
                  td 91
                  td 7 
                  td 2,0
                  td 7,26
                tr
                  td 92
                  td 6
                  td 2,0 
                  td 7,26
                tr
                  td 93,7
                  td 3,8
                  td 2,5 
                  td 7,28
                tr
                  td 90,73
                  td 7,81
                  td 1,46 
                  td 7,24
                tr
                  td 90,57
                  td 9,4
                  td 0,03 
                  td 7,22
                tr
                  td 88,4
                  td 8,7
                  td 2,9 
                  td 7,26
                tr
                  td 92,5
                  td 4,5
                  td 3,0 
                  td 7,29
                tr
                  td 93
                  td 5,4
                  td 1,6
                  td 7,26

          p Los puntos de fusión de estas aleaciones quedan comprendidos entre los 200 y los 250 °C aproximadamente.
                  
        .col-lg-5
          figure
            img(src="@/assets/curso/temas/tema1/16.png", alt="alt")  
    
    .bg_img_1
      .row.mb-3
        .col-auto
          figure
            img(src="@/assets/template/fri.svg", alt="alt")
        .col.p-0
          h4 Zamak
      
      p El zamak es una aleación de zinc que incluye aluminio, magnesio y cobre. Conocido por su resistencia y durabilidad, se utiliza en bisutería, componentes automotrices y productos de consumo. Su fácil moldeabilidad permite obtener acabados detallados y atractivos.

      .row.mb-5
        .col-lg-5  
          figure
            img(src="@/assets/curso/temas/tema1/17.png", alt="alt")
        .col-lg-7 
          p Aleaciones de zinc para fundición por inyección 
          .tabla-a.color-acento-botones.bgr_6.mb-3.text-center
            table
              thead
                tr.bgr_4
                  th ZINC
                  th ALUMINIO
                  th COBRE
              tbody.bgr_5
                tr
                  td 91 al 94 
                  td 3,5 al 5,0
                  td 2,5 al 4,0               
                tr
                  td 93,4 al 95,8
                  td 3,5 al 4,1
                  td 0,75 al 2,5                
                tr
                  td 95,9 al 96,5
                  td 3,4 al 4,1 
                  td 
          p Las aleaciones de zinc, conocidas como Zamak, Zalmuc y Mazac, son comunes en bisutería, reemplazando al peltre. Estas aleaciones ofrecen mayor dureza, lo que facilita el pulido y acabado. Además, su punto de fusión es más elevado, oscilando entre 380 y 435°C. Esto requiere el uso de moldes vulcanizados con siliconas, ya que son los únicos capaces de soportar estas temperaturas al trabajar con las aleaciones de zinc en la fabricación de piezas
    
    .row.mb-3
      .col-auto
        figure
          img(src="@/assets/template/fri.svg", alt="alt")
      .col.p-0
        h4 Aleaciones con metales preciosos 
    
    p Como hemos venido hablando los metales preciosos más trabajados en la joyería son el oro seguido de la plata y el platino. Durante mucho tiempo el oro fue el único metal disponible cuyo brillo permanecía inalterable a través del tiempo. 
    
    .cajon.color-acento-botones.p-4.mb-4
      p.mb-0 Al principio interesaba más el aspecto del oro que sus verdaderas propiedades mecánico, se hicieron experimentos para obtener oro de diferentes colores y, efectivamente, se consiguieron tonalidades exóticas que nunca se han podido trabajar por no reunir un mínimo de propiedades mecánicas indispensables. 

    .row.mb-5
      .col-lg-7
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex
            .lista-ol--cuadro__vineta.bgr_6.d-
              span 1
            | Así pues, la aleación del oro con el aluminio produce aleaciones de color violeta.
          li.d-flex
            .lista-ol--cuadro__vineta.bgr_6.d-
              span 2
            | El oro con el hierro, según las proporciones, puede dar tonos, pardo claro, pardo oscuro o pardo azulado.
          li.d-flex
            .lista-ol--cuadro__vineta.bgr_6.d-
              span 3
            | El oro y la plata dan tonos de color verdosos, también se obtienen colores verdosos con aleaciones oro/plata/cadmio y oro/plata/cobre e incluso con oro/cobre/plata/cadmio. 
          li.d-flex
            .lista-ol--cuadro__vineta.bgr_6.d-
              span 4
            | Con aleaciones oro/plata/cobre se consiguen colores amarillos fuertes.
          li.d-flex
            .lista-ol--cuadro__vineta.bgr_6.d-
              span 5
            | Oro/plata/cobre da el color “rosé”.
          li.d-flex
            .lista-ol--cuadro__vineta.bgr_6.d-
              span 6
            | El color rosado americano, también llamado Hamilton, se consigue con aleaciones oro / plata/cobre/níquel/zinc. 
          li.d-flex
            .lista-ol--cuadro__vineta.bgr_6.d-
              span 7
            | El color rojo con oro/cobre 
          li.d-flex
            .lista-ol--cuadro__vineta.bgr_6.d-
              span 8
            | El oro blanco, con aleaciones en las que interviene el níquel, el paladio o ambos al mismo tiempo.
      .col-lg-5.align-content-center
        figure
          img(src="@/assets/curso/temas/tema1/18.png", alt="alt")
    
    h3.bgr_1 Oro de Color 750 milésimas (18 kilates) 

    p.mb-5.mt-5 Gracias a las propiedades del cobre y de la plata, estas aleaciones de 750 milésimas o 18 kilates, pueden tener desde un color verde hasta un rosa pasando por el amarillo. Si las 250 milésimas de aleación con todas de plata, el color será verde. 

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/19.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Si las 250 milésimas de aleación son todas en cobre, el color será rosa, rojo o rosé, ya que se emplean las tres denominaciones. Entre estos dos extremos, existe una amplia gama de tonalidades que, según la moda, en determinado momento se emplean más unas que otras. La gama de colores, comercialmente, suele ser la siguiente: oro rojo, oro rosa, oro inglés, oro amarillo y oro verde. Aunque las aleaciones 750 milésimas suelen ser ternarias oro/plata/cobre, algunas veces se modifican sus propiedades por medio de adiciones de níquel o de zinc. 
    
    .titulo-sexto.color-acento-contenido
      h5 Tabla 1
      span <em>Oro verde</em>
    
    .tabla-a.color-acento-botones.bgr_6.mb-5.text-center
      table
        thead
          tr.bgr_4
            th ORO
            th PLATA
            th COBRE
            th DENSIDAD
            th OBSERVACION
            th FUSION
        tbody.bgr_5
          tr
            td 750
            td 250
            td 
            td 15,95
            td Verde máx.
            td 1039-1076              
          tr
            td 750
            td 205
            td 45
            td 15,76
            td Menos verde
            td                
          tr
            td 750
            td 188 
            td 62
            td 15,69
            td Menos verde
            td

    .row.justify-content-center.mb-5
      .col-lg-8 
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2
          span <em>Oro amarillo claro</em>
        .tabla-a.color-acento-botones.bgr_6.mb-3.text-center
          table
            thead
              tr.bgr_4
                th ORO
                th PLATA
                th COBRE
                th DENSIDAD
                th FUSION
            tbody.bgr_5
              tr
                td 750
                td 161
                td 89
                td 15,58
                td 895-920            
              tr
                td 750
                td 150
                td 100
                td 15,76
                td                
              tr
                td 750
                td 140 
                td 110
                td 15,49
                td
        p Estas aleaciones son algo más duras que las de color verde. Su dureza va en relación con la cantidad de cobre que contiene. Las que contienen más cobre, son las de mayor dureza. 
    
    .titulo-sexto.color-acento-contenido
      h5 Tabla 3
      span <em>Oro amarillo</em>
    
    .tabla-a.color-acento-botones.bgr_6.mb-3.text-center
      table
        thead
          tr.bgr_4
            th ORO
            th PLATA
            th COBRE
            th ZINC
            th DENSIDAD
            th FUSION
        tbody.bgr_5
          tr
            td 750
            td 130
            td 120
            td 
            td 15,45
            td               
          tr
            td 750
            td 124
            td 126
            td 
            td 15,43
            td 885-895             
          tr
            td 750
            td 120 
            td 30
            td 
            td 15,41
            td
          tr
            td 750
            td 115 
            td 135
            td 
            td 15,39
            td
          tr
            td 750
            td 115 
            td 134
            td 
            td 15,39
            td
    
    p.mb-5 Estas aleaciones son más duras que las de oro amarillo claro y como en el caso anterior, su dureza está en proporción con la cantidad de cobre que contienen.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4
          span <em>Oro rosé</em>
    
        .tabla-a.color-acento-botones.bgr_6.mb-3.text-center
          table
            thead
              tr.bgr_4
                th ORO
                th PLATA
                th COBRE
                th DENSIDAD
                th FUSION
            tbody.bgr_5
              tr
                td 750
                td 110
                td 140
                td 15,37
                td 895-920              
              tr
                td 750
                td 100
                td 150
                td 15,33
                td         
              tr
                td 750
                td 91
                td 159
                td 15,30
                td 880-885
              tr
                td 750
                td 85 
                td 165
                td 15,28
                td 
              tr
                td 750
                td 83
                td 167
                td 15,27
                td 
              tr
                td 750
                td 80
                td 170
                td 15,26
                td 
              tr
                td 750
                td 63
                td 187
                td 15,19
                td 
        p Estas aleaciones son ligeramente más duras que las de oro amarillo. Son de uso general en joyería y se trabajan bien en frio.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 5
      span <em>Oro rojo</em>
    
    .tabla-a.color-acento-botones.bgr_6.mb-3.text-center
      table
        thead
          tr.bgr_4
            th ORO
            th PLATA
            th COBRE
            th ZINC
            th DENSIDAD
            th FUSION
        tbody.bgr_5
          tr
            td 750
            td 58
            td 176
            td 16
            td 15,07
            td              
          tr
            td 750
            td 50
            td 200
            td 
            td 15,14
            td                
          tr
            td 750
            td 45 
            td 205
            td 
            td 15,12
            td 890-895
          tr
            td 750
            td 30 
            td 220
            td 
            td 15,07
            td 
          tr
            td 750
            td 23 
            td 227
            td 
            td 15,04
            td 
          tr
            td 750
            td 15 
            td 235
            td 
            td 15,01
            td 
          tr
            td 750
            td  
            td 250
            td 
            td 14,95
            td 
    
    p.mb-5 Estas aleaciones son más utilizadas para desarrollo de cadenas a máquina.

    h3.bgr_1 El oro blanco  

    .row.mb-5.mt-5
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/tema1/20.png", alt="alt")
      .col-lg-9.align-content-center
        p A consecuencia de la subida de los costos y, porque no decirlo, a la difícil tecnología del platino, cada vez ha ido tomando un mayor incremento las aleaciones de oro blanco. 
        p Cuando se hace referencia a la difícil tecnología del platino, se habla mayormente a su elevado punto de fusión, a su aleación prácticamente única, ya que se trabaja solo a 950 milésimas, y a la facilidad con que se vuelve frágil.  El oro blanco no ha sido la solución a los problemas, pero por lo menos permite elegir entre un cierto número de posibilidades.
        p.mb-0 Para el oro blanco existen tantas leyes como para el oro de color. Las aleaciones más utilizadas son las de 750 y 585 milésimas. 
    
    p.text-bold Existen 3 tipos de aleaciones para oro blanco: 

    .row.mb-5.p-4.bgr_2
      .col-lg-9.align-content-center
        ul.lista-ul--color
          li.d-flex 
            i.fas.fa-check-circle.bgr
            p.text-white.mb-0 Las que contienen níquel y no contienen paladio 
          li.d-flex 
            i.fas.fa-check-circle.bgr
            p.text-white.mb-0 Las que contienen paladio y no contienen níquel
          li.d-flex 
            i.fas.fa-check-circle.bgr
            p.text-white.mb-0 Las que son una mezcla de las dos anteriores Las aleaciones que contienen níquel son relativamente duras y presentan un color poco atractivo lo que hace poco menos que imprescindible un acabado con baño de Rodio (Rh). Y tienen una tendencia a romperse. Las aleaciones de oro blanco al paladio son más caras que las anteriores, pero si en realidad estamos tratando de sustituir el platino esta diferencia de precio no es tan importante, ya que tienen un buen color, similar al del platino, y son blandas y fáciles de trabajar.
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/tema1/21.png", alt="alt")
    
    .row.mb-5.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6
          span <em>Aleaciones de oro blanco de 750 milésimas (18 kilates) SIN NIQUEL  	</em>
    
        .tabla-a.color-acento-botones.bgr_6.mb-3.text-center
          table
            thead
              tr.bgr_4
                th ORO
                th PLATA
                th COBRE
                th PALADIO
                th FUSION
            tbody.bgr_5
              tr
                td 750
                td 125
                td 
                td 125
                td 16,31             
              tr
                td 750
                td 125
                td 50
                td 75
                td 15,95              
              tr
                td 750
                td  
                td 
                td 250
                td 16,68

        p Estas aleaciones no suelen plantear ningún problema. Su principal inconveniente es el precio, debido al alto contenido de paladio.      
    
    .titulo-sexto.color-acento-contenido
      h5 Tabla 7
      span <em>Con níquel y paladio</em>
    
    .tabla-a.color-acento-botones.bgr_6.mb-5.text-center
      table
        thead
          tr.bgr_4
            th ORO
            th PLATA
            th PALADIO
            th COBRE
            th ZINC
            th NIQUEL
            th DENSIDAD
            th FUSION
        tbody.bgr_5
          tr
            td 750
            td 150
            td 100
            td 35
            td 1
            td 9
            td 16,03
            td 1020-1150            
          tr
            td 750
            td 
            td 150
            td 50
            td 
            td 50
            td 15,92
            td 1092-1150               
          
    p.text-bold.mb-5 Las aleaciones más indicadas para cadenas y fundición a la cera perdida son:

    .row.mb-3
      .col-auto
        figure
          img(src="@/assets/template/fri.svg", alt="alt")
      .col.p-0
        h4 Las aleaciones más indicadas.
    
    p Las dos aleaciones son para usos diversos, pero la primera es más indicada para cadenas y fundición a la cera perdida.


    .tarjeta.bgr_7.p-4
      //- PasosB debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      PasosB.color-acento-botones
        .row(titulo="").justify-content-center
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/22.png', alt='Imagen de apoyo')
          .col-md-6.mb-4.mb-md-0.text-white.align-content-center
            h3 Aleaciones de platino 
            p La ley del platino para joyería es de 950 milésimas y naturalmente con solo 50 milésimas de aleación son pocas las cosas que se pueden hacer. En la práctica, el platino para joyería se alea solo con cobre y, en algunos casos en los que se requiere una mayor dureza, se alea con iridio o con rutenio.
            p La primera aleación es prácticamente la única que se trabaja en Joyería, la segunda aleación es semidura, y la siguientes son aleaciones duras.
        .row(titulo="").justify-content-center
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/23.png', alt='Imagen de apoyo')
          .col-md-6.mb-4.mb-md-0.text-white.align-content-center
            h3 Aleaciones de plata  
            p La platería utiliza aleaciones de 925 y 800 milésimas, siendo la de 925 milésimas, conocida como "Sterling Silver", la más común para exportación. La plata se alea con metales de bajo punto de fusión, como estaño, plomo, indio y zinc, pero el cobre es el más adecuado para mejorar sus propiedades. A menudo, se añaden níquel y zinc para aumentar la dureza. Las aleaciones de plata tienden a absorber oxígeno, lo que dificulta la formación de aleaciones compactas. Para reducir el oxígeno antes de vaciar las aleaciones, se puede bajar la temperatura o usar aditivos reductores, como cobre fosforoso en una proporción de 0.5 g por kilo de plata. Este aditivo no es recomendable para aleaciones con níquel. Además, para evitar porosidades, es mejor vaciar las aleaciones de plata utilizando una llama reductora.
        .row(titulo="").justify-content-center
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/24.png', alt='Imagen de apoyo')
          .col-md-6.mb-4.mb-md-0.align-content-center
            h3.text-white Las aleaciones más corrientes de plata 
            .tabla-a.color-acento-botones.bgr_6.mb-5.text-center
              table
                thead
                  tr.bgr_4
                    th PLATA
                    th COBRE
                    th DENSIDAD
                tbody.bgr_5
                  tr
                    td 925
                    td 75
                    td 10,35        
                  tr
                    td 800
                    td 200
                    td 10,13
            h3.text-white Cuando se precisan aleaciones más duras, suele prepararse previamente la siguiente liga: 
            .tabla-a.color-acento-botones.bgr_6.mb-5.text-center
              table
                thead
                  tr.bgr_4
                    th COBRE
                    th ZINC
                    th NIQUEL
                    th LATON 63%
                    th ALPACA 50%
                    th DENSIDAD
                tbody.bgr_5
                  tr
                    td 690
                    td 159
                    td 151
                    td 
                    td 
                    td 8,58       
                  tr
                    td 388
                    td 8
                    td 
                    td 
                    td 604
                    td 8,58
                  tr 
                   td 374
                   td 
                   td
                   td 22
                   td 604
                   td 8,58
        .row(titulo="").justify-content-center
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/25.png', alt='Imagen de apoyo')
          .col-md-6.mb-4.mb-md-0.align-content-center
            h3.text-white Aleaciones De plata “inoxidable”
            p.text-white Como ya se indicaba anteriormente uno de los mayores problemas de la plata es que se oxida con mucha facilidad. Un punto de partida para el que quiere experimentar puede ser el siguiente: 
            .tabla-a.color-acento-botones.bgr_6.mb-3.text-center
              table
                thead
                  tr.bgr_4
                    th INDIO
                    th ESTAÑO
                    th ANTIMONIO
                    th DENSIDAD
                tbody.bgr_5
                  tr
                    td 437
                    td 125
                    td 438
                    td 7,0

            p.text-white Primero se prepara la liga, según la fórmula arriba indicada y, posteriormente, se toma la cantidad que se crea conveniente y se alea con la plata fina. Pueden realizarse pruebas con títulos diferentes.       
                  
            
      
        

    

      
        

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
