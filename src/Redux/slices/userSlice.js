import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import {LogIn, SignUp} from '../../Api/Api';





// SIGN UP
export const signUpAsync=createAsyncThunk('user/signUp',async(userData)=>{

  try{
    const data=await SignUp(userData);
    console.log(data);

    const sendObject={ // set what data send it 
      FirstName:data.data.FirstName,
      Email:data.data.Email,
      UserId:data.data._id,  
    };

    return sendObject; 

  }catch(error){
      console.log(error);
  
  }


});


// Log In
export const logInAsync=createAsyncThunk('user/logIn',async({Email,Password})=>{

  try{
    console.log(Email,Password);

    const data=await LogIn(Email,Password);

    return data.data; 

  }catch(error){
      console.log(error);
  
  }


});





 
const UsertSlice = createSlice({
    name: 'user',
    initialState: {
      user: null,
    
      status: null,
    },
    reducers:{

      logOutUserFN:(state)=>{     

        state.user=null;     

    },


    },
    extraReducers: {

     


      // CREATE
      [signUpAsync.pending]: (state, action) => {
        state.status = 'loading'
      },
      [signUpAsync.fulfilled]: (state, { payload }) => {
        state.user = payload;
        state.status = 'success';
      },
      [signUpAsync.rejected]: (state, action) => {
        state.status = 'failed'
      },
      
      
      // Log In

      [logInAsync.fulfilled]: (state, { payload }) => {
        state.user = payload;
        state.status = 'success';
      },


     



    },
  });




  

  export const {logOutUserFN} =UsertSlice.actions; 






//selectors
export const selectUser=(state)=>state.user;

export default UsertSlice.reducer;





