import './index.css'

import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import TransactionItem from '../TransactionItem'

import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'Income',
    transactionHistoryList: [],
    balance: 0,
    income: 0,
    expenses: 0,
  }

  onTitleChange = event => {
    this.setState({title: event.target.value})
  }

  onAmountChange = event => {
    this.setState({amount: event.target.value})
  }

  onSelectType = event => {
    this.setState({
      type: event.target.value === 'INCOME' ? 'Income' : 'Expenses',
    })
    console.log(event.target.value)
  }

  onAdd = event => {
    const {title, amount, type, transactionHistoryList} = this.state
    event.preventDefault()
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      transactionHistoryList: [...transactionHistoryList, newTransaction],
      title: '',
      amount: '',
      type: 'Income',
      balance:
        type === 'Income'
          ? prevState.balance + parseInt(amount)
          : prevState.balance - parseInt(amount),
      income:
        type === 'Income'
          ? prevState.income + parseInt(amount)
          : prevState.income,
      expenses:
        type === 'Expenses'
          ? prevState.expenses + parseInt(amount)
          : prevState.expenses,
    }))
  }

  deleteHistoryItem = (id, type, amount) => {
    this.setState(prevState => ({
      transactionHistoryList: prevState.transactionHistoryList.filter(
        eachTransaction => id !== eachTransaction.id,
      ),
      balance:
        type === 'Income'
          ? prevState.balance - parseInt(amount)
          : prevState.balance + parseInt(amount),
      income:
        type === 'Income'
          ? prevState.income - parseInt(amount)
          : prevState.income,
      expenses:
        type === 'Expenses'
          ? prevState.expenses - parseInt(amount)
          : prevState.expenses,
    }))
  }

  render() {
    const {
      title,
      amount,
      type,
      transactionHistoryList,
      balance,
      income,
      expenses,
    } = this.state
    return (
      <div className="bg-container">
        <div className="profile-container">
          <h1 className="heading">Hi, Richard</h1>
          <p className="greeting">
            Welcome back to your{' '}
            <span className="greeting-span">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          transactionHistoryList={transactionHistoryList}
          balance={balance}
          income={income}
          expenses={expenses}
        />
        <div className="form-and-history-container">
          <form className="form">
            <h1 className="sub-heading">Add Transaction</h1>
            <label className="label" htmlFor="title">
              TITLE
            </label>
            <input
              className="input"
              type="text"
              id="title"
              placeholder="TITLE"
              value={title}
              onChange={this.onTitleChange}
            />
            <label className="label" htmlFor="amount">
              AMOUNT
            </label>
            <input
              className="input"
              type="text"
              id="amount"
              placeholder="AMOUNT"
              value={amount}
              onChange={this.onAmountChange}
            />
            <label className="label" htmlFor="type">
              TYPE
            </label>
            <select className="input" onChange={this.onSelectType}>
              {transactionTypeOptions.map(eachType => (
                <option
                  id={eachType.optionId}
                  key={eachType.optionId}
                  value={eachType.optionId}
                >
                  {eachType.displayText}
                </option>
              ))}
            </select>
            <button className="add-btn" type="submit" onClick={this.onAdd}>
              Add
            </button>
          </form>
          <div className="history-container">
            <h1 className="sub-heading">History</h1>
            <ul className="history-item-container">
              <li className="history-item list-heading">
                <p className="title-item">Title</p>
                <p className="amount-item">Amount</p>
                <p className="type-item">Type</p>
              </li>
              {transactionHistoryList.map(eachTransaction => (
                <TransactionItem
                  className="history-item"
                  transactionDetails={eachTransaction}
                  key={eachTransaction.id}
                  deleteHistoryItem={this.deleteHistoryItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
