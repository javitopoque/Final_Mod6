<template>
    <div class="row">
        <div class="col-lg-8 offset-lg-2">
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    <thead><tr><th>#</th><th>NOMBRE</th><th>TIPOMOTOR</th><th>VISCOCIDAD</th><th>MARCA</th><th>VOLUMEN</th><th>COSTO</th><th>ACCIONES</th></tr></thead>
                        <tbody class="table-group-divider" id="contenido">
                            <tr v-for="inven, i in inventario" :key="inven.id">
                            <td>{{ (i + 1) }}</td>
                            <td>{{ inven.nombre }}</td>
                            <td>{{ inven.tipomotor }}</td>
                            <td>{{ inven.viscocidad }}</td>
                            <td>{{ inven.marca }}</td>
                            <td>{{ inven.volumen }}</td>
                            <td>${{new Intl.NumberFormat('es-bo').format(inven.costo) }}</td>
                            <td>
                                <router-link :to="{path:'editarinventario/'+inven.id}" class="btn btn-warning">
                                    <i class="fa-solid fa-edit"></i>
                                </router-link> &nbsp;
                                <button class="btn btn-danger" v-on:click="eliminar(inven.id,inven.nombre)">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    import { confirmar } from '../../funciones'
    export default{
        data(){
            return{ inventario:null}
        },
        mounted(){
            this.getInventario();
        },
        methods: {
            getInventario(){
                axios.get('http://localhost:3000/inventarios').then(
                    response => (
                        this.inventario = response.data
                    )
                );
            },
            eliminar(id,nombre){
                confirmar(id,nombre,'http://localhost:3000/inventarios/',2);
            }
        }
    }
</script>