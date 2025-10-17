# TODO: Rediseño de Página Inspirado en Undergold Design

## Información Recopilada
- Página actual: Catálogo con header centrado, botones de categorías, subcategorías desplegables, grid de productos, modal, fondo de estrellas, botones flotantes agregados.
- Colores a mantener: Rojo (#f73737, #b10000), blanco, negro.
- Inspiración: Undergold Design - Estructura minimalista, moderna, grid de productos limpio, navegación simple, tipografía moderna, mucho espacio blanco, imágenes prominentes.

## Plan de Rediseño
- Cambiar header: Logo más grande, centrado, con navegación horizontal simple (Todos, Hombre, Mujer, Unisex) sin subcategorías desplegables.
- Layout: Full-width, productos en grid más grande y espaciado, eliminar subcategorías para simplicidad.
- Estilos: Aumentar padding, usar fuentes modernas, sombras sutiles, mantener colores temáticos.
- Mantener: Modal, fondo estrellas, botones flotantes, funcionalidad JS.

## Pasos de Implementación
- [x] Actualizar HTML: Restaurar subcategorías como estaban originalmente.
- [x] Actualizar CSS: Mantener header original, mejorar grid de productos con estilos minimalistas, mejorar botones principales y subcategorías con estilos diferenciados.
- [x] Actualizar JS: Restaurar lógica original de subcategorías.
- [ ] Probar: Verificar responsividad, funcionalidad, apariencia.

## Seguimiento
- Completado: Lectura de archivos, plan aprobado, cambios en HTML, CSS y JS.
- Próximo: Probar la página.
- Nuevo: Agregar soporte para múltiples fotos (2-4) por producto con carrusel en tarjetas.

## Plan para Múltiples Fotos
- [x] Modificar HTML: En cada product-card, reemplazar <img> con <div class="image-carousel"> conteniendo múltiples <img class="carousel-image"> y botones prev/next.
- [x] Actualizar CSS: Agregar estilos para .image-carousel, .carousel-image, .prev-btn, .next-btn (posicionamiento absoluto, visibilidad, hover).
- [x] Actualizar JS: Agregar funciones prevImage(event, btn) y nextImage(event, btn) para cambiar la imagen activa, usando event.stopPropagation().
- [x] Usar placeholders variados para 2-4 imágenes por producto (e.g., text=Camiseta+Hombre+1, +2, etc.).
