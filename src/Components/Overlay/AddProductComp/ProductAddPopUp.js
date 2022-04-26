import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ShowHideAllFN } from '../../../Redux/slices/clickSlice';
import { createProduct } from '../../../Redux/slices/productSlice';
import { selectUser } from '../../../Redux/slices/userSlice';
import Input from '../../UI/Input/Input';
import PopUp from '../PopUp/PopUp';







function PostAdPop({className=""}) {

    const formRef=useRef();
    const dispatch=useDispatch();
    const userSelect=useSelector(selectUser);
  
  
    const handleFormSubmit=(e)=>{ 
      e.preventDefault();
  
  
      // get all form data
        const getFormData =  Object.fromEntries(new FormData(e.target));

        // guard class --> if havent product name - cancel product add 
        if(!getFormData.productName || !getFormData.description || !getFormData.quantity) return;  
  
        console.log(getFormData);
        console.log(userSelect);
  
        dispatch(createProduct({
          userId :  userSelect.user.UserId,
              productDetails :getFormData
            }));

        // Remove overlay and this component
        dispatch(ShowHideAllFN());

  
  
    };

  
  return (
    <DIV className={`${className}`}>
         <div className="PostAdPop-wrapper">
                <PopUp className="">  

                            <div className='font-3 text-color-primary fw-bold'>Add Product</div>

                              {/* Form */}

                            <div className="mt-4 post-ad- pb-5 ">

                                        <form  onSubmit={handleFormSubmit} ref={formRef} id={"myform"}>

                                              <label className='text-color-grey-ori'>Product Name</label>
                                              <Input id="productName" name="productName" className="input w-100 p-2  ps-3 mb-4 mt-0-5-  font-1-6  border-radius-5  border-grey  "   placeholder=' ProductName *'     defaultValue=""     ></Input>

                                                
                                              <label className='text-color-grey-ori'>Description</label>
                                                <Input id="description" name="description" className="input w-100 p-2  ps-3 mb-4 mt-0-5-  font-1-6  border-radius-5  border-grey  "   placeholder='Description'     defaultValue=""     ></Input>
                                                
                                                <label className='text-color-grey-ori'>Quantity</label>
                                                <Input id="quantity" name="quantity" className="input w-100 p-2  ps-3 mb-4 mt-0-5-  font-1-6  border-radius-5  border-grey  "   placeholder='Quantity'     defaultValue=""     ></Input>
                                               
                                                                   

                                                <Input type="submit" className='background-primary border-radius-5  text-color-white mt-4 w-25  font-1-6 p-2'  border={false} value={"Add"} id={"remove-overlay-btn"} ></Input>


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

export default PostAdPop;
