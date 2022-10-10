<template>
  <div class="flex flex-col items-center justify-start mx-16 md:mx-32 lg:mx-52">
    <div class="md:mb-10 md:mt-5 mb-5">
      <h2 class="text-3xl md:text-5xl font-bold text-slate-800">
        <span>Un nuevo </span>
        <strong class="inline-block border-b-8 border-blue-500">planteamiento</strong>
      </h2>
    </div>

    <p class="text-xl md:text-2xl text-slate-600 mb-6 leading-relaxed">
      Partiendo de la base de una aplicación para la gestión de las tareas en las
      <span class="custom-mark">prácticas de FCT de ciclos formativos</span>, se desarrolla la siguiente aplicación para darle un
      nuevo lavado de cara, más acorde a los tiempos actuales y utilizando las tecnologías más punteras.
    </p>

    <p class="text-xl md:text-2xl text-slate-600 mb-6 leading-relaxed">
      El objetivo principal de esta aplicación es aplicar los <span class="custom-mark">conceptos aprendidos</span> sobre Vue,
      Vuex y Tailwind CSS en un proyecto real que englobe estas tres tecnologías. La aplicación funciona guardando en el
      <span class="italic">storage</span> de Vuex las tareas almacenadas. Mediante <span class="italic">setters</span>,
      <span class="italic">getters</span>, <span class="italic">mutaciones</span> y <span class="italic">acciones</span> se va
      interactuando con el mismo para conseguir los propositos requeridos, en este caso,
      <span class="custom-mark">añadir, actualizar, editar y borrar</span> los registros de las diferentes tareas. Cada componente
      de la aplicación se encuentra separado del resto de acuerdo a su <span class="italic">funcionalidad</span>. Esto permite que
      el mantenimiento del proyecto sea más sencillo y se desacoplen mejor las funcionalidades.
    </p>

    <p class="text-xl md:text-2xl text-slate-600 leading-relaxed mb-6">
      Se ha incluido la librería de <span class="custom-mark">Tailwind CSS</span> para evitar el uso de
      <span class="italic">Bootstrap</span> teniendo como mera justificación
      <span class="custom-mark">el conocer su funcionamiento interno</span> y aplicar correctamente las
      <span class="italic">utility classes</span> y demás funcionalidades de la libreria.
    </p>

    <p class="text-xl md:text-2xl text-slate-600 leading-relaxed">
      La aplicación está abierta a mejoras: Mejorar la gestión <span class="italic">de los datos en Vuex</span>, Añadir
      <span class="italic">una base de datos como MongoDB</span> para permitir la persistencia de datos así como una
      <span class="italic">paginación para los registros.</span>. No obstante, esto
      <span class="custom-mark">serían mejoras futuras</span> que añadirían nuevas funcionalidades a una aplicación con una base
      establecida.
    </p>
  </div>
</template>

<script>
export default {};
</script>
