import WallHeader from "../WallHeader.tsx";
import CardSet from "../../CardSet.tsx";

const FieldWall = () => {
    return (
        <>
            <div className="w-100 p-5 bg-transparent" id="field-wall">
                <WallHeader title={"Field Management"} />
                <CardSet cardType={"field"} cardSet={[]} />
            </div>
        </>
    )
}

export default FieldWall