import React, { Component } from 'react';
import './calcstyle.css';

class Calculator extends Component {

    constructor(){
        super();
        this.state = {
            result: 0,
            theFirstValue: 10,
            theSecondValue: 3,
            operations: "+"
        };
// binds
        this.ShowResult= this.ShowResult.bind(this);
        this.handleNumberChangeFirst = this.handleNumberChangeFirst.bind(this);
        this.handleNumberChangeSecond = this.handleNumberChangeSecond.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);

    };
    ShowResult(operations, theFirstValue, theSecondValue) {

        let result = 0;

        switch (operations) {
            case '+':
                result = theFirstValue + theSecondValue;
                break;
            case '-':
                result = theFirstValue - theSecondValue;
                break;
            case '*':
                result = theFirstValue * theSecondValue;
                break;
            case '%':
                result = Math.round(theFirstValue / theSecondValue);
                break;
            default:
                break;
        }
        this.setState({result: result});

    };

    handleNumberChangeFirst(event){
        let firstNumber = Number(event.currentTarget.value);
        this.setState({theFirstValue: firstNumber});
        let {theSecondValue, operations} = this.state;
        this.ShowResult(operations, firstNumber, theSecondValue);
    };

    handleNumberChangeSecond(event){
        let secondNumber = Number(event.currentTarget.value);
        this.setState({theSecondValue: secondNumber});
        let {theFirstValue, operations} = this.state;
        this.ShowResult(operations, theFirstValue, secondNumber);
    };

    handleSelectChange(event){
        let selectOperations = event.currentTarget.value;
        this.setState({operations: selectOperations});
        let {theFirstValue, theSecondValue} = this.state;
        this.ShowResult(selectOperations, theFirstValue, theSecondValue);
    };

    render() {
        return (
            <div className="calculator">
          <div className="firstValue">
           <input value={this.state.theFirstValue} onChange={this.handleNumberChangeFirst}/>
          </div>
          <div className="selectOperators">
           <select id="" name="" onChange={this.handleSelectChange}>
               <option value="+">+</option>
               <option value="-">-</option>
               <option value="*">*</option>
               <option value="%">:</option>
           </select>
           </div>
               <div className="secondValue">
                   <input value={this.state.theSecondValue} onChange={this.handleNumberChangeSecond}/>
               </div>
             <div className= "toGetResult" >

             </div>
            <div className="showResult">
                Result: <span>
                {this.state.theFirstValue} {this.state.operations} {this.state.theSecondValue} = {this.state.result}
                </span>
            </div>
            </div>

        );
    }
}

export default Calculator;
