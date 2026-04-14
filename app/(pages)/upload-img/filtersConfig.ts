import { FilterGroup } from "../../types/filters";

export const filtersConfig: FilterGroup[] = [

  /* CATEGORY */

  {
    id: "category",
    title: "By Category",
    options: [

      { id: "realismo", label: "Realismo" },
      { id: "blackwork", label: "Blackwork" },
      { id: "geometrico", label: "Geométrico" },
      { id: "acuarela", label: "Acuarela" },
      { id: "tradicional", label: "Tradicional" },
      { id: "neo-tradicional", label: "Neo Tradicional" },
      { id: "minimalista", label: "Minimalista" },
      { id: "linework", label: "Linework" },
      { id: "fine-line", label: "Fine Line" },
      { id: "japones", label: "Japonés" },
      { id: "dotwork", label: "Dotwork" },
      { id: "lettering", label: "Lettering" }

    ]
  },

  /* TOPIC */

  {
    id: "topic",
    title: "By Topic",
    options: [

      { id: "animals", label: "Animals" },
      { id: "nature", label: "Nature" },
      { id: "flowers", label: "Flowers" },
      { id: "skull", label: "Skull" },
      { id: "mythology", label: "Mythology" },
      { id: "religion", label: "Religion" },
      { id: "symbols", label: "Symbols" },
      { id: "portrait", label: "Portrait" },
      { id: "fantasy", label: "Fantasy" },
      { id: "abstract", label: "Abstract" }

    ]
  },

  /* PLACEMENT */

  {
    id: "placement",
    title: "By Placement",
    options: [

      { id: "brazo", label: "Brazo" },
      { id: "antebrazo", label: "Antebrazo" },
      { id: "hombro", label: "Hombro" },
      { id: "espalda", label: "Espalda" },
      { id: "pecho", label: "Pecho" },
      { id: "costillas", label: "Costillas" },
      { id: "pierna", label: "Pierna" },
      { id: "pantorrilla", label: "Pantorrilla" },
      { id: "muslo", label: "Muslo" },
      { id: "mano", label: "Mano" },
      { id: "cuello", label: "Cuello" },
      { id: "tobillo", label: "Tobillo" }

    ]
  },

  /* SIZE */

  {
    id: "size",
    title: "By Size",
    options: [

      { id: "small", label: "Small" },
      { id: "medium", label: "Medium" },
      { id: "large", label: "Large" }

    ]
  },

  /* TAGS */

  {
    id: "tags",
    title: "By Tags",
    options: [

      { id: "leon", label: "León" },
      { id: "tigre", label: "Tigre" },
      { id: "lobo", label: "Lobo" },
      { id: "ave", label: "Ave" },
      { id: "dragon", label: "Dragón" },
      { id: "serpiente", label: "Serpiente" },
      { id: "flor", label: "Flor" },
      { id: "rosa", label: "Rosa" },
      { id: "loto", label: "Loto" },
      { id: "mandala", label: "Mandala" },
      { id: "calavera", label: "Calavera" },
      { id: "reloj", label: "Reloj" },
      { id: "corazon", label: "Corazón" },
      { id: "angel", label: "Ángel" },
      { id: "demonio", label: "Demonio" },
      { id: "montana", label: "Montaña" },
      { id: "sol", label: "Sol" },
      { id: "luna", label: "Luna" },
      { id: "cruz", label: "Cruz" },
      { id: "ojos", label: "Ojos" },
      { id: "letras", label: "Letras" }

    ]
  }

];