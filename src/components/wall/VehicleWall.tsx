import WallHeader from "../WallHeader.tsx";
import Table from "../Table.tsx";

const VehicleWall = () => {
    const dataHeaders = [ "Vehicle Code" , "License Plate Nu." , "Category" , "Fuel Type" , "Status" ]
    return (
        <>
            <div className="w-100 p-5 bg-transparent" id="staff-wall">
                <WallHeader title={"Vehicle Management"}/>
                <Table headersData={dataHeaders} bodyData={[]}/>
            </div>
        </>
    )
}

export default VehicleWall