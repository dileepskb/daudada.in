// app/api/forms/submit/route.ts

import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { formId, editId } = body
   

    // validate
    if (!formId) {
      return Response.json(
        {
          success: false,

          error: "Form ID is required",
        },

        {
          status: 400,
        }
      )
    }
    // get form
    const form = await prisma.my_forms.findUnique({
      where: {
        formid: formId,
      },
    })

    if (!form) {
      return Response.json(
        {
          success: false,

          error: "Form not found",
        },

        {
          status: 404,
        }
      )
    }

    // table check

    if (!form.dbtable) {
      return Response.json(
        {
          success: false,

          error: "DB table not found",
        },

        {
          status: 400,
        }
      )
    }

    // insert dynamic

    const result = await (prisma as any)[form.dbtable].findUnique({
      where:{
        id:editId
      }
    })

    return Response.json({
      success: true,
      data: result,
    })
  } catch (error) {
    console.log(error)

    return Response.json(
      {
        success: false,

        error: "Failed to submit form",
      },

      {
        status: 500,
      }
    )
  }
}
