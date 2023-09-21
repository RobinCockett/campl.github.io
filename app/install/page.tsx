export default function Home() {
  return (
    <main>
      <div className="min-h-screen my-32 lg:px-48 md:px-32 sm:px-20 px-10 xxl:px-80">
        <h1 className="mb-8">Installation</h1>
        <h2>Prerequisites:</h2>
        <p className="my-2">
          For installing CaMPL, you need to have a unix based operating system with stack and alacritty terminal
          installed.
        </p>
        <p>
          {" "}
          Stack is a program for developing and managing Haskell projects. You
          can learn more about it{" "}
          <a
            href="https://docs.haskellstack.org/en/stable/"
            target="_blank"
            className="font-bold inline text-green"
          >
            here.
          </a>
          <br />
          And Alacritty is a terminal emulator that CaMPL uses it for concurrent
          interactions with users. You can learn more about Alacritty {" "}
          <a
            href="https://alacritty.org/"
            target="_blank"
            className="font-bold inline text-green"
          >
            here.
          </a>
        </p>

        <h2 className="my-8">Installation Process:</h2>
        <h3>1. Download the installation script and run it by running the command below in your terminal:</h3>
        <div className="mt-4 p-8 inline-block bg-neutral-200 rounded overflow-x-scroll mb-8">
          <code>
            &gt; $ mkdir ~/.campl && cd ~/.campl && curl -LJO
            https://raw.githubusercontent.com/campl-ucalgary/campl/main/install
            && chmod +x install && ./install
          </code>
        </div>
        <h3>2. Add campl to your PATH variable:</h3>
        <div className="mt-4 p-8 inline-block bg-neutral-200 rounded overflow-x-scroll mb-8">
          <code>&gt; $ export PATH=&quot;$HOME/.campl/bin:$PATH&quot;</code>
        </div>
        <h2>Run Your Program: </h2>
        <div className="mt-4 p-8 inline-block bg-neutral-200 rounded overflow-x-scroll">
          <code>&gt; $ stack exec -- mpl --run YOUR_PROGRAM.mpl</code>
        </div>
        <p>You can also creat an alias:</p>
        <div className="mt-4 p-8 inline-block bg-neutral-200 rounded overflow-x-scroll">
          <code>&gt; $ alias campl=&lsquo;stack exec -- mpl --run&rsquo; </code>
        </div>
        <p>and then run your program using:</p>
        <div className="mt-4 p-8 inline-block bg-neutral-200 rounded overflow-x-scroll">
          <code>&gt; $ campl YOUR_PROGRAM.mpl</code>
        </div>
      </div>
    </main>
  );
}
