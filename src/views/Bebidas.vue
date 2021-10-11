<template>


<body>

       
    <div class="container">
      <center><h1 style="color:red; text-align:center;font-weight: bold;">Ahora Disfrutas Nuestras Bebidas </h1></center>
         <main class="container">  
            <!-- inicio contenido principal -->

               <section id="Bebidas" class="Bebidas-section"> 
            <div class="row">
                <div class="col-6">
                        <article class="Bebidas-info1">
                        <h2 class="Bebidas-info__title">Limonada Natural</h2>
                        <hr>
                        <div class="Bebidas-header">
                            <img class="Bebidas-info__imagen m-1 p-1 lg rounded-3 shadow-lg" src="../assets/img-bebidas/limonada-natural.jpg" alt="" >
                            
                        </div>
                        <h3 style="color: darkblue; font-weight: bold">$ 6000</h3>
                            <p class="Bebidas-info__text">
                                Refrescante y deliciosa, completamente natural 
                            </p>
                        <form id= "input formLimonada" action="" class="form-inline mb-3">
                            <label for="">Limonadas</label>
                            <input id= "input itemLimonada" type="number" size="2">
                            <button type="submit" class="btn btn-success btn-xs" onclick="acumulador()">Agrega al pedido</button>
                        </form>
                        </article>
                </div>
                <div class="col-6">
                    <article class="Bebidas-info2">
                        <h2 class="Bebidas-info__title">Jugo de Mandarina</h2>
                        <hr>
                        <div class="Bebidas-header">
                            <img class="Bebidas-info__imagen m-1 p-1 lg rounded-3 shadow-lg" src="../assets/img-bebidas/jugo de mandarina.jpeg" alt="" >
                        
                        </div>
                        <h3 style="color: darkblue; font-weight: bold">$ 6000</h3>
                            <p class="Bebidas-info__text">
                                Delicioso extracto de Mandarina
                            </p>
                        <form id= "input formMandarina" action="" class="form-inline mb-3">
                            <label for="" >Jugo de Mandarina</label>
                            <input id="itemMandarina" type="number" size="2">
                            <button type="submit" class="btn btn-success btn-xs" onclick="acumulador()">Agrega al pedido</button>
                        </form>                    </article>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <article class="Bebidas-info3">
                        <h2 class="Bebidas-info__title">Jugo de Mora</h2>
                        <hr>
                        <div class="Bebidas-header">
                            <img class="Bebidas-info__imagen m-1 p-1 lg rounded-3 shadow-lg" src="../assets/img-bebidas/jugo-de-mora.jpg" alt="" >
                        
                        </div>
                        <h3 style="color: darkblue; font-weight: bold">$ 6000</h3>
                            <p class="Bebidas-info__text">
                                El Mejor Sabor lo Encuentras en lo Nuestro
                            </p>
                        <form id= "input formMora" action="" class="form-inline mb3">
                            <label for="">Jugo de Mora</label>
                            <input id="itemMora" type="number" size="2">
                            <button type="submit" class="btn btn-success btn-xs" onclick="acumulador()">Agrega al pedido</button>
                        </form>
                    </article>
                </div>
                <div class="col-6">
                    <article class="Bebidas-info4">
                        <h2 class="Bebidas-info__title">Refajo</h2>
                        <hr>
                        <div class="Bebidas-header">
                        <img class="Bebidas-info__imagen m-1 p-1 lg rounded-3 shadow-lg" src="../assets/img-bebidas/refajo.jpg" alt="">
                        
                        </div>
                        <h3 style="color: darkblue; font-weight: bold">$ 12000 Jarra </h3>
                        <p class="Bebidas-info__text">
                            Mezcla Perfecta Para Acompañar Tus Comidas 
                        </p>
                    <form id="input formRefajo" action="" class="form-inline mb3">
                        <label for="">Refajo</label>
                        <input id="itemRefajo" type="number" size="2">
                        <button type="submit" class="btn btn-success btn-xs" onclick="acumulador()">Agrega al pedido</button>
                    </form>
                    </article>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <article class="Bebidas-info4">
                        <h2 class="Bebidas-info__title">Cerveza</h2>
                        <hr>
                        <div class="Bebidas-header">
                        <img class="Bebidas-info__imagen m-1 p-1 lg rounded-3 shadow-lg" src="../assets/img-bebidas/cervezas.jpeg" alt="">
                        
                        </div>
                        <h3 style="color: darkblue; font-weight: bold">$ 7000</h3>
                        <p class="Bebidas-info__text">
                            Elige Tu Favorita entre las cervesas nacionales
                        </p>
                    <form id="input formCeveza" action="" class="form-inline mb3">
                        <label for="">Cerveza</label>
                        <input id="itemCerveza" type="number" size="2">
                        <button type="submit" class="btn btn-success btn-xs" onclick="acumulador()">Agrega al pedido</button>
                    </form>
                        <br><br>
    
                <label for="">Marca de Cerveza</label>                
                <input id="marcaCervaza" type="Text">
                <button type="button" class="btn btn-success btn-xs" onclick="acumulador()">Definir</button>
                    </article>
                </div>
                <div class="col-6">
                    <article class="Bebidas-info4">
                        <h2 class="Bebidas-info__title">Gaseosa</h2>
                        <hr>
                        <div class="Bebidas-header">
                        <img class="Bebidas-info__imagen m-1 p-1 lg rounded-3 shadow-lg" src="../assets/img-bebidas/gaseosa.jpg" alt="">
                        
                        </div>
                        <h3 style="color: darkblue; font-weight: bold">$ 3000</h3>
                        <p class="Bebidas-info__text">
                            El Mejor Sabor Burbujeante 
                        </p>
                    <form id="input formGaseosa" action="" class="form-inline mb3" >
                        <label for="">Gaseosa</label>
                        <input id="itemGaseosa" type="number" size="2">
                        <button type="submit" class="btn btn-success btn-xs" onclick="acumulador()">Agrega al pedido</button>
                    </form>
                        <br><br>
    
                <label for="">Sabor</label>                
                <input v-model.trim = "msg">
                <button type="button" class="btn btn-success btn-xs" onclick="acumulador()">Definir</button>
                    </article>
                    </div>
                </div>
             <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
            <script>src= "Pedidos.js" </script>


            </section>
                   <!-- fin contenido principal -->
            <br>
         
        </main>
    </div>
</body>
    
</template>
<style>
.Bebidas-section
* {
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma,Verdana, sans-serif;
}
    .Bebidas-info__imagen{
        width: 400px;
        height: 400px;
    }
    .Bebidas-info__imagen:hover{
        border:10px solid #f7f7f7
        
    }

    .Bebidas-info {
        width: 50%;
        padding: 10px;
        height: auto;
    }

    .Bebidas-header {
        display: flex;
        justify-content: space-around;
        background-color: lightgreen;
    }

    .Bebidas-info__title {
        align-self: center;
        margin-top: 30px;
        color: darkgreen; 
        font-weight: bold;
    }
        .h3 {
            color: darkblue;
            font-weight: bold
        }    
    
    .button2 :hover {
        padding: 10px 24px;
        background-color: white; 
        color: black; 
        border: 2px solid #008CBA;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 8px;
        margin: 4px 2px;        
        cursor: pointer;
    }
    

</style>