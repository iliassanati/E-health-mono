import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = { width:"325px", margin:"10px", border: "none", background:"#F2F1F9", padding:"1rem"};
  return (
    
    <div>
      
        <input 
          style={BarStyling}
          key="random1"
          value={keyword}
          placeholder={"Medcin, specialite..."}
          //onChange={(e) => setKeyword(e.target.value)}
          />
        <input 
          style={BarStyling}
          key="random1"
          value={keyword}
          placeholder={"Ville, adresse..."}
          //onChange={(e) => setKeyword(e.target.value)}
          />
    </div>
    
   
  );
}

export default SearchBar