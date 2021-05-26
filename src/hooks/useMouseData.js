import { useEffect, useMemo, useRef, useState } from 'react'

import useMousePos from './useMousePos'

const useMouseData = () => {
  const [angle, setAngle] = useState(0)
  const [distance, setDistance] = useState(0)
  const {x, y} = useMousePos()
  const elRef = useRef()

  const elPos = useMemo(() => {
    if (!elRef.current) return null
    
    const elRect = elRef.current.getBoundingClientRect()  
    return {x: elRect.left + elRect.width / 2, y: elRect.top + elRect.height / 2}
    // eslint-disable-next-line
  }, [elRef.current])

  useEffect(() => {
    if (!!elPos) {
      setAngle(Math.atan2(elPos.x - x, elPos.y - y) + Math.PI)
      setDistance(Math.floor(Math.sqrt(Math.pow(elPos.x - x, 2) + Math.pow(elPos.y - y, 2))))
    }
  }, [x, y, elPos])

  return [angle, distance, elRef]
}

export default useMouseData