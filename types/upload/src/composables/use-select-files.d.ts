import type { IFileOptions, IUploadOptions } from '../upload-types';
export interface IReturnMessage {
    checkError: boolean;
    errorMsg?: string;
}
export interface IUseSelectFiles {
    triggerSelectFiles: (options: IFileOptions) => Promise<File[]>;
    _validateFiles: (file: File, accept: string, uploadOptions?: IUploadOptions) => IReturnMessage;
    triggerDropFiles: (files: File[]) => Promise<File[]>;
    checkAllFilesSize: (fileSize: number, maximumSize: number) => IReturnMessage | void;
}
declare type IReturnFuntion = (val: string | number, accept?: string | number) => string;
export declare const useSelectFiles: (t: (path: string) => IReturnFuntion) => IUseSelectFiles;
export {};
