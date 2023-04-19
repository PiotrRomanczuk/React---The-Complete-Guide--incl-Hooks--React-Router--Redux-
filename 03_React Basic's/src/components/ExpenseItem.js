import './ExpenseItem.css';

const ExpenseItem = () => {
	// const expenseDate = '2023.03.13';
	const expenseDate = new Date(99, 3, 28);
	const newDate = new Date(2002, 11, 22);
	const expensiveTitle = 'Car Insurance';
	const expenseAmount = 211.94;

	console.log(newDate);

	return (
		<div className='expense-item'>
			<div>{expenseDate.toISOString()}</div>
			<div className='expense-item__description'>
				<h2>{expensiveTitle}</h2>
				<div className='expense-item__price'>${expenseAmount}</div>
			</div>
		</div>
	);
};

export default ExpenseItem;
