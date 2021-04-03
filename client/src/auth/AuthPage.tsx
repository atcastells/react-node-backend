import React, { useState } from 'react'
import './Auth.css'
import Form from '../form/Form'

function AuthPage() {
  const submitText = 'Login'
  const maxLogLenght = 5
  const [authData, setAuthData] = useState<AuthData[]>([])
  const handleServerData = (response: any) => {
    const date = new Date()
    const data: AuthData = {
      login: response.data.login,
      password: response.data.password,
      status: response.status,
      date: `${date.getFullYear()}/${date.getMonth()}/${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
    }
    setAuthData((arr) => [data, ...arr.slice(0, maxLogLenght)])
    console.log(response)
  }

  return (
    <div>
      <div className={'container'}>
        <Form id={'login-form'} submitText={submitText} responseFromServer={handleServerData} />
      </div>
      <div className={'container'}>
        <div className={'card server-data'}>
          {authData.map((data, i) => {
            return (
              <div key={i}>
                <LogItem
                  status={data.status}
                  login={data.login}
                  password={data.password}
                  datetime={data.date}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AuthPage

interface AuthData {
  date: string
  status: number
  login: string
  password: string
}

function LogItem(props: any) {
  return (
    <div className={'info-row'}>
      <span>{props.datetime}</span>
      <span>{props.status}</span>
      <span>{props.login}</span>
      <span>{props.password}</span>
    </div>
  )
}
