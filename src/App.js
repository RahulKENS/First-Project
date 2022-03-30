import ExpenseItem from "./components/ExpenseItem";

// function App(){
//     let expenseDate = new Date(2021, 3, 28);
//     let expenseTitle = "School Fee";
//     let expenseAmount = 300;
//     return(
//         <div>
//             <h2>Let's get started..</h2>
//             <ExpenseItem
//                 date = {expenseDate}
//                 title = "Food"
//                 amount = {expenseAmount}>
//             </ExpenseItem>
//         </div>
//     )
// }


import Expenses from "./components/Expenses";
function App(){    
    let expenses = [
        {
            id : 'e1',
            title : 'School Fee',
            amount : 250,
            date : new Date(2022, 0, 18)
        },

        {
            id : 'e1',
            title : 'Electicity Bill',
            amount : 50,
            date : new Date(2022, 0, 30)
        },

        {
            id : 'e1',
            title : 'Books',
            amount : 175,
            date : new Date(2022, 0, 8)
        },

        {
            id : 'e1',
            title : 'House Rent',
            amount : 425,
            date : new Date(2022, 0, 19)
        },
    ]

    return(
        <div>
            <h1>Let's get Started....</h1>
            <Expenses item={expenses} />
            {/* <ExpenseItem 
                date={expense[0].date} 
                title={expense[0].title} 
                amount={expense[0].amount}>
            </ExpenseItem>

            <ExpenseItem
                date={expense[1].date} 
                title={expense[1].title} 
                amount={expense[1].amount}>
            </ExpenseItem>

            <ExpenseItem
                date={expense[2].date} 
                title={expense[2].title} 
                amount={expense[2].amount}>
            </ExpenseItem>

            <ExpenseItem 
                date={expense[3].date} 
                title={expense[3].title} 
                amount={expense[3].amount}>
            </ExpenseItem> */}
        </div>
    );
}



export default App;