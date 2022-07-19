import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from '../Components/Search';
import Profil2 from '../Components/Profil2';

const Stack = createNativeStackNavigator();

export default function Navigator({token}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={Search}  />
        <Stack.Screen name="profil" component={Profil2} initialParams={{'token':token}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}