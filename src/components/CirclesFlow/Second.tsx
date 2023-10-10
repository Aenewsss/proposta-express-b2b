import CheckCircle from "./Svgs/CheckCircle";
import CurrentCircle from "./Svgs/CurrentCircle";
import PinkRect from "./Svgs/PinkRect";

const SecondCiclesFlow = () => {
    return (
        <>
            <div className="d-flex gap-4">
               <CheckCircle />
                <h3 className="ff-arame fs-24 mb-0">O Cliente</h3>
            </div>
            <PinkRect />
            <div className="d-flex gap-4">
                <CurrentCircle />
                <h3 className="ff-arame fs-24 mb-0">A Marca</h3>
            </div>
        </>
    );
}

export default SecondCiclesFlow;