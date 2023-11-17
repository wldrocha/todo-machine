import { useStorageListener } from '@/hooks'
import '../styles/components/ChangeAlert.css'

function ChangeAlert ({ sincronice }: { sincronice: boolean }): JSX.Element {
  const { show: isShow, toggleShow } = useStorageListener(sincronice)

  return (
    <>
      {isShow && (
        <div className='ChangeAlert-bg'>
          <div className='ChangeAlert-container'>
            <p>Parece que cambiaste tus TODOs en otra pestaña o ventana del navegador.</p>
            <p>¿Quieres sincronizar tus TODOs?</p>
            <button className='TodoForm-button TodoForm-button--add' onClick={toggleShow}>
              Yes!
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export { ChangeAlert }
