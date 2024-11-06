// Definir los componentes de las diferentes vistas
const Inicio = {
    template: `
      <section>
        <h2>Inicio</h2>
        <p>Bienvenido a mi Portfolio</p>
      </section>
    `
  };
  
  const Proyectos = {
    template: `
      <se ction>
        <h2>Proyectos</h2>
        <p>Aquí puedes encontrar información sobre mis proyectos.</p>
      </se>
    `
  };
  
  const Contacto = {
    template: `
      <section>
        <h2>Contacto</h2>
        <p>¡Contáctame para cualquier consulta!</p>
      </section>
    `
  };
  
  // Configuración de rutas con meta datos para cada vista
  const routes = [
    { path: '/', component: Inicio, meta: { title: 'Inicio - Mi Portfolio' } },
    { path: '/proyectos', component: Proyectos, meta: { title: 'Proyectos - Mi Portfolio' } },
    { path: '/contacto', component: Contacto, meta: { title: 'Contacto - Mi Portfolio' } }
  ];
  
  // Creación de instancia de VueRouter
  const router = new VueRouter({
    routes,
    mode: 'history', // Usa modo 'history' para URLs limpias (sin el hash #)
  });
  
  // Cambio de título dinámico
  router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Mi Portfolio';
    next();
  });
  
  // Instancia de Vue
  new Vue({
    el: '#app',
    router,
  });
  