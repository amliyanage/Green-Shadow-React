import WallHeader from "../WallHeader.tsx";
import Table from "../Table.tsx";
import {useEffect, useState} from "react";
import SaveEquPopup from "../popups/Equ/SaveEquPopup.tsx";
import {useSelector} from "react-redux";
import {convertEquArrayTo2DArray} from "../../util/ArrayTo2DArray.ts";
import {Equ} from "../../model/Equ.ts";
import UpdateEquPopup from "../popups/Equ/UpdateEquPopup.tsx";

const EquWall = () => {
    const dataHeaders = [ "equipment Id" , "Name" , "equipment Type" , "status"]
    const [savePopup, setSavePopup] = useState(false)
    const [updatePopup, setUpdatePopup] = useState(false)
    const [search, setSearch] = useState("")
    const equData = useSelector((state: {equ:Equ[]}) => state.equ)
    const [filteredData, setFilteredData] = useState(convertEquArrayTo2DArray(equData))
    const [targetEqu, setTargetEqu] = useState("")

    const handleSavePopup = () => {
        setSavePopup(!savePopup)
    }

    const handleUpdatePopup = (id:string) => {
        setUpdatePopup(!updatePopup)
        setTargetEqu(id)
    }

    useEffect(() => {
        console.log(equData)
        console.log(convertEquArrayTo2DArray(equData))
        const filteredStaff = convertEquArrayTo2DArray(equData).filter((staff: string[]) => {
            return staff.some((staffData: string) =>
                staffData.toLowerCase().includes(search.toLowerCase())
            );
        });

        setFilteredData(filteredStaff);
    }, [search, equData])

    return(
        <>
            {savePopup && <SaveEquPopup closePopupAction={handleSavePopup} />}
            {updatePopup && <UpdateEquPopup closePopupAction={handleUpdatePopup} targetEqu={targetEqu} />}
            <div className="w-100 p-5 bg-transparent" id="staff-wall">
                <WallHeader title={"Equipment Management"} addPopupAction={handleSavePopup} searchAction={setSearch}/>
                <Table headersData={dataHeaders} bodyData={filteredData} updatePopupAction={handleUpdatePopup} />
            </div>
        </>
    )
}

export default EquWall