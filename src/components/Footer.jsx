const Footer = () => {
  return (
    <section className="mt-5 w-full bg-zinc-100 h-full">
      <div className="bg-slate-900 w-full flex flex-col items-center justify-center py-10">
        <div className="flex gap-2 items-center text-white">
          <h1>About</h1>
          <h1>FAQs</h1>
          <h1>News</h1>
          <h1>Careers</h1>
          <h1>Contact</h1>
        </div>
        <div className="mt-2 text-white text-sm font-semibold tracking-wide">
          <h1>&copy;Nikko Mallari | All rights reserved</h1>
        </div>
      </div>
    </section>
  );
};

export default Footer;
