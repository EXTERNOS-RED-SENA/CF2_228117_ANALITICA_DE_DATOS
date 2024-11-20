<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.fondo-2
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
              | #[b Ejemplo:] estado civil (soltero, casado, divorciado).
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
    .titulo-tres.mb-4: h3.mb-0 Aplicaciones industriales de las escalas de medición
    .mn.fondo-slyde.p-5.mb-5
      .tarjeta.bg-white.p-5
        SlyderA(tipo='b')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h5 1. Segmentación de clientes en marketing  (Escala nominal) 
              p En el ámbito del marketing, la escala nominal es crucial para identificar grupos de clientes con características comunes como edad, género, ubicación geográfica o preferencia de producto. Estas categorías no tienen un orden intrínseco, pero permiten crear estrategias de segmentación efectivas. Por ejemplo, un análisis nominal podría clasificar a los clientes por género para diseñar campañas específicas de publicidad.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/18.png', alt='')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h5 2. Priorización de mejoras en servicios (Escala ordinal)
              p  Las empresas utilizan escalas ordinales para clasificar la experiencia o satisfacción del cliente en niveles jerárquicos como "insatisfactorio", "aceptable" y "excelente". Aunque los intervalos entre los niveles no son uniformes, esta clasificación permite identificar áreas críticas y priorizar acciones, como mejorar tiempos de respuesta en atención al cliente.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/19.png', alt='')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h5 3.Control térmico en procesos industriales (Escala de intervalo)
              p En industrias como la farmacéutica o la química, la medición de temperaturas es indispensable para garantizar la calidad del producto final. La escala de intervalo, que mide diferencias entre valores sin un cero absoluto, es empleada para registrar cambios en temperaturas durante procesos críticos, como el almacenamiento o la esterilización. Por ejemplo, se controla que un proceso de pasteurización alcance entre 60 y 75 grados Celsius.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/20.png', alt='')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h5 4.Cálculo de eficiencia y costos (Escala de razón)
              p En sectores como la logística y la manufactura, la escala de razón permite cuantificar parámetros exactos como el peso de productos, costos operativos y tiempos de entrega. Este tipo de escala, que incluye un cero absoluto, permite operaciones como el cálculo de porcentajes o proporciones, lo que es esencial para medir la eficiencia operativa y optimizar los costos. Por ejemplo, calcular el costo por tonelada transportada en la cadena de suministro.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/21.png', alt='')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h5 5. Identificación y categorización de fallas técnicas (Escala nominal)
              p  En mantenimiento industrial, las escalas nominales son útiles para clasificar las fallas técnicas en categorías como "eléctrica", "mecánica" o "de software". Aunque estas categorías no tienen un orden, ayudan a asignar recursos de manera eficiente y a diseñar protocolos específicos para cada tipo de falla. Por ejemplo, un análisis de mantenimiento puede mostrar que el 40% de las fallas son eléctricas.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/22.png', alt='')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h5 6.Evaluación del desempeño laboral (Escala ordinal)
              p  En recursos humanos, las escalas ordinales son fundamentales para clasificar el desempeño de los empleados en niveles como "insuficiente", "satisfactorio" y "sobresaliente". Esta evaluación permite diseñar estrategias de capacitación y establecer políticas de incentivos alineadas con los niveles de desempeño identificados. Aunque no mide diferencias exactas, este enfoque facilita comparaciones cualitativas entre empleados.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/23.png', alt='')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h5 7. Medición de productividad en manufactura (Escala de razón)
              p Las escalas de razón son la base para calcular métricas clave en manufactura como el número de unidades producidas por hora, la proporción de productos defectuosos o la eficiencia del uso de recursos. Al incluir un cero absoluto, estas mediciones permiten operaciones aritméticas, como determinar si un cambio en la línea de producción duplicó la productividad. Por ejemplo, un análisis podría mostrar que al reducir tiempos muertos, la producción aumentó un 20%.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/24.png', alt='')
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2  1.5	Variables dependientes e independientes
    p.mb-5(data-aos='fade-right') En los estudios experimentales o de investigación, las variables pueden clasificarse según su papel en el análisis:
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3
        .tarjeta.overflow-hidden.shadow.bg-white.rounded-2.h-100
          img(src='@/assets/curso/temas/25.png', alt='')
          .p-4.text-center
            h4 Variable independiente
            p.mb-0 Es la variable que se manipula o cambia para observar su efecto en otra variable. También se la conoce como "predictora" o "explicativa".
      .col-lg-6.mb-lg-0.mb-3
        .tarjeta.overflow-hidden.shadow.bg-white.rounded-2.h-100
          img(src='@/assets/curso/temas/26.png', alt='')
          .p-4.text-center
            h4 Variable dependiente
            p.mb-0 Es la variable que se mide para ver cómo responde a los cambios en la variable independiente. También se la conoce como "respuesta" o "resultado".
    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0.mb-3 
        .tarjeta.p-4(style="background-color: #10314b ")
          .row.justify-content-center.align-items-center
            .col-lg-1.col-3: img(src='@/assets/curso/temas/27.svg', alt='')
            .col-lg-11: p.mb-0.text-white Ejemplo: en una investigación sobre el efecto de horas de estudio en el rendimiento académico, la variable independiente sería las "horas de estudio", mientras que la variable dependiente sería el "rendimiento académico".
    p.fw-bold.mb-5 Al representar esta información en una figura, se puede observar lo siguiente:
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 2.
          span Ejemplo variables dependientes e independientes
        img(src='@/assets/curso/temas/28.png', alt='').mb-4
        figcaption Fuente: OIT, 2024.s
      .col-lg-7
        p.mb-4.fw-bold Variable Independiente (Eje X - Horas de Estudio)
        .p-4.py-3(style="background-color: #C6E9F3")
          .p-2.bg-white.mb-3.rounded-3
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-check
                p.mb-0 Es la variable que el estudiante puede controlar o manipular directamente.
          .p-2.bg-white.mb-3.rounded-3
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-check
                p.mb-0 Se representa en el eje horizontal (X).
          .p-2.bg-white.mb-3.rounded-3
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-check
                p.mb-0 Va aproximadamente de 1 a 8 horas de estudio diarias.
          .p-2.bg-white.mb-3.rounded-3
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-check
                p.mb-0 Es independiente porque su valor no está condicionado por otros factores en nuestro estudio.
          .p-2.bg-white.mb-3.rounded-3
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-check
                p.mb-0 El estudiante decide libremente cuántas horas dedicar al estudio.
    p.mb-4.fw-bold Variable Dependiente (Eje Y - Rendimiento Académico)
    .row.justify-content-center.mb-5
      .col-lg-9.mb-lg-0.mb-3
        .p-4.py-3(style="background-color: #10314B")
          .p-2.bg-white.mb-3.rounded-3
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-check
                p.mb-0 Es la variable que se ve afectada o "depende" de la variable independiente.
          .p-2.bg-white.mb-3.rounded-3
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-check
                p.mb-0 Se representa en el eje vertical (Y).
          .p-2.bg-white.mb-3.rounded-3
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-check
                p.mb-0 Se mide en una escala de rendimiento (puntos).
          .p-2.bg-white.mb-3.rounded-3
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-check
                p.mb-0 Es dependiente porque su valor está influenciado por las horas de estudio
          .p-2.bg-white.mb-3.rounded-3
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-check
                p.mb-0 El rendimiento "depende" de cuánto tiempo estudia el alumno.
      .col-lg-3.col-7: img(src='@/assets/curso/temas/29.png', alt='')
    Separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.6	Relación entre los tipos de variables y los métodos estadísticos
    p.mb-5(data-aos='fade-right') El tipo de variable influye directamente en los métodos estadísticos que se pueden aplicar. Por ejemplo:
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.dots.p-5.h-100(style="background-color: #E5E9EB ")
          .col-3: img(src='@/assets/curso/temas/30.svg', alt='').mb-4
          p.mb-0 Para #[span.color-primario variables cualitativas nominales], se usan frecuencias y porcentajes para resumir los datos, y pruebas como el chi-cuadrado para analizar relaciones.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.dots.p-5.h-100(style="background-color: #C6E9F3 ")
          .col-3: img(src='@/assets/curso/temas/31.svg', alt='').mb-4
          p.mb-0 Para #[span.color-primario variables ordinales], se pueden usar medidas de tendencia central (como la mediana) y pruebas no paramétricas como la prueba de rangos de Wilcoxon.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.dots.p-5.h-100(style="background-color: #E2DACC ")
          .col-3: img(src='@/assets/curso/temas/32.svg', alt='').mb-4
          p.mb-0 Para #[span.color-primario variables cuantitativas discretas y continuas], se usan medidas como la media, la desviación estándar, y pruebas estadísticas paramétricas como la t de Student o ANOVA, dependiendo del contexto.
    .row.justify-content-center.mb-5
      .col-lg-4.d-lg-block.d-none: img(src='@/assets/curso/temas/33.png', alt='')
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Relación entre variables nominales y análisis de categorías")
            p.mb-0 Las variables nominales agrupan elementos en categorías sin un orden inherente, como género, tipo de producto o regiones. El análisis de frecuencias y proporciones identifica patrones, mientras que pruebas como chi-cuadrado evalúan asociaciones entre variables. Por ejemplo, una empresa analiza si la preferencia por un producto específico está vinculada a la ubicación geográfica.
          div(titulo="Uso de variables ordinales para medir jerarquías")
            p.mb-0 Las variables ordinales organizan datos en una escala ordenada, como niveles de satisfacción o desempeño. La mediana y los percentiles resumen estos datos, mientras que pruebas como la de rangos de Wilcoxon comparan grupos sin asumir normalidad. Por ejemplo, una encuesta compara el nivel de satisfacción de clientes con diferentes servicios ofrecidos para determinar el mejor evaluado.
          div(titulo="Análisis de variables de intervalo en estudios comparativos")
            p.mb-0 Las variables de intervalo miden diferencias cuantitativas sin un cero absoluto, como temperatura o puntuaciones de pruebas. Se analizan usando la media y desviación estándar, y herramientas como ANOVA identifican diferencias entre grupos. Por ejemplo, se estudian resultados académicos para evaluar el impacto de un nuevo método de enseñanza.
          div(titulo="Variables de razón en métricas absolutas")
            p.mb-0 Las variables de razón, como ingresos o peso, incluyen un cero absoluto que permite operaciones matemáticas completas. La regresión lineal analiza relaciones entre estas variables, y pruebas como la t de Student comparan promedios. Por ejemplo, una empresa examina cómo los ingresos de clientes influyen en su gasto en servicios adicionales.
          div(titulo="Impacto del método estadístico en los resultados")
            p.mb-0 Seleccionar el método estadístico según el tipo de variable garantiza resultados válidos. Usar la media en datos ordinales, como rangos de satisfacción, distorsiona las conclusiones. En cambio, análisis no paramétricos destacan tendencias reales. Por ejemplo, en salud, elegir métodos incorrectos para variables de recuperación puede comprometer decisiones clínicas.




















      
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
