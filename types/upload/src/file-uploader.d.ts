import type { UnwrapRef } from 'vue';
import type { IFileResponse } from './upload-types';
import { IUploadOptions, UploadStatus } from './upload-types';
export declare class FileUploader {
    file: File;
    uploadOptions?: IUploadOptions | undefined;
    private xhr;
    status: UploadStatus;
    response: unknown;
    percentage: number;
    constructor(file: File, uploadOptions?: IUploadOptions | undefined);
    send(uploadFiles?: UnwrapRef<FileUploader[]>): Promise<IFileResponse>;
    parallelUploadFiles(fileFieldName_: string, additionalParameter: Record<string, string | Blob> | undefined): FormData;
    oneTimeUploadFiles(fileFieldName_: string, additionalParameter: Record<string, string | Blob> | undefined, uploadFiles: UnwrapRef<FileUploader[]>): FormData;
    cancel(): void;
}
