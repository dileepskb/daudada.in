export interface MyFormSection {
  formid: string
  sectionid: string
  title?: string | null
  readonly?: number | null
  colsize?: string | null
  classes?: string | null
  hint?: string | null
  sortno?: number | null
  tab?: number | null
  active?: number | null
  my_formsFormid?: string | null
}

export interface MyFormColumn {
  formid: string
  sectionid?: string | null
  field: string
  title?: string | null
  colsize?: string | null
  type?: string | null
  component?: string | null
  required?: number | null
  sortno?: number | null
  active?: number | null
  formview?: number | null
  listview?: number | null
  selectqry?: string | null
  selectqry_table?: string | null
  options?: object[]
  defaultvalue?: string | null
  addattrs?: string | null
  readonly?: number | null
  hidden?: number | null
  classes?: string | null
  inline?: number | null
  placeholder?: string | null
  hint?: string | null
  dt_width?: string | null
  dt_sortable?: number | null
  dt_callback?: string | null
  dt_class?: string | null
  dt_rander?: string | null
  dt_rowgroup?: number | null
  dt_filter?: number | null
  dbfield?: number | null
  info?: string | null
  title_lng?: string | null
  printview?: number | null
  printview_spl?: number | null
  show_class?: string | null
  created_at?: Date | null
  metadata?: any
  searching_key?: string | null
  depend_key?: number | null
  depend_key_name?: any
  updated_at?: Date | null
  display_searching_key?: string | null
}
export interface MyForm {
  formid: string
  title?: string | null
  type?: string | null
  module?: string | null
  pkeys?: string | null
  pkeyid?: string | null
  dbtable?: string | null
  model?: string | null
  orderby?: string | null
  extra_props?: string | null
  readonly?: number | null
  colsize?: string | null
  classes?: string | null
  hint?: string | null
  sortno?: number | null
  active?: number | null
  formview?: string | null
  formfilter?: string | null
  description?: string | null
  formgroup?: string | null
  icon?: string | null
  custom_db_table?: string | null
  created_at?: Date | null
  metadata?: any
  searching_key?: string | null
  redirect_on_submit?: string | null
  source_key?: string | null
  updated_at?: Date | null
  my_forms_columns?: MyFormColumn[]
  my_forms_sections?: MyFormSection[]
}
