import { useEffect, useRef, useState } from 'react'

const useMousePos = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const enable = useRef(true)

  useEffect(() => {
    const handleMouseMove = e => {
      if (!enable.current) return
      
      enable.current = false
      setCoords(e.type === 'mousemove' ? {
        x: e.clientX,
        y: e.clientY
      } : {
        x: Math.round(e.touches[0].clientX),
        y: Math.round(e.touches[0].clientY)
      })

      setTimeout(() => enable.current = true, 50)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("touchmove", handleMouseMove)
    
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("touchmove", handleMouseMove)
    }
  })

  return coords
}

export default useMousePos