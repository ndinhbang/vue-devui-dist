import { MessageOption } from './message-types';
declare function message(params: MessageOption | string): void;
declare function success(params: MessageOption | string): void;
declare function error(params: MessageOption | string): void;
declare function warning(params: MessageOption | string): void;
declare function info(params: MessageOption | string): void;
declare const Message: typeof message & {
    success: typeof success;
    error: typeof error;
    warning: typeof warning;
    info: typeof info;
};
export default Message;
