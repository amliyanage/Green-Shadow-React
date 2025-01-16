import WallHeader from "../WallHeader.tsx";
import Table from "../Table.tsx";
import AddVehiclePopup from "../popups/vehicle/AddVehiclePopup.tsx";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Vehicle} from "../../model/Vehicle.ts";
import {convertVehicleArrayTo2DArray} from "../../util/ArrayTo2DArray.ts";

const VehicleWall = () => {
    const dataHeaders = [ "Vehicle Code" , "License Plate Nu." , "Category" , "Fuel Type" , "Status" ]
    const [addVehiclePopup, setAddVehiclePopup] = useState(false)
    const vehicle = useSelector((state: { vehicle: Vehicle[] }) => state.vehicle)
    const [search, setSearch] = useState('')
    const [vehicle2DArray, setVehicle2DArray] = useState(convertVehicleArrayTo2DArray(vehicle))

    const handleAddVehiclePopup = () => {
        setAddVehiclePopup(!addVehiclePopup)
    }

    useEffect(() => {
        const filteredStaff = convertVehicleArrayTo2DArray(vehicle).filter((vehicle: string[]) => {
            return vehicle.some((staffData: string) =>
                staffData.toLowerCase().includes(search.toLowerCase())
            );
        });

        setVehicle2DArray(filteredStaff);
    }, [search, vehicle])

    return (
        <>
            {addVehiclePopup && <AddVehiclePopup closePopupAction={handleAddVehiclePopup}/>}
            <div className="w-100 p-5 bg-transparent" id="staff-wall">
                <WallHeader title={"Vehicle Management"} addPopupAction={handleAddVehiclePopup} searchAction={setSearch}/>
                <Table headersData={dataHeaders} bodyData={vehicle2DArray}/>
            </div>
        </>
    )
}

export default VehicleWall