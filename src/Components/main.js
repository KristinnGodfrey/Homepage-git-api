import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

class MenuExampleSecondaryPointing extends Component {

  constructor(props) {
    super(props);
  }

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
          {this.props.data}          
          {activeItem}
        </Segment>
      </div>
    )    
  }
}

export default MenuExampleSecondaryPointing