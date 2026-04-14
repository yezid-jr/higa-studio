"use client";

import { useState } from "react";

/* FILTERS */

export const filtersConfig = [

  /* ========================= */
  /* CATEGORY */
  /* ========================= */

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

  /* ========================= */
  /* TOPIC */
  /* ========================= */

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

  /* ========================= */
  /* PLACEMENT */
  /* ========================= */

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

  /* ========================= */
  /* SIZE */
  /* ========================= */

  {
    id: "size",
    title: "By Size",

    options: [

      { id: "small", label: "Small" },

      { id: "medium", label: "Medium" },

      { id: "large", label: "Large" }

    ]
  },

  /* ========================= */
  /* TAGS */
  /* ========================= */

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

export default function UploadPage() {

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] =
    useState<string | null>(null);

  const [title, setTitle] = useState("");

  const [selectedFilters, setSelectedFilters] =
    useState<Record<string, string[]>>({
      category: [],
      placement: [],
      size: []
    });

  /* ============================= */

  function handleImage(
    e: React.ChangeEvent<HTMLInputElement>
  ) {

    const f = e.target.files?.[0];

    if (f) {
      setFile(f);
      setPreview(URL.createObjectURL(f));
    }

  }

  /* ============================= */

  function toggleFilter(
    groupId: string,
    optionId: string
  ) {

    setSelectedFilters(prev => {

      const group = prev[groupId];

      const exists =
        group.includes(optionId);

      return {
        ...prev,
        [groupId]: exists
          ? group.filter(x => x !== optionId)
          : [...group, optionId]
      };

    });

  }

  /* ============================= */

  async function handleUpload() {

    if (!file) return;

    const formData = new FormData();

    formData.append("file", file);

    formData.append(
      "filters",
      JSON.stringify({
        title,
        ...selectedFilters
      })
    );

    const res = await fetch(
      "/api/upload",
      {
        method: "POST",
        body: formData
      }
    );

    const data = await res.json();

    if (data.success) {

      alert("Tattoo guardado ✅");

      setPreview(null);
      setFile(null);

    }

  }

  /* ============================= */

  return (
    <main className="max-w-5xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Upload Tattoo
      </h1>

      {/* TITLE */}

      <input
        type="text"
        placeholder="Tattoo title"
        value={title}
        onChange={e =>
          setTitle(e.target.value)
        }
        className="border p-2 rounded w-full mb-4"
      />

      {/* IMAGE */}

      <input
        type="file"
        accept="image/*"
        onChange={handleImage}
        className="mb-4"
      />

      {preview && (
        <img
          src={preview}
          className="w-64 rounded mb-6"
        />
      )}

      {/* FILTERS */}

      {filtersConfig.map(group => (

        <div key={group.id} className="mb-6">

          <h2 className="font-semibold mb-2">
            {group.title}
          </h2>

          <div className="flex flex-wrap gap-2">

            {group.options.map(opt => {

              const active =
                selectedFilters[
                  group.id
                ].includes(opt.id);

              return (

                <button
                  key={opt.id}
                  onClick={() =>
                    toggleFilter(
                      group.id,
                      opt.id
                    )
                  }
                  className={`
                    px-3 py-1 rounded-full border
                    ${
                      active
                        ? "bg-black text-white"
                        : ""
                    }
                  `}
                >
                  {opt.label}
                </button>

              );

            })}

          </div>

        </div>

      ))}

      {/* SAVE */}

      <button
        onClick={handleUpload}
        className="px-6 py-3 bg-black text-white rounded-lg"
      >
        Save Tattoo
      </button>

    </main>
  );
}