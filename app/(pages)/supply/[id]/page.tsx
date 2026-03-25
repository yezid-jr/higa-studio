type Props = {
  params: Promise<{ 
    id: string
    }>;
};  

export default async function Supply({ params }: Props) {
    const { id } = await params;
  return (
    <>
      <h1>Supply Page {id}</h1>
      <p>This is the supply page of Higa Studio.</p>
    </>
  );
}