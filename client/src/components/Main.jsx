import React from 'react'

const Main = () => {
  return (
    <div className="main">
        <div className="mleft">
            <div className="mlogin">

                <h1>Welcome to NoteTaker</h1>
              <form action="/" method="post">
                <input type="text" placeholder='username' />
                <br />
                <input type="password" placeholder='password' />
                <p>Forgot Password</p>

                <br />
                <button>Sign In</button>
              </form>
            </div>
        </div>
        <div className="mright">

        </div>
    </div>
  )
}

export default Main