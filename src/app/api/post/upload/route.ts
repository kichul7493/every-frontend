import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<NextResponse> {
  const formData = await req.formData();
  const file = formData.getAll("upload")[0] as any;

  const filename = file.name.split(".")[0] + "_";
  new Date().toISOString() + "." + file.name.split(".")[1];

  if (!file) {
    return NextResponse.json(
      {
        error: "filename or file is not provided",
      },
      {
        status: 400,
      }
    );
  }
  const blob = await put(filename, file, {
    access: "public",
  });

  return NextResponse.json(blob);
}
