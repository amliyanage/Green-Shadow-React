import WallHeader from "../WallHeader.tsx";
import CardSet from "../CardSet.tsx";
import SaveCropPopup from "../popups/crop/SaveCropPopup.tsx";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
import { Crop } from "../../model/Crop.ts";
import {Field} from "../../model/Field.ts";
import {Log} from "../../model/Log.ts";
import UpdateCropPopup from "../popups/crop/UpdateCropPopup.tsx";
import ViewCropPopup from "../popups/crop/ViewCropPopup.tsx";

const CropWall = () => {
    const [saveCropPopup, setSaveCropPopup] = useState(false);
    const [updateCropPopup, setUpdateCropPopup] = useState(false);
    const [viewCropPopup, setViewCropPopup] = useState(false);
    const [targetCrop, setTargetCrop] = useState<Crop>({} as Crop);
    const crop = useSelector((state: RootState) => state.crop);
    const [search, setSearch] = useState("");

    const handleSaveCropPopup = () => {
        setSaveCropPopup(!saveCropPopup);
    };

    const handleUpdatePopup = (data: Crop | Field | Log) => {
        if ('cropName' in data && 'cropCode' in data) {
            setTargetCrop(data as Crop); // Type narrowed to Crop
            setUpdateCropPopup((prev) => !prev);
        }
    }

    const handleViewCropPopup = (data: Crop | Field | Log) => {
        if ('cropName' in data && 'cropCode' in data) {
            setTargetCrop(data as Crop); // Type narrowed to Crop
            setViewCropPopup((prev) => !prev);
        }
    }

    // Filtered crop data based on search, without modifying state unnecessarily
    const filteredCropData = crop.filter((crop: Crop) =>
        crop.cropName.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            {saveCropPopup && <SaveCropPopup closePopupAction={handleSaveCropPopup} />}
            {updateCropPopup && <UpdateCropPopup handleCloseUpdateCropPopup={handleUpdatePopup} targetCrop={targetCrop} />}
            {viewCropPopup && <ViewCropPopup targetCrop={targetCrop} closePopupAction={handleViewCropPopup} />}
            <div className="w-100 p-5 bg-transparent" id="staff-wall">
                <WallHeader title={"Crop Management"} addPopupAction={handleSaveCropPopup} searchAction={setSearch} />
                <CardSet cardType={"crop"} cardSet={filteredCropData} handleUpdatePopup={handleUpdatePopup} handleViewPopup={handleViewCropPopup} />
            </div>
        </>
    );
};

export default CropWall;
