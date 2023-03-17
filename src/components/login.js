import '../CSS/login.css'
export function LogIn() {

    return(
        <>
              <label className='label' htmlFor="firstName">Your Email</label>
              <input className='loginInput' type="email" name="firstName"/>

              <label className='label' htmlFor="lastName">Password</label>
              <input className='loginInput' type="password" name="lastName" />

              <div className="rem-for">
        <div className="checkBox">
          <input type="checkbox" name="remember" />
          <label htmlFor="remember" style={{fontSize:10}}>Remember Me</label>
        </div>
        <span style={{color:'gray', fontSize:12, cursor:'pointer'}}>forgot password?</span>
        </div>
            </>
    )
}