import WallHeader from "../WallHeader.tsx";
import CardSet from "../CardSet.tsx";
import {useState} from "react";
import SaveField from "../popups/Field/SaveField.tsx";

const FieldWall = () => {
    const [saveFieldPopup, setSaveFieldPopup] = useState(false)

    const handleSaveFieldPopup = () => {
        setSaveFieldPopup(!saveFieldPopup)
    }
    return (
        <>
            {saveFieldPopup && <SaveField closePopupAction={handleSaveFieldPopup} />}
            <div className="w-100 p-5 bg-transparent" id="field-wall">
                <WallHeader title={"Field Management"} addPopupAction={handleSaveFieldPopup} />
                <CardSet cardType={"field"} cardSet={[]} />
            </div>
        </>
    )
}

export default FieldWall