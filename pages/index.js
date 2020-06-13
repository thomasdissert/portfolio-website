import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Thomas Dissert</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="width-900 text-right font-mono">
        <div className="text-5xl font-extrabold">Thomas Dissert</div>
        <div className="text-2xl text-purple-800 uppercase mb-6">
          Full Stack Developer
        </div>

        <p className="text-2xl leading-normal mt-3 font-mono">
          Making the internet a safer place by creating a network security
          platform at{" "}
          <a className="text-purple-800" href="https://abusix.com">
            abusix
          </a>{" "}
          using a state of the art stack including{" "}
          <span className="border bg-gray-200 rounded shadow-xs px-1">
            React.js
          </span>
          ,{" "}
          <span className="border bg-gray-200 rounded shadow-xs px-1">
            Next.js
          </span>
          ,{" "}
          <span className="border bg-gray-200 rounded shadow-xs px-1">
            Gatsby.js
          </span>
          ,{" "}
          <span className="border bg-gray-200 rounded shadow-xs px-1">
            GraphQL
          </span>
        </p>

        <div className="grid">
          {/* <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>

      <footer>© 2020 Thomas Dissert.</footer>
    </div>
  );
}
