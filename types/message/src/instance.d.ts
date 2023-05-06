import type { EmitEventFn, MessageOption } from './message-types';
export declare type MessageContext = {
    id: string;
    handler?: EmitEventFn;
    props: MessageOption;
};
export declare const instances: MessageContext[];
export declare const getLastOffset: (id: string) => number;
export declare const deleteInstance: (id: string | undefined) => number;
export declare const initInstance: (id: string, props: MessageOption, message?: string | undefined) => MessageContext;
