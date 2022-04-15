import Head from 'next/head';
import Link from 'next/link';

import Footer from './../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <div className="container">
        <Head>
          <title>Pet Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <h1>Michael Buranov</h1>
          <h2>Pets next.js projects</h2>
          <div className="goToPage">
            <Link href="todoList">TO-DO APP</Link>
          </div>
        </main>

        <style jsx>{`
          .container {
            padding: 20px;
          }
          .goToPage {
            display: flex;
            align-items: center;
            height: 32px;
            background-color: lightgray;
            border-radius: 5px;
            padding: 15px 20px;
          }
        `}</style>

      </div>
      <Footer />
    </>
  )
}
