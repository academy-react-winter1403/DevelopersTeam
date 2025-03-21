import React from 'react'
import AuthInput from '../../common/auth-inputs'
import AuthPassInput from '../../common/auth-pass-input'
import AuthButton from '../../common/auth-button'

const UserInfo = ({text}) => {
  return (
    <div className='w-md mt-14 space-y-6'>
        <AuthInput inputLabel='ایمیل' placeholder='ایمیل خود را وارد کنید' />
        <AuthPassInput inputLabel={'رمزعبور'} placeholder={'رمزعبور خود را وارد کنید'} />
        <AuthButton text={text}  />
    </div>
  )
}

export default UserInfo