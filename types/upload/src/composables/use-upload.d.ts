import type { Ref, UnwrapRef } from 'vue';
import { FileUploader } from '../file-uploader';
import type { IUploadOptions, IFileResponse } from '../upload-types';
export interface IUseUpload {
    fileUploaders: Ref<UnwrapRef<FileUploader[]>>;
    getFiles: () => File[];
    addFile: (file: File, options?: IUploadOptions) => void;
    getFullFiles: () => UnwrapRef<FileUploader[]>;
    deleteFile: (file: FileUploader['file']) => void;
    upload: (oneFile?: FileUploader) => Promise<IFileResponse[]>;
    removeFiles: () => void;
    getSameNameFiles: () => string;
    resetSameNameFiles: () => void;
    _oneTimeUpload: () => Promise<IFileResponse[]>;
}
export declare const useUpload: () => IUseUpload;
