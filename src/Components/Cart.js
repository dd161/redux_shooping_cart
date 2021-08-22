import React, { Component } from 'react';
import formatCurrency from '../until';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';


class Cart extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            adders:"",
            ShowCheckout:false};
    }
    handelInput=(e)=>{
        this.setState({ [e.target.name] :e.target.value});

    }
    CreateOrder=(e)=>{
        e.preventDefault();
        const Order={
            name:this.state.name,
            email:this.state.email,
            adders:this.state.adders,
            cartItem:this.props.cartItem

        };
        this.props.CreateOrder(Order);

    }
    CloseModel=()=>{
        this.setState({ShowCheckout:false});
      };
    render(){
        const {cartItem} = this.props;
    return(
           
            <div>
           {cartItem.length==0 ?(
          <div className=" cart-header">Cart Is Empty</div>
           ):(
            <div className="cart-len">
                <p>Total selected from each category</p><span>{cartItem.length}</span> </div> 
           )}
        
        <div>
            <div>
        <div className="cart">
            <Fade bottom cascade>
            <ul className="cart-items">
            {cartItem.map(item=>(
            <li key={item._id}>
                
                    <div>
                        <img src={item.image} alt={item.title}></img>
                    </div>
                    <div>
                    <div> {item.title}</div>
                    <div className="right">
                        {formatCurrency(item.price)} x {item.Count}
                    </div>
                    
                    <button  onClick={()=>this.props.RemovCart(item)}>
                        Remove
                    </button>
                    </div>
                </li>
            ))}
            </ul>
            </Fade>
        </div>
        {cartItem.length!== 0 && (
            <div className="cart">
            <div className="total">
                <div>
                Total:{"     "}
                { formatCurrency( cartItem.reduce((a,c)=> a + c.price*c.Count,0))}
            </div>
            </div>
            <button onClick={()=>this.setState({ShowCheckout :true})
        } className="button-primary">Proceed
        </button>
        </div>
        

        )};
        </div>
        {this.state.ShowCheckout &&(
                 <Modal className="open-order" isOpen={true} onRequestClose={this.CloseModel}>
            
                 <button className="close-order" onClick={this.CloseModel}>
                  X
                 </button>
   
            <div className="total">
                <form className="ggg" onSubmit={this.CreateOrder}>
            
                <Fade bottom cascade>

                    <ul className="form-container">
                        <li>
                            <label>Email</label>
                            <input type="email" 
                            name="email"
                            required onChange={this.handelInput}>
                            </input>
                        </li>
                        <li>
                            <label>Name</label>
                            <input type="text" 
                            name="name"
                            required onChange={this.handelInput}>
                            </input>
                        </li>
                        <li>
                            <label>Adders</label>
                            <input type="text" 
                            name="adders"
                            required onChange={this.handelInput}>
                            </input>
                        </li>
                        <li>
                            <button className="button-secend" 
                            type="submit">CheckOut
                            </button>
                        </li>
                    </ul>
                   
                    </Fade>
                    
                </form>
                </div>
                </Modal>
        )};
        
        
        </div> 
       </div>
        
        
    )}
}
export default Cart;
