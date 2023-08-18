// Write your code here
import './index.css'

import {Component} from 'react'

import Cash from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {Amount: 2000}

  ChangeAmount = value => {
    const {Amount} = this.state

    this.setState({Amount: Amount - value})
  }

  render() {
    const {denominationsList} = this.props
    const {Amount} = this.state

    return (
      <div className="card">
        <div className="card1">
          <div className="name1">
            <p className="design">S</p>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="mony">
            <p className="blnc">Your Balance</p>
            <div className="not">
              <p className="amt">
                {Amount} <span className="amtxt">in Rupees</span>
              </p>
            </div>
          </div>
          <div className="withcard">
            <p className="amt">Withdraw</p>
            <p className="blnc">CHOOSE SUM (IN RUPEES)</p>
            <ul className="but">
              {denominationsList.map(each => (
                <Cash Details={each} minus={this.ChangeAmount} key={each.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
