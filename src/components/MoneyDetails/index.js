import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <div className="money-detail-container">
      <div className="card balance">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p className="card-heading">Your Balance</p>
          <p className="amt" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>

      <div className="card income">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p className="card-heading">Your Income</p>
          <p className="amt" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>

      <div className="card expenses">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p className="card-heading">Your Expenses</p>
          <p className="amt" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
