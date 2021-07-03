import {useMutation} from '@apollo/client'
import React, {useState, useEffect, FC} from 'react'
import {useHistory} from 'react-router'
import {userInitialValue, userVar} from '../../apollo/reactivities/user'
import {LOGIN} from '../../apollo/mutations/login'
import {useDidMount} from '../../hooks'

import {View} from './Auth.view'

const Auth: FC = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [modalClassName, setModalClassName] = useState('Modal--visibilityX')
  const history = useHistory()
  const didMount = useDidMount()
  const [login] = useMutation(LOGIN, {
    variables: {email: email, password: password},
    onCompleted: ({loginUser}) => {
      userVar(loginUser)
      history.push('/')
    },
    onError: () => {
      userVar(userInitialValue)
    },
  })

  useEffect(() => {
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }, [isLogin])

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

  const submitHandler = async (event: any) => {
    event.preventDefault()
    if (isLogin) {
      if (email.trim().length === 0 || password.trim().length === 0) {
        console.log('error')
        return
      } else {
        login()
      }
    } else {
      return
    }
  }

  const handleAuthChange = (auth: boolean) => {
    if (isLogin !== auth) {
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
