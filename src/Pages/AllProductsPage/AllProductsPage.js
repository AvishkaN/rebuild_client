import styled from 'styled-components';
import Product from './Product';
import ScrollWindowTop from './../../Functions/DOM/ScrollWindowTop';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteProduct, fetchAllProducts, selectProducts, setSelectedProduct } from '../../Redux/slices/productSlice';
import FilterDataById from '../../Functions/FilderDataById';
import { ShowAddProductFN, ShowEditProductFN } from '../../Redux/slices/clickSlice';

import { useNavigate } from 'react-router-dom';
import { selectUser } from '../../Redux/slices/userSlice';







function AllProductsPage({className=""}) {


  const dispatch=useDispatch();
  const navigate=useNavigate();

  const productSelect=useSelector(selectProducts);
  const UserSelect=useSelector(selectUser);




  useEffect(()=>{
    
    if(!UserSelect.user){ 
      navigate('/login');
    };

  },[UserSelect.user]);


  useEffect(()=>{

       //Scroll To Top
    ScrollWindowTop();

  },[])


  useEffect(()=>{

    // dispatch all product relavent current user
    dispatch(fetchAllProducts(UserSelect?.user?.UserId)); 

  },[dispatch])


  const hadnleClick=(e)=>{    

    const productDiv=e.target.closest(".product");

    const selectEditBtn=e.target.closest("#edit-btn");
    const selectDeleteBtn=e.target.closest("#delete-btn");


    if(selectDeleteBtn){
      
      // select Product Id
      const SelectedproductId=productDiv.dataset.id;


      console.log(SelectedproductId);

      // dispatch redux 
      dispatch(DeleteProduct(SelectedproductId));

      
    }

    if(selectEditBtn){
      
      // select Product Id
      const SelectedproductId=productDiv.dataset.id;


      // select Product
      const selectedProduct=FilterDataById(SelectedproductId,productSelect.products)
      

      // dispatch redux 
      dispatch(setSelectedProduct(selectedProduct));
      dispatch(ShowEditProductFN());

      
    }

  };

  return (
    <DIV className={`${className}`} onClick={hadnleClick}>

      <div className="all-products-wrapper">
         
        <div className="row justify-content-center">

        {
              productSelect.products.map(productData=>(
                  <Product  key={productData._id}  productId={productData._id} className="col-lg-3 col-sm-5 col-11 "  {...productData}>{"txt"}</Product>

              ))
        }

        </div>

        


      </div>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;

    .all-products-wrapper{

      width:var(--page-content-width);
      margin-left: auto;
      margin-right: auto;   

    }
    
    
 
`;

export default AllProductsPage;
