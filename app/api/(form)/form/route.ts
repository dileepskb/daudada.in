// app/api/forms/get/route.ts

import { prisma } from "@/lib/prisma"

import { executeDynamicQuery } from "@/utils/executeDynamicQuery"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { formId } = body

    // validation

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

    // form

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

    // sections

    const sections = await prisma.my_forms_sections.findMany({
      where: {
        formid: formId,
        active: 1,
      },

      orderBy: {
        sortno: "asc",
      },
    })

    // columns

    const columns = await prisma.my_forms_columns.findMany({
      where: {
        formid: formId,
        active: 1,
      },

      orderBy: {
        sortno: "asc",
      },
    })

    // dynamic query options

    const updatedColumns = await Promise.all(
      columns.map(async (column) => {
        // if dynamic query exists

        if (column.selectqry) {
          const dynamicOptions = await executeDynamicQuery(column.selectqry)

          return {
            ...column,

            options: dynamicOptions,
          }
        }

        return column
      })
    )

    // final response

    const response: any = {
      form,
    }

    // WITH SECTIONS

    if (sections.length > 0) {
      response.sections = sections.map((section) => ({
        ...section,

        columns: updatedColumns.filter(
          (column) => column.sectionid === section.sectionid
        ),
      }))
    } else {
      // WITHOUT SECTIONS

      response.columns = updatedColumns
    }

    return Response.json({
      success: true,

      data: response,
    })
  } catch (error) {
    console.log(error)

    return Response.json(
      {
        success: false,

        error: "Failed to load form",
      },

      {
        status: 500,
      }
    )
  }
}
