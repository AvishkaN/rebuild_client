import styled from 'styled-components';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditIcon from '@mui/icons-material/EditOutlined';



function Product({
                    className="",
                    productName,
                    quantity,
                    description,
                    productId,
                }) {

  return (
    <DIV className={`product  border-radius-20 pt-2 ps-2 pe-2 pb-4 mb-3 border  ms-3 me-4  mt-1  box-shadow-normal  ${className}     `}   data-id={productId} >

            <div className="text-center   mt-1 ">
                <div className='font-1-6  text-color-grey-ori fw-bold   ' >Product Name</div>
                <div className='mt-0-5-' >{productName}</div>
            </div>


            <div className="text-center   mt-1 ">
                <div className='font-1-6  text-color-grey-ori fw-bold   ' >Description</div>
                <div className='mt-0-5-' >{description}</div>
            </div>


            <div className="text-center  mt-1  ">
                <div className='font-1-6  text-color-grey-ori fw-bold   ' >Quantity</div>
                <div className='mt-0-5-' >{quantity}</div>
            </div>

           
          



                {/* Buttons  */}
              <div className="display-flex align-item-center  mt-4">
                
                    <EditIcon id="edit-btn" className='font-2-9 cursor-p background-hover  text-color-primary'></EditIcon>
                    <DeleteOutlinedIcon id="delete-btn"  className='font-2-9 cursor-p ms-auto background-hover text-color-red'  ></DeleteOutlinedIcon>
              </div>

            

    </DIV>
  );
}


const DIV=styled.div`
    
 
`;

export default Product;
