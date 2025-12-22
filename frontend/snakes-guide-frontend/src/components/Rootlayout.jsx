import { Outlet } from "react-router";
import UpperContent from "./UpperContent";
import MainNav from "./MainNav";

export default function RootLayout() {
    return (
        <>
            <div>
                <MainNav />
            </div>
            <div className="root-layout-bg ">
                <MainNav />
                <div>
                    <UpperContent/>
                </div>
            </div>
            <div>
                <h1>This is for the cards</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Esse distinctio perferendis itaque repudiandae voluptatibus nostrum saepe tempora cupiditate 
                     error hic totam vel officiis eos, in labore? Iste hic obcaecati voluptas!
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Esse distinctio perferendis itaque repudiandae voluptatibus nostrum saepe tempora cupiditate 
                     error hic totam vel officiis eos, in labore? Iste hic obcaecati voluptas!
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Esse distinctio perferendis itaque repudiandae voluptatibus nostrum saepe tempora cupiditate 
                     error hic totam vel officiis eos, in labore? Iste hic obcaecati voluptas!
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Esse distinctio perferendis itaque repudiandae voluptatibus nostrum saepe tempora cupiditate 
                     error hic totam vel officiis eos, in labore? Iste hic obcaecati voluptas!
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Esse distinctio perferendis itaque repudiandae voluptatibus nostrum saepe tempora cupiditate 
                     error hic totam vel officiis eos, in labore? Iste hic obcaecati voluptas!
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Esse distinctio perferendis itaque repudiandae voluptatibus nostrum saepe tempora cupiditate 
                     error hic totam vel officiis eos, in labore? Iste hic obcaecati voluptas!
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Esse distinctio perferendis itaque repudiandae voluptatibus nostrum saepe tempora cupiditate 
                     error hic totam vel officiis eos, in labore? Iste hic obcaecati voluptas!
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Esse distinctio perferendis itaque repudiandae voluptatibus nostrum saepe tempora cupiditate 
                     error hic totam vel officiis eos, in labore? Iste hic obcaecati voluptas!
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Esse distinctio perferendis itaque repudiandae voluptatibus nostrum saepe tempora cupiditate 
                     error hic totam vel officiis eos, in labore? Iste hic obcaecati voluptas!s
                </p>
            </div>
        </>
    )
}