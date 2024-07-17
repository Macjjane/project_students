import { EnvelopeSimple, Phone, MapPin, XCircle } from "@phosphor-icons/react";
import { Header } from "../components/header";
import { useState } from "react";
import { Footer } from "../components/footer/footer";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [isHidden, setIsHidden] = useState(true);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  
  function handleMensagemChange(event) {
    setMensagem(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    setIsHidden(false);
  }

  function handleBoxClose() {
    setIsHidden(true);
    setName("");
    setEmail("");
    setMensagem("");
  }

  return (
    <>
      <Header />
      <div className="relative bg-sky-blue-100 rounded-md shadow shadow-blue-600 p-10 items-center mt-7 mx-auto flex flex-col justify-between w-91 max-w-4xl min-h-screen mb-9">
        <div className="mt-0">
          <h1 className="font-bold text-2xl text-gray-600">Fale connosco:</h1>
          <img src="/code.jpg" alt="code" className="h-96 w-full mt-4 rounded-md" />
  
          <div className="flex items-center mt-12">
            <MapPin size={50} />
            <div className="ml-4">
              <span className="font-bold text-xl text-gray-600">Localização:</span>
              <p className="text-gray-600">Av.Eduardo Mondlane n.30 </p>
            </div>
          </div>
          <div className="flex items-center mt-12">
            <EnvelopeSimple size={50} />
            <div className="ml-4">
              <span className="font-bold text-xl text-gray-600">Email:</span>
              <p className="text-gray-600">maidajane83@gmail</p>
            </div>
          </div>
          <div className="flex items-center mt-12">
            <Phone size={50} />
            <div className="ml-4">
              <span className="font-bold text-xl text-gray-600">Telefone:</span>
              <p className="text-gray-600">846994556/879879471</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div
            className={`bg-white p-10 rounded-lg shadow-2xl text-slate-800 relative ${
              isHidden ? "hidden" : "block"
            }`}
          >
            <XCircle
              size={24}
              weight="regular"
              className="absolute top-4 right-4 cursor-pointer"
              onClick={handleBoxClose}
            />
            <h1><b>Olá,</b> {name}</h1>
            <p className="mt-4"><b>Email:</b> {email}</p>
            <p className="mt-4"><b>Mensagem:</b>{mensagem}</p>
            <p className="mt-4">Responderemos a sua mensagem em breve!</p>
          </div>
  
          <div className="flex mt-5 w-full">
            <form className="w-[50rem]" onSubmit={handleFormSubmit}>
              <div className="m-4">
                <label htmlFor="name" className="block">Nome</label>
                <input 
                  type="text" 
                  className="w-[50rem] p-2 border border-gray-300 rounded-md" 
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <div className="m-4">
                <label htmlFor="email" className="block">Email</label>
                <input 
                  type="email" 
                  className="w-[50rem] p-2 border border-gray-300 rounded-md" 
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="m-4">
                <label htmlFor="mensagem" className="block">Mensagem</label>
                <textarea 
                  id="mensagem" 
                  className="w-[50rem] h-36 p-2 border border-gray-300 rounded-md"
                  value={mensagem}
                  onChange={handleMensagemChange}
                ></textarea>
              </div>
              <button className="bg-white text-green-600 border border-green-600 px-7 py-2 rounded-md hover:bg-green-600 hover:text-white transition-colors duration-300 ml-5 ">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
     <Footer />
    </>
  );
};
