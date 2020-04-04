import React from 'react'
import { connect } from 'react-redux'
import CardList from '../components/CardList'
import './App.css'
// import { robots } from './robots'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import { setSearchField } from '../actions'

const mapStateToProps = (state) => ({
  searchField: state.searchField
})

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => {
    const text = event.target.value
    dispatch(setSearchField(text))
  }
})

class App extends React.Component { 
  constructor() {
    super()
    this.state = {
      robots: [] //, searchfield: ''
    }
  }

  componentDidMount() {
    // console.log(this.props.store.getState());
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json()
      })
      .then((users) => { 
        // console.log(users);       
        this.setState({ robots: users })
      })
  }

  // onSearchChange = (event) => { 
  //   this.setState({
  //     searchfield: event.target.value
  //   })
  // }

  render() {
    const { robots } = this.state
    const {searchField, onSearchChange} = this.props

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase()   
        .includes(searchField.toLowerCase())
    })

    if (!robots.length) {
      return (
        <h1>Loading</h1>
      )
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots}/>
            </ErrorBoundary>
          </Scroll>
        </div>
      )
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)