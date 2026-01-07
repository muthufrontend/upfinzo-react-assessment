import content from '../data/siteContent.json';

const CTA = () => {
  return (
    <section className="relative z-10 py-20 md:py-32 text-center">
      <div className="relative z-10 py-16 md:py-24 bg-[url('Abstract.png')] bg-contain bg-center bg-no-repeat">
        <h2 className="text-4xl md:text-[96px] mb-2">
          The future of your
        </h2>
        <h2 className="text-4xl md:text-[96px] mb-12">
          industry <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">starts here</span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-center px-10">
          <button className="border-purple-500 border bg-gradient-to-r from-[#8C01FA] to-[#000000] hover:opacity-90 transition text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50">
            {content.cta.button}
        </button>
        <button className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-purple-500 transition">
          Book a demo
        </button>
      </div>
    </section>
  );
};

export default CTA;