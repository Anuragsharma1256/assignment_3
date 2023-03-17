export function SignUp() {
    return (
        <>
              <label className='label' htmlFor="firstName">First Name</label>
              <input className='loginInput' type="text" name="firstName"/>

              <label className='label' htmlFor="lastName">Last Name</label>
              <input className='loginInput' type="text" name="lastName" />
              <label className='label' htmlFor="email">Email</label>
              <input className='loginInput' type="email" name="email" />

              <label className='label' htmlFor="password">Password</label>
              <input className='loginInput' type="password" name="password" />
            </>
    )
}