import WallHeader from "../WallHeader.tsx";
import CardSet from "../CardSet.tsx";
import {useEffect, useState} from "react";
import SaveField from "../popups/Field/SaveField.tsx";
import {useSelector} from "react-redux";
import {Field} from "../../model/Field.ts";
import UpdateFieldPopup from "../popups/Field/UpdateFieldPopup.tsx";
import {Crop} from "../../model/Crop.ts";
import {Log} from "../../model/Log.ts";

const FieldWall = () => {
    const [saveFieldPopup, setSaveFieldPopup] = useState(false)
    const [updateFieldPopup, setUpdateFieldPopup] = useState(false)
    const fieldsData = useSelector((state: { field: Field[] }) => state.field)
    const [search, setSearch] = useState('')
    const [fields, setFields] = useState(fieldsData)
    const [targetField, setTargetField] = useState<Field>({} as Field)

    const handleSaveFieldPopup = () => {
        setSaveFieldPopup(!saveFieldPopup)
    }

    const handleUpdateFieldPopup = (data: Field | Crop | Log) => {
        if ('fieldName' in data && 'fieldCode' in data) {
            setTargetField(data as Field); // Type narrowed to Field
            setUpdateFieldPopup((prev) => !prev);
        }
    };

    useEffect(() => {
        const filteredFields = fieldsData.filter((field: Field) => {
            return field.fieldName.toLowerCase().includes(search.toLowerCase())
        })
        setFields(filteredFields)
    }, [search, fieldsData])



    return (
        <>
            {saveFieldPopup && <SaveField closePopupAction={handleSaveFieldPopup} />}
            {updateFieldPopup && <UpdateFieldPopup closePopupAction={handleUpdateFieldPopup} targetField={targetField} />}
            <div className="w-100 p-5 bg-transparent" id="field-wall">
                <WallHeader title={"Field Management"} addPopupAction={handleSaveFieldPopup} searchAction={setSearch} />
                <CardSet cardType={"field"} cardSet={fields} handleUpdateFieldPopup={handleUpdateFieldPopup } />
            </div>
        </>
    )
}

export default FieldWall