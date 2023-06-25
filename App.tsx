import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import {MainStackNavigator} from "./components/MainStackNavigator";
import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from './supabase'
import Auth from './screens/Login'
import Account from './components/Account'
import { Session } from '@supabase/supabase-js'


export default function App() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  return (
    
    <NavigationContainer>
      <MainStackNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}