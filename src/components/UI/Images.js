import React, { Component } from 'react';
  
class Images extends Component {
  render() {
    const myStyle={
        backgroundImage: 
            "url('https://cdn.shopify.com/s/files/1/0569/1663/9914/files/MissDior_New_EDP_Instit_Franch_EN_1440x616_57029564-9142-40bc-80de-9a9c26314e59.jpg?v=1631246546')",
        height:'90vh',
        marginTop:'-10px',
        // fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        textalign : 'centre',
    };
    return (
      <div style={myStyle} className="image1">
        {/* <h1 className='heading'>Perfume Shop</h1> */}
      </div>
    );
  }
}

export default Images;