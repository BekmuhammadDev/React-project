import { useAuth } from "@/service/auth";
import { useState } from "react";
import ScreenPhone from "../../assets/img/Screen.png"
import { Header, Footer } from '@components/layouts';
import "./style.scss"

const index = () => {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")


    return(
        <>
        <Header/>
        <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex  items-center justify-center px-6 gap-[155px] mx-auto">

            <div>
                <img src={ScreenPhone} alt="#" />
            </div>
            
            <div className="w-[431px]">
                <div className="p-6 space-y-4 ">

                    <h1 className="text-[40px] font-bold text-[#2091F9] text-center">
                        Login
                    </h1>
                    <p className="text-base font-medium text-[#374754] text-center">Most calendars are designed for teams. <br />
                    Slate is designed for freelancers</p>

                    <form onSubmit={(e)=>{
                        e.preventDefault();
                        useAuth({email, password});
                    }} className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[394px] h-[54px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <input 
                            type="password" 
                            name="password" id="password" 
                            placeholder="••••••••" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[394px] h-[54px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                             value={password}
                             onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="w-[400px] h-[64px] text-white bg-indigo-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Connexion</button>
                        <p className="text-base font-medium text-center text-[#252B42] dark:text-gray-400">
                            Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
            
        </div>
      </section>
      <Footer/>
      </>
    );
};

export default index;

