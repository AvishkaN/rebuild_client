

const FilterDataName=(name,Data)=>{
    
    const FilteredObj=Data.filter(data=>data.categoryName==name);
    
    return FilteredObj[0];    

};


export default FilterDataName;