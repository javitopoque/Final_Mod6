import Swal from "sweetalert2";
import axios from "axios";

export function show_alerta(mensaje,icono,foco=''){
    if (foco !=='') {
        document.getElementById(foco).focus();
    }
    Swal.fire({
        title:mensaje,
        icon:icono,
        customClass: {confirmButton: 'btn btn-primary', popup:'animated zoomIn'},
        buttonsStyling:false
    });
}

export function confirmar(id,name,url,tabla){
    var url = url+id;
    const swalwithBootstrapButtons= Swal.mixin({
        customClass:{confirmButton: 'btn btn-succes me-3',cancelButton:'btn btn-danger'}
        ,buttonsStyling:false
    });
    swalwithBootstrapButtons.fire({
        title: 'Seguro de eliminar el activo '+name,
        text: 'Se perdera la informacion del activo',
        icon:'question',
        showCancelButton:true,
        confirmButtonText:'<i class="fa-solid fa-check"></i> Si, eliminar',
        cancelButtonText: '<i class="fa-solid fa-check"></i> Cancelar'}).then((result) => {
            if (result.isConfirmed) {
                enviarSolicitud('delete',{id:id},url,'Eliminado',tabla);
            } else {
                show_alerta('Operacion cancelada','info');
            }
        })
    }

    export function enviarSolicitud(metodo,parametros,url,mensaje,tabla){
        console.log("entro", metodo, parametros, url, mensaje);
        axios({method:metodo,url:url,data:parametros}).then(function (respuesta) {
            //axios.delete(url).then(function(respuesta) {
            console.log("data", data);
            var status = respuesta.data[0]['status'];
            if (status === 'success') {
                console.log("true");
                show_alerta(mensaje, status);
                windows.setTimeout(function () {
                    window.location.href = '/homeactivo';
                }, 1000);
            }
            else {
                var listado = '';
                var errores = respuesta.data[1]['errors'];
                console.log("false");
                Object.keys(errores).forEach(
                    key => listado += errores[key][0] + '.'
                );
                show_alerta(listado, 'error');
            }
        }).catch(function(error){
            //show_alerta('Guardado','ok');
            if (tabla===1) {
                window.location.href = '/homeactivo';
            }
            else if (tabla===2) {
                window.location.href = '/homeinventario';
            } else {
                window.location.href = '/homeusuario';
            }
        });
    }