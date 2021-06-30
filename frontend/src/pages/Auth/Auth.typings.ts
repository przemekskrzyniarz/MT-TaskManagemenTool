export interface ViewProps {
  isLogin: boolean
  email: string
  password: string
  confirmPassword: string
  modalClassName: string
  onAuthChange: (auth: boolean) => void
  onChangeEmail: (event: any) => void
  onChangePassword: (event: any) => void
  onChangeConfirmPassowrd: (event: any) => void
  submitHandler: (event: any) => void
}
