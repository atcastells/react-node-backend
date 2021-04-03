import axios from 'axios'
import { AuthModel } from '../auth/auth.model'
import { useState } from 'react'

const Form = (props: any) => {
  const [login, setLogin] = useState('')

  const [password, setPassword] = useState('')

  const submit = (event: any) => {
    event.preventDefault()
    const authUser: AuthModel = {
      login,
      password,
    }

    const response = axios.post('http://159.65.81.40:3001/api/auth', authUser)

    response
      .then((res) => {
        props.responseFromServer(res)
      })
      .catch((err) => {
        props.responseFromServer(err.response)
      })
  }

  const handleLoginChange = (event: any) => {
    setLogin(event.target.value)
  }

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value)
  }

  return (
    <div className={'card'}>
      <form key={props.id} onSubmit={submit}>
        <div className={'card-content'}>
          <input
            value={login}
            className={'input'}
            type={'text'}
            name={'login'}
            key={'login'}
            placeholder={'Enter your login'}
            onChange={handleLoginChange}
          />
          <input
            value={password}
            className={'input'}
            type={'password'}
            name={'password'}
            key={'password'}
            placeholder={'Password'}
            onChange={handlePasswordChange}
          />
        </div>
        <div className={'card-footer'}>
          <div className={'card-footer-item'}>
            <button className={'button is-primary'} type={'submit'}>
              {props.submitText}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form

export interface FormTemplate {
  id: string
  label: string
  name: string
  type: 'text' | 'password'
}
