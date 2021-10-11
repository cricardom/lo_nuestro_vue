<template>
<body class="body-del-dia">

       
    <div class="container">
       <center><h1 style="color:red; text-align:center;font-weight: bold;">Disfrutas nuestros Platos del Dia</h1></center>
         <main class="container">  
            <!-- inicio contenido principal -->

            <!-- inicio sección de noticias -->
                <section id="Dia" class="Dia-section"> 
            <div class="row">
                <div class="col-lg-6">
                        <article class="Dia-info1">
                        <h2 class="Dia-info__title">Almuerzo Ejecutivo</h2>
                        <hr>
                        <div class="Dia-header">
                            <img class="Dia-info__imagen m-1 p-1 lg rounded-3 shadow-lg" src="../assets/img-platos-dia/Ejecutivo.jpg" alt="">
                            
                        </div>
                        <p class = "precios">
                            $ 9.000
                            </p>
                            <p class="drinks-info__text">
                                Sopa del día, bandeja con arroz blanco, papa o plátano, proteína, energético, ensalada y jugo natural.
                            </p>
                            <label for="">Cantidad</label>
                             <input type="Seleccione" size="2">
                           <button type="button" class="btn btn-success btn-xs" onclick="acumulador()">Agrega al pedido</button>
                    </article>
                </div>
                <div class="col-lg-6">
                    <article class="Dia-info2">
                        <h2 class="Dia-info__title">Ajiaco</h2>
                        <hr>
                        <div class="Dia-header">
                            <img class="Dia-info__imagen m-1 p-1 lg rounded-3 shadow-lg" src="../assets/img-platos-dia/Ajiaco.jpg" alt="" >
                        
                        </div>
                        <p class = "precios">
                            $ 10.000
                            </p>
                            <p class="drinks-info__text">
                                Sopa blanca hecha con pollo, papa, maíz, crema agria, y un acompañamientos de arroz blanco y aguacate.
                            </p>
                            <label for="">Cantidad</label>
                             <input type="Seleccione" size="2">
                           <button type="button" class="btn btn-success btn-xs" onclick="acumulador()">Agrega al pedido</button>
                    </article>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <article class="Dia-info3">
                        <h2 class="Dia-info__title">Lechona</h2>
                        <hr>
                        <div class="Dia-header">
                            <img class="Dia-info__imagen m-1 p-1 lg rounded-3 shadow-lg" src="../assets/img-platos-dia/Lechona.jpg" alt="" >
                        
                        </div>
                        <p class = "precios">
                            $ 7.000
                            </p>
                            <p class="drinks-info__text">
                                Mezcla de garbanzos, carne de cerdo, especias y arroz acompañado de arepa.
                            </p>
                            <label for="">Cantidad</label>
                             <input type="Seleccione" size="2">
                           <button type="button" class="btn btn-success btn-xs" onclick="acumulador()">Agrega al pedido</button>
                    </article>
                </div>
                <div class="col-lg-6">
                    <article class="Dia-info4">
                        <h2 class="Dia-info__title">Bandeja Paisa</h2>
                        <hr>
                        <div class="Dia-header">
                        <img class="Dia-info__imagen m-1 p-1 lg rounded-3 shadow-lg" src="../assets/img-platos-dia/bandeja_paisa.jpeg" alt="">
                        
                        </div>
                        <p class = "precios">
                        $ 10.000
                        </p>
                        <p class="drinks-info__text">
                            Arroz blanco, frijoles rojos, carne molida o picada, plátano, chorizo, maíz, chicharrón de cerdo, huevo frito, arepa y aguacate.
                        </p>
                        <label for="">Cantidad</label>
                         <input type="Seleccione" size="2">
                       <button type="button" class="btn btn-success btn-xs" onclick="acumulador()">Agrega al pedido</button>
                    </article>
                </div>
                <div class="col-lg-6">
                    <article class="Dia-info4">
                        <h2 class="Dia-info__title">Cerveza</h2>
                        <hr>
                        <div class="Dia-header">
                        <img class="Dia-info__imagen m-1 p-1 lg rounded-3 shadow-lg" src="../assets/img-platos-dia/sancocho.jpeg" alt="">
                        
                        </div>
                        <p class = "precios">
                        $ 10.000
                        </p>
                        <p class="drinks-info__text">
                            Sancocho de carne o pescado. Contiene yuca, maíz, papas y plátano, y acompañamiento de arroz blanco.
                        </p>
                        <label for="">Cantidad</label>
                         <input type="Seleccione" size="2">
                       <button type="button" class="btn btn-success btn-xs" onclick="acumulador()">Agrega al pedido</button>
                        <br><br>
    
                    </article>
                </div>
                <div class="col-lg-6">
                    <article class="Dia-info4">
                        <h2 class="Dia-info__title">Carne a la Mamona</h2>
                        <hr>
                        <div class="Dia-header">
                        <img class="Dia-info__imagen m-1 p-1 lg rounded-3 shadow-lg" src="../assets/img-platos-dia/Mamona.jpg" alt="">
                        
                        </div>
                        <p class = "precios">
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
                <div class="col-lg-6">
                    <article class="Dia-info4">
                        <h2 class="Dia-info__title">Changua</h2>
                        <hr>
                        <div class="Dia-header">
                        <img class="Dia-info__imagen m-1 p-1 lg rounded-3 shadow-lg" src="../assets/img-platos-dia/Changua.jpg" alt="">
                        
                        </div>
                        <p class = "precios">
                        $ 6.000
                        </p>
                        <p class="drinks-info__text">
                            Sopa a base de leche con huevo, cebolla, cilantro, tostadas o pan y chocolate.
                        </p>
                        <label for="">Cantidad</label>
                         <input type="Seleccione" size="2">
                       <button type="button" class="btn btn-success btn-xs" onclick="acumulador()">Agrega al pedido</button>
                        <br><br>
                    </article>
                </div>
                <div class="col-lg-6">
                    <article class="Dia-info4">
                        <h2 class="Dia-info__title">Mondongo</h2>
                        <hr>
                        <div class="Dia-header">
                        <img class="Dia-info__imagen m-1 p-1 lg rounded-3 shadow-lg" src="../assets/img-platos-dia/Mondongo.jpg" alt="">
                        
                        </div>
                        <p class = "precios">
                        $ 12.000
                        </p>
                        <p class="drinks-info__text">
                            Sopa de mondongo con variedad de carne, verduras,
                            papa y un acompañamiento de arroz blanco, aguacate y plátano.
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
.body-del-dia {

    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma,Verdana, sans-serif;
    
    max-width: 1400px;
    min-width: 375px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 0;
    margin-bottom: 0;
    color: #27251F;

}

.Dia-info__imagen{
    width: 600px;
    height: 350px;
}
.Dia-info__imagen:hover{
    border:5px solid #f7f7f7

}

.Dia-info {
    width: 50%;
    padding: 20px;
}

.Dia-header {
    display: flex;
    justify-content: space-around;
}

.Dia-info__title {
    align-self: center;
    margin-top: 40px;
    
}

</style>