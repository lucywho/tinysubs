import Header from "components/Header"
import "../styles/globals.css"
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }) {
    return (
        <SessionProvider session={pageProps.session}>
            <Header />
            <Component {...pageProps} />
        </SessionProvider>
    )
}

export default MyApp
