<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos='fade-right')  En el ámbito de la estadística aplicada, la correcta organización de la muestra de datos siguiendo metodologías estadísticas debe asegurar que el análisis sea representativo, preciso y relevante. La estructura de los datos recolectados y la aplicación de técnicas estadísticas adecuadas son determinantes en la interpretación de resultados, puesto que una muestra desorganizada o sin criterios claros puede llevar a conclusiones imprecisas o sesgadas.
    .row.justify-content-center.mb-5
      .col-lg-3.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/1.png', alt='')
      .col-lg-4.mb-lg-0.mb-3
        .p-4(style="background-color: #e2f4f9 ").h-100
          p.mb-0 #[span.color-secundario ¿Cómo se organiza una muestra de datos para garantizar la coherencia y utilidad en el análisis estadístico?] Este componente formativo profundiza en los principios y metodologías para la organización de datos en muestras, explorando técnicas de clasificación, agrupación y segmentación de acuerdo con el tipo de variable y el contexto del estudio. Se abarcarán enfoques prácticos que permiten estructurar los datos de manera que respalden un análisis eficaz y riguroso.
      .col-lg-5.col-7: img(src='@/assets/curso/temas/2.png', alt='')
    p.mb-5(data-aos='fade-right') A lo largo de este componente, el aprendiz desarrollará habilidades para organizar muestras de datos de acuerdo con principios estadísticos, identificando las mejores prácticas para cada tipo de variable y objetivo analítico. Se aprenderán técnicas que optimizan la organización de datos y mejoran la precisión y claridad en los resultados estadísticos.
    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0.mb-3 
        .tarjeta.p-4(style="background-color: #10314b ")
          .row.justify-content-center.align-items-center
            .col-lg-1.col-3: img(src='@/assets/curso/temas/3.svg', alt='')
            .col-lg-11: p.mb-0.text-white La organización de la muestra de datos es una etapa indispensable para cualquier análisis exitoso, pues un principio básico en estadística señala que "la exactitud de las conclusiones es tan buena como la calidad de la organización de los datos".
    p.mb-5(data-aos='fade-right').fw-bold  ¡Bienvenido a recorrer este camino por la organización estructurada y eficiente de muestras de datos para el análisis estadístico!
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/V5wMOkjSuo4?si=ZyKLLTx6tmwK0WQT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Organización de la muestra de datos de acuerdo a las metodologías estadísticas
    
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
