<template>
 <header>  
        <div class="container">
            <!-- margen -->
            <div class="row">
                <div class="col">
                </div>
            </div>
            <!-- menu -->
            <div class="subheader">
                <div class="row">
                    <div class="col-5">
                        <h1>Restaurante lo Nuestro</h1>
                    </div>
                    <div class="col-7">
                        <ul class="navegacion">
                            <li><a href="./">Inicio</a></li>
                            <li><a href="">Menu</a>
                                <ul>
                                    <li><a href="./Platos_carta">Carta<img class="imagen-menu-desplegable" src="../assets/img-platos-dia/bandeja_paisa.jpeg" alt="" ></a></li>
                                    <li><a href="./Bebidas">Bebidas<img class="imagen-menu-desplegable" src="../assets/img-bebidas/limonada-natural.jpg" alt="" ></a></li>
                                    <li><a href="/Platos_dia">Platos Dia<img class="imagen-menu-desplegable" src="../assets/imagenes/platos_dia.jpg" alt="" ></a></li> 
                                </ul> 
                            </li>
                            <li><a href="./Reservaciones">Reservaciones</a></li>
                            <li><a href="./Nosotros">Nosotros</a></li>
                            <li><a href="./administrador">Administrador</a></li>
                        </ul>
                    </div> 
                </div>
            </div>
        </div>

        <!-- inicio encabezado del sitio -->
        <div class="container">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="imagen-movible" src="../assets/img-banner/banner 11.jpg"  alt="" >
                </div>
                <div class="carousel-item">
                    <img class="imagen-movible" src="../assets/img-banner/banner 21.jpg"  alt="" >
                </div>
                <div class="carousel-item">
                    <img class="imagen-movible" src="../assets/img-banner/banner 33.jpg"  alt="" >
                </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        
        <!-- fin encabezado del sitio -->
    </header>
 
 
  
</template>

<script>
export default {
    name: 'Header',
  props: {
    msg: String
  }
}
  
  

</script>


<style>


.subheader{
    margin: auto;
    width: auto;
}

ul, ol {
    list-style: none;
}

.navegacion li a {
    color: black;
    text-decoration: none;
    padding: 10px 10px;
    display: block;    
}

.navegacion li a:hover{
    background-color: #f3e13d;
}

.navegacion > li {
    float: left;
}

.navegacion li ul > li{
    float: left;
    background-color: whitesmoke;
}

.navegacion li ul {
    display: none;
    position:absolute;
    min-width: 140px;
    z-index: 1;
}

.navegacion li:hover > ul{
    display: block;
}

h1{
    font-family: ini;
    font-size: 80px;
}

.imagen-menu-desplegable{
    border-radius: 20%;
    width: 100%;
    height: 100px;
    margin-right: center;
    margin-left: center;
}

.imagen-movible{
    width: 100%;
    height: 300px;
}

/*Etiquetas Marcela*/

h2{
    text-align:center;
    justify-content: center;  
    
}
p{
    justify-content: center;
}

.Reservaciones-equipo{
    background-color: #f3a683;
}

.derecho-autor {
    background-color: #df6b36;
    height: 50px;
    display: flex;
    color: white;
    justify-content: space-evenly;
}




.button{
    border-radius: 50%; 
    background-color: #b3562c;
    height: 50px;
    padding: 4px;
    width: 120px;
    color: white     

}

.button1 {
    border-radius: 4%;
    background-color: #eb8c32;
    align-content: center;
    height: 40px;
    padding: 6px;
    width: 200px;
    color: white
}

.plato-dia{        
    border-color: #f5c02f;
    border-style: solid;
    border-right-width: 15%;
}
.plato-carta{        
    border-color: #f5c02f;
    border-style: solid;
    border-right-width: 15%;
}
.bebidas{        
    border-color: #f5c02f;
    border-style: solid;
    border-right-width: 15px;
}
.col {
  border:#c7f108 solid;
    } 
    
/*Etiquetas Daniel*/
.diario-section {
    display: flex;
    margin-bottom: 50px;
}
/*.seccion-bebidas {
    height: auto;
    display: flex;
    flex-wrap: wrap;
}*/

.diario-info {
    width: 50%;
    padding: 20px;
    background-color: #FFC72C;
}

.diario-header {
    display: inside;
    justify-content: center;
}

.diario-info__title {
    align-self: auto;
}

/*Etiquetas Base*/

    * {
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .header-section {
        margin-bottom: 100px;
        background: rgb(177, 89, 7) ;
    }

    .header-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        text-align: center;
    }

    .site-title {
        width: 30%;
    }

    .site-nav { /*modificado border y width por sebastian*/
        width: 100%;
        display: flex;
        justify-content:space-around;
        align-items:center;
        border: 1px solid rgb(41, 190, 216);
    }

    .site-nav>a {
        color: inherit;
        text-decoration: none;
    }

    .site-nav>a:hover {
        text-decoration: underline;
        font-weight: bold;
    }

    .logo-container {
        width: 30%;
    }

    .logo-container__site-logo {
        height: 80px;
    }

    .banner {
        width: 100%;
    }

    .banner>img {
        width: 100%;
        height: 400px;
        max-width: 1400px;
        object-fit: cover;
    }

    .Menu-section,
    .Reservaciones-section,
    .Bebidas-section,
    .team-section {/*modificado display:flex por sebastian
        /*display: flex;*/
        margin-bottom: 100px;
    }

    .Reservaciones-section,
    .header-container{
        background-color: #f7f7f7
    }

    .Reservaciones-section {
        flex-wrap: wrap;
    }

    .Menu-info { /*modificado background por marcela*/
        padding: 20px;
        text-align: center;
        background: rgb(177, 89, 7) ; 
    }
    .precios{
        color: darkblue;
        font-weight: bold;

    }

</style>
