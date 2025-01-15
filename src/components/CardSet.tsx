import {Field} from "../model/Field.ts";
import FieldCard from "./cards/FieldCard.tsx";
import '../css/components/CardSet.css'
import {Crop} from "../model/Crop.ts";
import CropCard from "./cards/CropCard.tsx";

interface CardSetProps {
    cardType: string;
    cardSet : Field[] | Crop[];
}

const CardSet = ({ cardType , cardSet } : CardSetProps) => {

    return (
        <>
            <div id="card-set" className="card-group mt-5">
                {
                    cardSet.map((cardData) => {
                        if (cardType === "field"){
                            return <FieldCard fieldData={cardData as Field} />
                        } else if (cardType === "crop"){
                            return <CropCard cropData={cardData as Crop} />
                        }
                    })
                }
            </div>
        </>
    )
}

export default CardSet