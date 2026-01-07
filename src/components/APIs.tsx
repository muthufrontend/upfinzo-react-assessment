const APIs = () => {
  return (
    <section className="relative z-10 py-16 md:pb-48 bg-[url('assets/StartBuilding_001_BG.png')] bg-cover bg-center">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-6xl mb-8">Build Faster with Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Powerful API's</span></h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Pre-built solutions, real-time APIs and flexible integrations to launch faster
        </p>

        <button className="border-purple-500 border bg-gradient-to-r from-[#8C01FA] to-[#000000] hover:opacity-90 transition text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50">
          Explore APIs
        </button>
      </div>
    </section>
  );
};

export default APIs;