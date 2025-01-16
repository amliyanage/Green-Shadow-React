import WallHeader from "../WallHeader.tsx";
import Table from "../Table.tsx";
import AddStaffPopup from "../popups/AddStaffPopup.tsx";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Staff} from "../../model/Staff.ts";
import {convertStaffArrayTo2DArray} from "../../util/ArrayTo2DArray.ts";

const StaffWall = () => {
    const dataHeaders = [ "Staff Id" , "First Name" , "Last Name" , "Gender" , "Contact No" ]
    const [addStaffPopup, setAddStaffPopup] = useState(false)
    const staff = useSelector((state: { staff: Staff[] }) => state.staff)
    const [search, setSearch] = useState('')
    const [staff2DArray, setStaff2DArray] = useState(convertStaffArrayTo2DArray(staff))

    const handleAddStaffPopup = () => {
        setAddStaffPopup(!addStaffPopup)
    }

    useEffect(() => {
        const filteredStaff = convertStaffArrayTo2DArray(staff).filter((staff: string[]) => {
            return staff.some((staffData: string) =>
                staffData.toLowerCase().includes(search.toLowerCase())
            );
        });

        setStaff2DArray(filteredStaff);
    }, [search, staff])

    return(
        <>
            {addStaffPopup && <AddStaffPopup closePopupAction={handleAddStaffPopup} />}
            <div className="w-100 p-5 bg-transparent" id="staff-wall">
                <WallHeader title={"Staff Management"} addPopupAction={handleAddStaffPopup} searchAction={setSearch} />
                <Table headersData={dataHeaders} bodyData={staff2DArray} />
            </div>
        </>
    )
}

export default StaffWall