import styled from 'styled-components';

import EyeOff from '@mui/icons-material/VisibilityOff';
import EyeOn from '@mui/icons-material/RemoveRedEye';
import { useState } from 'react';



function PasswordInput({className="",placeholder,id,name,defaultValue}) {

    const [OpenEye,setOpenEye]=useState(true);
    const [ShowEye,setShowEye]=useState(false);

    const handleClick=(e)=>{

        const selectEye=e.target.closest('.svg-icon-eye');
        const selectInput=e.target?.closest('.input');


        if(selectEye){   

            setOpenEye(!OpenEye);
        }
        
        if(selectInput?.type=="password"){   
            setShowEye(true);

        }

    }


  return (
      <DIV className={``} onClick={handleClick} ShowEye={ShowEye} >
            <input  className={`${className}`}  placeholder={placeholder} type={`${OpenEye?'password':'text'}`} id={id}  name={name} defaultValue={defaultValue} >
                    
            </input>
           {OpenEye && <EyeOn className='svg-icon-eye mt-4 cursor-p'></EyeOn>}
           {!OpenEye && <EyeOff className='svg-icon-eye mt-4 cursor-p'></EyeOff>}


      </DIV>
  );
}


const DIV=styled.div`
    
    position: relative;
    
    input{
        }

        /* input:focus {     

            background: red;  
        } */
        input:focus .svg-icon-eye{     
            /* display: flex;    */
        }

        .svg-icon-eye{
                display:${props => (props.ShowEye)?'flex':'none'};
                position: absolute;
                top: 0;
                right: 0; 
                transform: translateY(8px)  translateX(-13px) scale(1.31);

         }

`;

export default PasswordInput;
