<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Técnicas de agrupación de datos
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1	Definición de datos agrupados y no agrupados
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-3 
        .tarjeta.p-4.border-dashed(style="background-color: #b0dcae")
          p.mb-0 #[b Datos no agrupados:] son aquellos datos presentados individualmente, tal como se recolectan. Cada valor permanece sin clasificar, lo cual es útil en conjuntos de datos pequeños o cuando es importante mantener el valor exacto de cada observación.
      .col-lg-4.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/48.png', alt='')
      .col-lg-4
        .col-3: img(src='@/assets/curso/temas/49.svg', alt='').mb-4
        p.mb-0 #[b Datos agrupados:] consisten en datos organizados en clases o intervalos, lo que reduce el número de categorías a observar y permite una visión más clara de las tendencias generales. Este método es ideal para grandes volúmenes de datos y facilita la creación de tablas de frecuencias y gráficos.
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2	Criterios para agrupar datos
    p.mb-5(data-aos='fade-right') La agrupación de datos debe realizarse de manera coherente, siguiendo ciertos criterios para garantizar su eficacia y precisión:
    .row.justify-content-center.mb-5
      .col-lg-3.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/50.svg', alt='')
      .col-lg-9
        .p-4.py-3(style="background-color: #10314B")
          .p-2.bg-white.mb-3.rounded-3
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-check
                p.mb-0 #[b Naturaleza de la variable:] las variables cuantitativas continuas se agrupan fácilmente en intervalos, mientras que las variables cualitativas suelen agruparse en categorías definidas.
          .p-2.bg-white.mb-3.rounded-3
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-check
                p.mb-0 #[b Rango de datos:] determinar el rango ayuda a decidir el número de clases o intervalos. El rango se calcula como la diferencia entre el valor máximo y el mínimo en el conjunto de datos.
          .p-2.bg-white.mb-3.rounded-3
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-check
                p.mb-0 #[b Número de clases:] generalmente, se elige entre 5 y 20 clases para equilibrar la simplificación con el nivel de detalle.
          .p-2.bg-white.mb-3.rounded-3
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-check
                p.mb-0 #[b Amplitud de los intervalos:] debe ser constante para cada clase en la mayoría de los casos, lo cual facilita la comparación entre intervalos.
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3	Métodos de agrupación de datos cuantitativos
    p.mb-5(data-aos='fade-right') Para las variables cuantitativas, las técnicas de agrupación más comunes incluyen:
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.dots2.p-4.h-100(style="background-color: #E2F4F9 ")
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/temas/51.svg' alt='AvatarTop')
            .d-flex.justify-content-center.mb-4
              .p-1.px-5(style="background-color: #73c8e2").d-inline-block
                h4.text-center.mb-0 Intervalos de clase
            p.text-center Consiste en dividir el rango de los datos en intervalos de igual amplitud. Cada intervalo representa un rango de valores en el conjunto de datos.
              br
              |#[b Ejemplo:] en un conjunto de edades que va de 18 a 60, podríamos definir intervalos de 5 en 5 (18-22, 23-27, etc.).
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.dots2.p-4.h-100(style="background-color: #E2F4F9 ")
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/temas/51.svg' alt='AvatarTop')
            .d-flex.justify-content-center.mb-4
              .p-1.px-5(style="background-color: #73c8e2").d-inline-block
                h4.text-center.mb-0 Agrupación de datos en frecuencias absolutas y relativas
            p.text-center Se cuenta el número de observaciones en cada intervalo, generando una tabla de frecuencias absolutas (número de casos en cada intervalo) y una tabla de frecuencias relativas (proporción o porcentaje de casos en cada intervalo).
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.dots2.p-4.h-100(style="background-color: #E2F4F9 ")
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/temas/51.svg' alt='AvatarTop')
            .d-flex.justify-content-center.mb-4
              .p-1.px-5(style="background-color: #73c8e2").d-inline-block
                h4.text-center.mb-0 Intervalos de clase no uniformes
            p.text-center A veces se eligen intervalos de distinta amplitud si ciertas partes del conjunto de datos requieren mayor detalle. Esto es útil en conjuntos con una gran concentración de datos en ciertos rangos.
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.4	Métodos de agrupación de datos cualitativos
    p.mb-5(data-aos='fade-right') Para las variables cualitativas, la agrupación se realiza mediante categorías o clases que representan cada valor único o grupo de valores en los datos. Las técnicas incluyen:
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/52.png', alt='')
      .col-lg-8
        h5 Clasificación por categorías
        p.mb-3(data-aos='fade-right') Los datos se agrupan en categorías o clases según el valor que representan. Por ejemplo, la variable “nivel educativo” puede agruparse en categorías como primaria, secundaria y superior.
        .tarjeta(style="background-color: #F3F0EA").p-4.mb-4
          h5 Agrupación por frecuencias de Categorías 
          p.mb-0 Similar a los datos cuantitativos, se cuenta el número de veces que cada categoría aparece y se presentan en tablas de frecuencias, que pueden ser absolutas o relativas.
          

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
