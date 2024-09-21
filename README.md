# Sistema-de-Compras-de-Articulos
Desafío: Sistema de Compras de Articulos

Objetivo: Desarrollar una aplicación web para poder generar un pedido simple. La interfaz debe
contar con un listado de productos (variable estática que te proporcionaremos adjunto) obtenidos
desde el backend. Un desplegable (dropdown) de vendedores, los cuales deben obtenerse
realizando una petición HTTP a esta URL. Y un botón que te permita Generar el pedido. Para generar
un pedido debo tener seleccionado al menos un artículo.
Descripción del Desafío:

# 1. Requisitos del Frontend:
• Utilizar React o Angular.
• Crear una interfaz de usuario sencilla con una tabla o listado, con checkbox por cada
artículo, un desplegable de vendedor que por defecto no tenga valor seleccionado.
• Implementar las siguientes funcionalidades:
▪ Obtención de vendedores por petición HTTP a la API proporcionada y
volcarlo en un desplegable.
▪ Obtención de los artículos por petición HTTP al backend que estamos
desarrollando.
▪ Validaciones y buenas prácticas que consideres necesarias.
▪ Botón y Método para “Guardar Pedido”.

# 2. Requisitos del Backend:
• Utilizar C# .NET para crear una API.
• Implementar un endpoint que brinde un listado de artículos.
• Implementar un método que reciba el Pedido, realice validaciones y devuelva si la
operación fue exitosa.
# 3. Validaciones:
• El Precio debe ser mayor a 0.
• Las descripciones de artículos no deben contener caracteres especiales.
• Se debe mostrar únicamente artículos de Deposito 1.