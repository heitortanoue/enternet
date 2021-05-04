import Header from './header'
import Footer from './footer'

export default function Layout ({ children }) {
    return (
        <>
        <Header />
        <div className="py-16 flex-content">{ children }</div>
        <Footer />
        </>
    )
}