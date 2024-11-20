
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { DivCarousel} from './styled';

const ControlledCarousel = () => {
    
    return (
        <DivCarousel>
            <MDBCarousel interval={2000}>
                <MDBCarouselItem itemId={1} interval={2000}>
                    <img src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='...' />
                </MDBCarouselItem>
                <MDBCarouselItem itemId={2}>
                    <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='...' />
                </MDBCarouselItem>
                <MDBCarouselItem itemId={3}>
                    <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='...' />
                </MDBCarouselItem>
            </MDBCarousel>
        </DivCarousel>
    )
}

export default ControlledCarousel