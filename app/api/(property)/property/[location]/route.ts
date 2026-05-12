import { prisma } from "@/lib/prisma";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ location: string }> }
) {

  const { location } = await params;



  try {
    const property = await prisma.property.findMany({
        where:{
            location:location
        },
        take: 3,
        include:{
          images:true,
          specification:true,
          propertyAmenity:true          
        }
    });

    return Response.json(property);

  } catch (error) {
    return Response.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}