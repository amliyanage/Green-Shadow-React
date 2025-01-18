import WallHeader from "../WallHeader.tsx";
import CardSet from "../CardSet.tsx";
import { useState, useEffect } from "react";
import SaveCropDetailsPopup from "../popups/CropDetails/SaveCropDetailsPopup.tsx";
import { useSelector } from "react-redux";
import { Log } from "../../model/Log.ts";
import UpdateCropDetailsPopup from "../popups/CropDetails/UpdateCropDetailsPopup.tsx";
import {Crop} from "../../model/Crop.ts";
import {Field} from "../../model/Field.ts";
import ViewCropDetailsPopup from "../popups/CropDetails/ViewCropDetailsPopup.tsx";

const CropDataWall = () => {
    const [saveLogPopup, setSaveLogPopup] = useState(false);
    const [updateLogPopup, setUpdateLogPopup] = useState(false);
    const [viewLogPopup, setViewLogPopup] = useState(false);
    const logs = useSelector((state: { log: Log[] }) => state.log);
    const [search, setSearch] = useState("");
    const [filteredLogs, setFilteredLogs] = useState<Log[]>([]);
    const [targetLog, setTargetLog] = useState<Log>({} as Log);

    const handleSaveLogPopup = () => {
        setSaveLogPopup((prev) => !prev);
    };

    const handleUpdateLogPopup = (data:Log | Crop | Field) => {
        if ('logCode' in data && 'cropCodes' in data) {
            setUpdateLogPopup((prev) => !prev);
            setTargetLog(data);
        }
    };

    const handleViewLogPopup = (data:Log | Crop | Field) => {
        if ('logCode' in data && 'cropCodes' in data) {
            setViewLogPopup((prev) => !prev);
            setTargetLog(data);
        }
    };

    useEffect(() => {
        setFilteredLogs(
            logs.filter((log: Log) =>
                log.logCode.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [logs, search]);

    return (
        <>
            {saveLogPopup && <SaveCropDetailsPopup closePopupAction={handleSaveLogPopup} />}
            {updateLogPopup && <UpdateCropDetailsPopup closePopupAction={handleUpdateLogPopup} targetLog={targetLog} />}
            {viewLogPopup && <ViewCropDetailsPopup closePopupAction={handleViewLogPopup} targetLog={targetLog} />}
            <div className="w-100 p-5 bg-transparent" id="staff-wall">
                <WallHeader
                    title={"Log Management"}
                    addPopupAction={handleSaveLogPopup}
                    searchAction={setSearch}
                />
                <CardSet cardType={"log"} cardSet={filteredLogs} handleUpdatePopup={handleUpdateLogPopup} handleViewPopup={handleViewLogPopup} />
            </div>
        </>
    );
};

export default CropDataWall;
