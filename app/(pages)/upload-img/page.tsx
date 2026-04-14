"use client";

import { useState } from "react";
import Image from "next/image";
import  filtersConfigData  from "./../../data/filters.json";
import { FilterGroup } from "../../types/filters";

type Filters = Record<string, string[]>;

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const filtersConfig: FilterGroup[] = filtersConfigData as FilterGroup[];

  // Inicializa TODAS las keys del config — este era el bug
  const [selectedFilters, setSelectedFilters] = useState<Filters>(() =>
    Object.fromEntries(filtersConfig.map((g) => [g.id, []]))
  );

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f) {
      setFile(f);
      setPreview(URL.createObjectURL(f));
    }
  }

  function toggleFilter(groupId: string, optionId: string) {
    setSelectedFilters((prev) => {
      const group = prev[groupId] ?? [];
      const exists = group.includes(optionId);
      return {
        ...prev,
        [groupId]: exists
          ? group.filter((x) => x !== optionId)
          : [...group, optionId],
      };
    });
  }

  function clearAll() {
    setSelectedFilters(
      Object.fromEntries(filtersConfig.map((g) => [g.id, []]))
    );
    setTitle("");
    setFile(null);
    setPreview(null);
  }

  async function handleUpload() {
    if (!file) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "filters",
      JSON.stringify({ title, ...selectedFilters })
    );

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setSuccess(true);
      clearAll();
      setTimeout(() => setSuccess(false), 3000);
    }
  }

  const totalSelected = Object.values(selectedFilters).flat().length;

  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold mb-8 text-neutral-900 dark:text-neutral-100">
        Subir tatuaje
      </h1>

      <div className="flex flex-col md:flex-row gap-8">

        {/* COLUMNA IZQUIERDA — imagen + título */}
        <div className="flex flex-col gap-4 lg:w-72 shrink-0">

          {/* Preview */}
          <label className="cursor-pointer">
            <div
              className={`
                relative w-full aspect-square rounded-2xl overflow-hidden
                border-2 border-dashed transition-colors duration-200
                flex items-center justify-center
                bg-neutral-100 dark:bg-neutral-900
                ${preview
                  ? "border-transparent"
                  : "border-neutral-300 dark:border-neutral-700 hover:border-[#CD1E1E]"
                }
              `}
            >
              {preview ? (
                <Image
                  src={preview}
                  alt="Preview"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 text-neutral-400 dark:text-neutral-600">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="17 8 12 3 7 8"/>
                    <line x1="12" y1="3" x2="12" y2="15"/>
                  </svg>
                  <span className="text-sm">Seleccionar imagen</span>
                </div>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="hidden"
            />
          </label>

          {preview && (
            <button
              onClick={() => { setFile(null); setPreview(null); }}
              className="text-xs text-neutral-400 dark:text-neutral-600 hover:text-[#CD1E1E] transition-colors"
            >
              Cambiar imagen
            </button>
          )}

          {/* Título */}
          <input
            type="text"
            placeholder="Título del tatuaje"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="
              w-full px-4 py-2.5 rounded-xl text-sm
              bg-neutral-100 dark:bg-neutral-900
              border border-neutral-200 dark:border-neutral-800
              text-neutral-900 dark:text-neutral-100
              placeholder-neutral-400 dark:placeholder-neutral-600
              outline-none focus:border-[#CD1E1E] transition-colors
            "
          />

          {/* Botón guardar */}
          <button
            onClick={handleUpload}
            disabled={!file || loading}
            className="
              w-full py-3 rounded-xl font-medium text-sm
              bg-[#CD1E1E] text-white
              hover:bg-[#b01919] transition-colors
              disabled:opacity-40 disabled:cursor-not-allowed
            "
          >
            {loading ? "Guardando..." : "Guardar tatuaje"}
          </button>

          {success && (
            <p className="text-sm text-center text-green-600 dark:text-green-400">
              Tatuaje guardado ✓
            </p>
          )}

          {/* Resumen de selección */}
          {totalSelected > 0 && (
            <div className="flex items-center justify-between">
              <span className="text-xs text-neutral-400 dark:text-neutral-600">
                {totalSelected} tags seleccionados
              </span>
              <button
                onClick={clearAll}
                className="text-xs text-[#CD1E1E] hover:underline"
              >
                Limpiar todo
              </button>
            </div>
          )}
        </div>

        {/* COLUMNA DERECHA — filtros */}
        <div className="flex-1 flex flex-col gap-6">
          {filtersConfig.map((group) => (
            <div key={group.id}>
              <h2 className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-3">
                {group.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {group.options.map((opt) => {
                  const active = (selectedFilters[group.id] ?? []).includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      onClick={() => toggleFilter(group.id, opt.id)}
                      className={`
                        px-3 py-1 rounded-full text-sm border-2 transition-all duration-200
                        ${active
                          ? "bg-[#CD1E1E] text-white border-[#CD1E1E]"
                          : "bg-transparent text-neutral-500 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600"
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
        </div>

      </div>
    </main>
  );
}