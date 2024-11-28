<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p Bienvenidos a este programa de aprendizaje, en este capítulo, exploraremos las aleaciones y sus composiciones, fundamentales para crear piezas de joyería que satisfagan las demandas del mercado. También abordaremos los metales alternos utilizados en la bisutería, destacando su importancia y características. Mientras la joyería se elabora con metales preciosos y cumple estándares de calidad, la bisutería, aunque más accesible, ha evolucionado y se reconoce como un arte. Además, discutiremos la identificación de metales preciosos, su ley, y la responsabilidad ambiental en su manipulación, asegurando prácticas seguras y sostenibles en la industria.
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/IYUzWD95574" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Sena (2024).

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
