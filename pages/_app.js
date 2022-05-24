import '../styles/globals.css'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" type="image/ico" href="/favicon.ico"></link>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                ></link>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                ></link>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                ></link>
                <title>Tutoring for All</title>
                <meta name="author" content="Dennis Eum"></meta>
                <meta
                    name="description"
                    content="Tutoring for All is a student-run non-profit that provides FREE tutoring to K-12th grade students across 16 subjects."
                ></meta>
            </Head>
            <div className="flex flex-col min-h-screen">
                <Nav />
                <main className="grow mt-20">
                    <Component {...pageProps} />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default MyApp
