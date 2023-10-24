import { type ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import '../styles/components/Modal.css'

interface ModalProps {
  children: ReactNode
}

export function Modal ({ children }: ModalProps): JSX.Element {
  const [modalRoot, setModalRoot] = useState<Element | null>(null)

  useEffect(() => {
    setModalRoot(document.getElementById('modal'))
  }, [])

  return modalRoot !== null ? createPortal(<div className='ModalBackground'>{children}</div>, modalRoot) : <></>
}
