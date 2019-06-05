import React from 'react';
import './Calculator.css';

class Calculadora extends React.Component {
  constructor(props){
    super(props)

    this.state = {
        firstNum: 0,
        secondNum: 0,
        total: 0
    };

    this.handleChangeFirstNum = this.handleChangeFirstNum.bind(this);
    this.handleChangeSecondNum = this.handleChangeSecondNum.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  handleChangeFirstNum(event) {
    this.setState({firstNum: event.target.value}, () => {
      this.handleClick()
    })
  }

  handleChangeSecondNum(event) {
    this.setState({secondNum: event.target.value}, () => {
      this.handleClick()
    })
  }

  handleClick() {
    let firstValue = this.state.firstNum
    let secondValue = this.state.secondNum
    let sumValue = Number(firstValue) + Number(secondValue)
    this.setState({
      total: sumValue
    })
  }

  render() {
    return (
      <div>
        <div>
            <input type="text" onChange={this.handleChangeFirstNum}/>
        </div>
        <br></br>
        <div>
            <input type="text" onChange={this.handleChangeSecondNum}/>
        </div>
        <br></br>
        <label>Soma: {this.state.total}</label>
      </div>
    )
  }
}

export default Calculadora;
