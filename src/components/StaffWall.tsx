import '../css/components/StaffWall.css'
import WallHeader from "./WallHeader.tsx";
import Table from "./Table.tsx";

const StaffWall = () => {
    const dataHeaders = [ "Staff Id" , "First Name" , "Last Name" , "Gender" , "Contact No" ]
    return(
        <>
            <div className="w-100 p-5 bg-transparent" id="staff-wall">
                <WallHeader title={"Staff Management"} />
                <Table headersData={dataHeaders} bodyData={[]} />
            </div>
        </>
    )
}

export default StaffWall