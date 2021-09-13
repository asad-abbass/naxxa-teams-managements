
import './App.css';
import Dashboard from './Component/Dashboard';
import Layout from './Pages/Layout';
import { Switch, Route} from 'react-router-dom'
import AddNewTeam from './Pages/AddNewTeam';
import Teams from './Pages/Teams';
import SignUp from './Pages/SignUp';




function App() {
  return (
    <>
      <Layout >
      <Switch>
        <Route path='/' exact>
          <Dashboard />
        </Route>
        <Route path='/teams'>
         <Teams />
        </Route>
        <Route path='/add-new'>
         <AddNewTeam />
        </Route>
        <Route path='/sign-in'>
         <SignUp />
        </Route>
      </Switch>
      </Layout>


      
    </>
  );
}

export default App;
