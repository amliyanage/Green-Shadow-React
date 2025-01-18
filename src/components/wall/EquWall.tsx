import WallHeader from "../WallHeader.tsx";
import Table from "../Table.tsx";
import {useState} from "react";
import SaveEquPopup from "../popups/Equ/SaveEquPopup.tsx";

const EquWall = () => {
    const dataHeaders = [ "equipment Id" , "Name" , "equipment Type" , "status"]
    const [savePopup, setSavePopup] = useState(false)

    const handleSavePopup = () => {
        setSavePopup(!savePopup)
    }

    return(
        <>
            {savePopup && <SaveEquPopup closePopupAction={handleSavePopup} />}
            <div className="w-100 p-5 bg-transparent" id="staff-wall">
                <WallHeader title={"Equipment Management"} addPopupAction={handleSavePopup} />
                <Table headersData={dataHeaders} bodyData={[]} />
            </div>
        </>
    )
}

export default EquWall