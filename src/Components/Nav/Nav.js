import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/LogoutOutlined';

import { logOutUserFN, selectUser } from '../../Redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectClicks, ShowAddProductFN } from '../../Redux/slices/clickSlice';


function Nav({className=""}) {


  const clicks=useSelector(selectClicks);
  const UserSelect=useSelector(selectUser);

  const dispatch=useDispatch(selectClicks);


  const handleClick=(e)=>{
    // console.log(e.target);
    const addIcon=e.target.closest('#add-icon');
    const profileIcon=e.target.closest('#profile-icon');
    const logOutIcon=e.target.closest('#log-out');

  
    if(addIcon){
      dispatch(ShowAddProductFN());
    }

    if(logOutIcon){
      dispatch(logOutUserFN());
    }


  };



  return (
    <DIV className={`${className} pt-2 pb-2 border-bottom mb-5 `} onClick={handleClick}>

        <div className=" display-flex align-item-center  ">
            
            {/* Add Icon */}
           <AddIcon  id={"add-icon"}  className="cursor-p ms-auto text-color-grey-light border-radius-circle p-1 border-grey font-3-5"></AddIcon>

            {/* Profile Avatar */}
            <div  id={"profile-icon"}  className="avatar cursor-p ms-3 background-green text-color-white fw-bold  border-radius-circle dis display-flex align-items-center justify-content-center p-3 w-4rem  ">{UserSelect?.user?.FirstName.charAt(0).toUpperCase()} </div>
           
            {/* Log Out  */}
           <LogoutIcon  id={"log-out"}  className="ms-2 cursor-p  text-color-grey-light border-radius-circle p-1 border-grey font-3-5"></LogoutIcon>

        </div>

    </DIV>
  );
}


const DIV=styled.nav`
    width:var(--page-content-width);
    margin-left: auto;
    margin-right: auto;   
    
 
`;

export default Nav;
