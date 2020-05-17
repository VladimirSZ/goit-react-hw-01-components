import React from "react";
import user from './profile/user.json';
import Profile from './profile/Profile';
import statisticalData from './statistics/statisticalData.json';
import Statistics from './statistics/Statistics'
import FriendList from './friendList/FriendList';
import friends from './friendList/friends.json';
import TransactionHistory from './transactionhistory/TransactionHistory';
import transactions from './transactionhistory/transactions.json';

function App() {
    return ( 
        <div>
            <Profile {...user} />
            <Statistics title="Upload stats" stats={statisticalData} />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
           

        </div>
    );
}

export default App;