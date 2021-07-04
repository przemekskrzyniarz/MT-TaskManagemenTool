import * as React from 'react'

import {Helmet} from 'react-helmet'

import {Form, Input, Label, Button} from '../../ui/Atoms'
import {Modal} from '../../ui/Molecules'

import {ViewProps} from './Auth.typings'

const View: React.FunctionComponent<ViewProps> = ({
  onAuthChange,
  onChangeEmail,
  onChangePassword,
  onChangeConfirmPassowrd,
  submitHandler,
  email,
  password,
  confirmPassword,
  isLogin,
  modalClassName,
  errorMessage,
}) => {
  return (
    <>
      <Helmet title="Auth" />
      <div className="Auth">
        <Modal className={modalClassName}>
          <div className="Auth__button-box">
            <Button
              onClick={() => onAuthChange(true)}
              disabled={modalClassName === 'Modal--hideX' || false}
              className={[
                'Button__auth',
                isLogin ? '' : 'Button__auth--inactive',
              ].join(' ')}
            >
              Sign in
            </Button>
            <Button
              onClick={() => onAuthChange(false)}
              disabled={modalClassName === 'Modal--hideY' || false}
              className={[
                'Button__auth',
                isLogin ? 'Button__auth--inactive' : '',
              ].join(' ')}
            >
              Sign up
            </Button>
          </div>
          <Form onSubmit={submitHandler}>
            <Input
              type="text"
              text="Email"
              onChange={onChangeEmail}
              value={email}
            />
            <Label text="Email" />
            <Input
              type="password"
              text="Password"
              onChange={onChangePassword}
              value={password}
            />
            <Label text="Password" />
            {(modalClassName === 'Modal--visibilityY' ||
              modalClassName === 'Modal--hideY') && (
              <>
                <Input
                  type="password"
                  text="Confirm Password"
                  onChange={onChangeConfirmPassowrd}
                  value={confirmPassword}
                />
                <Label text="Confirm Password" />
              </>
            )}
            {errorMessage && (
              <Label text={errorMessage} className="Label--error-message" />
            )}
            <Button>
              <span className="Button__visible">Submit</span>
              <span className="Button__invisible">
                {isLogin ? 'Login' : 'Register'}
              </span>
            </Button>
          </Form>
        </Modal>
      </div>
    </>
  )
}

export {View}
