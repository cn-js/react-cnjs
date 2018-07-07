import React from 'react'

import { TabBar, Icon } from 'antd-mobile';
import { colors } from '../../constants';
import { browserHistory } from 'react-router';

class MyTabBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedTab: 'home',
      hidden: false,
    };
  }

  render () {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor={colors.blue}
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          icon={<Icon type={require('../../icons/homepage.svg')} size="md" />}
          selectedIcon={<Icon type={require('../../icons/homepage_fill.svg')} size="md" />}
          title="主页"
          key="主页"
          selected={this.state.selectedTab === 'home'}
          onPress={() => {
            this.setState({
              selectedTab: 'home',
            });
            browserHistory.push('/');
          }}
        >
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon type={require('../../icons/brush.svg')} size="md" />}
          selectedIcon={<Icon type={require('../../icons/brush_fill.svg')} size="md" />}
          title="发帖"
          key="发帖"
          selected={this.state.selectedTab === 'publish'}
          onPress={() => {
            this.setState({
              selectedTab: 'publish'
            });
            browserHistory.push('/publish');
          }}
        >
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon type={require('../../icons/mine.svg')} size="md" />}
          selectedIcon={<Icon type={require('../../icons/mine_fill.svg')} size="md" />}
          title="我的"
          key="我的"
          selected={this.state.selectedTab === 'mine'}
          onPress={() => {
            this.setState({
              selectedTab: 'mine',
            });
            browserHistory.push('/mine');
          }}
        >
        </TabBar.Item>
      </TabBar>
    );
  }
};

export default MyTabBar;