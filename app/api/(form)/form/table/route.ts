// app/api/table-data/route.ts

import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { formId } = body;

    /**
     * Validation
     */

    if (!formId) {
      return NextResponse.json(
        {
          success: false,
          message: "formId is required",
        },
        {
          status: 400,
        }
      );
    }

    /**
     * Get form
     */

    const form = await prisma.my_forms.findUnique({
      where: {
        formid: formId,
      },
    });

    if (!form) {
      return NextResponse.json(
        {
          success: false,
          message: "Form not found",
        },
        {
          status: 404,
        }
      );
    }

    /**
     * Get table name
     */

    const tableName = form.dbtable;

    if (!tableName) {
      return NextResponse.json(
        {
          success: false,
          message: "dbtable missing",
        },
        {
          status: 400,
        }
      );
    }

    /**
     * Dynamic prisma model
     */

    const model = (prisma as any)[tableName];

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
     * Get form columns
     */

    const columns = await prisma.my_forms_columns.findMany({
      where: {
        formid: formId,
      },
    });

    /**
     * Generate select object
     */

    const select: Record<string, boolean> = {
  id: true,
};

columns.forEach((item: any) => {
  /**
   * field => actual db column
   */

  if (item?.field && item?.dbfield === 1) {
    select[item.field] = true;
  }
});

console.log("SELECT =>", select);

    /**
     * Fetch rows
     */

    const rows = await model.findMany({
      select,
    });

    /**
     * Response
     */

    return NextResponse.json({
      success: true,

      table: tableName,

      columns,

      rows,
    });
  } catch (error) {
    console.error("TABLE_DATA_ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}