<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.fondo-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Técnicas de agrupación de datos
    p.mb-5(data-aos='fade-right') Es importante tener en cuenta que la organización adecuada de los datos facilita el procesamiento, reduce errores y contribuye a obtener resultados confiables.
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1	Criterios para organizar datos según el tipo de variable
    p.mb-5(data-aos='fade-right') La organización de datos depende del tipo de variable (cualitativa o cuantitativa) y su nivel de medición (nominal, ordinal, de intervalo o de razón). Estos criterios determinan cómo agrupar y presentar los datos:
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.dots2.card-hover.p-4.h-100
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/temas/54.svg' alt='AvatarTop')
            .d-flex.justify-content-center.mb-4
              .p-1.px-5(style="background-color: #3BA935").d-inline-block
                h4.text-center.mb-0 Variables cualitativas
            p.text-center Usualmente, se organizan en categorías o clases, facilitando su representación en tablas de frecuencias o gráficos de barras.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.dots2.card-hover.p-4.h-100
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/temas/55.svg' alt='AvatarTop')
            .d-flex.justify-content-center.mb-4
              .p-1.px-5(style="background-color: #3BA935").d-inline-block
                h4.text-center.mb-0 Variables cuantitativas
            p.text-center Variables cuantitativas: pueden organizarse en intervalos o rangos, según su naturaleza (discreta o continua), y representarse en histogramas o polígonos de frecuencias.
      .col-lg-4: img(src='@/assets/curso/temas/53.png', alt='')
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.2	Técnicas de agrupación de datos para análisis estadístico
    p.mb-5(data-aos='fade-right') Agrupar datos sirve para simplificar su análisis y destacar patrones. Las principales técnicas de agrupación incluyen:
    .row.justify-content-center.mb-5
      .col-lg-11
        .p-4(style="background-color: #E2DACC")
          .row.justify-content-center.align-items-center
            .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/56.svg', alt='')
            .col-lg-8
              .tarjeta.p-4(style="background-color: #D7EED6")
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0 #[b Intervalos de clase:] se utilizan para variables cuantitativas continuas, agrupando los valores en rangos (por ejemplo, edades de 20-30, 30-40).
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0 #[b Categorías:] para variables cualitativas, se agrupan en categorías predefinidas (por ejemplo, nivel educativo: primaria, secundaria, superior).
                  li.d-flex.mb-0
                    i.fas.fa-check
                    p.mb-0 #[b Agrupación por niveles de importancia:] según el impacto de las variables en el estudio, se pueden agrupar en conjuntos prioritarios.
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.3	Importancia de una organización coherente de los datos
    p.mb-5(data-aos='fade-right') Una organización coherente facilita la interpretación y análisis, garantizando que los datos sean accesibles y claros. Los beneficios de una organización adecuada incluyen:
    .row.justify-content-center
      .col-lg-7
        .p-4.py-3(style="background-color: #C6E9F3")
          .p-2.bg-white.mb-3.rounded-3
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-check
                p.mb-0 #[b Claridad en el análisis:] para identificar tendencias y patrones.
          .p-2.bg-white.mb-3.rounded-3
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-check
                p.mb-0 #[b Precisión en los resultados:] que minimiza errores y evita interpretaciones erróneas.
          .p-2.bg-white.mb-3.rounded-3
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-check
                p.mb-0 #[b Eficiencia en el procesamiento:] de datos que agiliza el análisis y reduce la posibilidad de duplicados o inconsistencias.
      .col-lg-5.col-7: img(src='@/assets/curso/temas/57.png', alt='')
    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.4	Métodos para evitar errores en la organización de datos       
    p.mb-5(data-aos='fade-right') La organización de datos puede ser susceptible a errores, especialmente en conjuntos grandes o complejos. Los métodos para reducir errores incluyen:
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 1.
      span Métodos para evitar errores en la organización de datos
    .tabla-a.color-acento-botones.mb-5
      table
        caption Fuente: OIT, 2024.
        thead(style="background-color: #3BA935; border: 0")
          tr
            th Método
            th Descripción
            th Ejemplos de aplicación
            th Beneficios
        tbody
          tr
            td Estandarización de formatos
            td Aplicar un formato consistente en nombres, fechas, unidades, etc., para evitar errores de interpretación y entrada.
            td - Usar el formato ISO para fechas (AAAA-MM-DD).
              br
              br
              |- Unificar el uso de unidades, como kg o cm.
            td Facilita la comprensión y reduce errores en el procesamiento de datos.
          tr
            td Validación de entradas
            td Implementar reglas que limiten los valores aceptables para cada campo o variable, evitando entradas erróneas.
            td - Definir un rango válido para la edad (ej. 0-120 años).
              br
              |- Limitar los valores de género a opciones definidas (masculino, femenino, otro).
            td Ayuda a detectar y corregir entradas inusuales o incorrectas.
          tr
            td Control de duplicados
            td Verificar la existencia de datos duplicados para evitar la redundancia y posibles errores en los resultados del análisis.
            td - Identificar registros duplicados por ID o nombres en bases de datos.
              br
              |- Usar funciones de de duplicación en herramientas como Excel o SQL.
            td Previene la sobrestimación de resultados y mejora la precisión.
          tr
            td Manejo de datos faltantes
            td Establecer procedimientos para identificar, manejar y documentar datos ausentes, evitando que afecten el análisis.
            td - Rellenar valores nulos con la media o mediana del conjunto.
              br
              |- Usar la imputación predictiva para completar valores faltantes.
            td Aumenta la integridad de los datos y reduce el sesgo.
          tr
            td Automatización de procesos
            td Utilizar scripts o programas para automatizar la limpieza y organización de datos, reduciendo errores manuales.
            td - Automatizar la eliminación de espacios en blanco en nombres.
              br
              | - Programar scripts de Python para limpieza sistemática de datos.
            td Reduce el tiempo y minimiza errores humanos.
          tr
            td Control de versiones
            td Usar herramientas de control de versiones para registrar cambios y revertir a versiones anteriores en caso de error.
            td  Usar Git para mantener un historial de cambios en los datos.
              br
              |- Crear respaldos automáticos de bases de datos.
            td Permite rastrear errores y revertir cambios problemáticos.
          tr
            td Verificación cruzada
            td Comparar los datos ingresados con fuentes o registros originales para confirmar su exactitud.
            td - Comparar datos ingresados con documentos originales.
              br
              |- Verificar datos financieros contra reportes de contabilidad.
            td Asegura la precisión de los datos en los registros.
          tr
            td Documentación de procesos
            td Registrar todos los pasos de limpieza y organización para mantener un registro claro del tratamiento de datos.
            td - Documentar cambios y reglas de transformación en una guía.
              br
              |- Registrar métodos usados para manejar datos faltantes o anómalos.
            td Facilita la reproducción y auditoría del proceso.
          tr
            td Uso de herramientas de calidad de datos
            td Utilizar #[em software] especializado para identificar y corregir errores comunes en los datos.
            td - Herramientas como #[em Talend o OpenRefine] para identificar inconsistencias.
              br
              |- #[em Plugins] en Excel para validar entradas.
            td Mejora la precisión y reduce el tiempo de limpieza de datos.
          tr
            td Análisis de valores atípicos
            td Identificar y revisar valores extremos o inusuales para confirmar su validez antes de su inclusión en el análisis.
            td - Detectar valores fuera de los percentiles 1 y 99.
              br
              |- Revisar valores anómalos con gráficos de dispersión.
            td Reduce el riesgo de incluir datos incorrectos o sesgados.
    Separador
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.5	Organización de datos en estudios con múltiples variables
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.mb-lg-0.mb-3.d-lg-block.d-none: img(src='@/assets/curso/temas/58.svg', alt='')
      .col-lg-11: p.mb-0 En investigaciones que involucran múltiples variables, la correcta organización de los datos es fundamental para permitir un análisis exhaustivo y coherente. Cuando los estudios incluyen diversas dimensiones y aspectos de análisis, estructurar los datos de manera adecuada facilita la identificación de patrones, interacciones y relaciones entre variables.
    .mn.fondo-slyde.p-5.mb-5
      .tarjeta.bg-white.p-5
        SlyderA(tipo='b')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h5 Matrices de datos
              p Las matrices o tablas de datos son una herramienta para estructurar múltiples variables asociadas a cada observación o individuo dentro de un estudio. En estas matrices, cada fila representa una observación o caso, mientras que cada columna contiene los valores de una variable específica. Esta organización tabular permite analizar múltiples variables de forma simultánea, facilitando el uso de métodos estadísticos multivariados y el análisis comparativo entre observaciones. Este formato es empleado para estudios longitudinales o de cohortes, donde se necesita hacer un seguimiento de varias características a lo largo del tiempo.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/59.png', alt='')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h5 Segmentación por dimensiones
              p La segmentación de datos según dimensiones relevantes, como el tiempo, el lugar, o cualquier otra categoría contextual, facilita el análisis detallado y la exploración de interacciones complejas entre variables. Por ejemplo, en un estudio que evalúa el impacto de distintos tratamientos médicos en diferentes ubicaciones geográficas, los datos pueden segmentarse por región y por periodos de tiempo, lo cual permite observar cómo los efectos de los tratamientos varían según estas dimensiones. Esta segmentación es útil en análisis factoriales y análisis de correlación donde se exploran relaciones entre variables en contextos específicos.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/60.png', alt='')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h5 Estandarización de formatos
              p La estandarización se usa cuando se manejan datos de múltiples variables, especialmente si provienen de distintas fuentes o si se recolectan en diferentes condiciones. Estandarizar el formato de los datos significa aplicar una uniformidad en la forma en que se registran las unidades de medida, los formatos de fecha, la nomenclatura de las categorías, entre otros aspectos. Esta uniformidad permite reducir errores, evitar ambigüedades y facilita el procesamiento de los datos. La estandarización asegura que todas las variables sean compatibles para comparaciones directas y análisis conjuntos, optimizando la precisión en los resultados y permitiendo una interpretación más confiable de las interacciones entre variables.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/61.png', alt='')


















          

</template>

<script>
export default {
  name: 'Tema4',
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
