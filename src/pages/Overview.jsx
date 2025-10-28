import React from 'react'
import { Link } from 'react-router-dom'

function Overview() {
  const tours = [
    {
      id: 1,
      name: "The Forest Hiker",
      difficulty: "Easy 5-day tour",
      description: "Breathtaking hike through the Canadian Banff National Park",
      location: "Banff, Canada",
      date: "April 2021",
      stops: "3 stops",
      people: "25 people",
      price: 297,
      rating: 4.9,
      reviews: 21,
      image: "./img/tour-1-cover.jpg"
    },
    {
      id: 2,
      name: "The Sea Explorer",
      difficulty: "Medium-difficult 7-day tour",
      description: "Exploring the jaw-dropping US east coast by foot and by boat",
      location: "Oregon, US",
      date: "June 2021",
      stops: "4 stops",
      people: "15 people",
      price: 497,
      rating: 4.8,
      reviews: 12,
      image: "./img/tour-2-cover.jpg"
    },
    {
      id: 3,
      name: "The Snow Adventurer",
      difficulty: "Difficult 3-day tour",
      description: "Exciting adventure in the snow with snowboarding and skiing",
      location: "Aspen, USA",
      date: "January 2022",
      stops: "2 stops",
      people: "10 people",
      price: 697,
      rating: 4.9,
      reviews: 7,
      image: "./img/tour-3-cover.jpg"
    },
    {
      id: 4,
      name: "The City Wanderer",
      difficulty: "Easy 7-day tour",
      description: "Living the life of Wanderlust in the US' most beatiful cities",
      location: "NYC, USA",
      date: "March 2021",
      stops: "3 stops",
      people: "20 people",
      price: 997,
      rating: 4.8,
      reviews: 31,
      image: "./img/tour-4-cover.jpg"
    },
    {
      id: 5,
      name: "The Park Camper",
      difficulty: "Medium-Difficult 10-day tour",
      description: "Breathing in Nature in America's most spectacular National Parks",
      location: "Las Vegas, USA",
      date: "August 2021",
      stops: "4 stops",
      people: "15 people",
      price: 1497,
      rating: 4.9,
      reviews: 19,
      image: "./img/tour-5-cover.jpg"
    },
    {
      id: 6,
      name: "The Sports Lover",
      difficulty: "Difficult 14-day tour",
      description: "Surfing, skating, parajumping, rock climbing and more, all in one tour",
      location: "California, USA",
      date: "July 2021",
      stops: "5 stops",
      people: "8 people",
      price: 1997,
      rating: 4.7,
      reviews: 23,
      image: "./img/tour-6-cover.jpg"
    }
  ]

  const TourCard = ({ tour }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        {/* Card Header */}
        <div className="card__header">
          {/* Card Picture */}
          <div className="relative h-56 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/80 to-green-600/80 z-10" style={{clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)'}}></div>
            <img 
              src={tour.image} 
              alt={tour.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Card Title */}
          <div className="relative -mt-10 mr-4 z-20 text-end">
            <h3 className="inline-block bg-gradient-to-r from-green-400 to-green-600 text-white text-lg font-light px-6 py-2 rounded-sm transform -skew-y-1">
              <span className="block transform skew-y-1">{tour.name}</span>
            </h3>
          </div>
        </div>

        {/* Card Details */}
        <div className="p-6 pt-8">
          <h4 className="text-green-600 font-bold text-xs uppercase tracking-wider mb-4">{tour.difficulty}</h4>
          <p className="text-gray-500 mb-6 text-sm font-light leading-relaxed">{tour.description}</p>
          
          <div className="grid grid-cols-2 gap-3 mb-6 text-xs text-gray-600">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>{tour.location}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{tour.date}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>
              <span>{tour.stops}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{tour.people}</span>
            </div>
          </div>

          {/* Card Footer */}
        </div>
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 bg-gray-100 m-0 p-4">
            <div className="flex flex-col">
              <div className="flex items-baseline mb-1">
                <span className="text-lg font-bold text-green-600">${tour.price.toLocaleString()}</span>
                <span className="text-xs text-gray-500 ml-1">per person</span>
              </div>
              <div className="flex items-center">
                <span className=" font-bold text-green-600">{tour.rating}</span>
                <span className="text-xs text-gray-500 ml-1">rating ({tour.reviews})</span>
              </div>
            </div>
            <Link 
              to={`/tour/${tour.id}`}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
            >
              Details
            </Link>
          </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {tours.map(tour => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Overview