const Features = () => {

  const features = [
    {
      title: 'AI Banking',
      description:
        'Smart, automated digital banking for businesses. Instant onboarding, intelligent insights, and real-time account operations.',
      stat: '3,969',
      label: 'TRANSACTIONS PER SECOND',
    },
    {
      title: 'Payouts',
      description:
        'Bulk, automated payouts built for high-volume businesses. Reliable, trackable, and lightning-fast disbursements.',
      stat: '163,077,581,394',
      label: 'TOTAL TRANSACTIONS',
    },
    {
      title: 'Payments',
      description:
        'Fast, secure, and scalable payment infrastructure. Send and receive money globally with ease.',
      stat: '1,675',
      label: 'VALIDATOR NODES',
    },
    {
      title: 'Merchant Onboarding',
      description:
        'Frictionless onboarding for merchants at any scale. Automated KYC, verification, and risk assessments—done in minutes.',
      stat: '100%',
      label: 'ON-TIME MERCHANT ONBOARD',
    },
  ];

  return (
    <section className="relative z-10 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <section className="bg-[#0f0f0f] text-white py-16 px-4 md:px-12">
          <div className="max-w-7xl mx-auto flex">
            <div className="">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Intelligent Financial Suite
              </h2>
              <p className="text-gray-400 mb-12 text-lg">
                Tools That Accelerate Every Step Of Your Financial Workflow.
              </p>
            </div>
            
          </div>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 text-left">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 shadow-md flex flex-col justify-between h-full border-left"
                >
                  <h3 className="text-[28px] font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-xl leading-[27px]">{feature.description}</p>
                  <div className="text-3xl font-bold text-white">{feature.stat}</div>
                  <div className="text-[16px] text-gray-500 mt-1 uppercase tracking-wide">
                    {feature.label}
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Features;