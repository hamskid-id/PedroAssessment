import { ModalWrapper } from '@/components/shared/Modal'
import { AlertForm } from './AlertForm'

interface IAlertModal {
  open?: boolean
  setOpen?: (open: boolean) => void
}

export const AlertModal: React.FC<IAlertModal> = ({ open, setOpen }) => {
  return (
    <ModalWrapper
      width='!md:w-[480px] !w-full'
      title='Set an alert'
      open={open}
      setOpen={setOpen}
    >
      <AlertForm setOpen={setOpen} />
    </ModalWrapper>
  )
}
