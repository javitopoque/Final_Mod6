<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-success">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Lubricantes</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <!-- <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li> -->
        <li class="nav-item dropdown" >
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Activos
          </a>
          <ul class="dropdown-menu">
            <li><router-link to="/homeactivo" class="dropdown-item" href="#">Mostrar</router-link ></li>
            <li><hr class="dropdown-divider"></li>
            <li><router-link to="/crearactivo" class="dropdown-item" href="#">Crear</router-link ></li>            
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Inventario
          </a>
          <ul class="dropdown-menu">
            <li><router-link to="/homeinventario" class="dropdown-item" href="#">Mostrar</router-link ></li>
            <li><hr class="dropdown-divider"></li>
            <li><router-link to="/crearinventario" class="dropdown-item" href="#">Crear</router-link ></li>            
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Usuario
          </a>
          <ul class="dropdown-menu">
            <li><router-link to="/homeusuario" class="dropdown-item" href="#">Mostrar</router-link ></li>
            <li><hr class="dropdown-divider"></li>
            <li><router-link to="/crearusuario" class="dropdown-item" href="#">Crear</router-link ></li>            
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <div class="container-fluid mt-3">
    <router-view/>
  </div>
  
</template>

