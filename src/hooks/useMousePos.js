import { useEffect, useRef, useState } from 'react'

const useMousePos = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const enable = useRef(true)

  useEffect(() => {
    const handleMouseMove = e => {
      if (!enable.current) return
      
      enable.current = false
      setCoords({
        x: e.clientX,
        y: e.clientY
      })

      setTimeout(() => enable.current = true, 50)
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  })

  return coords
}

export default useMousePos