// Write your code here

import './index.css'

const Cash = props => {
  const {Details, minus} = props
  const {value} = Details

  const Mins = () => {
    minus(value)
  }

  return (
    <li>
      <button type="button" onClick={Mins}>
        {value}
      </button>
    </li>
  )
}

export default Cash
