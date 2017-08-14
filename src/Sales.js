import React, { Component } from 'react';

class Sales extends Component {
  constructor(props){
    super(props);

    this.state = {
      total: 0
    };

    this.increasePrice = this.increasePrice.bind(this);
  }

  increasePrice(price){
    this.setState({total: this.state.total + price});
  }

  render(){
    let salesItems = this.props.items.map((item, i) => {
      return <SaleItem
        key={i}
        active={item.active}
        name={item.name}
        price={item.price}
        increasePrice={this.increasePrice} />
    });

    return(
      <div>
        <h1>Choose some items to order</h1>
        <div id="saleItem">
          {salesItems}
          <p id="subTotal">Total <strong>{this.state.total}</strong></p>
        </div>
      </div>
    );
  }
}

class SaleItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      active: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log('current state1:' + this.state.active);
    this.setState({active: !this.state.active});
    console.log('current state2:' + this.state.active);
    this.props.increasePrice(this.state.active ? this.props.price : -this.props.price);
  }

  render(){
    return(
      <div>
        <p onClick={this.handleClick}>{this.props.name} <strong>{this.props.price}</strong></p>
      </div>
    );
  }
}

export default Sales;
