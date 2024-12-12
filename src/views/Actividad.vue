<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Las aleaciones y análisis en los metales preciosos',
      titulo: 'Cuestionario',
      introduccion:
        'Preguntas de opción múltiple: lea los siguientes enunciados y seleccione la respuesta que considere correcta.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué son las aleaciones en el contexto de los metales preciosos?',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Metales puros sin tratamiento',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Combinaciones de dos o más metales',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Metales en su estado natural',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Solo metales reciclados', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es el principal objetivo de analizar metales preciosos?',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar el costo de producción',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Determinar su pureza y calidad',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mejorar la apariencia estética',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Facilitar su transporte', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué metal se considera el estándar para medir la calidad de las aleaciones?',
          imagen: require('@/assets/actividad/3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Cobre', esCorrecta: false },
            { id: 'b', texto: 'Plata', esCorrecta: false },
            { id: 'c', texto: 'Oro', esCorrecta: true },
            { id: 'd', texto: 'Aluminio', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué técnica se utiliza comúnmente para analizar la pureza de metales preciosos?',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Tinción', esCorrecta: false },
            { id: 'b', texto: 'Espectrometría', esCorrecta: true },
            { id: 'c', texto: 'Fundición', esCorrecta: false },
            { id: 'd', texto: 'Decapado', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es una propiedad importante de las aleaciones de metales preciosos?',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Color y brillo', esCorrecta: false },
            { id: 'b', texto: 'Dureza y resistencia', esCorrecta: true },
            { id: 'c', texto: 'Precio en el mercado', esCorrecta: false },
            { id: 'd', texto: 'Tamaño de la pieza', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué influencia tiene la composición de una aleación en su uso?',
          imagen: require('@/assets/actividad/3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No tiene ninguna influencia',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Afecta su durabilidad y apariencia',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Solo afecta su costo', esCorrecta: false },
            { id: 'd', texto: 'Determina su forma', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué factor se debe considerar al formular una aleación de metales preciosos?',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de metales en inventario',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Las características específicas requeridas',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Las preferencias del vendedor',
              esCorrecta: false,
            },
            { id: 'd', texto: 'La ubicación del taller', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de los siguientes metales es comúnmente utilizado en aleaciones de joyería?',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Plomo', esCorrecta: false },
            { id: 'b', texto: 'Oro', esCorrecta: true },
            { id: 'c', texto: 'Zinc', esCorrecta: false },
            { id: 'd', texto: 'Hierro', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Por qué es importante seguir las normativas en la conformación de aleaciones?',
          imagen: require('@/assets/actividad/3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para aumentar el precio de las joyas',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Para garantizar la calidad y seguridad',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Para evitar impuestos', esCorrecta: false },
            { id: 'd', texto: 'Para mejorar la publicidad', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué se requiere para asegurar que una aleación cumpla con los estándares de calidad?',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo la opinión del operario',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Análisis regular y procedimientos adecuados',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Verificar el diseño', esCorrecta: false },
            { id: 'd', texto: 'Usar metales reciclados', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál de los siguientes es un ejemplo de una aleación de oro?',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Plata esterlina', esCorrecta: false },
            { id: 'b', texto: 'Oro blanco', esCorrecta: true },
            { id: 'c', texto: 'Platino', esCorrecta: false },
            { id: 'd', texto: 'Cobre puro', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'El análisis de metales preciosos generalmente se realiza para determinar:',
          imagen: require('@/assets/actividad/3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Su densidad', esCorrecta: false },
            { id: 'b', texto: 'Su pureza', esCorrecta: true },
            { id: 'c', texto: 'Su color', esCorrecta: false },
            { id: 'd', texto: 'Su peso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: 'La aleación "plata esterlina" se compone principalmente de:',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '92.5% de plata y 7.5% de cobre',
              esCorrecta: true,
            },
            { id: 'b', texto: '99% de plata y 1% de cobre', esCorrecta: false },
            { id: 'c', texto: '90% de plata y 10% de zinc', esCorrecta: false },
            {
              id: 'd',
              texto: '75% de plata y 25% de cobre',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué aleación de metales preciosos se utiliza principalmente para crear monedas de inversión?',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Oro con plata', esCorrecta: true },
            { id: 'b', texto: 'Plata con cobre', esCorrecta: false },
            { id: 'c', texto: 'Oro con cobre', esCorrecta: false },
            { id: 'd', texto: 'Platino con paladio', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'El proceso de refinación de oro incluye una técnica conocida como:',
          imagen: require('@/assets/actividad/3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Electrolisis', esCorrecta: true },
            { id: 'b', texto: 'Calor directo', esCorrecta: false },
            { id: 'c', texto: 'Densificación', esCorrecta: false },
            { id: 'd', texto: 'Aleación al vacío', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué proceso se utiliza para analizar la pureza del oro en una muestra sin destruirla?',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Análisis espectro métrico', esCorrecta: false },
            { id: 'b', texto: 'Análisis a fuego', esCorrecta: false },
            { id: 'c', texto: 'Prueba del ácido', esCorrecta: true },
            { id: 'd', texto: 'Prueba del imán', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es el principal metal utilizado en la aleación con oro para producir "oro blanco"?',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Plata', esCorrecta: false },
            { id: 'b', texto: 'Paladio', esCorrecta: true },
            { id: 'c', texto: 'Cobre', esCorrecta: false },
            { id: 'd', texto: 'Zinc', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'El análisis de metales preciosos mediante rayos X se conoce como:',
          imagen: require('@/assets/actividad/3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Análisis por fluorescencia de rayos X',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ensayo a fuego',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Prueba de ácido', esCorrecta: false },
            {
              id: 'd',
              texto: 'Análisis por espectrometría',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Por qué se utiliza el platino en la fabricación de aleaciones para joyería de alta gama?',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque es un metal barato y fácil de obtener',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Debido a su alta dureza y resistencia a la corrosión',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Porque es ligero y no reacciona con otros metales',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Debido a su color rojo brillante',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: 'El oro de 10 quilates tiene una pureza aproximada de:',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '50% de oro puro', esCorrecta: true },
            { id: 'b', texto: '75% de oro puro', esCorrecta: false },
            { id: 'c', texto: '91.6% de oro puro', esCorrecta: false },
            { id: 'd', texto: '99.9% de oro puro', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
