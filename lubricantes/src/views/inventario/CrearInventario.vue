<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-dark text-white text-center">Crear Inventario</div>
                <div class="card-body">
                    <form v-on:submit="guardar">
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-gift"></i></span>
                            <input type="text" v-model="nombre" id="nombre" class="form-control" 
                            maxlength="50" placeholder="Nombre" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-comment"></i></span>
                            <input type="text" v-model="tipomotor"  id="tipomotor" class="form-control" 
                            maxlength="50" placeholder="Tipo de Motor" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-comment"></i></span>
                            <input type="text" v-model="viscocidad" id="viscocidad" class="form-control" 
                            maxlength="150" placeholder="Viscocidad" required>
                        </div>                        
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-comment"></i></span>
                            <input type="text" v-model="marca" id="marca" class="form-control" 
                            maxlength="50" placeholder="Marca" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-comment"></i></span>
                            <input type="text" v-model="Volumen" id="Volumen" class="form-control" 
                            maxlength="50" placeholder="Volumen" required>
                        </div>                        
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-dollar-sign"></i></span>
                            <input type="number" v-model="costo" id="costo" class="form-control" 
                            placeholder="Costo" step="0.01" required>
                        </div>
                        <div class="d-grid col-6 mx-auto">
                            <button class="btn btn-success"><i class="fa-solid fa-floppy-disk"></i>  Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    import { show_alerta, enviarSolicitud } from '../../funciones';
    export default{
        data(){
            return{
                nombre:'',tipomotor:'',viscocidad:'',marca:'',volumen:'',costo:0, url:'http://localhost:3000/inventarios/'
            }
        }
        ,methods:{
            guardar(){
                event.preventDefault();
                if(this.nombre.trim() === ''){
                    show_alerta('Escribe el nombre','warning','nombre');
                }
                else if(this.tipomotor.trim() === ''){
                    show_alerta('Escribe el tipomotor','warning','tipomotor');
                }
                else if(this.viscocidad.trim() === ''){
                    show_alerta('Escribe la viscocidad','warning','viscocidad');
                }
                else if(this.marca.trim() === ''){
                    show_alerta('Escribe el marca','warning','marca');
                }
                else if(this.volumen.trim() === ''){
                    show_alerta('Escribe el volumen','warning','volumen');
                }                
                else if(this.costo === ''){
                    show_alerta('Escribe el costo','warning','costo');
                }
                else{
                    var parametros= {nombre:this.nombre.trim(), tipomotor:this.tipomotor.trim(), viscocidad:this.viscocidad.trim(), marca:this.marca.trim(), volumen:this.volumen.trim(), costo:this.costo}
                    enviarSolicitud('POST',parametros,this.url,'Inventario guardado',2);
                }
            }
        }
    }
</script>
