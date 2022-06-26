import { Logo } from "./Logo";

export function Header(){
    return(

        <header className="w-full py-1 flex items-center justify-center bg-blue-900 border-b border-blue-600">
            <Logo />
        </header>
    
    )
}