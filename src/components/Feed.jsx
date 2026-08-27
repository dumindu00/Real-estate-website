import { FiArrowUpRight } from "react-icons/fi";


function Feed() {
  
  const news = [
        {
            id: 1,
            image: "/images/news1.jpg",
            category: "Real Estate",
            date: "August 25, 2026",
            title: "Sri Lanka Property Market Shows Strong Growth",
            description:
                "Discover the latest developments and trends shaping the Sri Lankan real estate market.",
        },
        {
            id: 2,
            image: "/images/news2.jpg",
            category: "Investment",
            date: "August 20, 2026",
            title: "Why Property Investment Remains a Strong Opportunity",
            description:
                "Explore the key factors investors should consider when looking at property opportunities.",
        },
        {
            id: 3,
            image: "/images/news3.jpg",
            category: "Market Trends",
            date: "August 15, 2026",
            title: "New Trends Shaping Modern Homes",
            description:
                "From smart homes to sustainable designs, discover what's changing the way people live.",
        },
    ];





  return (
    <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

                  <div>
                    <p className="text-blue-600 font-semibold uppercase tracking-widest">
                          DreamZone Feed
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
                          Latest Real Estate News
                    </h2>

                    <p className="text-gray-500 mt-4 max-w-2xl">
                          Stay updated with the latest property news, market
                            trends, investment opportunities, and insights.
                    </p>
                  </div>

                  <button className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition">
                      View All News
                      <FiArrowUpRight size={20} />
                  </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-14">

                  {news.map((item) => (
                    
                    <article
                      key={item.id}
                      className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition duration-300"
                    >
                      <div className="h-60 overflow-hidden">

                          <img 
                              src={item.image}
                              alt={item.title} 
                              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                          />
                      </div>


                      <div className="p-6">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-semibold text-blue-600">
                                      {item.category}
                                  </span>

                                  <span className="text-sm text-gray-400">
                                      {item.date}
                                  </span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 leading-sung">
                                    {item.title}
                                </h3>

                                <p className="text-green-500 mt-3 leading-relaxed">
                                    {item.description}
                                </p>

                                <button className="mt-6 flex items-center gap-2 font-semibold text-gray-900 group-hover:text-blue-600 transition">
                                    Read More
                                    <FiArrowUpRight
                                        size={18}
                                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                                    />
                                </button>
                      </div>

                    </article>
                  ))}

            </div>
        </div>
    </section>
  )
}

export default Feed