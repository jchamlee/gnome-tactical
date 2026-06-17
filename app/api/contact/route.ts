
export async function POST(req: Request) {
  const data = await req.formData();
  console.log(Object.fromEntries(data));
  return Response.json({success:true});
}
