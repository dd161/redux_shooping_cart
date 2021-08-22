import  {React, Component } from 'react';
import data from './data.json';
import Products from './Components/Products';
import Filter from './Components/Filter';
import Cart from './Components/Cart';

class App extends Component {
  constructor(){
    super();
    this.state={
      products:data.products,
      cartItem:localStorage.getItem("cartItem")
      ?JSON.parse(localStorage.getItem("cartItem")):[],
      size:"",
      sort:"",
      type:"",
    };
  }
  CreateOrder=(Order)=>{
    alert("Need To save The Cart" + Order.name);
  }
    AddCart =(product)=>{
      let alreadyInCart = false;
      const cartItem = this.state.cartItem.slice();
      cartItem.forEach(item =>{
        if(item._id ===product._id){
          item.Count++;
          alreadyInCart = true;
        }
      });
      if(alreadyInCart ==false){
        cartItem.push({...product, Count :1});
      }
      this.setState({
        cartItem
      });
      localStorage.setItem("cartItem",JSON.stringify(cartItem));

    }; 

    RemoveCart=(product)=>{
      const cartItem = this.state.cartItem.slice();
      this.setState({
        cartItem : cartItem.filter((x)=> x._id !== product._id )
      });
      localStorage.setItem("cartItem",JSON.stringify(cartItem.filter((x)=> x._id !== product._id )))
     
    }
  
  SortProducts=(event)=>{
    if(event!=='-Select-'){
    const sort =event.target.value;
    this.setState({
      sort:sort ,
      products:this.state.products.slice().sort((a,b)=>(
       sort ==="lowest"?
       ((a.price > b.price)? 1:-1):
       sort ==="hights"?
       ((a.price < b.price)? 1:-1):
       ((a._id < b._id)? 1:-1)


        ))
       });
  }}
  FilterProduct=(event)=>{
    
   if (event.target.value === ""){
     this.setState({
      size: event.target.value, products: data.products }); 
   }else{
    
      this.setState({
        size:event.target.value,
        products:data.products.filter(
          (product)=> product.availableSizes.indexOf(event.target.value)>= 0
        ),
      });

   }
  };
  TypeProduct=(event)=>{
    
    if (event.target.value === ""){
      this.setState({
       size: event.target.value, products: data.products }); 
    }else{
     
       this.setState({
         size:event.target.value,
         products:data.products.filter(
           (product)=> product.type.indexOf(event.target.value)>= 0
         ),
       });
 
    }
   };

  render(){
    
  return (
    <div className="App">
     <header>
       <a href ="/">React Shopping Cart</a> 
     </header>
     <main>
      <div className="content">
        <div className="main">
          <Filter  Count={this.state.products.length}
          Size={this.state.size}
          Sort={this.state.sort}
          Type={this.state.type}
          SortProducts={this.SortProducts}
          FilterProduct={this.FilterProduct}
          TypeProduct={this.TypeProduct} />
          <Products  products={this.state.products}  AddCart={this.AddCart}/>
        </div>
        <div className="sidebar">
          <Cart
           cartItem={this.state.cartItem} 
          RemovCart={this.RemoveCart} 
          CreateOrder={this.CreateOrder}/>
        </div>

      </div>
     
     </main>
     <footer>
     All Right is reseve
     </footer>
    
    </div>
  )};
}

export default App;
