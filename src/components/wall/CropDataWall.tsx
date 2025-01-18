import WallHeader from "../WallHeader.tsx";
import CardSet from "../CardSet.tsx";
import { useState, useEffect } from "react";
import SaveCropDetailsPopup from "../popups/CropDetails/SaveCropDetailsPopup.tsx";
import { useSelector } from "react-redux";
import { Log } from "../../model/Log.ts";

const CropDataWall = () => {
    const [saveLogPopup, setSaveLogPopup] = useState(false); // Set initial state to `false`
    const logs = useSelector((state: { log: Log[] }) => state.log); // Redux logs data
    const [search, setSearch] = useState(""); // Search query
    const [filteredLogs, setFilteredLogs] = useState<Log[]>([]); // Filtered logs state

    const handleSaveLogPopup = () => {
        setSaveLogPopup((prev) => !prev);
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
            <div className="w-100 p-5 bg-transparent" id="staff-wall">
                <WallHeader
                    title={"Log Management"}
                    addPopupAction={handleSaveLogPopup}
                    searchAction={setSearch}
                />
                <CardSet cardType={"log"} cardSet={filteredLogs} />
            </div>
        </>
    );
};

export default CropDataWall;
