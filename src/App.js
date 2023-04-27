import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Homescreen from './screens/Homescreen'
import SearchBar from './components/SearchBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Searchscreen from './screens/Searchscreen'
import Loginscreen from './screens/Loginscreen'
import Registerscreen from './screens/Registerscreen'
import Plantscreen from './screens/Plantscreen'
import Subscriptionscreen from './screens/Subscriptionscreen'
import Orderscreen from './screens/Orderscreen'
import SubscribeScreen from './screens/SubscribeScreen'
import PlantList from './screens/PlantList'
import UserListScreen from './screens/UserListScreen'
import PlantListScreen from './screens/PlantListScreen'

// }

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<Homescreen />} exact></Route>
          <Route path='/login' element={<Loginscreen/>} exact></Route>
          <Route path='/search' element={<Searchscreen/>} exact></Route>
          <Route path='/plant/:id' element={<Plantscreen/>} exact></Route>
          <Route path='/register' element={<Registerscreen/>} exact></Route>
          <Route path='/subscription' element={<Subscriptionscreen />} exact></Route>
          <Route path='/order' element={<Orderscreen />} exact></Route>
          <Route path='/subscribe' element={<SubscribeScreen />} exact></Route>
          <Route path='/admin/userlist' element={<UserListScreen />} exact></Route>
          <Route path='/admin/productlist' element={<PlantListScreen />}exact></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
