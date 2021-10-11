<template>
 <footer class="container">
        <div class="footer-section">
            <div class="row">
                <div class="col-lg-2 m-3">
                    <div class="row"><h3>Ciudades </h3></div>
                    <div class="row">Bogotá</div>
                    <div class="row">Medellín</div>
                    <div class="row">Neiva</div>
                    <div class="row">Bucaramanga</div>
                    <div class="row">Barranquilla</div>
                    <div class="row">Cali</div>
                </div>

                <div class="col-lg-3 m-3">
                    <div class="row"><h3>Servicios</h3></div>
                    <div class="row">Acceso para Discapacitados</div>
                    <div class="row">Aire Libre</div>
                    <div class="row">Aire Acondicionado</div>
                    <div class="row">Ambiente Musical</div>
                    <div class="row">Parqueadero</div>
                    <div class="row">Wi-fi</div>
                </div>

                <div class="col-lg-3 m-3">
                    <div class="row"><h3>Reservaciones</h3></div>
                    <div class="row">Horario Lunes a Domingo de 6 AM a 10 PM</div>
                    <div class="row">Teléfono 3124989745</div>
                    <div class="row">Dirección Carrera 4b-sur #110 Barrio el Centro</div>
                    <div class="row">Correo LoNuestroColombia@gmail.com</div>
                </div>

                <div class="col-lg-2 m-3">
                    <div class="row"><h3>Síguenos</h3></div>
                    <div class="row">
                        <div class="col-6">
                            <a href="https://m.facebook.com/login/?locale=es_ES"><img src="../assets/imagenes/fb.png" alt="" width="50" height="70"></a>
                        </div>
                        <div class="col-6">
                            <a href="https://twitter.com/login?lang=es"><img src="../assets/imagenes/tw.png" alt="" width="50" height="70"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 .footer-section { /*modificado background por marcela*/
        background-color: #c7f108;
        color: black;
        justify-content: space-evenly;
        }
 
</style>
