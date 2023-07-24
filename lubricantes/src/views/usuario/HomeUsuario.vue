<template v-slot:lista>

    <div class="row">
        <search placeholder="Buscar usuario" @searchtext="searchFx($event)"></search>
<filter-group>
    <filter-item :items="roles" label="Rol" @onfilter="onFilterFx('rolesId', $event)"></filter-item>
</filter-group>
        <div class="col-lg-8 offset-lg-2">
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    <!-- <search placeholder="Buscar cliente" @searchtext="searchFx($event)"></search>
                <filter-group>
                    <filter-item :items="states" label="Departamento"
                        @onfilter="onFilterFx('statesId', $event)"></filter-item>
                </filter-group> -->

                    <thead><tr><th>#</th><th>NOMBRES</th><th>   APELLIDOS</th><th>CI O NIT</th><th>MOVILIDAD</th><th>MARCA</th><th>MOTOR</th><th>ROL</th><th>ACCIONES</th></tr></thead>
                        <tbody class="table-group-divider" id="contenido">
                            <tr v-for="usua, i in usuario" :key="usua.id">
                            <td>{{ (i + 1) }}</td>
                            <td>{{ usua.nombres }}</td>
                            <td>{{ usua.apellidos }}</td>
                            <td>{{ usua.cionit }}</td>
                            <td>{{ usua.movilidad }}</td>
                            <td>{{ usua.marca }}</td>
                            <td>{{ usua.motor }}</td>
                            <td>{{ usua.roles.rol }}</td>
                            <td>
                                <router-link :to="{path:'editarusuario/'+usua.id}" class="btn btn-warning">
                                    <i class="fa-solid fa-edit"></i>
                                </router-link> &nbsp;
                                <button class="btn btn-danger" v-on:click="eliminar(usua.id,usua.nombres)">
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
    import Search from '@/components/Search.vue'
    import FilterGroup from '@/components/FilterGroup.vue';
    import FilterItem from '@/components/FilterItem.vue';
    export default{
        data(){
            return{ usuario:null,
                    toSearch: "",
                    toFilter: "",
                    roles: []
                }
        },
        mounted(){
            this.getUsuario();
        },
        methods: {
            onFilterFx(field, event) {
            if (event === '') {
                this.toFilter = '';
            } else {
                this.toFilter = '&' + field + '=' + event;
            }
            this.getUsuario();
            },
            getRoles(){
                this.axios({
                method: 'get',
                url: 'http://localhost:3000/roles'
                })
                .then((response) => {
                    this.roles = response.data;
                    setTimeout(function () {
                        var elems = document.querySelectorAll('select');
                        var select = M.FormSelect.init(elems);
                    });
                    console.log(response);
                });
            },
            getUsuario(){
                axios.get('http://localhost:3000/usuarios?_expand=roles'+this.toSearch+this.toFilter).then(
                    response => (
                        this.usuario = response.data
                    )
                );
            },
            eliminar(id,nombres){
                confirmar(id,nombres,'http://localhost:3000/usuarios/',3);
            },
            searchFx(event){
            if (event === "") {
                this.toSearch = '';
            } else {
                this.toSearch = '&q=' + event;
            }
            this.getUsuario();
            }
        },
        components: {
        Search,FilterGroup,FilterItem
    },
    mounted() {
        this.getUsuario();
        this.getRoles();
    },
    created() {
        setTimeout(() => {
            var elems = document.querySelectorAll('select');
            var select = M.FormSelect.init(elems);
        });
    }
    }
</script>