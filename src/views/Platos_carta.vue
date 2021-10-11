<template>
<body class="carta_style_body">

       
    <div class="container">
      <center><h1 style="color:red; text-align:center;font-weight: bold;">Disfrutas Nuestros Platos a la Carta</h1></center>
         <main class="container">  
        <section id="Carta" class="Carta-section"> 
    <div class="row">
        <div class="col-lg-6">
            <article class="Carta-info1">
                <h2 class="Carta-info__title">Arepas Rellenas</h2>
                <hr>
                <div class="Carta-header">
                    <img class="Carta-info__imagen m-1 p-1 lg rounded-3 shadow-lg" src="../assets/img-platos-carta/arepas.jpg" alt="">
                    
                </div>
                <p class="precios">
                    $ 9.000
                    </p>
                    <p class="drinks-info__text">
                        Deliciosas Arepas con todo lo que mas te gusta.
                    </p>
                    <label for="">Cantidad</label>
                     <input type="Seleccione" size="2">
                    <button type="button" class="btn btn-success btn-xs" onclick="acumulador()">Agrega al pedido</button>
            </article>
        </div>
        <div class="col-lg-6">
            <article class="Carta-info2">
                <h2 class="Carta-info__title">Picada</h2>
                <hr>
                <div class="Carta-header">
                    <img class="Carta-info__imagen m-1 p-1 lg rounded-3 shadow-lg" src="../assets/img-platos-carta/picada.jpg" alt="" >
                
                </div>
                <p class="precios">
                    $ 10.000
                    </p>
                    <p class="drinks-info__text">
                        Todas las carnes al alcance de tu boca, disfrutalo en lo nuestro.
                    </p>
                    <label for="">Cantidad</label>
                     <input type="Seleccione" size="2">
                     <template>
                        <v-btn block>
                          Block Button
                        </v-btn>
                      </template>
                    <button type="button" class="btn btn-success btn-xs" onclick="acumulador()">Agrega al pedido</button>
            </article>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-6">
            <article class="Carta-info3">
                <h2 class="Carta-info__title">Tamal</h2>
                <hr>
                <div class="Carta-header">
                    <img class="Carta-info__imagen m-1 p-1 lg rounded-3 shadow-lg" src="../assets/img-platos-carta/tamal.jpg" alt="" >
                
                </div>
                <p class="precios">
                    $ 7.000
                    </p>
                    <p class="drinks-info__text">
                        De nuestra tierra para el mundo, tipico tamal tolimence delicias de lo nuestro. 
                    </p>
                    <label for="">Cantidad</label>
                     <input type="Seleccione" size="2">
                    <button type="button" class="btn btn-success btn-xs" onclick="acumulador()">Agrega al pedido</button>
            </article>
        </div>
        <div class="col-lg-6">
            <article class="Carta-info4">
                <h2 class="Carta-info__title">Pechuga Gratinada</h2>
                <hr>
                <div class="Carta-header">
                <img class="Carta-info__imagen m-1 p-1 lg rounded-3 shadow-lg" src="../assets/img-platos-carta/Pechuga1.jpg" alt="">
                
                </div>
                <p class="precios">
                $ 10.000
                </p>
                <p class="drinks-info__text">
                   Disfruta de una delicia creada en lo nuestro.
                </p>
                <label for="">Cantidad</label>
                 <input type="Seleccione" size="2">
                <button type="button" class="btn btn-success btn-xs" onclick="acumulador()">Agrega al pedido</button>
            </article>
        </div>
        <div class="col-lg-6">
            <article class="Carta-info4">
                <h2 class="Carta-info__title">Trucha a la Plancha</h2>
                <hr>
                <div class="Carta-header">
                <img class="Carta-info__imagen m-1 p-1 lg rounded-3 shadow-lg" src="../assets/img-platos-carta/trucha_plancha.jpg" alt="">
                
                </div>
                <p class="precios">
                $ 10.000
                </p>
                <p class="drinks-info__text">
                    Algo diferente con un sabor diferente, vivelo en los nuestro.
                </p>
                <label for="">Cantidad</label>
                 <input type="Seleccione" size="2">
                <button type="button" class="btn btn-success btn-xs" onclick="acumulador()">Agrega al pedido</button>
                <br><br>

            </article>
        </div>
        <div class="col-lg-6">
            <article class="Carta-info4">
                <h2 class="Carta-info__title">Carne Asada</h2>
                <hr>
                <div class="Carta-header">
                <img class="Carta-info__imagen m-1 p-1 lg rounded-3 shadow-lg" src="../assets/img-platos-carta/carne asada.jpg" alt="">
                
                </div>
                <p class="precios">
                $ 12.000
                </p>
                <p class="drinks-info__text">
                    Carne de ternera a la brasa, acompañada con papa, plátano, yuca y cubierta con ají (opcional).
                </p>
                <label for="">Cantidad</label>
                 <input type="Seleccione" size="2">
                <button type="button" class="btn btn-success btn-xs" onclick="acumulador()">Agrega al pedido</button>
                <br><br>
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
<style>
.Carta-info__imagen{
    width: 600px;
    height: 350px;
}
.Carta-info__imagen:hover{
    border:5px solid #f7f7f7

}

.Carta-info {
    width: 50%;
    padding: 20px;
}

.Carta-header {
    display: flex;
    justify-content: space-around;
}

.Carta-info__title {
    align-self: center;
    margin-top: 40px;
    
}
.carta_style_body{
    
    
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma,Verdana, sans-serif;
        max-width: 1600px;
        min-width: 375px;
        margin-right: auto;
        margin-left: auto;
        margin-top: 10px;
        margin-bottom: 3px;
        color: #222222;
      
        

}

</style>