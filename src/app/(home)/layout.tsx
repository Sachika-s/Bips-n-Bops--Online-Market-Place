
import { NavBar } from "./navbar";

interface Props{
    children: React.ReactNode;
};

const Layout = ({ children}: Props) => {
    return (
        <div className = "flex flex=col min-h-screen">
            <NavBar/>
            {children}
        </div>

        );


}
export default Layout;