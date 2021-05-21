import React from 'react';
import './TransferFunds.scss';

export class TransferFunds extends React.Component {
  state = {
    coins: ''
  }

  // TO DO - FINISH TRANSFER FUNDS
  handleChange = (e) => {
    console.log('event.target.coins', e.target.value)
    this.setState({coins: e.target.value});
  }

  handleSubmit = (e)  =>{
    e.preventDefault();
    alert('A coins was submitted: ' + this.state.coins);
  }

  render(){
    console.log('transfer funds props:',this.props.data.name)
    return(
      <form className="form transfer-funds" onSubmit={this.handleSubmit}>
      <h3>Transfer coins to {this.props.data.name}</h3>
      <input type="number" className="form-input" min="1" value={this.state.coins} onChange={this.handleChange} />
      <button className="form-btn">Transfer</button>
    </form>
    )
  }
   
}

