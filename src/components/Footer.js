import React from 'react'
import { Link } from 'react-router-dom'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';


function Footer() {
  return (
    <div>
<MDBFooter  className='bg-dark text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Footer text</h5>

            <p>
            “If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.”
            </p>
          </MDBCol>

          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>We give you amazing Food</h5>

            <p>
              “The only real stumbling block is fear of failure. In cooking you’ve to have a what-the-hell attitude.”
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark'>
          FOOOODEEE
        </a>
      </div>
    </MDBFooter>
{/* // <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
//     <div className="col-md-4 d-flex align-items-center">
//       <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        
//       </Link>
//       <span className="text-muted">© 2023 FOOOODIE, Inc</span>
//     </div>

//     <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
//     <li class="ms-3"></li>
//       <li class="ms-3"></li>
//       <li class="ms-3"></li>
    
//      </ul>
//   </footer> */}

    </div>
  )
}

export default Footer


