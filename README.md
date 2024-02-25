## Mini-Proyecto - ClimaAPI - 2024

> [!NOTE]
> _El codigo esta comentado de explicaciones._

> **_Practica en React y API (SOLO GET)_**

#### --- Vista Previa ---

**_Mas adelante cuando haga el diseño_**

#### --- Cosas que me faltan para el climaAPI ---

- [ ] Hacer a traves de la busqueda unas cards y que pueda clickear la ciudad que quiera.
- [ ] Encontrar una forma de no mostrar las ciudades repetidas.
- [ ] Hacer **diseño** (CSS).
- [ ] Mostrar bien los datos sacados de la API.

#### --- Errores que siento que cometí en el proyecto ---

---

### --- Commits ---

> Del actual al antiguo

| **'cambio de idea/diseño'** - Fecha 25/02 |

- Pense en hacerlo para que quede mejor, en vez de un datalist que salgan una serie de ciudades con cards, la logica igual de antes es igual.
- No hice mucho hoy pero masomenos deje las bases de la idea, cree los componentes ListaCiudades y CardCiudad (ListaCiudades.jsx).
- Solucione un problema que tuve ayer con el manejo del useEffect en el componente Buscador.

| **'busqueda por datalist y API_KEY'** - Fecha 24/02 |

- Empece a hacer la logica de la busqueda por datalist, ya casi la termino.
- Oculte la API_KEY en otro archivo, porque me salio un aviso del git guardian avisandome.
- Cree el componente InfoClima para mostrar la info de la ciudad buscada.

| **'fetch a las APIs'** - Fecha 23/02 |

- Hice el fetch a las 2 APIs GeoCoding y Current Weather, la primera para buscar por nombre la ciudad y que me de las coordenadas. La segunda para que me de los datos meteorologicos de la ciudad, a traves de las coordenadas que me dio la primer API.
- Hice el buscador para escribir la ciudad y buscarla, despues para chequear hice que me retorne el nombre pero anda medio mal, lo tengo que ver.
- Cree el componente Buscador y el archivo tools.js, me queda mas limpio los componentes asi.

---
