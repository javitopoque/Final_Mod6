<template>
    <div class="row">
        <div class="col-lg-8 offset-lg-2">
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    <thead><tr><th>#</th><th>NOMBRE</th><th>DESCRIPCION</th><th>COLOR</th><th>COSTO</th><th>ACCIONES</th></tr></thead>
                        <tbody class="table-group-divider" id="contenido">
                            <tr v-for="acti, i in activo" :key="acti.id">
                            <td>{{ (i + 1) }}</td>
                            <td>{{ acti.nombre }}</td>
                            <td>{{ acti.descripcion }}</td>
                            <td>{{ acti.color }}</td>
                            <td>${{new Intl.NumberFormat('es-bo').format(acti.costo) }}</td>
                            <td>
                                <router-link :to="{path:'editaractivo/'+acti.id}" class="btn btn-warning">
                                    <i class="fa-solid fa-edit"></i>
                                </router-link> &nbsp;
                                <button class="btn btn-danger" v-on:click="eliminar(acti.id,acti.nombre)">
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
        name: 'HomeActivo',        
        data(){
            const api = process.env.VUE_APP_API
            return{ api, activo:null}
        },
        mounted(){
            this.getActivo();
        },
        methods: {
            getActivo(){
                axios.get('http://localhost:3000/activos').then(
                    response => (
                        this.activo = response.data
                    )
                );
            },
            eliminar(id,nombre){
                confirmar(id,nombre,'http://localhost:3000/activos/',1);
            }
        }
    }
</script>