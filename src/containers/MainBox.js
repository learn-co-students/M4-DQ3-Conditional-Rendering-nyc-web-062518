import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      detailsToDisplay: null
    }
  }


  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    // const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar changeDisplayDetails={this.changeDisplayDetails}/>
        {this.state.detailsToDisplay}
      </div>
    )
  }

  changeDisplayDetails = (event) => {
    let selectedItem = event.target.id
    // Array.from(event.target.parentElement.children).forEach(child => child.className = "item")
    if (selectedItem === "profile") {
      event.target.className = "item active"
      this.setState({detailsToDisplay: <Profile />})
    } else if (selectedItem === "photo") {
      event.target.className = "item active"
      this.setState({detailsToDisplay: <Photos />})
    } else if (selectedItem === "cocktail") {
      event.target.className = "item active"
      this.setState({detailsToDisplay: <Cocktails />})
    } else if (selectedItem === "pokemon") {
      event.target.className = "item active"
      this.setState({detailsToDisplay: <Pokemon />})
    }
  }

}

export default MainBox
