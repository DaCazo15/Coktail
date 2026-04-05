<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="./public/img/logo.svg" alt="Project logo"></a>
</p>

<h3 align="center">Coktail: AI Bebidas</h3>

---

## Resumen

**Coktail: AI Bebidas** es una aplicación web que utiliza inteligencia artificial para proporcionar recetas de cócteles y bebidas. Los usuarios pueden ingresar el nombre de una bebida y recibir una receta, incluyendo ingredientes y método de preparación. La aplicación está diseñada para ser un recurso útil tanto para bartenders profesionales como para entusiastas de la coctelería.

### Cuenta con tres secciones:

- **Inicio**: Donde los usuarios pueden ingresar el nombre de la bebida que desean conocer.
- **Favoritos**: Donde los usuarios pueden guardar y acceder a sus bebidas favoritas.
- **Generar Receta con IA**: Donde los usuarios pueden solicitar una receta generada por inteligencia artificial para una bebida específica.

### Características Técnicas

En la **Sección de Inicio**, Se hace hace consumo por medio de <a href="https://axios-http.com/es/docs/intro">axios</a> a la API de <a href="https://www.thecocktaildb.com/api.php">TheCocktailDB</a>, que proporciona una amplia base de datos de recetas de cócteles. Esto permite a los usuarios obtener información precisa y detallada sobre una gran variedad de bebidas.

En la **Sección de Favoritos**, se utiliza un estado global con <a href="https://pinia.vuejs.org/">Pinia</a> para gestionar la información de las bebidas, lo que permite una escalabilidad y flexibilidad en la gestión de datos. Además, se implementó un sistema de carga para mejorar la experiencia del usuario durante las consultas a la inteligencia artificial, asegurando que las respuestas se entreguen de manera rápida y eficiente.

Dado el enfoque **free-to-use** de la aplicacion, en la **Sección de Generación de Recetas con IA**, consume modelos de lenguaje de codigo abierto de <a href="https://openrouter.ai/">OpenRouter</a>, se realizo un listado de modelos gratuitos para su uso, con el fin de garantizar una experiencia de usuario fluida y eficiente. Entre los seleccionados se encuentran modelos de:

- **Deepseek**, conocidos por su capacidad de comprensión y generación de texto de alta calidad.

- **Gemini**, que ofrece un rendimiento excepcional en tareas de procesamiento de lenguaje natural.

- **Meta**, que se destaca por su versatilidad y capacidad para manejar una amplia gama de consultas.

- **NVidia**, que proporciona modelos optimizados para rendimiento y eficiencia.

El codigo esta modulrizado en componentes, lo que facilita su mantenimiento y escalabilidad. La aplicación se construyó utilizando **Vue.js**.

## Autor<a name = "authors"></a>

- [@DaCazo15](https://github.com/DaCazo15)
