function News() {
  return (
    <div className="flex h-[280px] items-center justify-center bg-darkGray">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-4xl font-bold text-white">Newsletter</h2>
          <form className="flex flex-col gap-4 sm:flex-row">
            <input placeholder="you@email.com" className="px-4 text-xl" />
            <button className="bg-white px-2 text-xl">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default News;
