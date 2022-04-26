import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import {  selectClicks, ShowHideAllFN } from '../../Redux/slices/clickSlice';
import { useEffect } from 'react';

import PostAdPopUp from './AddProductComp/ProductAddPopUp';
import EditProductComp from './EditProductComp/EditProductComp';



function Overlay({className=""}) {

  const dispatch=useDispatch();
  const clicks=useSelector(selectClicks);

  useEffect(()=>{
    window.scroll(0,0) 
    document.querySelector('html').style.overflowY="hidden";
  },[]);



  const handleClick=(e)=>{

    
    const IsSelectOverlay=(e.target.classList[0]=='Overlay-wrapper');
    const closeBtn=e.target.closest('#closeIcon');
    const removeOverlayBtn=e.target.closest('#remove-overlay-btn');


    



    if(IsSelectOverlay ){ // hide mobile nav and overlay
        // dispatch(HideMobileNavFN());
        dispatch(ShowHideAllFN());
    }
    if(closeBtn){ // hide mobile nav and overlay
        dispatch(ShowHideAllFN());
    }


   

  

  };


  return (
    <DIV className={`${className}`} onClick={handleClick}>
         <div className="Overlay-wrapper cursor-p">

             {clicks.showAddProductComp &&    <PostAdPopUp className='w-65  overlay-inside-popup-post-ad  ms-auto me-auto mt-5'></PostAdPopUp>}
             {clicks.showEditProductComp &&    <EditProductComp className='w-65  overlay-inside-popup-post-ad  ms-auto me-auto mt-5'></EditProductComp>}

            
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    height: 100%;  
    background: #00000091;  
    position: absolute;
    top: 0;
    left: 0; 
    z-index:1000; 
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Overlay */
    
    .Overlay-wrapper{
      /* width: var(--Overlay-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .mobile-navv{
          margin-left: auto;  

          @media(max-width:499px){     
                      width: 50% !important;
        }


          .nav-right-button{
            width:100% !important; 

            &:first-child{
              /* background: red;  */
            }
          }
        }


        .overlay-inside-popup{
              @media(max-width:609px){     
                          width: 92% !important;
            }
            
          }
          
          .overlay-inside-popup-post-ad{
                @media(max-width:903px){     
                  width: 91% !important;
              }

        }

     

    }
`;

export default Overlay;
