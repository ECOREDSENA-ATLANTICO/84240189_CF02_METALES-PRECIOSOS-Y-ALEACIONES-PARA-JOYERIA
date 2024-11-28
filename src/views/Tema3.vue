<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 La fundición y las variables que definen la calidad de aleación

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La fundición es la operación que permite lograr la fusión de los metales, se realiza muy comúnmente en la preparación de aleaciones preciosas, en las soldaduras y en las recuperaciones. En el ámbito de la joyería es la primera fase del proceso de fabricación y tiene por objeto obtener las aleaciones metálicas con las formas básicas a partir de las cuales se procesarán las piezas de joyería; de manera general la operación consiste en calentar los metales que componen una aleación hasta su punto de fusión, para luego verter el metal fundido sobre un molde que le dará una determinada forma. 
    
    .row.mb-3
      .col-auto
        figure
          img(src="@/assets/template/fri.svg", alt="alt")
      .col.p-0
        h4 Atmosfera de Fundición  
    
    .row.mb-5
      .col-lg-8
        p Durante el proceso de fundición es muy importante tener una atmosfera controlada en lo referido a la presencia de oxígeno en el ambiente. Esto se debe a varios problemas relacionados con 19 el comportamiento del oxigena y de los metales durante la fundición. 

        p.bgr_8.p-4.mb-0 Cuando un metal es sometido a altas temperaturas tiende a reaccionar con facilidad con el oxígeno formando óxidos metálicos inestables (en especial óxidos de cobre) los cuales pueden generar problemas de calidad, así mismo, la oxidación podría afectar a la ley de la aleación, esto se debe a que el oxígeno reaccionara selectivamente con los metales nobles y por tanto la proporción de metales nobles presentes en la aleación aumentara en relación a los metales que se oxidan, siendo esta situación desfavorable para el productor. Por otro lado, se debe tomar en consideración que cuando los metales se encuentran en estado líquido tienden a absorben gases en su interior, siendo el oxígeno el elemento que es absorbido en mayor proporción, (especial interés en el metal de plata que es el metal que más absorbe oxigeno)
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema3/2.png", alt="alt")
    
    p.mb-5.text-bold Esta absorción genera 2 problemas: 

    .row.mb-5
      .col-lg-2
        figure
          img(src="@/assets/curso/temas/tema3/3.png", alt="alt")
      .col-lg-10.align-content-center
        ul.lista-ul--color
          li.d-flex 
            i.fas.fa-check-circle.bgr
            p #[strong Porosidad:] cuando un metal se solidifica, el gas acumulado en su interior es expulsado bruscamente, sin embargo, parte de este gas puede ser retenido al interior del metal formando agujeros de diferentes tamaños. 
          li.d-flex 
            i.fas.fa-check-circle.bgr
            p #[strong Formación de óxidos al interior de la aleación:] Cuando es absorbido por el metal el oxígeno puede reaccionar con algunos componentes al interior de la aleación (especialmente el cobre) formando óxidos que son muy difíciles de remover y que inciden en la calidad de los productos de manera muy negativa.
    
    .row.mb-3
      .col-auto
        figure
          img(src="@/assets/template/fri.svg", alt="alt")
      .col.p-0
        h4 Temperatura de fundición  
    
    p.mb-5 Durante el proceso de fundición es sumamente importante el control de la temperatura de la aleación para evitar el sobrecalentamiento de la misma, el cual podría conducir al incremento de mermas de proceso y una mayor absorción de gases por el metal con las consecuencias ya descritas. 

    .bg_img_2
      figure
        img(src="@/assets/curso/temas/tema3/4.png", alt="alt")
    
    .row.mb-3.mt-5
      .col-auto
        figure
          img(src="@/assets/template/fri.svg", alt="alt")
      .col.p-0
        h4 Técnicas y equipos de fundición aplicables en joyería 
    
    .row.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/tema3/5.png", alt="alt")
      .col-lg-7
        p La tecnología empleada para fundir aleaciones de metales preciosos en joyería es muy diversa; puede ir desde la utilización de sopletes hasta la aplicación de equipos mucho más sofisticados como los hornos de inducción. La aplicación de determinada tecnología dependerá esencialmente de la empresa, del volumen de producción y de los parámetros de calidad que se necesiten alcanzar. 
    
    p.text-bold Existen tres tecnologías de fundición aplicables en la industria joyera:

    .row.mb-3.mt-5
      .col-auto
        figure
          img(src="@/assets/template/fri.svg", alt="alt")
      .col.p-0
        h4 Soplete de Fundición  
    
    .row.mb-5
      .col-lg-8
        p.mb-5 La fundición con soplete consiste en aplicar la llama directamente sobre el metal depositado en el crisol. Todos los sopletes poseen una estructura y forma de funcionamiento bastante similar, poseen un mecanismo que produce una mezcla gaseosa inflamable conformada por dos tipos de sustancias, cuando esta mezcla gaseosa sale a través de la boquilla del soplete, y con el aporte de una fuente inicial de calor, se genera una llama como producto de la reacción de oxidación de la mezcla gaseosa.
        h3.bgr_1 Combustibles 
        p.text-bold.mt-5 Los combustibles son las sustancias que entran en combustión, es decir que se oxidan. Los principales combustibles utilizados en los sopletes de fundición de metales preciosos son:
        p #[strong Hidrogeno:] que puede generar llamas con temperaturas muy elevadas y es considerado como el combustible más limpio, es el combustible más recomendado para fundir aleaciones de platino, sin embargo, es un gas caro y poco disponible en nuestro medio. 
      .col-lg-4.align-content-center
        figure
          img(src="@/assets/curso/temas/tema3/6.png", alt="alt")
    
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema3/7.png", alt="alt")
      .col-lg-8
        LineaTiempoD.color-primario.mb-5
          div(numero="1" titulo="Gas natural")
            p Está compuesto mayormente por metano y etano, este gas es combustible barato, limpio y adecuado para la gran mayoría de aplicaciones en joyería. Si bien su capacidad calorífica es inferior a la del hidrogeno, su ventaja radica en su disponibilidad y que su abastecimiento por tuberías elimina muchos problemas de manipulación. 
          div(numero="2" titulo="GLP o gas licuado de petróleo")
            p Es una mezcla de propano y butano que, dependiendo del país o de diferentes plantas, puede tener una composición variada, sin embargo, el propano constituye la mayor parte de la mezcla. Al igual que el gas natural es un combustible limpio, sin embargo, resulta más caro y difícil de manipular, considerando que solo está disponible en cilindros o garrafas.  
          div(numero="3" titulo="Acetileno")
            p Que, si bien pueden generar llamas con temperaturas muy elevadas, es considerado como el combustible menos limpio puesto que su combustión genera muchos subproductos de carbón que pueden afectar negativamente en especial a las aleaciones de oro y platino.

    h3.bgr_1 Capacidad 

    p.mt-5 La cantidad de metal que se puede fundir a través de un soplete es limitada, a manera de referencia se puede decir que lo sopletes de fundición que alcanzan las temperaturas más elevadas pueden fundir alrededor de 250 grs de plata 925 en un ciclo de fundición, desde luego esto depende de muchos factores: tipo de soplete, tipo de combustible, forma de alimentación del oxígeno, tamaños del crisol, temperaturas de fusión de los metales componentes de la aleación, etc. 
    
    SlyderA(tipo="b").bgr_3.mb-5
      .row.justify-content-center
        .col-md-7.mb-4.mb-md-0.align-content-center.text-white
          h3 Soplete de fundición 
          p Un soplete de fundición es una herramienta utilizada para fundir metales, que genera altas temperaturas mediante la combinación de combustible y oxígeno. Su diseño permite ajustar la llama y el flujo de aire, optimizando el proceso de fusión. Ideal para joyería y metalurgia, su eficacia depende de factores como el tipo de soplete y las características del metal a fundir. 
        .col-md-3
          figure
            img(src='@/assets/curso/temas/tema3/11.png', alt='Imagen de apoyo')
      .row.justify-content-center
        .col-md-7.mb-4.mb-md-0.align-content-center.text-white
          h3 Soplete de fundición a gas 
          p Un soplete de fundición de gas es una herramienta que utiliza gas, como propano o acetileno, para generar altas temperaturas necesarias para fundir metales. Su diseño permite ajustar la llama, proporcionando control sobre el proceso de fusión. Es ideal para trabajos en joyería y metalurgia, facilitando la fusión de aleaciones con precisión y eficiencia en talleres artesanales y profesionales.  
        .col-md-3
          figure
            img(src='@/assets/curso/temas/tema3/12.png', alt='Imagen de apoyo')
      .row.justify-content-center
        .col-md-7.mb-4.mb-md-0.align-content-center.text-white
          h3 Soplete de fundición gas/oxigeno
          p Un soplete de fundición de oxígeno utiliza oxígeno y combustible, como acetileno, para generar temperaturas extremas que permiten la fusión de metales. Este tipo de soplete proporciona una llama muy caliente y controlable, ideal para trabajos de precisión en joyería y metalurgia. Su capacidad para fundir metales de alta densidad lo convierte en una herramienta esencial en talleres especializados.
        .col-md-3
          figure
            img(src='@/assets/curso/temas/tema3/13.png', alt='Imagen de apoyo')
      
    
    
    
    .row.mb-3.mt-5
      .col-auto
        figure
          img(src="@/assets/template/fri.svg", alt="alt")
      .col.p-0
        h4 Horno eléctrico  
    
    .row.mb-5
      .col-lg-8
        p Los hornos eléctricos de fundición para joyería son unidades compactas y relativamente económicas. Generan calor debido al paso de corriente eléctrica a través de una resistencia eléctrica que se encuentra alojada en una cámara donde se coloca el crisol que a su vez contiene el metal a fundir, el calor generado por la resistencia calienta el crisol y este a su vez calienta el metal en su interior. La capacidad de los hornos eléctricos está en el rango de 700 a 2500 gramos de plata 925 por ciclo de fundición (esta cantidad depende de los metales con que se trabaje). 
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema3/8.png", alt="alt")
    
    .row.mb-3.mt-5
      .col-auto
        figure
          img(src="@/assets/template/fri.svg", alt="alt")
      .col.p-0
        h4 Control de variables 
    
    p.mb-5 Los hornos eléctricos permiten un mejor desempeño y control de las variables del proceso de fundición respecto de los sopletes, adicionalmente, al ser programables permiten cierta autonomía al personal que opera el equipo. 

    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema3/9.png", alt="alt")
      .col-lg-8
        LineaTiempoD.color-primario.mb-5
          div(numero="1" titulo="Atmosfera de fundición")
            p La gran mayoría de los hornos eléctricos utilizan crisoles de grafito que protegen al metal contra la oxidación y la absorción de oxígeno durante el proceso de fundición, esto es posible gracias a que el grafito sometido a altas temperaturas reacciona con el oxígeno presente en la atmosfera disminuyendo drásticamente la presencia de moléculas de oxígeno que podrían reaccionar con el metal o ser absorbidos por este. 
          div(numero="2" titulo="Temperatura de Fundición")
            p Los hornos eléctricos permiten programar la temperatura de fundición, además están equipados con controladores que permiten mantener las temperaturas adecuadas para el proceso de fundición sin el riesgo de sobrecalentamiento del metal, usualmente la temperatura máxima que alcanzan estos equipos es de 1120 °C. 
          div(numero="3" titulo="Homogeneizado")
            p Es un horno eléctrico, el método de homogeneizado más común consiste en revolver manualmente el metal fundido con una varilla de grafito, desde luego este no es el método ideal, algunas unidades están equipadas con un agitador mecánico al interior del crisol mejorando su desempeño. Tiempo de operación: para fines prácticos se puede considerar que un horno eléctrico complementará un ciclo completo de fundición en un tiempo de 30 a 40 minutos, sin embargo, cuando se realizan ciclos seguidos, el tiempo de operación disminuye a 20 minutos luego del primer ciclo.
      
    .row.mb-3.mt-5.mb-5
      .col-auto
        figure
          img(src="@/assets/template/fri.svg", alt="alt")
      .col.p-0
        h4 Hornos de inducción: 
    
    .bg_img_3
      .row.justify-content-center
        .col-lg-7.align-content-center
          p La tecnología de inducción ha sido empleada por mucho tiempo en la industria de la fundición de metales a gran escala, sin embargo, no fue sino hasta el desarrollo de los semiconductores que fue posible la fabricación de equipos más pequeños adecuados a las escalas de producción de la industria de joyería. 
          p.mb-0 La fundición por inducción se trata de un sistema electromagnético donde una bomba de inducción que puede utilizar corriente con frecuencias altas y medias induce el movimiento de los electrones de los átomos metálicos y este movimiento genera el calor suficiente para fundir el metal. 
        .col-lg-3
          figure
            img(src="@/assets/curso/temas/tema3/10.png", alt="alt")


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
