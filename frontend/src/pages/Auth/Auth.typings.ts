export interface ViewProps {
  isLogin: boolean
  email: string
  password: string
  confirmPassword: string
  modalClassName: string
  onAuthChange: (auth: boolean) => void
  onChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChangeConfirmPassowrd: (event: React.ChangeEvent<HTMLInputElement>) => void
  submitHandler: (event: any) => void
  errorMessage: string | null
}
