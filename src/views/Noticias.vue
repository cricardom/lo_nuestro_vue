<template>
 
<body>

       
    <div class="container">
      <center><h1 style="color:red; text-align:center;font-weight: bold;">Noticias</h1></center>
         <main class="container">  
            <!-- inicio contenido principal -->

            <!-- inicio sección de noticias -->
                <section id="Noticias" class="Noticias-section"> 
                <div class="row">
                    <div class="col-lg-6">
                        <article class="Noticias-info1">
                            <h2 class="Noticias-info__title">¡Abrimos!</h2>
                            <hr>
                            <div class="Noticias-header">
                                <img class="Noticias-info__imagen m-1 p-1 lg rounded-3 shadow-lg" src="https://www.eventosuleta.com/wp-content/uploads/2020/11/organizar-un-evento-o-inauguracion-en-vitoria.jpg" alt="" >
                                
                            </div>
                            <p class="Noticias-info__text">
                                Ven a nuestra gran inauguración el día 27 de septiembre donde podrás disfrutar de excelentes eventos en vivo y promociones en nuestros deliciosos platos. No te lo puedes perder.
                            </p>
                        </article>
                    </div>
                    <div class="col-lg-6">
                        <article class="Noticias-info2">
                            <h2 class="Noticias-info__title">Espacio para todos</h2>
                            <hr>
                            <div class="Noticias-header">
                                <img class="Noticias-info__imagen m-1 p-1 lg rounded-3 shadow-lg" src="https://www.toucanian.com/img/avatar/phpIHQhFZ_5cd81d0dda2c1.jpg" alt="" >
                            
                            </div>
                            <p class="Noticias-info__text">
                            Más que tu mejor amigo, es parte de tu familia. Por eso en "Lo nuestro" activamos el servicio de guardería para tu peludito, allí podrás dejar a tu mascota
                            mientras disfrutas de nuestros exquisitos manjares. Será tratado como en casa, no puede estar en mejores manos.
                            </p>
                    
                        </article>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <article class="Noticias-info3">
                            <h2 class="Noticias-info__title">¡Gran sorteo!</h2>
                            <hr>
                            <div class="Noticias-header">
                                <img class="Noticias-info__imagen m-1 p-1 lg rounded-3 shadow-lg" src="https://www.aviatur.com/source/redes/tips-para-viajar-en-crucero.jpg" alt="" >
                            
                            </div>
                            <p class="Noticias-info__text">
                                En estes mes, por cada $100.000 en nuestro restaurante estarás participando en el sorteo de un gran crucero por toda Europa; tú y hasta
                                3 personas más de tu familia o amigos podrán disfrutar de una semana llena de aventura. No dejes pasar esta oportunidad.
                            </p>
                        </article>
                    </div>
                    <div class="col-lg-6">
                        <article class="Noticias-info4">
                            <h2 class="Noticias-info__title">Celebra con nosotros</h2>
                            <hr>
                            <div class="Noticias-header">
                            <img class="Noticias-info__imagen m-1 p-1 lg rounded-3 shadow-lg" src="https://www.enter.co/wp-content/uploads/2017/11/iStock-601920764-1024x768.jpg" alt="">
                            
                            </div>
                            <p class="Noticias-info__text">
                                ¿Es tu día de cumpleaños? En restaurante "Lo nuestro" lo celebramos en grande. Ven en tu día especial y te ofrecemos increíbles promociones en nuestros platos, 
                                además de obsequiarte el postre y un recuerdo de nuestra parte, para que nos lleves contigo a cualquier lugar.
                            </p>
                        </article>
                    </div>
                </div>   
            </section>
            <!-- fin sección de noticias -->
            <!-- fin contenido principal -->
            <br>
         
        </main>
    </div>
</body>
         
 
</template> 

<script>

export default {
  

  }

</script>
<style>
.Noticias-info__imagen{
        width: 600px;
        height: 350px;
    }
    .Noticias-info__imagen:hover{
        border:5px solid #f7f7f7
    
    }

    .Noticias-info {
        width: 50%;
        padding: 20px;
    }

    .Noticias-header {
        display: flex;
        justify-content: space-around;
    }

    .Noticias-info__title {
        align-self: center;
    }

</style>