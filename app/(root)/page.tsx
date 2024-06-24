import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import HeaderBox from '@/components/ui/HeaderBox';

 import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async() => {
  const loggedIn =  await getLoggedInUser();
  // const currentPage = Number(page as string) || 1;
  // const loggedIn = await getLoggedInUs.currentBalance, account.Balance, account.
  // const accounts = await getAccounts({ 
  //   userId: loggedIn.$id 
  // })

  // if(!accounts) return;
  
  // const accountsData = accounts?.data;
  // const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  // const account = await getAccount({ appwriteItemId })

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
            <TotalBalanceBox
              accounts={[] }
              totalBanks={1}
              totalCurrentBalance = {2340.25}
           
            
            />
        </header>
      RECENT TRANSACTIONS

      </div>
      <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance: 2340.25}, {currentBalance: 500.50}]}/>
    </section>
)
} 


export default Home