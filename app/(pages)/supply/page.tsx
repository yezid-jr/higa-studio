import Link from "next/link";

export default function Supply() {
  return (
    <>
      <h1>Supply Page</h1>
      <p>This is the supply page of Higa Studio.</p>
      <Link href="/supply/1">Go to Supply 1</Link>
    </>
  );
}