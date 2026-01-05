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

                    <div className="root-layout-bg min-h-[80vh] flex items-center justify-left px-6 pt-24 ">
                        <UpperContent />
                        
                    </div>
                    <main className="relative ">
                        <div className="max-w-[90%] mx-auto pt-12 z-10 bg-[#f7f8f2] px-6 pb-20 rounded-t-[3rem] md:-mt-12 shadow-2xl">
                            <Outlet />
                        </div>

                        <footer className="bg-green-900 text-white text-center py-4 mt-12">
                            &copy; {new Date().getFullYear()} Saapmahiiite. Made for educational purposes. @Dnyan_dev
                        </footer>
                    </main>
                </div>
           </div>
        </>
    )
}