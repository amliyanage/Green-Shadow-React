import WallHeader from "../WallHeader.tsx";
import CardSet from "../CardSet.tsx";
import SaveCropPopup from "../popups/crop/SaveCropPopup.tsx";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
import { Crop } from "../../model/Crop.ts";

const CropWall = () => {
    const [saveCropPopup, setSaveCropPopup] = useState(false);
    const crop = useSelector((state: RootState) => state.crop);
    const [search, setSearch] = useState("");

    const handleSaveCropPopup = () => {
        setSaveCropPopup(!saveCropPopup);
    };

    // Filtered crop data based on search, without modifying state unnecessarily
    const filteredCropData = crop.filter((crop: Crop) =>
        crop.cropName.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            {saveCropPopup && <SaveCropPopup closePopupAction={handleSaveCropPopup} />}
            <div className="w-100 p-5 bg-transparent" id="staff-wall">
                <WallHeader title={"Crop Management"} addPopupAction={handleSaveCropPopup} searchAction={setSearch} />
                <CardSet cardType={"crop"} cardSet={filteredCropData} />
            </div>
        </>
    );
};

export default CropWall;
