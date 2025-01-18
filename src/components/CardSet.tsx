import {Field} from "../model/Field.ts";
import FieldCard from "./cards/FieldCard.tsx";
import '../css/components/CardSet.css'
import {Crop} from "../model/Crop.ts";
import CropCard from "./cards/CropCard.tsx";
import LogCard from "./cards/LogCard.tsx";
import {Log} from "../model/Log.ts";

interface CardSetProps {
    cardType: string;
    cardSet : Field[] | Crop[] | Log[];
    handleUpdatePopup?: (data: Field | Crop | Log) => void;
    handleViewPopup?: (data: Field | Crop | Log) => void;
    handleDeletePopup?: (data: Field | Crop | Log) => void;
}

const CardSet = ({ cardType , cardSet , handleUpdatePopup , handleViewPopup , handleDeletePopup } : CardSetProps) => {

    return (
        <>
            <div id="card-set" className="card-group mt-5">
                {
                    cardSet.map((cardData) => {
                        if (cardType === "field"){
                            return <FieldCard fieldData={cardData as Field} handleUpdateFieldPopup={handleUpdatePopup as (data : Field) => void} handleViewFieldPopup={handleViewPopup as (data : Field) => void} handleDeleteField={ handleDeletePopup as (data : Field) => void} />
                        } else if (cardType === "crop"){
                            return <CropCard cropData={cardData as Crop} />
                        } else {
                            return <LogCard cropDetail={cardData as Log} />
                        }
                    })
                }
            </div>
        </>
    )
}

export default CardSet