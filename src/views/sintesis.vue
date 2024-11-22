<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El programa de aprendizaje se enfoca, en la aleación del metal combina dos o más metales para mejorar sus propiedades en joyería. La soldadura une piezas mediante calor, esencial para ensamblar y reparar.
    p La fundición implica verter metal en un molde, con su calidad dependiente de factores como temperatura y composición. Los Depurantes eliminan impurezas, mientras que los fundentes facilitan la fusión.
    p Los ensayos químicos analizan la pureza de metales, y modificar la ley ajusta la composición para alterar características. El riesgo higiénico en la joyería incluye peligros por exposición a sustancias tóxicas, por lo que se requieren medidas de seguridad.
    p.mb-5 El manejo de residuos se centra en la gestión adecuada de desechos, fundamental para cumplir normativas ambientales y recuperar metales preciosos.


    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
