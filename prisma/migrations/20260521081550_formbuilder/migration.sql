-- CreateTable
CREATE TABLE "my_forms" (
    "formid" VARCHAR(50) NOT NULL,
    "title" VARCHAR(255),
    "type" VARCHAR(50),
    "module" VARCHAR(50),
    "pkeys" VARCHAR(255),
    "pkeyid" VARCHAR(100),
    "dbtable" VARCHAR(100),
    "model" VARCHAR(100),
    "orderby" VARCHAR(100),
    "extra_props" VARCHAR(255),
    "readonly" SMALLINT,
    "colsize" VARCHAR(10),
    "classes" VARCHAR(255),
    "hint" TEXT,
    "sortno" SMALLINT,
    "active" SMALLINT DEFAULT 1,
    "formview" VARCHAR(100),
    "formfilter" VARCHAR(100),
    "description" TEXT,
    "formgroup" VARCHAR(255),
    "icon" VARCHAR(30),
    "custom_db_table" VARCHAR(30),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,
    "searching_key" TEXT,
    "redirect_on_submit" TEXT,
    "source_key" TEXT,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "my_forms_pkey" PRIMARY KEY ("formid")
);

-- CreateTable
CREATE TABLE "my_forms_columns" (
    "formid" VARCHAR(50) NOT NULL,
    "sectionid" VARCHAR(50),
    "field" VARCHAR(100) NOT NULL,
    "title" VARCHAR,
    "colsize" VARCHAR(30),
    "type" VARCHAR(30),
    "component" VARCHAR(128),
    "required" SMALLINT,
    "sortno" SMALLINT,
    "active" SMALLINT DEFAULT 1,
    "formview" SMALLINT DEFAULT 1,
    "listview" SMALLINT DEFAULT 1,
    "selectqry" TEXT,
    "selectqry_table" TEXT,
    "options" JSONB,
    "defaultvalue" JSONB,
    "addattrs" JSONB,
    "readonly" SMALLINT,
    "hidden" SMALLINT,
    "classes" VARCHAR(255),
    "inline" SMALLINT,
    "placeholder" VARCHAR(255),
    "hint" TEXT,
    "dt_width" VARCHAR(10),
    "dt_sortable" SMALLINT DEFAULT 1,
    "dt_callback" VARCHAR(100),
    "dt_class" VARCHAR(100),
    "dt_rander" TEXT,
    "dt_rowgroup" SMALLINT,
    "dt_filter" SMALLINT DEFAULT 1,
    "dbfield" SMALLINT DEFAULT 1,
    "info" VARCHAR,
    "title_lng" VARCHAR,
    "printview" SMALLINT,
    "printview_spl" SMALLINT DEFAULT 0,
    "show_class" JSONB,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,
    "searching_key" TEXT,
    "depend_key" INTEGER,
    "depend_key_name" JSONB,
    "updated_at" TIMESTAMP(3),
    "display_searching_key" TEXT,

    CONSTRAINT "my_forms_columns_pkey" PRIMARY KEY ("formid","field")
);

-- CreateTable
CREATE TABLE "my_forms_sections" (
    "formid" VARCHAR(50) NOT NULL,
    "sectionid" VARCHAR(50) NOT NULL,
    "title" VARCHAR(255),
    "readonly" SMALLINT,
    "colsize" VARCHAR(30),
    "classes" VARCHAR(255),
    "hint" TEXT,
    "sortno" SMALLINT,
    "tab" SMALLINT DEFAULT 0,
    "active" SMALLINT DEFAULT 1,
    "my_formsFormid" VARCHAR(50),

    CONSTRAINT "my_forms_sections_pkey" PRIMARY KEY ("formid","sectionid")
);

-- AddForeignKey
ALTER TABLE "my_forms_columns" ADD CONSTRAINT "my_forms_columns_formid_fkey" FOREIGN KEY ("formid") REFERENCES "my_forms"("formid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "my_forms_sections" ADD CONSTRAINT "my_forms_sections_my_formsFormid_fkey" FOREIGN KEY ("my_formsFormid") REFERENCES "my_forms"("formid") ON DELETE SET NULL ON UPDATE CASCADE;
