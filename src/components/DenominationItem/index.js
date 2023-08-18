// Write your code here
import './index.css'

import {Component} from 'react'

import Cash from '../CashWithdrawal'

class CashWithdrawal extends Component {
  state = {Amount: 2000}

  ChangeAmount = value => {
    const {Amount} = this.state

    this.setstate({Amount: Amount - value})
  }

  render() {
    const {denominationsList} = this.props
    const {Amount} = this.state

    return (
      <div className="card">
        <div className="card1">
          <div>
            <p className="design">S</p>
            <p className="name">Sarah Williams</p>
          </div>
          <div>
            <p className="blnc">Your Balance</p>
            <p className="amt">
              {Amount} <span className="amtxt">in Rupees</span>
            </p>
          </div>
          <div>
            <h1 className="amtxt">Withdraw</h1>
            <p className="blnc">CHOOSE SUM (IN RUPEES)</p>
            <ul>
              {denominationsList.map((each) => ({
                <Cash Details={each} minus={this.ChangeAmount} key={each.id} />
              }))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal



