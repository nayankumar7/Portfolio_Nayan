import React from 'react'

const Donate = () => {
  return (
    <div>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Donation Modal</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Rufina:wght@700&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n        .font-rufina {\n            font-family: 'Rufina', serif;\n        }\n        .font-poppins {\n            font-family: 'Poppins', sans-serif;\n        }\n    "
          }}
        />
        {/* Full-screen Donation Modal */}
        <div className="fixed inset-0 bg-white z-40 overflow-y-auto pt-20">
          {/* Hero Section */}
          <section className="bg-[#C2EFD4] min-h-[50vh] flex items-center">
            <div className="container mx-auto px-6 py-12 lg:py-24">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-1/2 mb-12 lg:mb-0">
                  <h1 className="text-[#224f34] text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold font-rufina leading-tight mb-6">
                    Your Support Creates Brighter Futures!
                  </h1>
                  <p className="text-[#267d49] text-xl lg:text-2xl font-medium font-poppins leading-relaxed mb-8">
                    Every donation helps provide education, shelter, and hope to
                    children in need. Join us in making a lasting difference.
                  </p>
                  <button className="px-8 py-4 text-white text-lg font-medium font-poppins uppercase bg-[#224e34] rounded-[3px] shadow-lg hover:bg-[#1a3a27] transition-colors">
                    Learn About Our Impact
                  </button>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <img
                    className="w-full max-w-xl rounded-lg shadow-xl"
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Children benefiting from donations"
                  />
                </div>
              </div>
            </div>
          </section>
          {/* Donation Form Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                  Make a Donation
                </h2>
                <form className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Left Column - Donation Info */}
                  <div>
                    <div className="mb-8">
                      <label className="block text-gray-700 font-medium mb-4 text-xl">
                        Donation Amount
                      </label>
                      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-6">
                        <button
                          type="button"
                          className="py-4 rounded-md text-lg font-medium transition-colors bg-gray-100 text-gray-800 hover:bg-gray-200"
                        >
                          $10
                        </button>
                        <button
                          type="button"
                          className="py-4 rounded-md text-lg font-medium transition-colors bg-gray-100 text-gray-800 hover:bg-gray-200"
                        >
                          $25
                        </button>
                        <button
                          type="button"
                          className="py-4 rounded-md text-lg font-medium transition-colors bg-emerald-600 text-white"
                        >
                          $50
                        </button>
                        <button
                          type="button"
                          className="py-4 rounded-md text-lg font-medium transition-colors bg-gray-100 text-gray-800 hover:bg-gray-200"
                        >
                          $100
                        </button>
                        <button
                          type="button"
                          className="py-4 rounded-md text-lg font-medium transition-colors bg-gray-100 text-gray-800 hover:bg-gray-200"
                        >
                          $250
                        </button>
                      </div>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                          $
                        </span>
                        <input
                          type="number"
                          defaultValue={50}
                          placeholder="Other amount"
                          className="w-full pl-14 pr-6 py-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-xl"
                          required=""
                        />
                      </div>
                    </div>
                  </div>
                  {/* Right Column - Payment Info */}
                  <div>
                    <div className="mb-8">
                      <label className="block text-gray-700 font-medium mb-4 text-xl">
                        Payment Method
                      </label>
                      <div className="space-y-4">
                        <label className="flex items-center space-x-4 p-4 border-2 border-gray-200 rounded-lg hover:border-emerald-400 transition-colors cursor-pointer">
                          <input
                            type="radio"
                            name="paymentMethod"
                            defaultValue="card"
                            defaultChecked=""
                            className="h-6 w-6 text-emerald-600 focus:ring-emerald-500"
                          />
                          <span className="flex items-center text-xl">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="mr-3"
                            >
                              <rect
                                x={1}
                                y={4}
                                width={22}
                                height={16}
                                rx={2}
                                ry={2}
                              />
                              <line x1={1} y1={10} x2={23} y2={10} />
                            </svg>
                            Credit/Debit Card
                          </span>
                        </label>
                        <label className="flex items-center space-x-4 p-4 border-2 border-gray-200 rounded-lg hover:border-emerald-400 transition-colors cursor-pointer">
                          <input
                            type="radio"
                            name="paymentMethod"
                            defaultValue="mobile"
                            className="h-6 w-6 text-emerald-600 focus:ring-emerald-500"
                          />
                          <span className="text-xl">Mobile Money</span>
                        </label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-emerald-600 text-white py-5 px-8 rounded-lg hover:bg-emerald-700 transition-colors font-bold text-xl flex items-center justify-center gap-4 shadow-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={28}
                        height={28}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
                        <path d="m18 15-2-2" />
                        <path d="m15 18-2-2" />
                      </svg>
                      Complete Donation
                    </button>
                    <p className="text-gray-500 mt-6 text-center text-lg">
                      Your donation is secure and tax-deductible.
                      <br />
                      We respect your privacy and never share your information.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </section>
          {/* Footer Section */}
          <footer className="bg-gray-50 py-8">
            <div className="container mx-auto px-6 text-center">
              <p className="text-gray-600">
                Orthodox Rwanda is a registered 501(c)(3) nonprofit organization.
                <br />
                All donations are tax-deductible to the fullest extent allowed by law.
              </p>
            </div>
          </footer>
        </div>
      </>

    </div>
  )
}

export default Donate