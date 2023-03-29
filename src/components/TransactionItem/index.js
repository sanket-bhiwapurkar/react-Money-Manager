import './index.css'

const TransactionItem = props => {
  const {transactionDetails, className, deleteHistoryItem} = props
  const {id, title, amount, type} = transactionDetails

  const onDelete = () => {
    deleteHistoryItem(id, type, amount)
  }

  return (
    <li className={className}>
      <p className="title-item">{title}</p>
      <p className="amount-item">Rs {amount}</p>
      <p className="type-item">{type}</p>
      <button
        type="button"
        className="delete-btn"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}
export default TransactionItem
