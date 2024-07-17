import { SmileySad } from "@phosphor-icons/react"

export const ErrorPage = () => {

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