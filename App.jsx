import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './src/screens/Navigation/Navigation'
import { hideSplash} from 'react-native-splash-view'
export default function App() {
  // showSplash();
  useEffect(() => {
    setTimeout(() => {
      hideSplash()
    }, 3000)
  }, [])


  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  )
}