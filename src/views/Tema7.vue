<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Manejo de residuos
    
    .row.mb-5.justify-content-center
      .col-md-8.col-xl-5.mb-3(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema7/1.png", alt="alt")
      .col-xl-7
        p Es muy difícil estandarizar y cuantificar la problemática ambiental en el sector de la joyería, lo cual puede adjudicarse principalmente a la complejidad y heterogeneidad propias de esta actividad productiva.
        p En las actividades de refinación y joyería se utilizan una gran variedad de sustancias y compuestos químicos en las operaciones de afinación, procesamiento del mineral y pulimento químico. Estos compuestos, suelen estar asociados a la generación de residuos, que generalmente se desechan solos o mezclados con líquidos de proceso, por una vez ha trabajado la aleación.
    
    p.text-bold.mb-5 Entre los principales problemas ambientales asociados a la refinación, procesamiento, manejo y disposición de residuos en la actividad de joyería se destacan:

    .row.mb-5.justify-content-center
      .col-md-6.col-xl-4.mb-4(data-aos="flip-right")
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-acento-contenido.p-5.h-100.bgr_9.text-white
          .tarjeta-numerada__numero
            .h2 1
          p.text-center.mb-0 Dispersión de material particulado debido al trabajo en las pulidoras mecánicas.
      .col-md-6.col-xl-4.mb-4(data-aos="flip-left")
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-acento-contenido.p-5.h-100.bgr_9.text-white
          .tarjeta-numerada__numero
            .h2 2
          p.text-center.mb-0 Vertimientos no controlados de metales como Cu, Al, Na, Zn, compuestos de CN, No3 y otros. 
      .col-md-6.col-xl-4.mb-4(data-aos="flip-right")
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-acento-contenido.p-5.h-100.bgr_9.text-white
          .tarjeta-numerada__numero
            .h2 3
          p.text-center.mb-0 Generación de niveles elevados de ruido.
      .col-md-6.col-xl-4.mb-4(data-aos="flip-down")
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-acento-contenido.p-5.h-100.bgr_9.text-white
          .tarjeta-numerada__numero
            .h2 4
          p.text-center.mb-0 Generación de emisiones toxicas y corrosivas debidas a las sustancias utilizadas como cianuro y el ácido nítrico.
      .col-md-6.col-xl-4.mb-4(data-aos="flip-up")
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-acento-contenido.p-5.h-100.bgr_9.text-white
          .tarjeta-numerada__numero
            .h2 5
          p.text-center.mb-0 Efectos sobre la salud de los trabajadores y poblaciones en el área de influencia.
    
    p.mb-5 En este escenario se pueden inferir que el problema ambiental crítico de los talleres de refinación y joyería se relaciona con el inadecuado manejo de los reactivos y a su vez, el desperdicio o inutilización de importantes cantidades que finalmente va a deteriorar el medio.

    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Vertimiento resultante de la refinación con ácido nítrico").text-white
        h4 Vertimiento resultante de la refinación con ácido nítrico
        .row.justify-content-center
          .col-md-8.col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema7/2.png', alt='Imagen de apoyo')
          .col-xl-6.align-content-center
            p.mb-0 Esta constituidos principalmente por nitratos de cobre y sodio. Se mezcla con las aguas de lavado para ser vertido directamente al alcantarillado sin previo tratamiento. 
      .tarjeta.color-acento-botones--borde.p-4(titulo="Aguas de lavado").text-white
        h4 Aguas de lavado
        .row.justify-content-center
          .col-md-8.col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema7/3.png', alt='Imagen de apoyo')
          .col-xl-6.align-content-center
            p.mb-0 Que en volumen son las más representativas y contiene contaminantes como jabón, yeso de joyería, residuos de ácidos en muy baja concentración H2SO4, soda caustica NaOH y/o etanol. En algunos talleres este vertimiento es decantado y sedimentado en un sistema de tanques para evitar pérdidas de piezas y material fino que se pierde en el lavado. Los sedimentos se recuperan cada seis meses por fundición o por métodos químicos. 
      .tarjeta.color-acento-botones--borde.p-4(titulo="Emisiones gaseosas").text-white
        h4 Emisiones gaseosas
        .row.justify-content-center
          .col-md-8.col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema7/4.png', alt='Imagen de apoyo')
          .col-xl-6.align-content-center
            p.mb-0 Vapores de pulimentos químicos con cianuro y esta constituidos principalmente por CNOÓxidos nitrosos (NO, NO2, N204), provenientes de los sistemas de fundición y calcinación en el tratamiento para recuperación de oro a partir de la escoria.




</template>

<script>
export default {
  name: 'Tema3',
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
