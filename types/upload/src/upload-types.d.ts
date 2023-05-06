import type { PropType, ExtractPropTypes, UnwrapRef } from 'vue';
import { FileUploader } from './file-uploader';
export declare class IUploadOptions {
    uri: string | URL;
    method?: string;
    maximumSize?: number;
    headers?: {
        [key: string]: string;
    };
    authToken?: string;
    authTokenHeader?: string;
    additionalParameter?: {
        [key: string]: string | Blob;
    };
    fileFieldName?: string;
    checkSameName?: boolean;
    withCredentials?: boolean;
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
}
export declare class IFileOptions {
    accept?: string;
    multiple?: boolean;
    webkitdirectory?: boolean;
}
export declare enum UploadStatus {
    preLoad = 0,
    uploading = 1,
    uploaded = 2,
    failed = 3
}
export interface IFileResponse<T = unknown> {
    file: File;
    response: T;
}
declare type DynamicUploadOptionsFn = (files: unknown, uploadOptions: unknown) => IUploadOptions;
declare type ChangeFn = (files: File[], uploadFiles: File[]) => void;
declare type BeforeUploadFn = (file: UnwrapRef<FileUploader[]>) => boolean | Promise<boolean>;
export declare const uploadProps: {
    readonly accept: {
        readonly type: StringConstructor;
    };
    readonly webkitdirectory: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly uploadOptions: {
        readonly type: PropType<IUploadOptions>;
    };
    readonly multiple: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly autoUpload: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly modelValue: {
        readonly type: PropType<File[]>;
        readonly default: () => never[];
    };
    readonly droppable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly beforeUpload: {
        readonly type: PropType<BeforeUploadFn>;
    };
    /** @deprecated */
    readonly dynamicUploadOptionsFn: {
        readonly type: PropType<DynamicUploadOptionsFn>;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly onChange: {
        readonly type: PropType<ChangeFn>;
    };
    readonly fileDrop: {
        readonly type: PropType<(v: unknown) => void>;
        readonly default: undefined;
    };
    readonly fileOver: {
        readonly type: PropType<(v: boolean) => void>;
        readonly default: undefined;
    };
    readonly fileSelect: {
        readonly type: PropType<(v: File) => void>;
        readonly default: undefined;
    };
    readonly deleteUploadedFile: {
        readonly type: PropType<(v: string) => void>;
        readonly default: undefined;
    };
    readonly onError: {
        readonly type: PropType<(v: {
            file: File;
            response: unknown;
        }) => void>;
        readonly default: undefined;
    };
    readonly onSuccess: {
        readonly type: PropType<(v: {
            file: File;
            response: unknown;
        }[]) => void>;
        readonly default: undefined;
    };
    readonly onExceed: {
        readonly type: PropType<(files: File[], uploadFiles: File[]) => void>;
        readonly default: undefined;
    };
    readonly onProgress: {
        readonly type: PropType<(files: File[], uploadFiles: File[]) => void>;
        readonly default: undefined;
    };
    readonly onPreview: {
        readonly type: PropType<(file: File) => void>;
        readonly default: undefined;
    };
    readonly oneTimeUpload: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly limit: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly httpRequest: {
        readonly type: PropType<(files: File[]) => void>;
        readonly default: undefined;
    };
};
export declare type UploadProps = ExtractPropTypes<typeof uploadProps>;
export {};
