import { useContext, useState } from 'react';
import { Alert } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';
import { createUser } from '../util/auth';

function SignupScreen() {
  const authContext=useContext(AuthContext)
  const [isAuthenticating, setIsAuthenticating]=useState(false);
  const signupHandler=async({email,password})=>{
    setIsAuthenticating(true)
    try {
      const token=await createUser(email,password)  
      authContext.authenticate(token)
    } catch (error) {
      Alert.alert("Authentication Failed","Try Again") 
      setIsAuthenticating(false)
    }
  }
  if(isAuthenticating)
    return <LoadingOverlay message="Creating User"/>
  return <AuthContent onAuthenticate={signupHandler}/>;
}

export default SignupScreen;
