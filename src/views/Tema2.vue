<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Soldadura
    
    .row.mb-3(data-aos="fade-right")
      .col-auto
        figure
          img(src="@/assets/template/fri.svg", alt="alt")
      .col.p-0
        h4 Aleaciones con metales preciosos 
    
    .row.mb-5.justify-content-center
      .col-md-6.col-lg-3.align-content-center.mb-3
        figure
          img(src="@/assets/curso/temas/tema2/1.png", alt="alt")
      .col-lg-9(data-aos="fade-left")
        p La soldadura es la unión de dos piezas metálicas mediante la aportación de otro metal o aleación de punto de fusión más bajo que el de las partes a soldar. 
        p Aunque existe una enorme variedad de soldaduras, las podemos dividir en dos grandes grupos: 
        ul.lista-ul--color
          li.d-flex 
            i.fas.fa-check-circle.bgr
            | Soldaduras dulces o punto de fusión bajo. 
          li.d-flex 
            i.fas.fa-check-circle.bgr
            | Soldadura duras o punto de fusión alto Al preparar una soldadura, sin tener en cuenta si se trata de un tipo o de otro, es indispensable.
          li.d-flex 
            i.fas.fa-check-circle.bgr
            | Que la mezcla de la aleación sea completamente homogénea. 
          li.d-flex 
            i.fas.fa-check-circle.bgr
            | Que los metales empleados sean puros, si es posible electrolítico.
    
    SlyderA(tipo="b").bgr_3.mb-5
      .row.justify-content-center
        .col-lg-7.mb-4.mb-md-0.align-content-center.text-white
          h3 Soldaduras dulces o de bajo punto de fusión. 
          p En lo que refiere joyería, estas soldaduras solo deben utilizarse cuando no queda otra alternativa. La mayoría de ellas contienen plomo y estaño, que pueden contaminar los metales a soldar, sobre todo el plomo al que podemos considerar el peor enemigo de los metales preciosos. 
        .col-md-8.col-lg-3.align-content-center
          figure
            img(src='@/assets/curso/temas/tema2/3.png', alt='Imagen de apoyo')
      .row.justify-content-center
        .col-lg-7.mb-4.mb-md-0.align-content-center.text-white
          h3.text-white Soldaduras duras.  
          p.text-white Este es un tipo de soldadura totalmente distinta de las anteriores y que distribuiremos en: 
          ul.lista-ul--color
            li.d-flex 
              i.fas.fa-check-circle.bgr
              p.text-white.mb-0 Aleaciones de cobre para soldar. 
            li.d-flex 
              i.fas.fa-check-circle.bgr
              p.text-white.mb-0 Aleaciones de plata para soldar. 
            li.d-flex 
              i.fas.fa-check-circle.bgr
              p.text-white.mb-0 Aleaciones de oro de color para soldar. 
            li.d-flex 
              i.fas.fa-check-circle.bgr
              p.text-white.mb-0 Aleaciones para soldar oro blanco. 
            li.d-flex 
              i.fas.fa-check-circle.bgr
              p.text-white.mb-0 Aleaciones para soldar platino.
        .col-md-8.col-lg-3.align-content-center(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/tema2/4.png', alt='Imagen de apoyo')
      .row.justify-content-center
        .col-lg-7.mb-4.mb-md-0.align-content-center.text-white.text-white
          h3 Aleaciones de cobre para soldar  
          p Estas aleaciones funden entre los 780 y los 1083 °C. Se utilizan mayormente en la industria y no tienen mayor aplicabilidad en la joyería. 
        .col-md-8.col-lg-3.align-content-center
          figure
            img(src='@/assets/curso/temas/tema2/5.png', alt='Imagen de apoyo')
      .row.justify-content-center
        .col-lg-7.mb-4.mb-md-0.align-content-center.text-white
          h3.text-white Soldadura en plata  
          p.text-white Se emplean para soldar plata, cobre, alpaca, latón, etc. 
          p.text-white Generalmente se trata de aleaciones:
          ul.lista-ul--color
            li.d-flex 
              i.fas.fa-check-circle.bgr
              p.text-white.mb-0 BINARIAS Plata/cobre Plata/cadmio. 
            li.d-flex 
              i.fas.fa-check-circle.bgr
              p.text-white.mb-0 TERNARIAS Plata/cobre/zinc.  
            li.d-flex 
              i.fas.fa-check-circle.bgr
              p.text-white.mb-0 CUATERNARIAS Plata/cobre/zinc/cadmio Plata/cobre/zinc/estaño Los intervalos de fusión suelen estar comprendidos entre los 600 y los 850°C.
        .col-md-8.col-lg-3.align-content-center
          figure
            img(src='@/assets/curso/temas/tema2/6.png', alt='Imagen de apoyo')
    
    .row.mb-5.justify-content-center
      .col-xl-7
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8
          span <em>Binarias</em>
      
        .tabla-a.color-acento-botones.bgr_6.mb-5.text-center
          table
            thead
              tr.bgr_4
                th PLATA
                th COBRE
                th FUSIÓN
            tbody.bgr_5
              tr
                td 800
                td 200
                td         
              tr
                td 720
                td 280
                td 780
              tr
                td 666
                td 334
                td 

        .titulo-sexto.color-acento-contenido
          h5 Tabla 9
          span <em>Todas son fuertes</em>
      
        .tabla-a.color-acento-botones.bgr_6.mb-5.text-center
          table
            thead
              tr.bgr_4
                th PLATA
                th CADMIO
                th FUSIÓN
            tbody.bgr_5
              tr
                td 700
                td 300
                td         
              tr
                td 666
                td 334
                td 
              tr
                td 600
                td 334
                td 
      .col-md-10.col-xl-5.align-content-center(data-aos="flip-right")
        figure
          img(src='@/assets/curso/temas/tema2/7.png', alt='Imagen de apoyo')
    
    div(data-aos="fade-right")
      h3.bgr_1 Ternarias 

    p.mt-5 Son las más utilizadas en la joyería, en el siguiente cuadro se hace referencia a la sugerencia de utilizar las aleaciones con latón, no obstante, es imprescindible conocer exactamente de qué porcentaje es el latón que se está utilizando y estar seguro de que no contiene impurezas.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 10
      span <em>Ternaria</em>
  
    .tabla-a.color-acento-botones.bgr_6.mb-5.text-center.pst_1
      table
        thead
          tr.bgr_4
            th PLATA
            th COBRE
            th ZINC
            th LATON 70 %
            th FUSIÓN °C
            th OBSERVACION
        tbody.bgr_5
          tr
            td 825
            td 45
            td     
            td 130
            td
            td Para aceros    
          tr
            td 800
            td 117
            td 
            td 83
            td
            td Fuerte
          tr
            td 800
            td 67
            td 
            td 133
            td 721-810
            td Fuerte
          tr
            td 750
            td 84
            td 
            td 166
            td 
            td Mediana
          tr
            td 700
            td 50
            td 
            td 250
            td 
            td Mediana
          tr
            td 687
            td 
            td 250  
            td 63
            td 
            td Blanda
    
    .titulo-sexto.color-acento-contenido
      h5 Tabla 11
      span <em>Cuaternarias</em>
  
    .tabla-a.color-acento-botones.bgr_6.mb-5.text-center
      table
        thead
          tr.bgr_4
            th PLATA
            th COBRE
            th ZINC
            th CADMIO
            th LATON 70 %
            th FUSIÓN
        tbody.bgr_5
          tr
            td 750
            td 83
            td 83   
            td 84
            td
            td    
          tr
            td 750
            td 
            td 48
            td 84
            td 118
            td 
          tr
            td 500
            td 150
            td 170
            td 180
            td 
            td 626-635
          tr
            td 500
            td 
            td 106
            td 180
            td 214
            td 626-635
          tr
            td 200
            td 450
            td 300
            td 50
            td 
            td 615-815
          tr
            td 200
            td 
            td 108  
            td 50
            td 642
            td 615-815
    
    .row.mb-5.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 12
          span <em>Cuaternarias completas</em>
        .tabla-a.color-acento-botones.bgr_6.mb-5.text-center
          table
            thead
              tr.bgr_4
                th PLATA
                th COBRE
                th ZINC
                th CADMIO
                th LATON 70 %
            tbody.bgr_5
              tr
                td 570
                td 275
                td 115   
                td 40
                td   
              tr
                td 570
                td 7
                td
                td 40
                td 383
              tr
                td 400
                td 140
                td 60
                td 400
                td 
              tr
                td 400
                td 
                td 
                td 400
                td 200
    
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Soldaduras de oro de color").justify-content-center
        .col-md-4.col-xl-4
          figure
            img(src='@/assets/curso/temas/tema2/8.png', alt='Imagen de apoyo')
        .col-xl-8.mb-4.mb-md-0.align-content-center
          h4 Soldaduras de oro de color.
          p Para evitar rebajar el título de la pieza en la que se está trabajando, es recomendable emplear siempre soldaduras del mismo título, aunque de composición adecuada para obtener un punto de fusión más bajo que el de las partes a soldar. También es importante que las soldaduras tengan un color lo más parecido posible al metal que tiene que soldar.
          p.text-bold Soldadura de oro de color
          .tabla-a.color-acento-botones.bgr_6.mb-5.text-center
            table
              thead
                tr.bgr_4
                  th ORO
                  th PLATA
                  th COBRE
                  th ZINC
                  th LATON 70 %
                  th CADMIO
                  th FUSIÓN °C
              tbody.bgr_5
                tr
                  td 750
                  td 95
                  td 115   
                  td 40
                  td  
                  td
                  td 840  
                tr
                  td 750
                  td 95
                  td 22
                  td 
                  td 133
                  td 
                  td 840
                tr
                  td 750
                  td 160
                  td 88
                  td 2
                  td 
                  td 
                  td
                tr
                  td 750
                  td 160
                  td 72
                  td 
                  td 18
                  td 
                  td
                tr
                  td 750
                  td 50
                  td 130
                  td 50 
                  td 
                  td 20
                  td
                tr
                  td 750
                  td 
                  td 200
                  td 
                  td 
                  td 50
                  td
      .row(titulo="Soldaduras Oro Blanco").justify-content-center
        .col-md-4.col-xl-4
          figure
            img(src='@/assets/curso/temas/tema2/9.png', alt='Imagen de apoyo')
        .col-xl-8.mb-4.mb-md-0.align-content-center
          h4 Soldaduras Oro Blanco
          p Al trabajar con oro blanco, suelen utilizarse dos soldaduras, una fuerte y otra más tierna. Cuando se habla de oro blanco no se puede generalizar ya que existen una gran variedad de aleaciones del mismo muy diferentes entre sí. 
          p En realidad, las soldaduras especiales para oro blanco han perdido bastante interés. Actualmente, casi todas las piezas fabricadas en oro blanco acaban terminadas con un baño de rodio que unifica totalmente el color. El baño de rodio es muy difícil que, a través de los años desaparezca de piezas que no tengan un roce excesivo.
          p La aleación para oro blanco tiene que ser de la misma que se ha utilizado para preparar el oro blanco que se pretende dar.

          p.text-bold Aleación de más de 750 Milésimas (+ de 18k) 
          .tabla-a.color-acento-botones.bgr_6.mb-5.text-center
            table
              thead
                tr.bgr_4
                  th ORO
                  th NIQUEL
                  th ZINC
              tbody.bgr_5
                tr
                  td 812
                  td 98
                  td 90   
                tr
                  td 800
                  td 104
                  td 90
          
          p.text-bold Aleaciones de 750 milésimas (18 k) 
          .tabla-a.color-acento-botones.bgr_6.mb-5.text-center
            table
              thead
                tr.bgr_4
                  th ORO
                  th PLATA
                  th CADMIO
                  th ALEACION PARA ORO BLANCO
              tbody.bgr_5
                tr
                  td 700
                  td 120 
                  td 30
                  td 100   
    
      .row(titulo="Soldaduras para platino").justify-content-center
        .col-md-4.col-xl-4
          figure
            img(src='@/assets/curso/temas/tema2/10.png', alt='Imagen de apoyo')
        .col-xl-8.mb-4.mb-md-0.align-content-center
          h4 Soldaduras para platino
          p Las soldaduras más sólidas para el platino son la autógena y la de forjado en caliente. En el primer caso se interpone una delgada lámina de platino del mismo título que el que se trabajó, entre las partes a soldar y, concentrando la llama oxhídrica en la plaquita. Se alcanza el punto de fusión y se rellena el hueco correspondiente. El otro procedimiento consiste en calentar al rojo blanco las partes que se pretenden unir, sobreponerlas y se golpean con un martillo. 
          p Como se observa son dos prácticas que, aunque muy sólidas, son difíciles de llevar a la práctica. Por lo que hay que recurrir a otras aleaciones con un punto de fusión más bajo.
          p En algunos países, las mismas firmas que venden el platino, venden las soldaduras preparadas y los precios suelen estar muy ajustados al valor real. En estos casos no vale la pena desarrollar nuevas aleaciones, ya que se compran preparadas. Igualmente, para su conocimiento se facilitan algunas fórmulas de soldadura de platino más utilizadas. 


          p.text-bold Soldadura de platino
          .tabla-a.color-acento-botones.bgr_6.mb-5.text-center
            table
              thead
                tr.bgr_4
                  th PLATINO
                  th ORO
                  th PLATA
                  th COBRE
                  th PALADIO
                  th FUSIÓN
              tbody.bgr_5
                tr
                  td 900
                  td 100
                  td 
                  td
                  td
                  td  
                tr
                  td 620
                  td 
                  td 226
                  td 
                  td 154
                  td   
                tr
                  td 333
                  td 333
                  td 334
                  td 
                  td 
                  td    
                tr
                  td 333
                  td 
                  td 667
                  td 
                  td 
                  td 1230   
                tr
                  td 270
                  td 
                  td 730
                  td 
                  td 
                  td 1160   
                tr
                  td 
                  td 782  
                  td 
                  td 
                  td 218
                  td           
              
  
    

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
