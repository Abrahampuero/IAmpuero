<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>AbrahAmpuero - Automatizaciones con IA</title>

    <link 
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
    rel="stylesheet">

    <style>
    body {
      font-family: system-ui, sans-serif;
      color: #212529; /* Color de texto base */
    }
    .hero {
      background: linear-gradient(to bottom, #ffffff, #f1f5f9);
      padding: 80px 0;
    }
    section {
      padding: 80px 0;
    }
    .hero-image {
        /* Para que la imagen del CEO no se estire demasiado verticalmente */
        max-height: 500px; 
        object-fit: cover;
    }
    .navbar-brand img {
        height: 40px; 
    }
  </style>
</head>

<body class="bg-white">

<nav class="navbar navbar-expand-lg bg-white py-3 border-bottom">
  <div class="container">
    
    <div class="d-flex align-items-center">
        <a class="navbar-brand" href="#">
            <img src="LOGO WEB.jpg" alt="AbrahAmpuero - Tecnología que trabaja por ti">
        </a>
    </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-end" id="navMenu">
      <ul class="navbar-nav me-3 gap-3">
        <li class="nav-item"><a class="nav-link" href="#servicios">Servicios</a></li>
        <li class="nav-item"><a class="nav-link" href="#como">Cómo</a></li>
        <li class="nav-item"><a class="nav-link" href="#casos">Casos</a></li>
        <li class="nav-item"><a class="nav-link" href="#contacto">Contacto</a></li>
      </ul>
      <a href="#contacto" class="btn btn-primary px-4">Escríbeme</a>
    </div>
  </div>
</nav>

<section class="hero">
  <div class="container">
    <div class="row align-items-center g-5">
      <div class="col-md-6">
        <h1 class="fw-bold display-5">
          Automatizaciones con Inteligencia Artificial para negocios que quieren crecer
        </h1>
        <p class="mt-3 fs-5 text-muted">
          Ahorra tiempo, reduce errores y escala operaciones con soluciones a medida. Yo me ocupo de todo para que tú solo disfrutes resultados.
        </p>
        <div class="mt-4 d-flex gap-3">
          <a href="#contacto" class="btn btn-primary btn-lg">Pedir demo</a>
          <a href="#casos" class="btn btn-outline-secondary btn-lg">Ver casos</a>
        </div>
      </div>

      <div class="col-md-6 text-center">
                <img src="WhatsApp Image 2025-11-23 at 16.58.37.jpeg" 
             id="ceo-img" 
             class="img-fluid hero-image rounded-3 shadow-lg" 
             alt="AbrahAmpuero, CEO de la empresa">
      </div>
    </div>
  </div>
</section>

<section id="servicios">
  <div class="container">
    <h2 class="fw-bold text-center mb-5">Servicios</h2>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="border rounded p-4 h-100">
          <h5 class="fw-bold">Automatización de procesos</h5>
          <p class="text-muted mt-2">Simplifico tus tareas repetitivas con flujos automatizados totalmente adaptados a tu negocio.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="border rounded p-4 h-100">
          <h5 class="fw-bold">Integración de Inteligencia Artificial</h5>
          <p class="text-muted mt-2">Implemento IA práctica: chatbots, asistentes, clasificación de datos y respuestas automáticas.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="border rounded p-4 h-100">
          <h5 class="fw-bold">Optimización y análisis</h5>
          <p class="text-muted mt-2">Obtén control total de tu negocio con análisis inteligentes y reportes automatizados.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="como" class="bg-light">
  <div class="container">
    <h2 class="fw-bold text-center mb-5">Cómo trabajo</h2>
    <div class="row g-4">
      <div class="col-md-4 text-center">
        <h4 class="fw-bold">1. Análisis</h4>
        <p class="text-muted">Identifico qué tareas se pueden automatizar y qué soluciones te darán más beneficio.</p>
      </div>
      <div class="col-md-4 text-center">
        <h4 class="fw-bold">2. Desarrollo</h4>
        <p class="text-muted">Creo e implemento automatizaciones listas para usar, sin que tengas que hacer nada.</p>
      </div>
      <div class="col-md-4 text-center">
        <h4 class="fw-bold">3. Optimización</h4>
        <p class="text-muted">Me aseguro de que todo funcione perfecto y mejoro lo que sea necesario.</p>
      </div>
    </div>
  </div>
</section>

<section id="casos">
  <div class="container">
    <h2 class="fw-bold text-center mb-5">Casos de éxito</h2>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="border rounded p-4 h-100">
          <h5 class="fw-bold">Empresa A</h5>
          <p class="text-muted">Aumento del 40% en productividad con automatizaciones internas.</p>
        </div>
              </div>
      <div class="col-md-4">
        <div class="border rounded p-4 h-100">
          <h5 class="fw-bold">Empresa B</h5>
          <p class="text-muted">Reducción del 60% en tareas manuales de gestión de datos.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="border rounded p-4 h-100">
          <h5 class="fw-bold">Empresa C</h5>
          <p class="text-muted">Automatización completa de atención al cliente con IA.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="contacto" class="bg-light">
  <div class="container">
    <h2 class="fw-bold text-center mb-4">Contacto</h2>
    <p class="text-center mb-4 text-muted">Si quieres más información o una demo, escríbeme directamente.</p>
    <div class="text-center">
      <a href="mailto:Abrahampuero@outlook.com" class="btn btn-primary btn-lg">
        Enviar mensaje
      </a>
    </div>
  </div>
</section>

<footer class="py-4 text-center text-muted border-top">
  AbrahAmpuero © 2025 — Automatizaciones con IA
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>