import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const data = await req.formData();

    const file = data.get("file") as File;
    const filters = JSON.parse(
      data.get("filters") as string
    );

    if (!file) {
      return NextResponse.json(
        { error: "No file uploaded" },
        { status: 400 }
      );
    }

    /* ============================= */
    /* SAVE IMAGE */
    /* ============================= */

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const fileName =
      Date.now() + "-" + file.name;

    const imagePath = path.join(
      process.cwd(),
      "public",
      "imgs",
      "MyTattoos",
      "Edits",
      fileName
    );

    fs.writeFileSync(imagePath, buffer);

    const publicImagePath =
      "/imgs/MyTattoos/Edits/" + fileName;

    /* ============================= */
    /* READ JSON */
    /* ============================= */

    const jsonPath = path.join(
      process.cwd(),
      "app",
      "data",
      "my-tattoos.json"
    );

    const fileData = fs.readFileSync(
      jsonPath,
      "utf-8"
    );

    const tattoos = JSON.parse(fileData);

    /* ============================= */
    /* CREATE NEW TATTOO */
    /* ============================= */

    const newTattoo = {
      id: Date.now(),

      title:
        filters.title ||
        file.name.replace(/\.[^/.]+$/, ""),

      image: publicImagePath,

      category: filters.category || [],

      topic: filters.topic || [],

      placement: filters.placement || [],

      size: filters.size || [],

      tags: filters.tags || []
    };

    tattoos.push(newTattoo);

    /* ============================= */
    /* SAVE JSON */
    /* ============================= */

    fs.writeFileSync(
      jsonPath,
      JSON.stringify(tattoos, null, 2)
    );

    return NextResponse.json({
      success: true,
      tattoo: newTattoo
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    );

  }
}