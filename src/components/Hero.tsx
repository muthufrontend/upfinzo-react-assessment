import content from '../data/siteContent.json';

const Hero = () => {
  const c = content.hero;
  return (
    <section className="container relative z-10 py-20 md:py-32 ">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-block mb-6 px-4 py-2 bg-purple-900/20 border border-purple-500/20 rounded-full text-purple-300 text-sm">
          {c.kicker}
        </div>

        <h1 data-animate="up" className="text-4xl md:text-6xl mb-6 leading-tight">
            {c.title}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> {c.title2}</span><br></br>
            {c.title3}
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
          {c.subtitle}
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <button className="border-purple-500 border bg-gradient-to-r from-[#8C01FA] to-[#000000] hover:opacity-90 transition text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50">
            {c.primaryCta}
          </button>
          <button className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-purple-500 transition">
            {c.secondaryCta}
          </button>
        </div>

        <div className="flex flex-wrap flex-col justify-center items-center gap-4 md:gap-6 text-gray-500 text-sm">
        <div className="font-semibold text-cyan-400">
            POWERFUL TOOLS AND INTEGRATIONS FOR COMPANIES AROUND THE WORLD
        </div>
        <div className="flex flex-wrap gap-8 md:gap-12 justify-center">
            {['Frame1','Frame2','Frame3','Frame4','Frame5','Frame6','Frame7'].map((frame, i) => (
                <a
                key={i}
                href="#"
                className="transition-transform duration-300 hover:scale-110 hover:opacity-90 hover:drop-shadow-[0_0_10px_rgba(55,204,247,0.6)]"
                >
                <img
                    src={`assets/${frame}.svg`}
                    alt={`Logo ${i+1}`}
                    className="w-32 h-32"
                />
                </a>
            ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;