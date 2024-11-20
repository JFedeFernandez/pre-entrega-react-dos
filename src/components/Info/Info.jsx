import { InfoUl, InfoLi } from "./styled"
import { FaWhatsapp,FaLocationDot } from "react-icons/fa6";

const Info = () => {
    return (
        <InfoUl>
            <InfoLi><FaLocationDot color="red"/>Av. San Martín.</InfoLi>
            <InfoLi>Tilisarao, San Luis, Argentina.</InfoLi>
            <InfoLi><FaWhatsapp color="#25D366"/>+54 9 2664 834226</InfoLi>
        </InfoUl>
    )
}

export default Info