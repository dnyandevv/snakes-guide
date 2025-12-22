import { Outlet } from "react-router";
import UpperContent from "./UpperContent";
import MainNav from "./MainNav";

export default function RootLayout() {
    return (
        <>
           <div>
                <div
                    className="relative min-h-screen"
                >
                    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
                        <MainNav />
                    </header>

                    <div className="root-layout-bg min-h-[80vh] flex items-center justify-center">
                        <UpperContent /> 
                    </div>
                    <main className="relative z-10 bg-[#f7f8f2] px-6 pb-20 rounded-t-[3rem] -mt-32 shadow-2xl">
                        <div className="max-w-6xl mx-auto pt-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                The Big Four
                            </h2>
                            <Outlet />
                        </div>
                    </main>
                </div>
           </div>
        </>
    )
}