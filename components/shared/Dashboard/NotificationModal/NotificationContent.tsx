import {  NotificationItemProps } from '@/types/notification';

export const NotificationContent = ({ notification }: NotificationItemProps) => {
  switch (notification.type) {
    case 'invite':
      return (
        <p className="text-[14px] font-[500] text-customGrey-200">
          Invited{' '}
          <span className="text-customPrimary-500">
            {notification.highlightedText}
          </span>{' '}
          to {notification.content}
        </p>
      );
    
    case 'comment':
      return (
        <>
          <p className="text-[14px] font-[500] text-customGrey-200">
            Commented in{' '}
            <span className="text-customPrimary-500">
              {notification.highlightedText}
            </span>
          </p>
          {notification.commentText && (
            <p className="mt-2 text-[14px] font-[400] text-customGrey-300">
              {`"${notification.commentText}"`}
            </p>
          )}
        </>
      );
    
    case 'price-drop':
    case 'weekly-report':
      return (
        <>
          <p className="text-[14px] font-[500] text-customPrimary-500">
            {notification.highlightedText}
          </p>
          {notification.content && (
            <p className="mt-2 text-[14px] font-[400] text-customGrey-300">
              {`"${notification.content}"`}
            </p>
          )}
        </>
      );
    
    case 'mentioned':
      return (
        <>
          <p className="text-[14px] font-[500] text-customGrey-200">
            Mentioned you in{' '}
            <span className="text-customPrimary-500">
              {notification.highlightedText}
            </span>
          </p>
          {notification.commentText && (
            <p className="mt-2 text-[14px] font-[400] text-customGrey-300">
              {`"${notification.commentText}"`}
            </p>
          )}
        </>
      );
    
    default:
      return null;
  }
};