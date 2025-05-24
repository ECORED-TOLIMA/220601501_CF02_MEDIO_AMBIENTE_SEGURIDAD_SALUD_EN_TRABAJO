<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p El componente “Legislación en medio ambiente, seguridad y salud en el trabajo”, aborda los marcos normativos fundamentales que regulan la protección del entorno natural, así como la prevención de riesgos laborales en Colombia. Su propósito es fortalecer el conocimiento y la aplicación de las disposiciones legales que rigen estos ámbitos en el contexto organizacional, promoviendo una cultura de sostenibilidad y autocuidado en los espacios de trabajo.
        .tarjeta.BG01.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/intro/img01.svg' alt="Imagen decorativa")
            .col-lg-10
              p.mb-0 En este componente se analizan tanto la legislación ambiental como la normativa relacionada con la seguridad y salud en el trabajo, destacando su importancia para el cumplimiento de los estándares legales, la mejora del desempeño organizacional y la protección de la vida, la salud y el entorno. Además, se estudian los elementos esenciales de los Sistemas de Gestión Ambiental (SGA) y del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST), de acuerdo con los lineamientos establecidos por la normatividad vigente y los modelos de gestión internacionales.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/intro/img02.png' alt="Imagen decorativa")
    
    p.mb-5 Para ampliar la comprensión sobre la importancia de estos temas, se recomienda acceder al siguiente video:

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/ZJWHDUkLqa4?si=-KaDY9peecuMtXPd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
