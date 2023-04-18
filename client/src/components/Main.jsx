import React, {useState} from 'react'


const Main = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(e){
    e.preventDefault();
    const response = await fetch("/create",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password
      }),

    });
    const data = await response.json();
    console.log(data);
  }


  return (
    <div className="main">
        <div className="mleft">
            <div className="mlogin">

                <h1>Welcome to NoteTaker</h1>
              <form action="/" method="post" onSubmit={handleSubmit}>
                <input type="text" placeholder='username' value={username} onChange={(e)=> setUsername(e.target.value)} />
                <br />
                <input type="password" placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
                <p>Forgot Password</p>

                <br />
                <button type='submit'>Sign In</button>
              </form>
            </div>
        </div>
        <div className="mright">

        </div>
    </div>
  )
}

export default Main