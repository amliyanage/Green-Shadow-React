import WallHeader from "../WallHeader.tsx";
import CardSet from "../CardSet.tsx";
import {useState} from "react";
import SaveCropDetailsPopup from "../popups/CropDetails/SaveCropDetailsPopup.tsx";

const CropDataWall = () => {
    const [saveLogPopup, setSaveLogPopup] = useState(true)
    const handleSaveLogPopup = () => {
        setSaveLogPopup(!saveLogPopup)
    }
    return(
        <>
            {saveLogPopup && <SaveCropDetailsPopup closePopupAction={ handleSaveLogPopup } />}
            <div className="w-100 p-5 bg-transparent" id="staff-wall">
                <WallHeader title={"Log Management"} addPopupAction={handleSaveLogPopup}/>
                <CardSet cardType={"log"} cardSet={[]} />
            </div>
        </>
    )
}

export default CropDataWall