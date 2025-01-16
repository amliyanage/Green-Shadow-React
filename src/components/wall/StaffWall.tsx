import WallHeader from "../WallHeader.tsx";
import Table from "../Table.tsx";
import AddStaffPopup from "../popups/AddStaffPopup.tsx";
import {useState} from "react";
import {useSelector} from "react-redux";
import {Staff} from "../../model/Staff.ts";
import {convertStaffArrayTo2DArray} from "../../util/ArrayTo2DArray.ts";

const StaffWall = () => {
    const dataHeaders = [ "Staff Id" , "First Name" , "Last Name" , "Gender" , "Contact No" ]
    const [addStaffPopup, setAddStaffPopup] = useState(false)
    const staff = useSelector((state: { staff: Staff[] }) => state.staff)

    const handleAddStaffPopup = () => {
        setAddStaffPopup(!addStaffPopup)
    }

    return(
        <>
            {addStaffPopup && <AddStaffPopup closePopupAction={handleAddStaffPopup} />}
            <div className="w-100 p-5 bg-transparent" id="staff-wall">
                <WallHeader title={"Staff Management"} addPopupAction={handleAddStaffPopup} />
                <Table headersData={dataHeaders} bodyData={convertStaffArrayTo2DArray(staff)} />
            </div>
        </>
    )
}

export default StaffWall