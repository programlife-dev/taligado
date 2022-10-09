import { createDrawerNavigator } from '@react-navigation/drawer';

import Profile from '../screens/Profile';
import Home from '../screens/Home';

const Drawer = createDrawerNavigator();

const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={({route}) => ({
            title: route.params?.title,
          })}
        />
      </Stack.Navigator>
    );
  };


const MainDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    );
}

const getTabBarVisibility = route => {
    // console.log(route);
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
    // console.log(routeName);
  
    if( routeName == 'GameDetails' ) {
      return 'none';
    }
    return 'flex';
  };

  
export default MainDrawer;