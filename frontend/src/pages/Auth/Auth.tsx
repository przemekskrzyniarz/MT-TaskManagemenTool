import {useMutation} from '@apollo/client'
import React, {useState, useEffect, FC} from 'react'
import {useHistory} from 'react-router'
import {userInitialValue, userVar} from '../../apollo/reactivities/user'
import {LOGIN, REGISTER} from '../../apollo/mutations'
import {useDidMount} from '../../hooks'

import {View} from './Auth.view'
import {User} from '../../apollo/models/User'

const Auth: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [modalClassName, setModalClassName] =
    useState<string>('Modal--visibilityX')
  const history = useHistory()
  const didMount = useDidMount()
  const [login] = useMutation(LOGIN, {
    variables: {email: email, password: password},
    onCompleted: ({loginUser}) => onCompleted(loginUser),
    onError: ({message}) => onErrorLogin(message),
  })

  const [register] = useMutation(REGISTER, {
    variables: {
      email: email,
      password: password,
    },
    onCompleted: ({loginUser}) => onCompleted(loginUser),
    onError: ({message}) => onErrorRegister(message),
  })

  useEffect(() => {
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }, [isLogin])

  useEffect(() => {
    if (errorMessage) {
      setErrorMessage(null)
    }
  }, [password, email])

  useEffect(() => {
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
  }, [isLogin])

  const onCompleted = (loginUser: User) => {
    userVar(loginUser)
    setErrorMessage(null)
    history.push('/')
  }

  const onErrorLogin = (message: string) => {
    userVar(userInitialValue)
    if (message === 'User does not exist.') {
      setEmail('')
      setPassword('')
    } else {
      setPassword('')
    }
    setTimeout(() => {
      setErrorMessage(message)
    }, 600)
  }

  const onErrorRegister = (message: string) => {
    userVar(userInitialValue)
    if (message === 'User exists already.') {
      setEmail('')
      setPassword('')
      setConfirmPassword('')
    }
    setTimeout(() => {
      setErrorMessage(message)
    }, 600)
  }

  const submitHandler = async (event: any) => {
    event.preventDefault()
    if (isLogin) {
      if (email.trim().length === 0 || password.trim().length === 0) {
        return
      } else {
        login()
      }
    } else {
      if (
        email.trim().length === 0 ||
        password.trim().length === 0 ||
        confirmPassword.trim().length === 0
      ) {
        return
      } else if (password !== confirmPassword) {
        setTimeout(() => {
          setErrorMessage('Passwords do not match')
        }, 600)
        return
      } else {
        register()
      }
    }
  }

  const handleAuthChange = (auth: boolean) => {
    if (isLogin !== auth) {
      setIsLogin(auth)
      setErrorMessage('')
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
      errorMessage={errorMessage}
    />
  )
}

export {Auth}
