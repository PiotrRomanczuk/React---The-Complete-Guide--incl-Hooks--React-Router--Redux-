import './ExpenseItem.css';

const ExpenseItem = (props) => {
	// const expenseDate = '2023.03.13';
	const newDate = new Date(2002, 11, 22);

	console.log(newDate);

	return (
		<div className='expense-item'>
			<div>{props.date.toISOString()}</div>
			<div className='expense-item__description'>
				<h2>{props.title}</h2>
				<div className='expense-item__price'>${props.amount}</div>
			</div>
		</div>
	);
};

export default ExpenseItem;
