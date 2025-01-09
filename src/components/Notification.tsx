import React, { useEffect } from 'react';

export enum NotificationType {
    success,
    error,
}

interface MessageProps {
    type: NotificationType;
    message: string;
    onClose: () => void;
}
export const Notification: React.FC<MessageProps> = ({
    type,
    message,
    onClose,
}) => {
    useEffect(() => {
        const timer = setTimeout(() => onClose(), 10000); // Auto-hide after 5 seconds
        return () => clearTimeout(timer); // Cleanup on component unmount
    }, [onClose]);

    return (
        <div
            className={`w-max absolute left-1/2 -translate-x-1/2 top-0 mt-2 px-6 py-2 rounded-sm flex items-center justify-center ${
                type === NotificationType.success
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
            } animate-fade`}
        >
            <p className="font-marcellus font-semibold">{message}</p>
        </div>
    );
};
