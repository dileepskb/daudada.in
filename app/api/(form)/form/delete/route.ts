// app/api/form/delete/route.ts

import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      formId,

      rowId,
    } = body;

    /**
     * Validation
     */

    if (!formId || !rowId) {
      return NextResponse.json(
        {
          success: false,

          message:
            "formId and rowId are required",
        },
        {
          status: 400,
        }
      );
    }

    /**
     * Get form
     */

    const form =
      await prisma.my_forms.findUnique({
        where: {
          formid: formId,
        },
      });

    if (!form) {
      return NextResponse.json(
        {
          success: false,

          message:
            "Form not found",
        },
        {
          status: 404,
        }
      );
    }

    /**
     * Table name
     */

    const tableName =
      form.dbtable;

    if (!tableName) {
      return NextResponse.json(
        {
          success: false,

          message:
            "dbtable missing",
        },
        {
          status: 400,
        }
      );
    }

    /**
     * Dynamic prisma model
     */

    const model =
      (prisma as any)[tableName];

    if (!model) {
      return NextResponse.json(
        {
          success: false,

          message: `Table not found: ${tableName}`,
        },
        {
          status: 400,
        }
      );
    }

    /**
     * Delete row
     */

    await model.delete({
      where: {
        id: Number(rowId),
      },
    });

    return NextResponse.json({
      success: true,

      message:
        "Record deleted successfully",
    });
  } catch (error) {
    console.error(
      "DELETE_RECORD_ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,

        message:
          "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}