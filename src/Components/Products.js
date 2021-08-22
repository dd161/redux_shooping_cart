import React, { Component } from 'react';
import formatCurrency from '../until';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';

class Products extends Component {
  constructor(props){
    super(props);
    this.state = {
      product: null,
    };
  }
  OpenModel=(product)=>{
    this.setState({product});

  };
  CloseModel=()=>{
    this.setState({product :null});
  };
    render(){
      const {product}=this.state;
        return(
            <div>
              <Fade bottom cascade>
        <ul className="products">
        {this.props.products.map((product) => (
          <li key={product._id}>
            <div className="product">
              <a href={"#" + product._id}
                onClick={()=> this.OpenModel(product)}
              >
                <img src={product.image} alt={product.title}></img>
           
              </a>
             <div>
               <a href={"#" + product._id}
                onClick={()=> this.OpenModel(product)}
               >
             <p>{product.title}</p>
             </a>
              <div className="product-price">
             
                 <div>{formatCurrency(product.price)}</div>
                <button  onClick={()=>this.props.AddCart(product)} className="button">
                
                  Add To Cart
                </button>
              </div>
            </div>
            </div>
          </li>
        ))}
      </ul>
      </Fade>
      {
        product && (
          <Modal isOpen={true} onRequestClose={this.CloseModel}>
            <Zoom>
              <button className="close-modal" onClick={this.CloseModel}>
               X
              </button>
           <div className="product-details">
           <img src={product.image} alt={product.title}></img>
           <div className="product-details-description">
             <p>
               {product.description}
             </p>
             <p>
               Available Size:{"   "}
               {product.availableSizes.map((x)=>(
               <span>
                 {"  "}
                 <button className="button">{x}</button>
               </span>
                ) )}
             </p>
             <div className="price-product">
             {formatCurrency(product.price)}
             <button className="primary button" 
             onClick={()=>{
               this.props.AddCart(product);
               this.CloseModel();
             }}
             > 
             Add To Cart</button>
             </div>
           </div>
           </div>
            </Zoom>
          </Modal>
        
        )}
      </div>
        )}
      
    
}
export default Products;