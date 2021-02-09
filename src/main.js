import React, { Component, useState } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import messages from './messages.js'

class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
        </Menu>

        <Segment>          
          <h1>I have {data} repos on github</h1>
          {activeItem}
        </Segment>
      </div>
    )
  }
}

export default MenuExampleSecondaryPointing