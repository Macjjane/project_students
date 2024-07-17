import { FacebookLogo, XLogo, InstagramLogo, HandHeart } from "@phosphor-icons/react";

export const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center bg-sky-700 text-white h-35 px-8 text-lg">
            <div className="mb-2">
                <h1 className="font-bold text-xl mt-4">Siga-nos</h1>
            </div>
            <div className="flex items-center gap-4">
                <FacebookLogo size={24} weight="fill" />
                <XLogo size={24} weight="fill" />
                <InstagramLogo size={24} weight="fill" />
                   
            </div>
            <div className="mt-4">
            <p>© Copyright Todos os direitos reservados</p> 
            <p className="flex gap-6 mt-2">Desenvolvido por muito <HandHeart size={32} weight="fill" />pela Maida Jane</p>
            </div>
            
        </footer>
    );
}
