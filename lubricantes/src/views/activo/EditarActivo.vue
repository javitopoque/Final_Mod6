<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-dark text-white text-center">Editar Activo</div>
                <div class="card-body">
                    <form v-on:submit="guardar">
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-gift"></i></span>
                            <input type="text" v-model="nombre" id="nombre" class="form-control" 
                            maxlength="50" placeholder="Nombre" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-comment"></i></span>
                            <input type="text" v-model="tipo"  id="tipo" class="form-control" 
                            maxlength="50" placeholder="Tipo" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-comment"></i></span>
                            <input type="text" v-model="descripcion" id="descripcion" class="form-control" 
                            maxlength="150" placeholder="Descripción" required>
                        </div>                        
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-comment"></i></span>
                            <input type="text" v-model="color" id="color" class="form-control" 
                            maxlength="50" placeholder="Color" required>
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
    import { useRoute } from 'vue-router';
    import axios from 'axios';
    export default{
        name: 'EditarActivo',
        data(){
            return{
                id:0,nombre:'',tipo:'',descripcion:'',color:'',costo:0, url:'http://localhost:3000/activos'
            }
        },
        mounted(){
            const route = useRoute();
            this.id = route.params.id;
            this.url = this.url+'/'+this.id;
            this.getActivo();
        }
        ,methods:{
            getActivo(){
                axios.get(this.url).then(
                    response => (
                        this.nombre = response.data['nombre'],
                        this.tipo = response.data['tipo'],
                        this.descripcion = response.data['descripcion'],
                        this.color = response.data['color'],
                        this.costo = response.data['costo']
                    )
                );
            },
            guardar(){
                event.preventDefault();
                if(this.nombre.trim() === ''){
                    show_alerta('Escribe el nombre','warning','nombre');
                }
                else if(this.tipo.trim() === ''){
                    show_alerta('Escribe el tipo','warning','tipo');
                }
                else if(this.descripcion.trim() === ''){
                    show_alerta('Escribe la descripción','warning','descripcion');
                }
                else if(this.color.trim() === ''){
                    show_alerta('Escribe el color','warning','color');
                }
                else if(this.costo === ''){
                    show_alerta('Escribe el costo','warning','costo');
                }
                else{
                    var parametros= {nombre:this.nombre.trim(), tipo:this.tipo.trim(), descripcion:this.descripcion.trim(), color:this.color.trim(), costo:this.costo}
                    enviarSolicitud('PUT',parametros,this.url,'Activo Actualizado',1);
                }
            }
        }
    }
</script>
