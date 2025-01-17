import WallHeader from "../WallHeader.tsx";
import CardSet from "../CardSet.tsx";
import {useState} from "react";
import SaveField from "../popups/Field/SaveField.tsx";
import {useSelector} from "react-redux";
import {Field} from "../../model/Field.ts";

const FieldWall = () => {
    const [saveFieldPopup, setSaveFieldPopup] = useState(false)
    const fields = useSelector((state: { field: Field[] }) => state.field)

    const handleSaveFieldPopup = () => {
        setSaveFieldPopup(!saveFieldPopup)
    }
    return (
        <>
            {saveFieldPopup && <SaveField closePopupAction={handleSaveFieldPopup} />}
            <div className="w-100 p-5 bg-transparent" id="field-wall">
                <WallHeader title={"Field Management"} addPopupAction={handleSaveFieldPopup} />
                <CardSet cardType={"field"} cardSet={fields} />
            </div>
        </>
    )
}

export default FieldWall