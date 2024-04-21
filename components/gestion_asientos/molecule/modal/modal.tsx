import { ReactNode, useEffect } from "react"

export interface ModalProps {
  title?: ReactNode
  children: ReactNode
  closeModal: () => void
  className?: string
}

const Modal = ({ children, closeModal, title, className = "" }: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])
  return <div className="fixed left-0 top-0 h-screen w-full overflow-y-auto bg-gray-300/20 py-8">{children}</div>
}

export default Modal
