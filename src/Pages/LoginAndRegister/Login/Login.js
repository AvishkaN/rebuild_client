import styled from 'styled-components';
import Password from '../../../Components/UI/Input/PasswordInput/Password';
import CommonComp from './../CommonComp';
import LinkComp from '../../../Components/UI/Link/Link';
import Input from '../../../Components/UI/Input/Input';


import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../Redux/slices/userSlice';




function RegistarPage({className="",btnText="LOGIN",secondText="Sign Up",to="/signUp"}) {

  const navigate=useNavigate();
  const UserSelect=useSelector(selectUser);


  useEffect(()=>{
    
    if(UserSelect.user){ 
      navigate('/');
    };

  },[UserSelect.user]);

  return (
    <DIV >

       
       


                                <CommonComp className={`${className} display-flex align-items-center `}>

                                                {/* Form  */}
                                                <form className="    ">

                                                                <Input id="Email" name="Email" className="input w-100 p-2  ps-3 mt-4  font-1-6  border-radius-5  border-grey  "   placeholder='Email  *'  defaultValue="demo@gamil.com" ></Input>
                                                                <Password id="Password" name="Password" className="input w-100 p-2  ps-3 mt-4  font-1-6  border-radius-5  border-grey  "   placeholder='Password  *'  defaultValue="pass" ></Password>
               



                                                              
                                                                    
                                                                {/* Button */}
                                                                <Input type="submit" className='background-primary border-radius-5  text-color-white mt-4 w-100 font-1-6 p-2' border={false} value={"Log In"} id={"log-in-btn"} ></Input>



                                                                {/* Txt */}
                                                                <div className="sign-in text-center mt-4">
                                                                    <span className='  text-color-grey'> Don't have an account ? </span>
                                                                    <LinkComp to={to} className='  cursor-p text-color-primary fw-bold '>{secondText}</LinkComp>
                                                                </div> 
                                        
                                        

                                    
                                    
                                                </form>
                                            
                                </CommonComp>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only RegistarPage */
    
`;

export default RegistarPage;
