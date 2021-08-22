import  {React,Component} from 'react';

class Filter extends Component{
    render(){
    return(
        <div className="filter">

            <div className="filter-result">{this.props.Count+ "    "+"Products"}</div>
            <div className="filter-sort">Order{" "}
            <select value={this.props.Sort} onChange={this.props.SortProducts}>
                <option value="ALL">-Select-</option>
                <option value="lowest">Lowest</option>
                <option value="hights">Hights</option>
                </select>
                </div>
                
            <div className="filter-size"> 
            Filter{" "}
            <select value={this.props.Size} onChange={this.props.FilterProduct}>
                <option value="ALL">-Select-</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="X">X</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
                <option value="SX">SX</option>
                </select></div>
                <div className="filter-type"> 
            Type{" "}
            <select value={this.props.Type} onChange={this.props.TypeProduct}>
                <option value="ALL">-Select-</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Child">Child</option>
               
                </select></div>
        </div>
        
    )}
}
export default Filter;