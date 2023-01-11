import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '..//screens/Home';
import { Game } from '..//screens/Game';

const { Navigator, Screen} =  createNativeStackNavigator();

export function AppRoutes(){
  return (
    <Navigator screenOptions={{headerShown: false }}>
      < Screen // nome da rota
        name="home" 
        component={Home} 
      />

      < Screen
        name="game" // componente
        component={Game}
      />
    </Navigator>
  )
}