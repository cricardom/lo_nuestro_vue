<template>
<body>

       
    <div class="container">
      <center><h1 style="color:red; text-align:center;font-weight: bold;">Reserva con Nosotros</h1></center>
         <main class="container">  
            <!-- inicio contenido principal -->

            <!-- inicio sección de noticias -->
                <section id="Noticias" class="Noticias-section"> 
                <div class="container">
            <div class="row"><div class="col"></div></div>
            <div class="row"><div class="col"></div></div>
        <br>
            
            <div class="card card-body">
                <div class="row"><div class="col-12"><h2>formulario de reserva</h2></div></div>

                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-7">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Nombre Completo</span>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </div>
                    </div>
                </div>
    
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-7">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Numero de Telefono</span>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </div>
                    </div>
                </div>
    
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-7">
                        <div class="input-group mb-3">
                            <label class="input-group-text" for="inputGroupSelect01">Personas en reserva</label>
                            <select class="form-select" id="inputGroupSelect01">
                              <option selected>seleccione...</option>
                              <option value="1">una</option>
                              <option value="2">dos</option>
                              <option value="3">cuatro</option>
                              <option value="4">seis</option>
                              <option value="5">ocho</option>
                            </select>
                        </div>
                    </div>
                </div>
    
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-4">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Fecha</span>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                        </div>
                    </div>
                </div>
    
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-7">
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                            <label for="floatingTextarea2">Comentarios</label>
                          </div>
                    </div>
                </div>
            </div>
        <br>            
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
.team-info{
        width: 25%;
        padding: 15px;
    }

    .team-info__imagen{
        display: block;
        margin-right: auto;
        margin-left: auto;
    }

</style>