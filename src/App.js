import React, { Component } from 'react';
import Result from './components/Result';
import KeyPad from './components/KeyPad';
import './App.css'

export default class App extends Component{
  state = {
    result: 0,
    num1: 0,
    num2: 0,
    operator: ""
  }

  onClick = (btn) => {
      if(btn ==="c"){
        this.setState({
          result: 0,
          num1: 0,
          num2: 0,
          operator: ""
        })
      } else if(btn === "+"){ 
        this.setState({
          operator: "+"
        })

      } else if(btn === "*") {
          this.setState({
            operator: "*"
          }) 
      } else if(btn === "/"){
          this.setState({
            operator: "/"
          })
      } else if( btn === "=") {

        if(this.state.num1 !== 0 && this.state.operator !== "" && this.state.num2 !== 0) {

          if(this.state.operator === "+") {
            let parse1 = parseInt(this.state.num1)
            let parse2 = parseInt(this.state.num2)
            this.setState({
              result: ( parse1 + parse2 )
            })
          } else if(this.state.operator === "-" ) {
              let parse1 = parseInt(this.state.num1)
              let parse2 = parseInt(this.state.num2)
              this.setState({
                result: ( parse1 - parse2 )
              })
          } else if(this.state.operator === "*"){
              let parse1 = parseInt(this.state.num1)
              let parse2 = parseInt(this.state.num2)
              this.setState({
                result: ( parse1 * parse2 )
              })
          } else if(this.state.operator === "/"){
              let parse1 = parseInt(this.state.num1)
              let parse2 = parseInt(this.state.num2)
              this.setState({
                result: (parse1 / parse2 )
              })
          } 
        }

      } else {
        if ( this.state.num1 === 0 ) {
          this.setState({
            num1: btn
          })
        } else if( this.state.num1 !== 0 && this.state.operator === ""){
          this.setState({
            num1: this.state.num1 + `${btn}`
          })
        } else if( this.state.num2 === 0) {
          this.setState({
            num2: btn,
          })
        } else if( this.state.num2 !== 0 )
            this.setState({
            num2: this.state.num2 + `${btn}`,
          })
      }
  }

  render() {
    console.log(`[INFO] My [num1] is ${this.state.num1}`);
    console.log(`[INFO] My [operator] is ${this.state.operator}`);
    console.log(`[INFO] My [num2] is ${this.state.num2}`);
    console.log(`[INFO] My [result] is ${this.state.result}`);
    return (
      <React.Fragment>
        <div className="calculator-ui">
          <h1>Calculator</h1>
          <Result result={this.state.result}/>
          <KeyPad onClick={this.onClick}/>
        </div>

      </React.Fragment>
    )
  }
}

