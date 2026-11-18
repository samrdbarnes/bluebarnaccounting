import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react'

const DrawerContext = createContext(null)

/** Shares open/close state for the contact drawer with every "Get in Touch" button. */
export function DrawerProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const lastFocused = useRef(null)

  const open = useCallback((event) => {
    event?.preventDefault?.()
    lastFocused.current = document.activeElement
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    lastFocused.current?.focus?.()
  }, [])

  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close])

  return <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
}

export function useDrawer() {
  const context = useContext(DrawerContext)
  if (!context) throw new Error('useDrawer must be used inside <DrawerProvider>')
  return context
}
