// import { Button } from "@mui/material";
import { FieldError } from "react-hook-form"
// import Label from "../../components/form/Label";
// import MyCheckBox from "../../components/formFields/MyCheckBox";
// import { CityAutocomplete } from "../../components/formFields/Mycity";
// import { MyCreateSelect } from "../../components/formFields/MyCreateSelect";
// import MyDatePicker from "../../components/formFields/MyDatePicker";
// import MyEditor from "../../components/formFields/MyEditor";
// import MyFileUpload from "../../components/formFields/MyFileUpload";
// import { MyInput } from "../../components/formFields/MyInput";
// import { MyMultiSelect } from "../../components/formFields/MyMutiSelect";
// import { MySearch } from "../../components/formFields/MySearch";
// import MySection from "../../components/formFields/MySection";
// import { MySelect } from "../../components/formFields/MySelect";
// import { StateAutocomplete } from "../../components/formFields/Mystate";
// import { MyTextArea } from "../../components/formFields/MyTextArea";
// import Years from "../../components/formFields/MyYears";
// import LocationAutoComplete from "../components/LocationAutoComplete/LocationAutoComplete";
// import MuiTimePicker from "../../components/formFields/MyTimePicker";
// import { MyCreateSelectSearch } from "../../components/formFields/MyCreateSelectSearch";
// import { LocationDropdown } from "../../components/formFields/MyLocation";

import MySection from "./MySection"
import MyLabel from "./MyLabel"
import MyInput from "../components/MyInput"
import { MyTextArea } from "../components/MyTextArea"
import { JSX } from "react"
import { MySelect } from "../components/MySelect"
import { MyFileUpload } from "../components/MyFileUpload"
import { MyKeyValue } from "../components/MyKeyValue"
import { MyCheckbox } from "../components/MyCheckBox"
import MyFormEditor from "../components/MyFormEditor"
// import DispatchTable from "../../components/Load/DispatchTable";

// import MyCheckBoxBoolean from "../../components/formFields/MyCheckBoxBoolean";
// import DynamicCreatableSelect from "../../components/formFields/MyReactCreate";

type SectionDrawerProps = {
  sectionsMerge: any
  formData: any
  formId?: any
  // isEditMode?: any;
  // setModalContent?: any;
  // setModalHeader?: any;
  // setModalOpen?: any;
  // setPopFromId?: any;
  // openModal?: any;
}

