import {Field} from "./model/Field.ts";
import FieldCard from "./components/cards/FieldCard.tsx";
import '../src/css/components/CardSet.css'

interface CardSetProps {
    cardType: string;
    cardSet : Field[];
}

const CardSet = ({ cardType , cardSet } : CardSetProps) => {

    return (
        <>
            <div id="card-set" className="card-group mt-5">
                {
                    cardSet.map((cardData) => {
                        if (cardType === "field"){
                            return <FieldCard fieldData={cardData} />
                        }
                    })
                }
            </div>
        </>
    )
}

export default CardSet