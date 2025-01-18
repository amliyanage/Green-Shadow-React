import WallHeader from "../WallHeader.tsx";
import CardSet from "../CardSet.tsx";
import SaveCropPopup from "../popups/crop/SaveCropPopup.tsx";
import {useState} from "react";

const CropWall = () => {
    const [saveCropPopup, setSaveCropPopup] = useState(false);

    const handleSaveCropPopup = () => {
        setSaveCropPopup(!saveCropPopup);
    }

    return(
        <>
            {saveCropPopup && <SaveCropPopup closePopupAction={handleSaveCropPopup}/>}
            <div className="w-100 p-5 bg-transparent" id="staff-wall">
                <WallHeader title={"Crop Management"} addPopupAction={handleSaveCropPopup}/>
                <CardSet cardType={"crop"} cardSet={[]} />
            </div>
        </>
    )
}

export default CropWall