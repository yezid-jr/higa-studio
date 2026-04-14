import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const data = await req.formData();
    const file = data.get("file") as File;
    const filters = JSON.parse(data.get("filters") as string);

    if (!file) {
      return NextResponse.json({ error: "No file" }, { status: 400 });
    }

    // Guardar imagen
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const fileName = Date.now() + "-" + file.name;

    const imageDir = path.join(process.cwd(), "public", "imgs", "MyTattoos", "Edits");

    // Crea la carpeta si no existe — este era probablemente el error silencioso
    fs.mkdirSync(imageDir, { recursive: true });

    fs.writeFileSync(path.join(imageDir, fileName), buffer);

    const publicImagePath = "/imgs/MyTattoos/Edits/" + fileName;

    // Leer y actualizar JSON
    const jsonPath = path.join(process.cwd(), "app", "data", "my-tattoos.json");

    const tattoos = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

    const newTattoo = {
      id: Date.now(),
      title: filters.title || file.name.replace(/\.[^/.]+$/, ""),
      image: publicImagePath,
      category: filters.category || [],
      topic: filters.topic || [],
      placement: filters.placement || [],
      size: filters.size || [],
      tags: filters.tags || [],
    };

    tattoos.push(newTattoo);

    fs.writeFileSync(jsonPath, JSON.stringify(tattoos, null, 2));

    return NextResponse.json({ success: true, tattoo: newTattoo });

  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}