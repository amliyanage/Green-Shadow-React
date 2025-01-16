import WallHeader from "../WallHeader.tsx";
import Table from "../Table.tsx";
import AddVehiclePopup from "../popups/vehicle/AddVehiclePopup.tsx";
import {useState} from "react";

const VehicleWall = () => {
    const dataHeaders = [ "Vehicle Code" , "License Plate Nu." , "Category" , "Fuel Type" , "Status" ]
    const [addVehiclePopup, setAddVehiclePopup] = useState(false)

    const handleAddVehiclePopup = () => {
        setAddVehiclePopup(!addVehiclePopup)
    }

    return (
        <>
            {addVehiclePopup && <AddVehiclePopup closePopupAction={handleAddVehiclePopup}/>}
            <div className="w-100 p-5 bg-transparent" id="staff-wall">
                <WallHeader title={"Vehicle Management"} addPopupAction={handleAddVehiclePopup}/>
                <Table headersData={dataHeaders} bodyData={[]}/>
            </div>
        </>
    )
}

export default VehicleWall