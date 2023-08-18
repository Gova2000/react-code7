// Write your code here

import './index.css'

const Cash = props => {
  const {Details, minus} = props
  const {value} = Details

  const Mins = () => {
    minus(value)
  }

  return (
    <div className="Let">
      <li>
        <button type="button" onChange={Mins}>
          {value}
        </button>
        <button type="button" onChange={Mins}>
          {value}
        </button>
      </li>
    </div>
  )
}

export default Cash
