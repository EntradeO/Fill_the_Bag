import React from 'react';
import IconCarrel from './IconCarrel'
import Cocktail from '../img/CocktailOneColor.svg';
import ButtonAddLList from './ButtonAddList';
import Button from '../img/ButtonAddList.svg';

class ElementList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      count: 0,
      clicked: false
    };
  } 
  click1(){
    this.setState({ 
      count: this.state.count + 1,
      clicked: true
    })
    setTimeout(()=>{
      this.setState({clicked: 'false'});
      document.body.classList.add('cart_full')
    }, 900)
  }
  render() {    
    let classes = "iconCarrel";
    if (this.state.clicked === true){
      classes += ' food';
    }else {
      classes += '';
    }
    return (
      <div>
        <div className='ListContainer'>
          <div className='ItemDetails'>
            <h2 className='Name'>{this.props.name}</h2>
            <p className='Descriptions'>{this.props.description}</p>
          </div>
          <h2 className="Counter"> {this.state.count} </h2>
          <h2 className='Price'> {this.props.price}</h2>
          <div className="AddOrder" onClick={this.click1.bind(this)}> 
            <ButtonAddLList ButtonAddLList={Button}/>
          </div>
        </div>
        <div className={classes}>
          <IconCarrel imageFood={Cocktail}></IconCarrel>
        </div>
      </div>
    );
  }
}

export default ElementList;
