import { useContext, useState } from 'react';
import { Alert } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';
import { loginUser } from '../util/auth';

function LoginScreen() {
  const authContext=useContext(AuthContext)
  const [isAuthenticating, setIsAuthenticating]=useState(false);
  const signInHandler=async({email,password})=>{
    setIsAuthenticating(true)
    try {
      const token=await loginUser(email,password)  
      authContext.authenticate(token)
    } catch (error) {
      Alert.alert("Authentication Failed","Try Again") 
      setIsAuthenticating(false)
    }
  }
  if(isAuthenticating)
    return <LoadingOverlay message="Logging you in..."/>
  return <AuthContent isLogin onAuthenticate={signInHandler}/>;
}

export default LoginScreen;
