'use client'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import React, { memo, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

interface ModalWrapperProps {
  children: ReactNode
  width?: string
  title?: string
  trigger?: ReactNode
  description?: string
  scrollable?: boolean
  bg?: string
  open?: boolean
  isAlert?: boolean
  setOpen?: (open: boolean) => void
}

export const ModalWrapper = memo<ModalWrapperProps>(
  ({
    children,
    width,
    title,
    isAlert = false,
    trigger,
    description,
    scrollable = false,
    bg,
    open,
    setOpen,
  }) => {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent
          className={cn(
            'bg-customGrey-800 m-auto border border-customGrey-800 p-[24px] max-h-[90vh] overflow-y-auto',
            width && width,
            scrollable && 'max-h-[90vh] overflow-y-auto',
            bg && bg
          )}
        >
          <DialogHeader className={cn('hidden', title && 'block')}>
            <DialogTitle className={cn('text-start text-white', isAlert && 'text-center')}>
              {title}
            </DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {children}
          <DialogFooter className='sm:justify-start hidden'>
            <DialogClose asChild>
              <Button></Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }
)

ModalWrapper.displayName = 'ModalWrapper'
