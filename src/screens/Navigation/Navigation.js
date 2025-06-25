import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../Splash";
import Home from "../Home";
import Login from "../Login";
import Signup from "../Signup";
import Services from "../Services";
const Navigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash}  options={{headerShown:false}}/>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <Stack.Screen name="Signup" component={Signup} options={{headerShown:true,headerTransparent:true,headerTitleStyle:{color:"#770996"},headerTitle:'CREATE AN ACCOUNT'}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown:true,headerTransparent:true,headerTitleStyle:{color:"#770996"}}}/>
            <Stack.Screen name="Services" component={Services} options={{headerShown:true,headerTransparent:true,headerTitleStyle:{color:"#770996"},headerTitle:'OUR SERVICES'}}/>
        </Stack.Navigator>
    )
}

export default Navigation
