import { options } from "@fullcalendar/core/preact";
import { Button } from "@mui/material";
import { control } from "leaflet";
import Label from "../../components/form/Label";
import MyCheckBox from "../../components/formFields/MyCheckBox";
import { CityAutocomplete } from "../../components/formFields/Mycity";
import { MyCreateSelect } from "../../components/formFields/MyCreateSelect";
import MyDatePicker from "../../components/formFields/MyDatePicker";
import MyEditor from "../../components/formFields/MyEditor";
import MyFileUpload from "../../components/formFields/MyFileUpload";
import { MyInput } from "../../components/formFields/MyInput";
import { MyMultiSelect } from "../../components/formFields/MyMutiSelect";
import { MySearch } from "../../components/formFields/MySearch";
import { MySelect } from "../../components/formFields/MySelect";
import { StateAutocomplete } from "../../components/formFields/Mystate";
import { MyTextArea } from "../../components/formFields/MyTextArea";
import Years from "../../components/formFields/MyYears";
import LocationAutoComplete from "../components/LocationAutoComplete/LocationAutoComplete";
import MuiTimePicker from "../../components/formFields/MyTimePicker";

type Props = {
  name: any;
  commonProps: any;
  placeholder: any;
  type: any;
  setValue: any;
  field: any;
  setModalContent: any;
  setModalHeader: any;
  setModalOpen: any;
  title: any;
  isMandatory: any;
  info: any;
  section: any;
  setPopFromId: any;
  openModal: any;
  isEditMode: any;
};

export const FieldComponents = ({
  name,
  commonProps,
  placeholder,
  type,
  setValue,
  field,
  setModalContent,
  setModalHeader,
  setModalOpen,
  title,
  isMandatory,
  info,
  section,
  setPopFromId,
  openModal,
  isEditMode,
  ...rest
}: Props) => {
  const renderLabel = (includeInfo = false) => (
    <Label className=" ">
      {title}
      {isMandatory && <span className="text-red-500"> *</span>}
      {includeInfo && info && (
        <button
          onClick={() => {
            setModalContent(info);
            setModalHeader(title);
            setModalOpen(true);
          }}
          className="ml-2 text-xs text-white bg-indigo-500 hover:bg-indigo-800 px-2 py-0.5 rounded"
          type="button"
        >
          <i className="fa fa-info"></i>
        </button>
      )}
    </Label>
  );
  const components = {
    input: (
      <>
        {renderLabel()}
        <MyInput {...commonProps} placeholder={placeholder} type={type} />
      </>
    ),
    location: (
      <>
        {renderLabel()}
        <LocationAutoComplete
          {...commonProps}
          onSelect={({ lat, lng }) => setValue(field, [lat, lng])}
          setValue={setValue}
        />
      </>
    ),
    select: (
      <>
        {renderLabel(true)}
        <MySelect
          {...commonProps}
          options={options || []}
          type={type}
          control={control}
        />
      </>
    ),
    mycity: (
      <>
        {renderLabel()}
        <CityAutocomplete {...commonProps} />
      </>
    ),
    mystate: (
      <>
        {renderLabel()}
        <StateAutocomplete {...commonProps} />
      </>
    ),
    mycreateselect: (
      <>
        {renderLabel()}
        <MyCreateSelect
          {...commonProps}
          labelKey={field}
          valueKey={type}
          setValue={setValue}
          createName={section?.title}
        />
        <Button
          onClick={() => {
            setPopFromId(field);
            openModal();
          }}
          sx={{
            p: 0,
            textTransform: "capitalize",
            fontSize: "0.8rem",
          }}
        >
          New Create
        </Button>
      </>
    ),
    search: (
      <>
        {renderLabel()}
        <MySearch
          {...commonProps}
          labelKey={field}
          valueKey={type}
          setValue={setValue}
          createName={section?.title}
        />
      </>
    ),
    select_search: (
      <>
        {renderLabel()}
        <MyCreateSelect
          {...commonProps}
          labelKey={field}
          valueKey={type}
          setValue={setValue}
          createName={section?.title}
        />
      </>
    ),
    years: (
      <>
        {renderLabel(true)}
        <Years {...commonProps} type={type} />
      </>
    ),
    "select-multi": (
      <>
        {renderLabel()}
        <MyMultiSelect
          {...commonProps}
          setValue={setValue}
          options={options || []}
          type={type}
        />
      </>
    ),
    textarea: (
      <>
        {renderLabel()}
        <MyTextArea {...commonProps} placeholder={placeholder} />
      </>
    ),
    checkbox: (
      <div className="items-center">
        {renderLabel()}

        <MyCheckBox {...commonProps} control={control} />
      </div>
    ),
    datepicker: (
      <>
        {renderLabel()}
        <MyDatePicker name={field} control={control} disabled={isEditMode} />
      </>
    ),
    datepickerrange: (
      <>
        {renderLabel()}
        <MyDatePicker name={field} control={control} disabled={isEditMode} />
      </>
    ),
    timepicker: (
      <>
        {renderLabel()}
        <MuiTimePicker {...commonProps} placeholder={placeholder} type={type} />
      </>
    ),
    fileupload: (
      <>
        {renderLabel()}
        <MyFileUpload
          {...commonProps}
          label="Upload Documents"
          required
          multiple
          maxSize={10}
        />
      </>
    ),
    myeditor: (
      <>
        {renderLabel()}
        <MyEditor {...commonProps} type={type} />
      </>
    ),
  } as any;

  return components[name] as any;
};
