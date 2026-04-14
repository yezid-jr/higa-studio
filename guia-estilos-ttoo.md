# 🎨 Tattoo Taxonomy Guide

Guía estandarizada para categorías, temas y etiquetas de tatuajes.

Esta guía define una **estructura única y sin duplicados** para clasificar tatuajes correctamente en bases de datos o aplicaciones.

---

# 📌 Estructura General

Cada tatuaje debe tener:

```json
{
  "category": [],
  "topic": [],
  "tags": [],
  "placement": [],
  "size": []
}
```

Donde:

| Campo       | Significado                  |
| ----------- | ---------------------------- |
| `category`  | Estilo artístico del tatuaje |
| `topic`     | Qué representa el tatuaje    |
| `tags`      | Detalles visuales o técnicos |
| `placement` | Parte del cuerpo             |
| `size`      | Tamaño del tatuaje           |

---

# 🎨 CATEGORY (Estilos de tatuaje)

Define **cómo se ve el tatuaje**.

⚠️ Solo usar los siguientes valores.

```json
[
  "realismo",
  "microrealismo",
  "black-grey",
  "color-realism",

  "tradicional",
  "neo-tradicional",
  "new-school",

  "japones",
  "oriental",

  "blackwork",
  "dotwork",
  "linework",
  "fineline",

  "geometrico",
  "mandala",

  "minimalista",

  "acuarela",

  "lettering",
  "caligrafia",

  "anime",
  "cartoon",

  "tribal",
  "polinesio",
  "maori",

  "trash-polka",

  "dark-art",
  "surrealismo",

  "ornamental",

  "sketch",
  "ignorant-style"
]
```

---

# 🧩 TOPIC (Temática del tatuaje)

Define **qué representa el tatuaje**.

```json
[
  "animals",
  "mythology",
  "fantasy",
  "nature",
  "flowers",
  "plants",

  "people",
  "portrait",

  "skull",
  "death",

  "religion",
  "spiritual",

  "symbols",

  "nautical",

  "space",
  "galaxy",

  "anime",
  "gaming",
  "movies",

  "music",

  "weapons",

  "dragons",
  "snakes",

  "wolves",
  "lions",
  "birds",

  "butterflies",

  "mandala",

  "geometric-patterns",

  "tribal-symbols",

  "quotes",
  "numbers",
  "names",

  "hearts",

  "phoenix",
  "tigers",
  "koi",

  "gods",

  "demons",

  "angels",

  "landscape",

  "architecture",

  "vehicles",

  "abstract"
]
```

---

# 🏷️ TAGS (Detalles específicos)

Describe **cómo se ve o se siente el tatuaje**.

```json
[
  "negro",
  "color",

  "lineas-finas",
  "lineas-gruesas",

  "sombreado",
  "alto-contraste",

  "pequeño",
  "mediano",
  "grande",

  "detallado",
  "simple",

  "simetrico",
  "asimetrico",

  "floral",
  "geometrico",

  "realista",

  "oscuro",
  "brillante",

  "tradicional",

  "minimalista",

  "ornamental",

  "japones",

  "anime",

  "religioso",

  "fantasia",

  "mitologico",

  "natural",

  "decorativo",

  "personalizado",

  "masculino",
  "femenino",

  "fineline",

  "dotwork",

  "blackwork",

  "acuarela",

  "neo-tradicional",

  "microrealismo",

  "sombras-suaves",
  "sombras-fuertes"
]
```

---

# 📍 PLACEMENT (Ubicación en el cuerpo)

```json
[
  "brazo",
  "antebrazo",
  "hombro",
  "pecho",
  "espalda",

  "pierna",
  "pantorrilla",
  "muslo",

  "mano",
  "dedos",

  "cuello",

  "costillas",

  "tobillo",
  "muñeca"
]
```

---

# 📏 SIZE (Tamaño)

```json
[
  "small",
  "medium",
  "large",

  "full-sleeve",
  "half-sleeve",

  "back-piece"
]
```

---

# 🧠 Reglas Importantes

## 1. No usar duplicados

Incorrecto:

```json
"black and grey"
"black&grey"
"black-grey"
```

Correcto:

```json
"black-grey"
```

---

## 2. Usar siempre singular

Incorrecto:

```json
"mandalas"
"roses"
"dragons"
```

Correcto:

```json
"mandala"
"rose"
"dragon"
```

---

## 3. No mezclar idiomas

Incorrecto:

```json
"leon"
"lion"
```

Correcto:

```json
"lion"
```

---

# 🎯 Ejemplo Correcto

```json
{
  "id": 1,
  "title": "León Realista Black & Grey",

  "category": [
    "realismo",
    "black-grey"
  ],

  "topic": [
    "animals",
    "lions"
  ],

  "tags": [
    "negro",
    "detallado",
    "sombras-suaves",
    "grande"
  ],

  "placement": [
    "brazo"
  ],

  "size": [
    "large"
  ]
}
```

---

# 🚀 Buenas Prácticas

✔ Usar solo valores definidos
✔ Mantener nombres en minúscula
✔ Usar guiones en vez de espacios
✔ Evitar duplicados
✔ Usar inglés para estandarización

---

# 📦 Recomendación Técnica

Crear un archivo:

```bash
taxonomy.js
```

```js
export const tattooTaxonomy = {
  category: [...],
  topic: [...],
  tags: [...],
  placement: [...],
  size: [...]
};
```

Esto permite:

* Validación automática
* Filtros dinámicos
* Búsquedas inteligentes
* Escalabilidad del proyecto

---

# 🧠 Versión Avanzada (Opcional)

Más adelante puedes agregar:

* `difficulty` → dificultad técnica
* `session_count` → sesiones estimadas
* `pain_level` → nivel de dolor
* `healing_time` → tiempo de curación

Esto convierte tu base en un **sistema profesional de tatuajes**.

---

# 🏁 Fin de la Guía

Este documento define la estructura oficial para clasificar tatuajes en la base de datos.
