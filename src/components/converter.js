import React, { Component } from 'react';
import './converter.css';

export default class Converter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moneyA_value: '',
      moneyB_value: 0,
    };

    this.converter = this.converter.bind(this);
  }

  converter() {
    let from_to = `${this.props.moneyA}_${this.props.moneyB}`;
    let url = `https://free.currconv.com/api/v7/convert?q=${from_to}&compact=ultra&apiKey=f8830a3e281b607e879f`;
    //https://free.currconv.com/api/v7/convert?apiKey=f8830a3e281b607e879f&q=${from_to}compact=y
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        let cotation = json[from_to];
        let moneyB_value = (
          parseFloat(this.state.moneyA_value) * cotation
        ).toFixed(2);
        this.setState({ moneyB_value });
      });
  }

  render() {
    return (
      <div className="converter">
        <h2>
          {this.props.moneyA} for {this.props.moneyB}
        </h2>
        <input
          type="text"
          onChange={(event) => {
            this.setState({ moneyA_value: event.target.value });
          }}
        ></input>
        <button type="button" onClick={this.converter}>
          Convert
        </button>
        <h2>{this.state.moneyB_value}</h2>
      </div>
    );
  }
}
