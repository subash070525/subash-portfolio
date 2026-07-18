import { useMemo } from 'react'
import './NightSky.css'

function NightSky() {
  const stars = useMemo(() => {
    return Array.from({ length: 120 }, (_, index) => ({
      id: index,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      duration: `${Math.random() * 3 + 2}s`,
      delay: `${Math.random() * 5}s`,
    }))
  }, [])

  return (
    <div className="night-sky" aria-hidden="true">

      {/* RANDOM STARS */}

      <div className="random-stars">
        {stars.map((star) => (
          <span
            key={star.id}
            className="random-star"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDuration: star.duration,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      {/* SHOOTING STARS */}

      <span className="meteor meteor-1"></span>
      <span className="meteor meteor-2"></span>
      <span className="meteor meteor-3"></span>
      <span className="meteor meteor-4"></span>
      <span className="meteor meteor-5"></span>
      <span className="meteor meteor-6"></span>
      <span className="meteor meteor-7"></span>
      <span className="meteor meteor-8"></span>

    </div>
  )
}

export default NightSky