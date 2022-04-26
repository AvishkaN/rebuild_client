import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import {createPost, fetchPost,editProduct, deleteProduct} from './../../Api/Api';


// READ
export const fetchAllProducts=createAsyncThunk('posts/getPosts',async(userId)=>{

    const data=await fetchPost();

    return data.data.filter(product=>product.userId ===userId ); 


});


// CREATE
export const createProduct=createAsyncThunk('posts/createProducts',async({userId,productDetails})=>{

  productDetails={...productDetails,userId:userId};  // add loged user id to product 


  try{
    const data=await createPost(productDetails);
    return data.data; 

  }catch(error){
      console.log(error);
  
  }


});


// EDIT 
export const EditProduct=createAsyncThunk('product/editProducts',async({id,editedProduct})=>{

  try{
    console.log(editedProduct);    

    const data=await editProduct( id,editedProduct );

    return data.data; 

  }catch(error){
      console.log(error);
  
  }


});


// DELETE 
export const DeleteProduct=createAsyncThunk('product/deleteProducts',async(id)=>{

  try{

    await deleteProduct(id);

    

    return id;


  }catch(error){
      console.log(error);
  
  }


});

 
const productSlice = createSlice({
    name: 'products',
    initialState: {
      products: [],
      selectedProduct:{},
    
      status: null,
    },
    reducers:{
      setSelectedProduct:(state,action)=>{
        state.selectedProduct = action.payload;

      }
    },
    extraReducers: {

      // FETCH
      [fetchAllProducts.pending]: (state, action) => {
        state.status = 'loading'

      },
      [fetchAllProducts.fulfilled]: (state, { payload }) => {
        state.products = payload
        state.status = 'success'
      },
      [fetchAllProducts.rejected]: (state, action) => {
        state.status = 'failed'
      },



      // CREATE
      [createProduct.pending]: (state, action) => {
        state.status = 'loading'
      },
      [createProduct.fulfilled]: (state, { payload }) => {
        state.products = [ ...state.products ,payload];
        state.status = 'success';
      },
      [createProduct.rejected]: (state, action) => {
        state.status = 'failed'
      },


      // EDIT
      [EditProduct.pending]: (state, {payload}) => { 
        state.status = 'loading'
      },
      [EditProduct.fulfilled]: (state, action) => {

        state.products =state.products.map((product) => (product._id === action.payload._id ? action.payload : product));

        state.status = 'success';
      },
      [EditProduct.rejected]: (state, action) => {
        state.status = 'failed'
      },


      // DELETE
      [DeleteProduct.pending]: (state, {payload}) => {  
        state.status = 'loading' 
      },
      [DeleteProduct.fulfilled]: (state, action) => {   

        console.log(action.payload);

        state.products =state.products.filter((product) => (product._id !== action.payload));

        state.status = 'success';
      },
      [DeleteProduct.rejected]: (state, action) => {
        state.status = 'failed'
      },



    },
  });




  




  export const {
                 
              setSelectedProduct,
                 } =productSlice.actions; 





//selectors
export const selectProducts=(state)=>state.products;

export default productSlice.reducer;





