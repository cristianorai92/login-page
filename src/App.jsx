import { useState } from "react"
import { toast } from "react-toastify"

export default function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function login(event) {
    event.preventDefault()

    if(email === "" || password === "" ) {
    toast.error("Email e senha são obrigatórios")
    return

    }

    if(password.length <8){
      toast.error("A senha deve ter no mínimo 8 caracteres!")
    return
    }

    toast.success("Login realizado com sucesso")

  }

  return (
    <div className="w-full h-screen bg-[url('../public/bg-netflix.png')]">
      <div className="w-full h-full bg-black/50 flex items-center justify-center relative">
        <img src="/logo-netflix.svg" alt="" width="200px" className='absolute top-3 left-[300px]'/>
          <div className="w-[500px] h-auto min-h-[400px] bg-black/70 py-[30px] px-[60px]">
           <h1 className="font-bold text-[30px]">Sign In</h1>

           <form 
            onSubmit={login}
           className="flex flex-col gap-[15px] mt-[20px]">
             <input
               onChange={
                  (event) => setEmail(event.target.value)
                }
              type="email"
              placeholder="Email address"
              className="w-full h-[50px] bg-[#2727276a] border border-gray-400 pl-4"
              />
                
              <input
                onChange={
                  (event) => setPassword(event.target.value)
                }
                type="password"
                placeholder="password"
                className="w-full h-[50px] bg-[#2727276a] border border-gray-400 pl-4"
              />

             <button 
             type="submit" 
             className="w-full h-[50px] bg-[#e50816]
              rounded-sn border-none font-bold">
             Sign in
             </button>

          </form>
        </div>
      </div>
    </div>
   
  )
}