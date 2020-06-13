import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Thomas Dissert</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="width-900 text-right font-mono mx-4">
        <div className="text-3xl sm:text-5xl sm:text-3xl font-extrabold">
          Thomas Dissert
        </div>
        <div className="text-xl sm:text-2xl text-purple-800 uppercase mb-6">
          Full Stack Developer
        </div>

        <p className="text-xl sm:text-2xl leading-normal mt-3 font-mono">
          Making the internet a safer place by creating a network security
          platform at{" "}
          <a className="text-purple-800" href="https://abusix.com">
            abusix
          </a>{" "}
          using a state of the art stack including{" "}
          <span className="font-semibold border bg-gray-200 rounded shadow-xs px-1">
            React.js
          </span>
          ,{" "}
          <span className="font-semibold border bg-gray-200 rounded shadow-xs px-1">
            Next.js
          </span>
          ,{" "}
          <span className="font-semibold border bg-gray-200 rounded shadow-xs px-1">
            Gatsby.js
          </span>{" "}
          and{" "}
          <span className="font-semibold border bg-gray-200 rounded shadow-xs px-1">
            GraphQL
          </span>
        </p>
        {/* <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66 92.83C906.67 72 823.78 31 743.84 14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84 11.73-114 31.07-172 41.86A600.21 600.21 0 010 27.35V120h1200V95.8c-67.81 23.12-144.29 15.51-214.34-2.97z"
              fill={"black"}
            />
          </svg>
        </div> */}
      </main>

      <footer>© 2020 Thomas Dissert.</footer>
    </div>
  );
}
