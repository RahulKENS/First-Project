// #1st Code

// import './ExpenseItem.css';
// function ExpenseItem(){
//                 let title = 'Car Insurance';
//                 return(
//                         <div className='expense-item'>
//                             <div>March 12th 2021</div>
//                             <div className='expense-item__description'>
//                                 {/* <h2>Car Insurance</h2> */ }
//                                 <h2>{title}</h2>
//                                 <div className='expense-item__price'>$200</div>
//                             </div>
//                         </div>
//                 );
// }
// export default ExpenseItem;



// #2nd Code


// import './ExpenseItem.css';
// function ExpenseItem(props){        //yha hmne argument call karya "props", jiske though data fetch  
//                                     //krte h. [props] ek object bn gya h. Jisme App.js se hm jitne v 
//                                     //chig pass kr rahe h, ye sara ka sara [props] ka property bn jayenga.
//                                     //property ko call karane ke liye <h2>{props.title}</h2>

//                 const month = props.date.toLocaleString('en-US', {month: 'long'});
//                 const year = props.date.getFullYear();                                   //Copy me h...
//                 const day = props.date.toLocaleString('en-US', {day: '2-digit'});
//                 return(
//                         <div className='expense-item'>
//                             <div>
//                                 <div>{ month }</div>                                    
//                                                                                 {/* Copy me h */}
//                                 <div>{ year }</div>
//                                 <div>{ day }</div>
//                             </div>
// {/* <div>{props.date.toISOString()}</div>  */}
//  {/* iss se hm date ko print kra sakte h  */}
//                             <div className='expense-item__description'>                              
//                                 <h2>{props.title}</h2>
//                                 <div className='expense-item__price'>${props.amount}</div>
//                                 </div>
//                         </div>
// // yha jo hme agar object ki property ko access karna h <h2> tag me then access karne ke object.propertyNAme use karte h. */
// // then we use {props.title} 
                            
//                 );
// }
// export default ExpenseItem;



// #3rd code


import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){ 
    return(
        <div className='expense-item'>
            <ExpenseDate date={props.date} />

            <div className='expense-item__description'>
                <h2>{props.title}</h2>  
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    );        
}    
export default ExpenseItem;