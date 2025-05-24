<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente formativo aborda los fundamentos normativos y técnicos de la gestión ambiental y de la seguridad y salud en el trabajo, explorando las principales leyes que regulan estos ámbitos y el funcionamiento de los Sistemas de Gestión Ambiental (SGA) y de Seguridad y Salud en el Trabajo (SG-SST). A través del análisis del contexto organizacional, la planificación, el control operacional, la evaluación del desempeño y la mejora continua, se busca fortalecer la responsabilidad ambiental y la protección de los trabajadores. Además, se reconocen los derechos y deberes laborales como parte esencial de una cultura preventiva y sostenible .
    
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta la relación entre la legislación ambiental y en seguridad y salud en el trabajo, y la estructura de los sistemas de gestión (SGA y SG-SST), destacando sus componentes clave como la planificación, el control operacional, la evaluación del desempeño y la mejora continua, junto con los derechos y deberes de los trabajadores.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
