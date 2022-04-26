import {createSlice} from '@reduxjs/toolkit';

export const clickSlice=createSlice({
    name:"clicks",
    initialState:{         
        showOverlay:false,     
        showAddProductComp:false,   
        showEditProductComp:false,   

    },
    reducers:{

        ShowOverlayFN:(state)=>{     

            state.showOverlay=true;   

        },


        ShowAddProductFN:(state)=>{     

            state.showOverlay=true;   
            state.showAddProductComp=true;   

        },
        ShowEditProductFN:(state)=>{     

            state.showOverlay=true;   
            state.showEditProductComp=true;   

        },

        
        ShowHideAllFN:(state)=>{     

            state.showOverlay=false;  
            state.showAddProductComp=false;  



        },



     

    }
});



export const {
                            ShowOverlayFN,
                            ShowHideAllFN,

                            ShowAddProductFN,
                            ShowEditProductFN,

                                                                        } =clickSlice.actions; 


//selectors
export const selectClicks=(state)=>state.clicks;

export default clickSlice.reducer;

