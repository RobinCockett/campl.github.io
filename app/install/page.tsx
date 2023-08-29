export default function Home() {
  return (
    <main>
      <div className="md:px-48 h-screen my-32 xxl:px-80">
        <h1 className="mb-8">Installation</h1>
        <h2>Pre-Requistics:</h2>
        <p className="mt-2">You need to have haskell and stack installed.</p>
        <h2 className="mt-8">Installation Process:</h2>
        <div className="mt-4 p-8 inline-block bg-neutral-200 rounded">
          <code>
            &gt; $ git clone https://github.com/campl-ucalgary/campl.git
            <br />
            &gt; $ cd campl
            <br />
            &gt; $ make
          </code>
        </div>
      </div>
    </main>
  );
}
