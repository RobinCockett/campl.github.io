export default function Home() {
  return (
    <main>
      <div className="md:px-48 h-screen my-32 xxl:px-80">
        <h1 className="mb-8">Installation</h1>
        <h2>Pre-prerequisites:</h2>
        <p className="mt-2">You need to have stack and alacritty terminal installed.</p>
        <h2 className="my-8">Installation Process:</h2>
        <h3>1. Download the installation script and run it:</h3>
        <div className="mt-4 p-8 inline-block bg-neutral-200 rounded overflow-x-scroll mb-8">
          <code>
            &gt; $ mkdir ~/.campl && cd ~/.campl && curl -LJO https://raw.githubusercontent.com/campl-ucalgary/campl/main/install && chmod +x install && ./install
          </code>
        </div>
        <h3>2. Add campl to your PATH variable:</h3>
        <div className="mt-4 p-8 inline-block bg-neutral-200 rounded overflow-x-scroll mb-8">
          <code>
            &gt; $ export PATH=&quot;$HOME/.campl/bin:$PATH&quot;
          </code>
        </div>
        <h2>Run Your Program: </h2>
        <div className="mt-4 p-8 inline-block bg-neutral-200 rounded overflow-x-scroll">
          <code>
            &gt; $ stack exec -- mpl --run YOUR_PROGRAM.mpl
          </code>
        </div>
      </div>
    </main>
  );
}
