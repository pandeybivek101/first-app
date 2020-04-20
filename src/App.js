import React from 'react';
import logo from './logo.svg';
import {Component} from 'react';
import './App.css';
/*import Greet from './components/greet'
import Welcome from './components/welcome'
import Hello from './components/hellow'
import functionClick from './components/functionClick'
import EventBind from './components/EventBind'
import EventParent from './components/EventParent'
import Conditional from './components/Conditional'
import Listrendering from './components/Listrendering'
import Form from './components/Form'
import Fragments from './components/Fragments'
import Parentcomponent from './components/Parentcomponent'
import Ref from './components/Ref'
import Portal from './components/Portal' 
import Hero from './components/Hero'
import ErrorBoundary  from './components/ErrorBoundary'
import ClickCounter  from './components/ClickCounter'
import Hovercounter  from './components/Hovercounter'
import Renderpropshover from './components/Renderpropshover'
import Renderpropsclick from './components/Renderpropsclick'
import Renderpropscounter from './components/Renderpropscounter'
import AxiosGet from './components/AxiosGet'
import UseStateHooks from './components/UseStateHooks'
import Try from './components/Try'
import Home from './Newcomponent/Home'*/
import {BrowserRouter, Route, NavLink, Link} from 'react-router-dom'
import RestaurantCreate from './Newcomponent/RestaurantCreate'
import RestaurantDetail from './Newcomponent/RestaurantDetail'
import RestaurantSearch from './Newcomponent/RestaurantSearch'
import RestaurantUpdate from './Newcomponent/RestaurantUpdate'
import RestaurantList from './Newcomponent/RestaurantList'
import Index from './Newcomponent/Index'
import {Navbar, Nav} from 'react-bootstrap'

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <div className="App">
       {/*<Greet name='Henry' address='ktm'/>
       <Welcome name='henry' address='ktm'/>
       <Hello />
    <EventBind />
    <EventParent/>
    <Conditional /> 
    <Listrendering />
    <Form />
    <Fragments />
    <Parentcomponent />
    <Ref />
    <Portal />
    <ErrorBoundary>
    <Hero name='joy'/>
    </ErrorBoundary>
    <ErrorBoundary>
    <Hero name='hari'/>
    </ErrorBoundary>
    <ErrorBoundary>
    <Hero name='jocker'/>
    </ErrorBoundary>
    <ClickCounter />
    <Hovercounter />
    <Renderpropscounter render={(count, incCount)=>(
      <Renderpropsclick count={count} incCount={incCount}/>
    )}/>
    <Renderpropscounter render={(count, incCount)=>(
      <Renderpropshover count={count} incCount={incCount}/>
    )}/>
    <AxiosGet />
    <Home />*/}
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Resto</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home"><Link to='/'>Home</Link></Nav.Link>
        <Nav.Link href="#link"><NavLink to='/list'>List</NavLink></Nav.Link>
        <Nav.Link href="#link"><NavLink to='/create'>Create</NavLink></Nav.Link>
        <Nav.Link href="#link"><NavLink to='/search'>search</NavLink> </Nav.Link>
        <Nav.Link href="#link"><NavLink to='/update'>Update</NavLink></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    <Route path='/list'>
      <RestaurantList />
    </Route>
    <Route path='/create'>
      <RestaurantCreate />
    </Route>
    <Route path='/search'>
      <RestaurantSearch />
    </Route>
    <Route path='/detail'>
      <RestaurantDetail />
    </Route>
    <Route path='/update/:id' component={RestaurantUpdate} /> 
    <Route exact path='/'>
      <Index />
    </Route>
      </div>
      </BrowserRouter>
    )
  }
}
export default App;
