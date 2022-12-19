import Header from "./hearder"
import Footer from "./footer"
const Layout = ({children}) => {
    return (
        <div className="content">
            <Header/>
              {children}
            <Footer />
        </div>
    )
}
export default Layout