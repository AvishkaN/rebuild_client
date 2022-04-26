import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { editProduct } from '../../../Api/Api';
import { ShowHideAllFN } from '../../../Redux/slices/clickSlice';
import { createProduct, EditProduct, selectProducts } from '../../../Redux/slices/productSlice';
import Input from '../../UI/Input/Input';
import PopUp from '../PopUp/PopUp';







function EditProductComp({className=""}) {

    const formRef=useRef();
    const dispatch=useDispatch();
    const productSelect=useSelector(selectProducts).selectedProduct;
  
  
    const handleFormSubmit=(e)=>{ 
       e.preventDefault();
  
  
        //  get all form data as javascript object 
        const getFormData =  Object.fromEntries(new FormData(e.target));
        getFormData._id=productSelect._id;    // add id to new object

        // guard class --> if havent product name - cancel product add 
        if(!getFormData.productName || !getFormData.description || !getFormData.quantity) return;  


  
        // dispacth to rediux     
        dispatch(EditProduct({id:productSelect._id,editedProduct:getFormData}));

        // Remove overlay and this component
        dispatch(ShowHideAllFN());

  
  
    };

  
  return (
    <DIV className={`${className}`}>
         <div className="EditProductComp-wrapper">
                <PopUp className="">  

                            <div className='font-3 text-color-primary fw-bold'>Edit Product</div>

                            <div className="mt-4 post-ad- pb-5 ">

                                        <form  onSubmit={handleFormSubmit} ref={formRef} id={"myform"}>
                                                <label className='text-color-grey-ori'>Product Name</label>
                                                <Input id="productName" name="productName" className="input w-100 p-2  ps-3 mb-4 mt-0-5-  font-1-6  border-radius-5  border-grey  "   placeholder=' ProductName *'     defaultValue={productSelect.productName}     ></Input>
                                                
                                                <label className='text-color-grey-ori'>Description</label>
                                                <Input id="description" name="description" className="input w-100 p-2  ps-3 mb-4 mt-0-5-  font-1-6  border-radius-5  border-grey  "   placeholder='Description'     defaultValue={productSelect.description}     ></Input>
                                                
                                                <label className='text-color-grey-ori'>Quantity</label>
                                                <Input id="quantity" name="quantity" className="input w-100 p-2  ps-3 mb-4 mt-0-5-  font-1-6  border-radius-5  border-grey  "   placeholder='Quantity'     defaultValue={productSelect.quantity}     ></Input>



                                                
                                               


                                                <Input type="submit" className='background-primary border-radius-5  text-color-white mt-4 w-30 font-1-6 p-2'  border={false} value={"Edit"} id={"log-in-btn"} ></Input>


                                    </form>


                            </div>



                </PopUp>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;


 
`;

export default EditProductComp;
