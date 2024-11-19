<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Niveles de medición
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.mb-lg-0.mb-3.d-lg-block.d-none: img(src='@/assets/curso/temas/34.svg', alt='')
      .col-lg-11: p.mb-0 Los niveles de medición se usan ampliamente en estadística, ya que determinan el tipo de operaciones matemáticas que se pueden realizar con los datos y qué tipos de análisis estadísticos son apropiados. Cada variable se mide en uno de los cuatro niveles de medición: nominal, ordinal, de intervalo y de razón. 
    .row.justify-content-center.mb-5
      .col-lg-7.col-10.mb-lg-0.mb-3
        p.mb-4 Cada nivel de medición posee sus propias limitaciones y fortalezas en cuanto a las operaciones matemáticas y los tipos de pruebas estadísticas que se pueden aplicar. Por ejemplo, analizar datos de nivel nominal con técnicas diseñadas para niveles de intervalo o de razón puede conducir a errores significativos en la interpretación, ya que no hay una base cuantitativa válida para realizar operaciones matemáticas avanzadas en datos categóricos.
        .p-4(style="background-color: #D7EED6 ")
          p.mb-0 Una elección incorrecta del nivel de medición puede llevar a conclusiones erróneas o a malinterpretar las relaciones entre variables, lo cual puede tener serias repercusiones, especialmente en ámbitos como la investigación científica, la economía y la toma de decisiones empresariales. Por ejemplo, si se trata una variable ordinal como si fuera de intervalo (sin considerar que las distancias entre categorías no son iguales), se podría concluir equivocadamente que las diferencias entre categorías son equivalentes, lo cual afectaría la validez de los resultados y podría influir negativamente en las decisiones basadas en estos datos.
      .col-lg-5.col-8: img(src='@/assets/curso/temas/35.png', alt='')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/36.png', alt='')
      .col-lg-9
        .p-4(style="background-color: #E5E9EB")
          p.mb-0 Por otro lado, una selección precisa del nivel de medición asegura que los análisis estadísticos sean apropiados y que los resultados obtenidos sean robustos y significativos. Al utilizar el nivel de medición correcto, se garantiza que las técnicas estadísticas aplicadas correspondan a las características de los datos, maximizando así la precisión y confiabilidad de los hallazgos. Además, una elección adecuada permite un uso más eficiente de los datos, ya que cada nivel de medición abre la puerta a distintos métodos analíticos, desde simples conteos hasta modelos complejos de regresión y análisis de varianza. En última instancia, una correcta selección del nivel de medición permite obtener insights más profundos y relevantes, promoviendo decisiones informadas y basadas en evidencia.
    .titulo-tres.mb-4: h3.mb-0 Cómo escoger el nivel de medición adecuado en cinco pasos
    .row.justify-content-center.mb-5
      .col-lg-4.d-lg-block.d-none: img(src='@/assets/curso/temas/37.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 3.
          span Niveles de medición
        img(src='@/assets/curso/temas/38.svg', alt='')
      .col-lg-7.col-8: img(src='@/assets/curso/temas/40.svg', alt='')
    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1	Nivel de medición nominal
    .row.justify-content-center.mb-5
      .col-lg-9.mb-lg-0.mb-3
        p.mb-4 El nivel nominal es el más básico de los cuatro niveles. Se utiliza para variables cualitativas que agrupan a los individuos u objetos en categorías sin un orden intrínseco. No existe un valor numérico asociado con estas categorías, y no es posible realizar operaciones matemáticas con ellas.
        .row.justify-content-center
          .col-lg-6
            .tarjeta.p-4(style="background-color: #E5E9EB")
              h5 Características
              ul.lista-ul--color
                li.d-flex.mb-1
                  i.fas.fa-check
                  p.mb-0 Los datos se agrupan en categorías o etiquetas.
                li.d-flex.mb-1
                  i.fas.fa-check
                  p.mb-0 No existe un orden ni jerarquía entre las categorías.
                li.d-flex.mb-1
                  i.fas.fa-check
                  p.mb-0 No es posible hacer cálculos matemáticos entre los valores.
          .col-lg-6
            h5 Ejemplo
            .p-2.mb-3.rounded-3(style="background-color: #C6E9F3")
              ul.lista-ul--color.mb-0
                li.d-flex.mb-0
                  i.fas.fa-check
                  p.mb-0 #[b Género:] masculino, femenino, otro.
            .p-2.mb-3.rounded-3(style="background-color: #C6E9F3")
              ul.lista-ul--color.mb-0
                li.d-flex.mb-0
                  i.fas.fa-check
                  p.mb-0 #[b Color de ojos:] azul, marrón, verde, negro.
      .col-lg-3.col-7: img(src='@/assets/curso/temas/41.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0.mb-3 
        .tarjeta.p-4(style="background-color: #10314b ")
          .row.justify-content-center.align-items-center
            .col-lg-1.col-3: img(src='@/assets/curso/temas/3.svg', alt='')
            .col-lg-11: p.mb-0.text-white El análisis de las variables nominales se basa en la frecuencia de aparición de cada categoría. Por ejemplo, en un estudio de mercado, podríamos observar cuántos clientes prefieren una marca específica.
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2	Nivel de medición ordinal
    p.mb-5(data-aos='fade-right') El nivel ordinal también se utiliza para variables cualitativas, pero a diferencia del nivel nominal, las categorías tienen un orden o jerarquía. Sin embargo, las diferencias entre las categorías no son cuantificables. Aunque se puede establecer un rango, no se pueden realizar cálculos precisos con las diferencias entre las categorías.
    .row.justify-content-center.mb-5
      .col-lg-2.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/42.svg', alt='')
      .col-lg-6.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #E5E9EB")
              h5 Características
              ul.lista-ul--color
                li.d-flex.mb-1
                  i.fas.fa-check
                  p.mb-0 Los datos se agrupan en categorías con un orden o jerarquía.

                li.d-flex.mb-1
                  i.fas.fa-check
                  p.mb-0 No se puede medir la magnitud exacta de la diferencia entre las categorías.
                li.d-flex.mb-1
                  i.fas.fa-check
                  p.mb-0 No se pueden realizar operaciones aritméticas entre los valores.
      .col-lg-4
        h5 Ejemplo
        .p-2.mb-3.rounded-3(style="background-color: #C6E9F3")
          ul.lista-ul--color.mb-0
            li.d-flex.mb-0
              i.fas.fa-check
              p.mb-0 #[b Nivel de satisfacción:] insatisfecho, neutral, satisfecho.
        .p-2.mb-3.rounded-3(style="background-color: #C6E9F3")
          ul.lista-ul--color.mb-0
            li.d-flex.mb-0
              i.fas.fa-check
              p.mb-0 #[b Clasificación en una carrera:] primer lugar, segundo lugar, tercer lugar.
    p.mb-5(data-aos='fade-right') El análisis estadístico de las variables ordinales puede incluir el cálculo de la mediana o el uso de pruebas no paramétricas, como la prueba de rangos de Wilcoxon. En el caso de una encuesta sobre la satisfacción del cliente, se puede calcular el porcentaje de clientes en cada nivel de satisfacción.
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3	Nivel de medición de intervalo
    p.mb-5(data-aos='fade-right') El #[b nivel de intervalo] es el primer nivel que se usa para variables cuantitativas. En este nivel, los datos no solo tienen un orden, sino que las diferencias entre los valores son medibles y significativas. Sin embargo, no existe un "cero absoluto", lo que significa que no se pueden realizar operaciones multiplicativas entre los valores.
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/43.png', alt='')
      .col-lg-8
        h5 Características
        ul.lista-ul--color.mb-4
          li.d-flex.mb-1
            i.fas.fa-check
            p.mb-0 Las diferencias entre los valores son consistentes y medibles.
          li.d-flex.mb-1
            i.fas.fa-check
            p.mb-0 No existe un "cero absoluto"; el valor cero es arbitrario.
          li.d-flex.mb-1
            i.fas.fa-check
            p.mb-0 Se pueden realizar operaciones aritméticas como la suma o la resta, pero no la multiplicación o división.
        .tarjeta(style="background-color: #F3F0EA").p-4
          h5 Ejemplo
          ul.lista-ul--color.mb-0
            li.d-flex.mb-0
              i.fas.fa-check
              p.mb-0 #[b Temperatura en grados Celsius:] 20°C, 30°C, 40°C. Aquí, la diferencia entre 20°C y 30°C es la misma que entre 30°C y 40°C, pero 0°C no representa una ausencia de temperatura.

            li.d-flex.mb-0
              i.fas.fa-check
              p.mb-0 #[b Fechas en un calendario:] la diferencia entre el año 2000 y el año 1990 es de 10 años, pero el año "0" no es un punto de referencia absoluto.
    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0.mb-3 
        .tarjeta.p-4(style="background-color: #10314b ")
          .row.justify-content-center.align-items-center
            .col-lg-1.col-3: img(src='@/assets/curso/temas/44.svg', alt='')
            .col-lg-11: p.mb-0.text-white En el análisis estadístico de variables de intervalo, se pueden calcular medidas como la media o la desviación estándar. Sin embargo, la falta de un "cero absoluto" impide que se realicen ciertas operaciones, como comparar razones entre valores.
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.4	Nivel de medición de razón
    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0.mb-3
        p.mb-4 El nivel de razón es el nivel más alto de medición y se aplica a variables cuantitativas que, además de tener diferencias medibles entre los valores, cuentan con un "cero absoluto". Esto significa que se pueden realizar todas las operaciones aritméticas, incluidas la multiplicación y la división, ya que el cero en este nivel indica la ausencia total de la característica medida.
        .row.justify-content-center
          .col-lg-6
            .tarjeta.p-5(style="background-color: #E5E9EB")
              h5 Características
              ul.lista-ul--color
                li.d-flex.mb-1
                  i.fas.fa-check
                  p.mb-0 Existen diferencias consistentes y medibles entre los valores.
                li.d-flex.mb-1
                  i.fas.fa-check
                  p.mb-0 Existe un "cero absoluto", lo que permite realizar operaciones multiplicativas.
                li.d-flex.mb-1
                  i.fas.fa-check
                  p.mb-0 Se pueden realizar todas las operaciones aritméticas: suma, resta, multiplicación y división.
                
          .col-lg-6
            h5 Ejemplo
            .p-3.mb-3.rounded-3(style="background-color: #C6E9F3")
              ul.lista-ul--color.mb-0
                li.d-flex.mb-0
                  i.fas.fa-check
                  p.mb-0 #[b Peso:] un objeto que pesa 0 kg no tiene masa. Es decir, un objeto que pesa 4 kg es el doble de pesado que uno que pesa 2 kg.
            .p-3.mb-3.rounded-3(style="background-color: #C6E9F3")
              ul.lista-ul--color.mb-0
                li.d-flex.mb-0
                  i.fas.fa-check
                  p.mb-0 #[b Ingresos:] si una persona tiene 0 ingresos, no tiene ganancias. Si una persona gana $1000, puede decirse que gana el doble que alguien que gana $500.
      .col-lg-2.col-6: img(src='@/assets/curso/temas/45.svg', alt='')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.mb-lg-0.mb-3.d-lg-block.d-none: img(src='@/assets/curso/temas/46.svg', alt='')
      .col-lg-11: p.mb-0 El análisis estadístico de las variables de razón permite realizar cualquier tipo de operación matemática y aplicar técnicas avanzadas de análisis, como regresión y correlación. Por ejemplo, se puede calcular el promedio de ingresos de un grupo de personas o determinar la relación entre el peso de un grupo de personas y su altura.
    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.5	Importancia de los niveles de medición en el análisis estadístico
    p.mb-5(data-aos='fade-right') El nivel de medición de una variable tiene un impacto directo en el tipo de análisis que se puede realizar. Seleccionar el método estadístico adecuado depende de conocer correctamente el nivel de medición de las variables involucradas.
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/47.png', alt='')
      .col-lg-8
        .tarjeta(style="background-color: #F3F0EA").p-4.mb-4
          h5 Ejemplo
          ul.lista-ul--color.mb-0
            li.d-flex.mb-0
              i.fas.fa-check
              p.mb-0 #[b Variables nominales:] se analizan usando frecuencias y proporciones.
            li.d-flex.mb-0
              i.fas.fa-check
              p.mb-0 #[b Variables ordinales:] se pueden resumir utilizando la mediana y realizar análisis no paramétricos.
            li.d-flex.mb-0
              i.fas.fa-check
              p.mb-0 #[b Variables de intervalo y de razón:] se utilizan para análisis estadísticos avanzados que incluyen medidas de tendencia central, dispersión y pruebas paramétricas.
        p.mb-0 Comprender el nivel de medición es fundamental para evitar errores en la interpretación de los resultados y para garantizar que las operaciones estadísticas aplicadas sean las correctas.





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
