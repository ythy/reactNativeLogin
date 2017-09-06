import React, { Component } from 'react';
import {
Navigator,
StatusBar,
} from 'react-native';

import Login from './login';
import Home from './home';

class App extends Component{

   constructor(props){
      super(props);
   }

   //返回相应的 renderScene
  renderScene = (route,navigator) => {
    let Component=route.component;
    return <Component navigator={navigator} route={route}/>
  }

  render(){
    return(
      <Navigator
      style={{flex:1}}
      configureScene={()=>Navigator.SceneConfigs.FloatFromRight}
      renderScene={this.renderScene}
      initialRoute={{
        component: Login,
        name: 'Login'
      }}
      />
    );
  }
}

export default App;
