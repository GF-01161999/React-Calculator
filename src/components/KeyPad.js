import React, { Component } from 'react'


export default class KeyPad extends Component {
    render() {
        return (
            <div>
                <div className="calc-ui">

                    <button onClick={() => this.props.onClick(1)}>1</button>
                    <button onClick={() => this.props.onClick(2)}>2</button>
                    <button onClick={() => this.props.onClick(3)}>3</button>
                    <button onClick={() => this.props.onClick("+")}>+</button><br/>

                    <button  onClick={() => this.props.onClick(4)}>4</button>
                    <button  onClick={() => this.props.onClick(5)}>5</button>
                    <button  onClick={() => this.props.onClick(6)}>6</button>
                    <button  onClick={() => this.props.onClick("c")}>C</button><br/>

                    <button  onClick={() => this.props.onClick(7)}>7</button>
                    <button  onClick={() => this.props.onClick(8)}>8</button>
                    <button  onClick={() => this.props.onClick(9)}>9</button>
                    <button  onClick={() => this.props.onClick("*")}>x</button><br/>

                    <button  onClick={() => this.props.onClick("-")}>-</button>
                    <button  onClick={() => this.props.onClick(0)}>0</button>
                    <button  onClick={() => this.props.onClick("=")}>=</button>
                    <button  onClick={() => this.props.onClick("/")}>÷</button><br/>

                </div>
            </div>
        )
    }
}
