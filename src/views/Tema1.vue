<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Definición de variable y clasificación
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1	Concepto de variable en estadística
    p.mb-5(data-aos='fade-right') En estadística, una #[b variable] es cualquier característica, atributo o propiedad que puede asumir diferentes valores dentro de una población o muestra. Las variables se usan en la recolección y análisis de datos, dado que permiten identificar y medir los fenómenos de interés en un estudio.
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/4.png', alt='')
      .col-lg-8
        p.mb-3 Una variable representa cualquier aspecto que pueda variar en un estudio. Los valores que toman las variables pueden ser cualitativos (descriptivos) o cuantitativos (numéricos). Las variables se estudian para identificar patrones, realizar comparaciones y extraer conclusiones estadísticas sobre una población.
        .tarjeta.p-4.border-dashed(style="background-color: #b0dcae")
          p.mb-0 Las variables en estadística se pueden clasificar de diferentes maneras según el tipo de valores que toman, su escala de medición o su función en un análisis. Esta clasificación es importante porque el tipo de variable determina los métodos estadísticos que se aplicarán para su análisis.
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2	Variables cualitativas (categóricas)
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.mb-lg-0.mb-3.d-lg-block.d-none: img(src='@/assets/curso/temas/5.svg', alt='')
      .col-lg-11: p.mb-0 Las variables cualitativas, también conocidas como categóricas, son aquellas que representan características o atributos de los individuos o elementos de un estudio que no se expresan en términos numéricos. En lugar de valores numéricos, estas variables asignan a los individuos en categorías o grupos con base en sus atributos. Las variables cualitativas son fundamentales en investigaciones donde el interés principal radica en clasificar y entender distribuciones de características específicas dentro de una población.
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5.px-5(titulo="Variables nominales" :icono="require('@/assets/curso/temas/7.svg')")
        .row
          .col-lg-6.col-7.mb-4.mb-md-0: img(src='@/assets/curso/temas/13.png', alt='')
            
          .col-lg-6
            h3 Variables nominales
            p.mb-5(data-aos='fade-right') Este tipo de variable cualitativa clasifica los datos en categorías sin un orden o jerarquía específica entre ellas. En otras palabras, las categorías son mutuamente exclusivas y colectivamente exhaustivas, pero no tienen un nivel de superioridad o inferioridad respecto a otras. Las variables nominales se emplean comúnmente en estudios donde se necesita una clasificación básica sin intención de establecer un orden.
            ul.lista-ul--color.ms-4
              li.d-flex
                i.fas.fa-check
                h4 Ejemplos
            .ms-4 
              p Algunas variables nominales comunes incluyen el género (masculino, femenino, otro), el tipo de sangre (A, B, AB, O), el color de ojos (azul, marrón, verde, negro) y el estado civil (soltero, casado, divorciado, viudo). En estos casos, cada categoría es única y no existe una relación jerárquica entre ellas.
      .py-4.py-md-5.px-5(titulo="Variables ordinales" :icono="require('@/assets/curso/temas/7.svg')")
        .row
          .col-lg-6.col-7.mb-4.mb-md-0: img(src='@/assets/curso/temas/14.png', alt='')
            
          .col-lg-6
            h3 Variables ordinales
            p.mb-5(data-aos='fade-right') Las variables ordinales, a diferencia de las nominales, no solo agrupan datos en categorías, sino que también establecen un orden o jerarquía entre estas categorías. Sin embargo, las diferencias cuantitativas entre las categorías no son precisas ni consistentes. Aunque se puede identificar un orden, no es posible medir numéricamente las distancias entre categorías de manera uniforme.
            ul.lista-ul--color.ms-4
              li.d-flex
                i.fas.fa-check
                h4 Ejemplos
            .ms-4 
              p En el contexto educativo, una variable ordinal puede ser la denominación (primaria, secundaria, terciaria), donde existe una progresión en el grado de educación alcanzado, y el nivel de satisfacción (bajo, medio, alto), que indica una jerarquía en la percepción del usuario. En ambos casos, las categorías siguen un orden, pero no podemos cuantificar la diferencia exacta entre cada nivel.
    p.mb-5(data-aos='fade-right') Las variables cualitativas se usan en estudios de mercado, encuestas de satisfacción y ciencias sociales, ya que permiten segmentar a la población y analizar la distribución de ciertos atributos o características en un conjunto de datos.
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3	Variables cuantitativas (numéricas)
    div(style="background-color: #e2f4f9 ").mb-5
      .row.justify-content-center.align-items-center
        .col-lg-8
          .p-4
            p.mb-0 Las variables cuantitativas son aquellas que se expresan en términos numéricos y permiten realizar operaciones matemáticas. Estas variables representan cantidades o medidas que pueden manipularse aritméticamente para proporcionar información sobre la distribución, tendencia central y dispersión de los datos. Las variables cuantitativas suelen aparecer en estudios donde se busca medir y analizar fenómenos con precisión numérica.
        .col-lg-4.col-7.d-lg-block.d-none: img(src='@/assets/curso/temas/8.png', alt='')
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5.px-5(titulo="Variables discretas" :icono="require('@/assets/curso/temas/7.svg')")
        .row
          .col-lg-6.col-7.mb-4.mb-md-0: img(src='@/assets/curso/temas/15.png', alt='')
            
          .col-lg-6
            h3 Variables discretas
            p.mb-5(data-aos='fade-right') Son aquellas que pueden tomar solo un conjunto finito o contable de valores, generalmente números enteros. Estas variables suelen representar conteos o eventos que no permiten fraccionamientos, lo que significa que los valores que asumen son enteros. Las variables discretas se utilizan comúnmente en estudios donde se cuntifican eventos o entidades individuales.
            ul.lista-ul--color.ms-4
              li.d-flex
                i.fas.fa-check
                h4 Ejemplos
            .ms-4 
              p Una representación de variable discreta es el número de hijos en una familia (0, 1, 2, ...), la cantidad de productos vendidos en una tienda (1, 2, 3, ...), y el número de autos que posee una familia (1, 2, 3, ...). En estos casos, las cantidades representadas no pueden dividirse en fracciones.
      .py-4.py-md-5.px-5(titulo="Variables continuas" :icono="require('@/assets/curso/temas/7.svg')")
        .row
          .col-lg-6.col-7.mb-4.mb-md-0: img(src='@/assets/curso/temas/16.png', alt='')
            
          .col-lg-6
            h3 Variables continuas
            p.mb-5(data-aos='fade-right') Las variables continuas, a diferencia de las discretas, pueden tomar cualquier valor dentro de un rango específico, incluidos valores decimales. Estas variables son empleadas para medir fenómenos que pueden fraccionarse y que requieren un alto grado de precisión. Las variables continuas permiten medir con gran exactitud, y son fundamentales en estudios donde es importante captar variaciones sutiles.
            ul.lista-ul--color.ms-4
              li.d-flex
                i.fas.fa-check
                h4 Ejemplos
            .ms-4 
              p Una representación de variable continua es el peso de una persona (como 70.5 kg), la altura (como 1.75 m), el tiempo (como 12.34 segundos), y la temperatura (como 36.7°C). En estos casos, los valores pueden tomar infinitos puntos en el rango de medición, lo cual proporciona una precisión que es particularmente útil en ciencias experimentales, medicina y física.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.mb-lg-0.mb-3.d-lg-block.d-none: img(src='@/assets/curso/temas/9.svg', alt='')
      .col-lg-11: p.mb-0 Las variables cuantitativas se usan en estudios que requieren análisis estadísticos precisos, como el cálculo de la media, mediana, moda y desviación estándar. La posibilidad de realizar operaciones matemáticas permite que los investigadores obtengan información detallada sobre la dispersión y centralización de los datos en la muestra o población estudiada.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 1.
      span Clasificación de variables
    .row.justify-content-center.mb-5
      .col-lg-7.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/10.svg', alt='')
      .col-lg-5.col-7: img(src='@/assets/curso/temas/11.svg', alt='')
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4	Escalas de medición
    p.mb-5(data-aos='fade-right') Las variables también se pueden clasificar según la escala de medición que se utilice. Las escalas de medición determinan qué tipo de operaciones matemáticas o comparaciones se pueden realizar con los datos.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        img.d-lg-block.d-none(src='@/assets/curso/temas/12.png', alt='')
      .col-lg-8
        SlyderF.mb-5(columnas="col-lg-6 col-xl-6")
          .tarjeta.bg-white.shadow.p-4.h-100
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/temas/17.svg' alt='AvatarTop')
            .d-flex.justify-content-center.mb-4
              .p-2.px-5(style="background-color: #73c8e2").d-inline-block
                h4.text-center.mb-0 Escala nominal
            p.text-center Clasifica los datos en categorías que no tienen un orden. Es usada para variables cualitativas nominales.
              br
              |Ejemplo: estado civil (soltero, casado, divorciado).
          .tarjeta.bg-white.shadow.p-4.h-100
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/temas/17.svg' alt='AvatarTop')
            .d-flex.justify-content-center.mb-4
              .p-2.px-5(style="background-color: #73c8e2").d-inline-block
                h4.text-center.mb-0 Escala ordinal
            p.text-center Ordena los datos en categorías, pero no permite cuantificar las diferencias entre estas categorías. Es usada para variables cualitativas ordinales.
              br
              |Ejemplo: nivel de satisfacción (bajo, medio, alto).
          .tarjeta.bg-white.shadow.p-4.h-100
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/temas/17.svg' alt='AvatarTop')
            .d-flex.justify-content-center.mb-4
              .p-2.px-5(style="background-color: #73c8e2").d-inline-block
                h4.text-center.mb-0 Escala de intervalo
            p.text-center Mide la diferencia entre valores de manera cuantitativa, pero no tiene un "cero absoluto". Es usada para variables cuantitativas continuas.
              br
              |Ejemplo: temperatura en grados Celsius o Fahrenheit.
          .tarjeta.bg-white.shadow.p-4.h-100
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/temas/17.svg' alt='AvatarTop')
            .d-flex.justify-content-center.mb-4
              .p-2.px-5(style="background-color: #73c8e2").d-inline-block
                h4.text-center.mb-0 Escala de razón
            p.text-center Es similar a la escala de intervalo, pero con un "cero absoluto", lo que permite multiplicar o dividir los valores. Es usada para variables cuantitativas continuas.
              br
              |Ejemplo: peso, altura, ingresos.



















      
</template>

<script>
import TabsB from '../bootstrap/TabsB.vue'
import SlyderF from '../bootstrap/SlyderF.vue'
export default {
  name: 'Tema1',
  components: {
    TabsB,
    SlyderF,
  },
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
