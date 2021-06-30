import React from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router'
import {useDidMount} from '../../hooks'

import {login} from '../../redux/authReducer/actions'

import {View} from './Auth.view'

const Auth: React.FunctionComponent = () => {
  const [isLogin, setIsLogin] = React.useState(true)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const [modalClassName, setModalClassName] =
    React.useState('Modal--visibilityX')
  const history = useHistory()
  const dispatch = useDispatch()
  const didMount = useDidMount()

  React.useEffect(() => {
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }, [isLogin])

  React.useEffect(() => {
    if (didMount) {
      if (!isLogin) {
        setModalClassName('Modal--hideX')
        setTimeout(() => {
          setModalClassName('Modal--visibilityY')
        }, 1000)
      } else {
        setModalClassName('Modal--hideY')
        setTimeout(() => {
          setModalClassName('Modal--visibilityX')
        }, 1000)
      }
    }
    // eslint-disable-next-line
  }, [isLogin])

  const submitHandler = (event: any) => {
    event.preventDefault()
    if (isLogin) {
      if (email.trim().length === 0 || password.trim().length === 0) {
        console.log('error')
        return
      }
      dispatch(login)
      history.push('/')
    } else {
      return
    }
  }

  const handleAuthChange = (auth: boolean) => {
    if (isLogin !== auth) {
      //console.log(auth);
      setIsLogin(auth)
    }
  }

  return (
    <View
      isLogin={isLogin}
      email={email}
      password={password}
      confirmPassword={confirmPassword}
      modalClassName={modalClassName}
      onAuthChange={handleAuthChange}
      onChangeEmail={event => setEmail(event.target.value)}
      onChangePassword={event => setPassword(event.target.value)}
      onChangeConfirmPassowrd={event => setConfirmPassword(event.target.value)}
      submitHandler={(event: any) => submitHandler(event)}
    />
  )
}

export {Auth}
