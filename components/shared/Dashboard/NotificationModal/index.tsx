import { ModalWrapper } from '@/components/shared/Modal'
import { NotificationLayout } from './NoticationLayout'

interface INoticationModal {
  open?: boolean
  setOpen?: (open: boolean) => void
}

export const NoticationModal: React.FC<INoticationModal> = ({
  open,
  setOpen,
}) => {
  return (
    <ModalWrapper
      width='!md:w-[400px] !w-full'
      title='Your notifications'
      open={open}
      setOpen={setOpen}
    >
      <NotificationLayout setOpen={setOpen} />
    </ModalWrapper>
  )
}
