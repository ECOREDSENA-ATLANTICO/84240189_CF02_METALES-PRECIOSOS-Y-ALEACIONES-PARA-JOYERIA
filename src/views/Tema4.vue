<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Depurantes y fundentes

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Son dos tipos de sustancias que son agregadas al metal durante el proceso de fundición con el objeto de remover impurezas, favorecer la fundición y reducir la exposición del metal a los gases presentes en el ambiente; factores que repercutirán en la calidad del a aleación. 
    
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Depurantes" :icono="require('@/assets/curso/temas/tema4/5.svg')")
        .row.p-5.justify-content-center
          .col-lg-6.mb-4.mb-md-0.align-content-center.text-white
            p Los Depurantes son sustancias que se agregan básicamente con el fin de refinar la masa fundida, en una primera instancia. Los Depurantes más utilizados son el nitrato de potasio (salitre) y el bicarbonato de sodio, sin embargo, también pueden emplearse el carbón dulce, aserrín de madera y cianuro de potasio. 
          .col-md-8.col-lg-6
            figure
              img(src='@/assets/curso/temas/tema4/2.png', alt='Imagen de apoyo')
      .py-4.py-md-5(titulo="Fundentes" :icono="require('@/assets/curso/temas/tema4/5.svg')")
        .row.p-5.justify-content-center
          .col-lg-6.mb-4.mb-md-0.align-content-center.text-white
            p Son sustancias que se agregan para favorecer la fundición de los metales, disponiéndose como una capa que recubre la superficie del metal fundido, evitando de esta manera el contacto del metal con el aire y a su vez permite la fluidez de la fusión disolviendo los óxidos formados.
            p #[strong Bórax:] es un sólido blanco, cristalino, soluble en agua fría, con un ligero sabor alcalino, desde el punto de vista químico es una sal formada por la unión de ácido bórico y sodio. 
            p #[strong Ácido bórico:] el bórico disuelto en alcohol es un óptimo fundente, además tiene un cierto poder desengrasante pero su uso no es muy común para el proceso de fundición, más bien se lo utiliza ampliamente para operaciones de recocido y soldado, ya que comienza a proteger el metal a menor temperatura.
 
          .col-md-8.col-lg-6.align-content-center
            figure
              img(src='@/assets/curso/temas/tema4/3.png', alt='Imagen de apoyo')
      
    .row.mb-3.mt-5(data-aos="fade-right")
      .col-auto
        figure
          img(src="@/assets/template/fri.svg", alt="alt")
      .col.p-0
        h4 Decapado
    
    p Todos los metales utilizados por el joyero, al recocerlos o soldarlos, si no se han tomado precauciones previas, se oxidan y cambian de color, además para eliminar los óxidos de estos metales y también los restos de fundentes, se utilizan una serie de soluciones químicas, llamadas de decapado (de blanqueamiento o de desoxidación). 
    
    .row.mb-3.mt-5(data-aos="fade-right")
      .col-auto
        figure
          img(src="@/assets/template/fri.svg", alt="alt")
      .col.p-0
        h4 Clases, técnicas y aplicaciones del decapado:

    .row.mb-5.justify-content-center
      .col-md-6.col-xl-4.align-content-center.mb-3
        figure
          img(src='@/assets/curso/temas/tema4/6.png', alt='Imagen de apoyo')
      .col-xl-8(data-aos="fade-left")
        p Existen múltiples soluciones para el decapado, se debe tener en cuenta para que metales sirven más efectivamente y las mínimas condiciones de seguridad de acuerdo a las reacciones que se producen al ser preparadas y utilizadas, algunas de las fórmulas que existen son:
        ul.lista-ul--color
          li.d-flex 
            i.fas.fa-check-circle.bgr
            p.text-bold.mb-0 En la mayoría de los casos: 
        .tabla-a.color-acento-botones.mb-5.text-center
          table
            thead
              tr.bgr_4
                th Agua corriente
                th 900ml
            tbody.bgr_5
              tr
                td Acido sulfúrico
                td 50 a 100
        p Se debe tener especial cuidado con el uso del ácido sulfúrico ya que puede atacar de forma excesiva el metal. Siempre se debe echar el ácido sobre el agua y no al contrario, para prevenir o minimizar las reacciones violentas por la mezcla. Esta fórmula es la más utilizada para el oro, la plata y el cobre.  
            
        p Esta solución de acuerdo con el caso puede resultar más efectiva: 
        ol.lista-ol--cuadro
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 1
            | Agua corriente: Ácido sulfúrico, Bicromato sódico.
          
      
    .row.mb-5.justify-content-center
      .col-xl-8.order-2.order-xl-1.align-content-center
        p Solución para el oro de color:  
        ol.lista-ol--cuadro
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 2
            | Agua corriente: Alumbré potasio.
        
        p Para los casos un poco más complejos en el oro de color:  
        ol.lista-ol--cuadro
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 3
            | Agua corriente: Alumbré potasio, Nitrato potásico o sulfato de aluminio.
        
        p Existen otras soluciones con un componente 25 que hoy en día se está descontinuando, pues se busca minimizar riesgos para las personas que trabajan en estos oficios y además como responsables del cuidado del medio ambiente, pues están basadas en la utilización de cianuro. 
        p Para el oro blanco, que algunas veces presenta dificultades al ser decapado, sus aleaciones por ser tan variadas (níquel, paladio o mezclas de los dos metales), o que el contenido de plata es más alto que en otras, es difícil determinar una solución que sirva para todo. #[strong Lo más fácil es intentar primero con alguna de las soluciones indicadas anteriormente y si el resultado no es el esperado, se puede probar con la siguiente:]

        p.text-bold Tiourea: 	Ácido sulfúrico, Detergente neutro, Agua (hasta completar 1000 ml).
        
        p Otra fórmula es:
        p.text-bold Persulfato amónico: Ácido sulfúrico, Agua.        
      .col-md-6.col-xl-3.align-content-center.order-1.order-xl-2.mb-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema4/7.png', alt='Imagen de apoyo')

    .row.mb-3.justify-content-center
      .col-md-6.col-lg-3.mb-3.align-content-center(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema4/8.png', alt='Imagen de apoyo')
      .col-lg-9.col-xl-8.align-content-center
        p Las fórmulas utilizadas para el decapado del acero inoxidable se caracterizan por las mezclas de ácidos concentrados, por este motivo se deben tener precauciones al ser manipulados estos ácidos y así evitar cualquier tipo de accidente.
        p.text-bold Para aflojar la cascarilla:
        p Ácido sulfúrico (químicamente puro):  Ácido clorhídrico (químicamente puro), Agua (hasta completar 1000 ml).
        
        p.text-bold Para quitar la cascarilla:
        p Ácido nítrico (químicamente puro): Ácido fluorhídrico (químicamente puro).
        
        p.text-bold Decapado con algo de brillo: 
        p Ácido nítrico (químicamente puro): Ácido clorhídrico (químicamente puro), Agua.

    .row.mb-3.justify-content-center
      .col-lg-8.col-xl-6.align-content-center
        p.text-bold Para acabado blanco mate: 
        p Sulfato férrico: Ácido fluorhídrico (químicamente puro), Agua.

        p.text-bold Para el decapado del cobre y sus aleaciones podemos seguir los siguientes pasos:
            
        ol.lista-ol--cuadro
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 1
            | Ácido sulfúrico (concentrado): Ácido nítrico concentrado, Negro humo (hollín).
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 2
            | Ácido sulfúrico (concentrado) : Ácido nítrico concentrado.
          
      .col-md-8.col-lg-4.align-content-center(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema4/9.png', alt='Imagen de apoyo')
    
    p Primero el paso 1 (su preparación) se deja reposar unas 12 horas antes de agregar el paso 2.

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
