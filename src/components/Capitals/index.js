import {Component} from 'react'
import ListItem from '../ListItem'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {id: 'NEW_DELHI'}

  onClickChangeCountry = Capital => {
    this.setState({id: Capital})
  }

  render() {
    const {id} = this.state
    const selectedCountry = countryAndCapitalsList.find(each => each.id === id)

    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="question-container">
            <select className="select">
              {countryAndCapitalsList.map(each => (
                <ListItem
                  selectItem={each}
                  key={each.id}
                  onClickChangeCountry={this.onClickChangeCountry}
                />
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="answer">{selectedCountry.country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
