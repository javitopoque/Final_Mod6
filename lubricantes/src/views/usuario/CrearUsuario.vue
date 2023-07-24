<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-dark text-white text-center">Crear Usuario</div>
                <div class="card-body">
                    <form v-on:submit="guardar">
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-gift"></i></span>
                            <input type="text" v-model="nombres" id="nombres" class="form-control" 
                            maxlength="50" placeholder="Nombres" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-comment"></i></span>
                            <input type="text" v-model="apellidos"  id="apellidos" class="form-control" 
                            maxlength="50" placeholder="Apellidos" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-comment"></i></span>
                            <input type="text" v-model="cionit" id="cionit" class="form-control" 
                            maxlength="150" placeholder="CI o NIT" required>
                        </div>                        
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-comment"></i></span>
                            <input type="text" v-model="movilidad" id="movilidad" class="form-control" 
                            maxlength="50" placeholder="Movilidad" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-comment"></i></span>
                            <input type="text" v-model="marca" id="marca" class="form-control" 
                            maxlength="50" placeholder="Marca" required>
                        </div>                        
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-comment"></i></span>
                            <input type="text" v-model="motor" id="motor" class="form-control" 
                            maxlength="50" placeholder="Motor" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-dollar-sign"></i></span>
                            <input type="number" v-model="rolesId" id="rolesId" class="form-control" 
                            placeholder="Rol" step="1" required>
                        </div>
                        <!-- <div class="row">
                            <div class="input-field col s12">
                            <select v-model="payload.rolesId" >
                                <option value="0" disabled selected>Elija un rol</option>
                                <option v-for="(value, key) in roles" :key="key" :value="value.id">{{ value.name }}
                                </option>
                            </select>
                            <label>Departamento</label>
                            </div>
                        </div>                         -->
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
                nombres:'',apellidos:'',cionit:'',movilidad:'',marca:'',motor:'', rolesId:1, url:'http://localhost:3000/usuarios/'
            }
        }
        ,methods:{
            guardar(){
                event.preventDefault();
                if(this.nombres.trim() === ''){
                    show_alerta('Escribe los nombres','warning','nombres');
                }
                else if(this.apellidos.trim() === ''){
                    show_alerta('Escribe los apellidos','warning','apellidos');
                }
                else if(this.cionit.trim() === ''){
                    show_alerta('Escribe el CI o NIT','warning','cionit');
                }
                else if(this.movilidad.trim() === ''){
                    show_alerta('Escribe el movilidad','warning','movilidad');
                }
                else if(this.marca.trim() === ''){
                    show_alerta('Escribe el marca','warning','marca');
                }                
                else if(this.motor.trim() === ''){
                    show_alerta('Escribe el motor','warning','motor');
                }
                else if(this.rolesId === ''){
                    show_alerta('Escribe el rol','warning','rolesId');
                }                
                else{
                    var parametros= {nombres:this.nombres.trim(), apellidos:this.apellidos.trim(), cionit:this.cionit.trim(), movilidad:this.movilidad.trim(), marca:this.marca.trim(), motor:this.motor.trim(), rolesId:this.rolesId}
                    enviarSolicitud('POST',parametros,this.url,'Usuario guardado',3);
                }
            }
        }
    }
</script>
