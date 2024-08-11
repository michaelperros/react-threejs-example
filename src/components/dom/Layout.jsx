import { useRef, forwardRef, useImperativeHandle } from 'react'

const Layout = forwardRef(({ children, ...props }, ref) => {
  const localRef = useRef()

  useImperativeHandle(ref, () => localRef.current)

  return (
    <div
      {...props}
      ref={localRef}
      className='absolute top-0 left-0 w-screen h-screen overflow-hidden z-10 bg-black text-gray-50'>
      {children}
    </div>
  )
})
Layout.displayName = 'Layout'

export default Layout
