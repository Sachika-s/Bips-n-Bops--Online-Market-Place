
import { Footer } from "./footer";
import { NavBar } from "./navbar";


interface Props{
    children: React.ReactNode;
};
//flex-1  --> ensures footer is to the bottom of page and children take as much space as they can
const Layout = ({ children}: Props) => {
    return (
        <div className = "flex flex-col min-h-screen">
            <NavBar/>
            <div className="flex-1 bg-[#F4F4F0]"> 
            
                {children}
            </div>
            <Footer/>
        </div>

        );


}
export default Layout;