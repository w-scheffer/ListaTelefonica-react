import React from 'react';
import './Calculator.css';

class Calculadora extends React.Component {
    constructor(props){
      super(props)
  
      this.state = {
          firstNum: 0,
          secondNum: 0,
          total: 0,
          operator: ''
      };
  
      this.handleChangeFirstNum = this.handleChangeFirstNum.bind(this);
      this.handleChangeSecondNum = this.handleChangeSecondNum.bind(this);
      this.calculate = this.calculate.bind(this);
    }
  
    handleChangeFirstNum(event) {
      this.setState({firstNum: event.target.value}, () => {
        this.calculate()
      })
    }
  
    handleChangeSecondNum(event) {
      this.setState({secondNum: event.target.value}, () => {
        this.calculate()
      })
    }
  
    calculate(op = this.state.operator) {
      let firstValue = this.state.firstNum;
      let secondValue = this.state.secondNum;
      let operationResult = 0;
      switch (op) {
        case 'SUM': operationResult = Number(firstValue) + Number(secondValue); break;
        case 'LESS': operationResult = firstValue - secondValue; break;
        case 'MULT': operationResult = firstValue * secondValue; break;
        case 'DIV': operationResult = firstValue / secondValue; break;
        default: {
            this.setState({
                firstNum: 0,
                secondNum: 0,
                total: 0,
                operator: ''
            })
            break;
        }
      }
      this.setState({
        total: operationResult
      })
    }
  
  
    render() {
      if (!this.state.operator) {
          return (
              <div>
                <div>
                    <button onClick={() => this.setState({operator: 'SUM'})}>ADIÇÃO</button>
                    <button onClick={() => this.setState({operator: 'LESS'})}>SUBTRAÇÃO</button>
                </div>
                <div>
                    <button onClick={() => this.setState({operator: 'MULT'})}>MULTIPLICAÇÃO</button>
                    <button onClick={() => this.setState({operator: 'DIV'})}>DIVISÃO</button>
                </div>
              </div>
          )
      } else {
          return (
            <div>
              <div>
                  <input type="text" onChange={this.handleChangeFirstNum}/>
              </div>
      
              <div>
                  <input type="text" onChange={this.handleChangeSecondNum}/>
              </div>
              <label>Total: {this.state.total}</label>
              <button onClick={() => this.calculate('')}>VOLTAR</button>
            </div>
          )
      }
    }
  
}
  
export default Calculadora;
