import { useParams } from "react-router-dom";
import { users } from "../data/users";
import { Header } from "../components/header";
import { useState, useEffect } from "react";

export const UserDetails = () => {
  const { index } = useParams();  
  const [user, setUser] = useState(null);

  useEffect(() => {
    const foundUser = users.find(e => e.linkUrl === index);
    setUser(foundUser);
  }, [index]);

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <img 
          src="/not-found.png" 
          alt="not-found" 
          className="h-[30rem] rounded-full animate-move animate-bounce" 
        />
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="container mx-auto mt-10">
        <div className="bg-white shadow-md rounded-md p-6">
          <h1 className="text-2xl font-bold mb-4">Detalhes do estudante:</h1>
          <h1 className="text-xl font-bold mb-4">{user.linkLabel}</h1>
          <span className="font-bold">Email:</span>
          <p>jsjsjsjsjs@gmail.com</p>
          <h2 className="text-2xl mt-5">Biografia</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur est esse sed excepturi
             doloremque cupiditate nulla harum enim culpa, saepe suscipit porro corrupti error reprehenderit
             molestiae odio eveniet non expedita?</p>
        </div>
      </div>
    </>
  );
};