export const SectionDrawer = ({
  sectionsMerge,
  formData,
  formId,
  // isEditMode = false,
  // setModalContent = () => false,
  // setModalHeader = () => false,
  // setModalOpen = () => false,
  // setPopFromId = () => false,
  // openModal = () => false,
}: SectionDrawerProps) => {
  const {
    control,
    register,
    formState: { errors },
    setValue,
    watch,
  } = formData

  const watched = watch()



  return (
    <>
      <div className="row">
        {sectionsMerge.map((section: any, index: any) => (
          <div key={index} className={`mb-5 ${section?.colsize}`}>
            <MySection
              title={`${section?.sectionid ? section?.title : ""}`}
              sectionShow={section?.sectionid ? section.title : ""}
              tab={section?.tab}
            >
              <div className={`grid gap-4`}>
                {section?.columns?.map((formfield: any, findex: any) => {
                  const {
                    title,
                    field,
                    component,
                    placeholder,
                    options,
                    type,
                    info,
                    required,
                    show_class,
                    searching_key,
                    display_searching_key,
                    colsize,
                    depend_key,
                    depend_key_name,
                  } = formfield as any

                  const isMandatory = required === 1

                  const renderLabel = (includeInfo = false) => (
                    <MyLabel className=" ">
                      {title}
                      {isMandatory && <span className="text-red-500"> *</span>}
                      {includeInfo && info && (
                        <button
                          // onClick={() => {
                          //   setModalContent(info);
                          //   setModalHeader(title);
                          //   setModalOpen(true);
                          // }}
                          className="ml-2 rounded bg-indigo-500 px-2 py-0.5 text-xs text-white hover:bg-indigo-800"
                          type="button"
                        >
                          <i className="fa fa-info"></i>
                        </button>
                      )}
                    </MyLabel>
                  )

                  const commonProps = {
                    name: field,
                    control,
                    register,
                    setValue,
                    error: errors[field] as FieldError | undefined,
                    // disabled: isEditMode,
                    searching_key: searching_key,
                    display_searching_key: display_searching_key,
                    // ...(isEditMode && {
                    //   selected: watched[field],
                    // }),

                    ...(isMandatory && {
                      validationRules: { required: `${title} is required` },
                    }),
                  }

                  const fieldComponents: Record<string, JSX.Element> = {
                    input: (
                      <>
                        {renderLabel()}
                        <MyInput
                          {...commonProps}
                          placeholder={placeholder}
                          type={type}
                        />
                      </>
                    ),
                    select: (
                      <>
                        {renderLabel()}
                       
                        <MySelect
                          {...commonProps}
                          options={options || []}
                          type={type}
                          control={control}
                          depend_key={depend_key}
                          depend_key_name={depend_key_name}
                        />
                      </>
                    ),
                    file: (
                      <>
                        {renderLabel()}
                        <MyFileUpload
                          {...commonProps}
                          multiple={true}
                          accept="image/*"
                        />
                      </>
                    ),
                    MyKeyValue: (
                      <>
                        {renderLabel()}
                        <MyKeyValue
                          {...commonProps}
                          type={type}
                        />
                      </>
                    ),
                  checkbox: (
                      <>
                        {renderLabel()}
                        <MyCheckbox
                          {...commonProps}
                          type={type}
                          options={options || []}
                        />
                      </>
                    ),
                  my_editor: (
                      <>
                        {renderLabel()}
                        <MyFormEditor  {...commonProps} />
                      </>
                    ),
                    // location: (
                    //   <>
                    //     {renderLabel()}
                    //     <LocationAutoComplete
                    //       {...commonProps}
                    //       onSelect={({ lat, lng }) =>
                    //         setValue(field, [lat, lng])
                    //       }
                    //       setValue={setValue}
                    //     />
                    //   </>
                    // ),
                    // select: (
                    //   <>
                    //     {renderLabel(true)}
                    //     <MySelect
                    //       {...commonProps}
                    //       options={options || []}
                    //       type={type}
                    //       control={control}
                    //       depend_key={depend_key}
                    //       depend_key_name={depend_key_name}
                    //     />
                    //   </>
                    // ),
                    // my_create_select_search: (
                    //   <>
                    //     {renderLabel()}

                    //     <MyCreateSelectSearch
                    //       {...commonProps}
                    //       labelKey={field}
                    //       valueKey={type}
                    //       setValue={setValue}
                    //       createName={section?.title}
                    //       depend_key_name={depend_key_name}
                    //       options_list={options || []}
                    //       watch={watch}
                    //       control={control}
                    //     />

                    //     {![
                    //       "drop_empty_tailer_id",
                    //       "pick_empty_tailer_id",
                    //     ].includes(field) && (
                    //       <Button
                    //         onClick={() => {
                    //           let formids = field;
                    //           if (field === "driver_id") {
                    //             formids = "drivers";
                    //           }
                    //           if (field === "trailer_id") {
                    //             formids = "trailer";
                    //           }
                    //           if (field === "vehicle_id") {
                    //             formids = "vehicle";
                    //           }
                    //           setPopFromId(formids);
                    //           openModal();
                    //         }}
                    //         sx={{
                    //           p: 0,
                    //           textTransform: "capitalize",
                    //           fontSize: "0.8rem",
                    //         }}
                    //       >
                    //         New Create
                    //       </Button>
                    //     )}
                    //   </>
                    // ),
                    // g_location: (
                    //   <>
                    //     {renderLabel()}
                    //     <LocationDropdown
                    //       {...commonProps}
                    //       placeholder={placeholder}
                    //     />
                    //   </>
                    // ),
                    // mycity: (
                    //   <>
                    //     {renderLabel()}
                    //     <CityAutocomplete {...commonProps} />
                    //   </>
                    // ),
                    // mystate: (
                    //   <>
                    //     {renderLabel()}
                    //     <StateAutocomplete {...commonProps} />
                    //   </>
                    // ),
                    // mycreateselect: (
                    //   <>
                    //     {renderLabel()}

                    //     <MyCreateSelect
                    //       {...commonProps}
                    //       labelKey={field}
                    //       valueKey={type}
                    //       setValue={setValue}
                    //       createName={section?.title}
                    //     />
                    //     <Button
                    //       onClick={() => {
                    //         setPopFromId(field);
                    //         openModal();
                    //       }}
                    //       sx={{
                    //         p: 0,
                    //         textTransform: "capitalize",
                    //         fontSize: "0.8rem",
                    //       }}
                    //     >
                    //       New Create
                    //     </Button>
                    //   </>
                    // ),
                    // search: (
                    //   <>
                    //     {renderLabel()}
                    //     <MySearch
                    //       {...commonProps}
                    //       labelKey={field}
                    //       valueKey={type}
                    //       setValue={setValue}
                    //       createName={section?.title}
                    //     />
                    //   </>
                    // ),
                    // select_search: (
                    //   <>
                    //     {renderLabel()}
                    //     <MyCreateSelect
                    //       {...commonProps}
                    //       labelKey={field}
                    //       valueKey={type}
                    //       setValue={setValue}
                    //       createName={section?.title}
                    //     />
                    //   </>
                    // ),
                    // years: (
                    //   <>
                    //     {renderLabel(true)}
                    //     <Years {...commonProps} type={type} />
                    //   </>
                    // ),
                    // "select-multi": (
                    //   <>
                    //     {renderLabel()}
                    //     <MyMultiSelect
                    //       {...commonProps}
                    //       setValue={setValue}
                    //       options={options || []}
                    //       type={type}
                    //     />
                    //   </>
                    // ),
                    textarea: (
                      <>
                        {renderLabel()}
                        <MyTextArea
                          {...commonProps}
                          placeholder={placeholder}
                        />
                      </>
                    ),
                    // checkbox: (
                    //   <div className="items-center">
                    //     {renderLabel()}

                    //     <MyCheckBox {...commonProps} control={control} />
                    //   </div>
                    // ),
                    // boolean_checkbox: (
                    //   <div className="items-center">
                    //     {renderLabel()}
                    //     <MyCheckBoxBoolean {...commonProps} control={control} />
                    //   </div>
                    // ),
                    // datepicker: (
                    //   <>
                    //     {renderLabel()}
                    //     <MyDatePicker
                    //       name={field}
                    //       control={control}
                    //       disabled={isEditMode}
                    //     />
                    //   </>
                    // ),
                    // datepickerrange: (
                    //   <>
                    //     {renderLabel()}
                    //     <MyDatePicker
                    //       name={field}
                    //       control={control}
                    //       disabled={isEditMode}
                    //     />
                    //   </>
                    // ),
                    // timepicker: (
                    //   <>
                    //     {renderLabel()}
                    //     <MuiTimePicker
                    //       {...commonProps}
                    //       placeholder={placeholder}
                    //       type={type}
                    //       validationRules={
                    //         isMan_manual
                    //           ? { required: `${title} is required` }
                    //           : {}
                    //       }
                    //     />
                    //   </>
                    // ),
                    // fileupload: (
                    //   <>
                    //     {renderLabel()}
                    //     <MyFileUpload
                    //       {...commonProps}
                    //       label="Upload Documents"
                    //       required
                    //       multiple
                    //       maxSize={10}
                    //     />
                    //   </>
                    // ),
                    // myeditor: (
                    //   <>
                    //     {renderLabel()}
                    //     <MyEditor {...commonProps} type={type} />
                    //   </>
                    // ),
                    // "geo-input": (
                    //   <>
                    //     {renderLabel()}

                    //   </>
                    // ),
                  }

                  return (
                    <div key={`${field}-${findex}`} className={`${colsize}`}>
                      {fieldComponents[component] ?? <></>}
                    </div>
                  )
                })}
              </div>
            </MySection>
          </div>
        ))}
      </div>
    </>
  )
}
