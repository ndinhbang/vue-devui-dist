/// <reference types="node" />
import type { IFileResponse } from './upload-types';
import { UploadStatus } from './upload-types';
import './upload.scss';
declare const _default: import("vue").DefineComponent<{
    readonly accept: {
        readonly type: StringConstructor;
    };
    readonly webkitdirectory: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly uploadOptions: {
        readonly type: import("vue").PropType<import("./upload-types").IUploadOptions>;
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
        readonly type: import("vue").PropType<File[]>;
        readonly default: () => never[];
    };
    readonly droppable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly beforeUpload: {
        readonly type: import("vue").PropType<(file: {
            status: UploadStatus;
            response: unknown;
            percentage: number;
            file: {
                readonly lastModified: number;
                readonly name: string;
                readonly webkitRelativePath: string;
                readonly size: number;
                readonly type: string;
                arrayBuffer: {
                    (): Promise<ArrayBuffer>;
                    (): Promise<ArrayBuffer>;
                };
                slice: {
                    (start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Blob;
                    (start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Blob;
                };
                stream: {
                    (): ReadableStream<any>;
                    (): NodeJS.ReadableStream;
                };
                text: {
                    (): Promise<string>;
                    (): Promise<string>;
                };
            };
            uploadOptions?: {
                uri: string | {
                    hash: string;
                    host: string;
                    hostname: string;
                    href: string;
                    toString: () => string;
                    readonly origin: string;
                    password: string;
                    pathname: string;
                    port: string;
                    protocol: string;
                    search: string;
                    readonly searchParams: {
                        append: (name: string, value: string) => void;
                        delete: (name: string) => void;
                        get: (name: string) => string | null;
                        getAll: (name: string) => string[];
                        has: (name: string) => boolean;
                        set: (name: string, value: string) => void;
                        sort: () => void;
                        toString: () => string;
                        forEach: (callbackfn: (value: string, key: string, parent: URLSearchParams) => void, thisArg?: any) => void;
                        entries: () => IterableIterator<[string, string]>;
                        keys: () => IterableIterator<string>;
                        values: () => IterableIterator<string>;
                        [Symbol.iterator]: () => IterableIterator<[string, string]>;
                    };
                    username: string;
                    toJSON: () => string;
                };
                method?: string | undefined;
                maximumSize?: number | undefined;
                headers?: {
                    [key: string]: string;
                } | undefined;
                authToken?: string | undefined;
                authTokenHeader?: string | undefined;
                additionalParameter?: {
                    [key: string]: string | Blob;
                } | undefined;
                fileFieldName?: string | undefined;
                checkSameName?: boolean | undefined;
                withCredentials?: boolean | undefined;
                responseType?: "text" | "arraybuffer" | "blob" | "json" | undefined;
            } | undefined;
            send: (uploadFiles?: any[] | undefined) => Promise<IFileResponse<unknown>>;
            parallelUploadFiles: (fileFieldName_: string, additionalParameter: Record<string, string | Blob> | undefined) => FormData;
            oneTimeUploadFiles: (fileFieldName_: string, additionalParameter: Record<string, string | Blob> | undefined, uploadFiles: any[]) => FormData;
            cancel: () => void;
        }[]) => boolean | Promise<boolean>>;
    };
    readonly dynamicUploadOptionsFn: {
        readonly type: import("vue").PropType<(files: unknown, uploadOptions: unknown) => import("./upload-types").IUploadOptions>;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly onChange: {
        readonly type: import("vue").PropType<(files: File[], uploadFiles: File[]) => void>;
    };
    readonly fileDrop: {
        readonly type: import("vue").PropType<(v: unknown) => void>;
        readonly default: undefined;
    };
    readonly fileOver: {
        readonly type: import("vue").PropType<(v: boolean) => void>;
        readonly default: undefined;
    };
    readonly fileSelect: {
        readonly type: import("vue").PropType<(v: File) => void>;
        readonly default: undefined;
    };
    readonly deleteUploadedFile: {
        readonly type: import("vue").PropType<(v: string) => void>;
        readonly default: undefined;
    };
    readonly onError: {
        readonly type: import("vue").PropType<(v: {
            file: File;
            response: unknown;
        }) => void>;
        readonly default: undefined;
    };
    readonly onSuccess: {
        readonly type: import("vue").PropType<(v: {
            file: File;
            response: unknown;
        }[]) => void>;
        readonly default: undefined;
    };
    readonly onExceed: {
        readonly type: import("vue").PropType<(files: File[], uploadFiles: File[]) => void>;
        readonly default: undefined;
    };
    readonly onProgress: {
        readonly type: import("vue").PropType<(files: File[], uploadFiles: File[]) => void>;
        readonly default: undefined;
    };
    readonly onPreview: {
        readonly type: import("vue").PropType<(file: File) => void>;
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
        readonly type: import("vue").PropType<(files: File[]) => void>;
        readonly default: undefined;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "fileDrop" | "fileOver" | "fileSelect" | "deleteUploadedFile")[], "update:modelValue" | "fileDrop" | "fileOver" | "fileSelect" | "deleteUploadedFile", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly accept: {
        readonly type: StringConstructor;
    };
    readonly webkitdirectory: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly uploadOptions: {
        readonly type: import("vue").PropType<import("./upload-types").IUploadOptions>;
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
        readonly type: import("vue").PropType<File[]>;
        readonly default: () => never[];
    };
    readonly droppable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly beforeUpload: {
        readonly type: import("vue").PropType<(file: {
            status: UploadStatus;
            response: unknown;
            percentage: number;
            file: {
                readonly lastModified: number;
                readonly name: string;
                readonly webkitRelativePath: string;
                readonly size: number;
                readonly type: string;
                arrayBuffer: {
                    (): Promise<ArrayBuffer>;
                    (): Promise<ArrayBuffer>;
                };
                slice: {
                    (start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Blob;
                    (start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Blob;
                };
                stream: {
                    (): ReadableStream<any>;
                    (): NodeJS.ReadableStream;
                };
                text: {
                    (): Promise<string>;
                    (): Promise<string>;
                };
            };
            uploadOptions?: {
                uri: string | {
                    hash: string;
                    host: string;
                    hostname: string;
                    href: string;
                    toString: () => string;
                    readonly origin: string;
                    password: string;
                    pathname: string;
                    port: string;
                    protocol: string;
                    search: string;
                    readonly searchParams: {
                        append: (name: string, value: string) => void;
                        delete: (name: string) => void;
                        get: (name: string) => string | null;
                        getAll: (name: string) => string[];
                        has: (name: string) => boolean;
                        set: (name: string, value: string) => void;
                        sort: () => void;
                        toString: () => string;
                        forEach: (callbackfn: (value: string, key: string, parent: URLSearchParams) => void, thisArg?: any) => void;
                        entries: () => IterableIterator<[string, string]>;
                        keys: () => IterableIterator<string>;
                        values: () => IterableIterator<string>;
                        [Symbol.iterator]: () => IterableIterator<[string, string]>;
                    };
                    username: string;
                    toJSON: () => string;
                };
                method?: string | undefined;
                maximumSize?: number | undefined;
                headers?: {
                    [key: string]: string;
                } | undefined;
                authToken?: string | undefined;
                authTokenHeader?: string | undefined;
                additionalParameter?: {
                    [key: string]: string | Blob;
                } | undefined;
                fileFieldName?: string | undefined;
                checkSameName?: boolean | undefined;
                withCredentials?: boolean | undefined;
                responseType?: "text" | "arraybuffer" | "blob" | "json" | undefined;
            } | undefined;
            send: (uploadFiles?: any[] | undefined) => Promise<IFileResponse<unknown>>;
            parallelUploadFiles: (fileFieldName_: string, additionalParameter: Record<string, string | Blob> | undefined) => FormData;
            oneTimeUploadFiles: (fileFieldName_: string, additionalParameter: Record<string, string | Blob> | undefined, uploadFiles: any[]) => FormData;
            cancel: () => void;
        }[]) => boolean | Promise<boolean>>;
    };
    readonly dynamicUploadOptionsFn: {
        readonly type: import("vue").PropType<(files: unknown, uploadOptions: unknown) => import("./upload-types").IUploadOptions>;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly onChange: {
        readonly type: import("vue").PropType<(files: File[], uploadFiles: File[]) => void>;
    };
    readonly fileDrop: {
        readonly type: import("vue").PropType<(v: unknown) => void>;
        readonly default: undefined;
    };
    readonly fileOver: {
        readonly type: import("vue").PropType<(v: boolean) => void>;
        readonly default: undefined;
    };
    readonly fileSelect: {
        readonly type: import("vue").PropType<(v: File) => void>;
        readonly default: undefined;
    };
    readonly deleteUploadedFile: {
        readonly type: import("vue").PropType<(v: string) => void>;
        readonly default: undefined;
    };
    readonly onError: {
        readonly type: import("vue").PropType<(v: {
            file: File;
            response: unknown;
        }) => void>;
        readonly default: undefined;
    };
    readonly onSuccess: {
        readonly type: import("vue").PropType<(v: {
            file: File;
            response: unknown;
        }[]) => void>;
        readonly default: undefined;
    };
    readonly onExceed: {
        readonly type: import("vue").PropType<(files: File[], uploadFiles: File[]) => void>;
        readonly default: undefined;
    };
    readonly onProgress: {
        readonly type: import("vue").PropType<(files: File[], uploadFiles: File[]) => void>;
        readonly default: undefined;
    };
    readonly onPreview: {
        readonly type: import("vue").PropType<(file: File) => void>;
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
        readonly type: import("vue").PropType<(files: File[]) => void>;
        readonly default: undefined;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onFileDrop?: ((...args: any[]) => any) | undefined;
    onFileOver?: ((...args: any[]) => any) | undefined;
    onFileSelect?: ((...args: any[]) => any) | undefined;
    onDeleteUploadedFile?: ((...args: any[]) => any) | undefined;
}, {
    readonly disabled: boolean;
    readonly multiple: boolean;
    readonly onError: (v: {
        file: File;
        response: unknown;
    }) => void;
    readonly onProgress: (files: File[], uploadFiles: File[]) => void;
    readonly placeholder: string;
    readonly modelValue: File[];
    readonly webkitdirectory: boolean;
    readonly autoUpload: boolean;
    readonly droppable: boolean;
    readonly fileDrop: (v: unknown) => void;
    readonly fileOver: (v: boolean) => void;
    readonly fileSelect: (v: File) => void;
    readonly deleteUploadedFile: (v: string) => void;
    readonly onSuccess: (v: {
        file: File;
        response: unknown;
    }[]) => void;
    readonly onExceed: (files: File[], uploadFiles: File[]) => void;
    readonly onPreview: (file: File) => void;
    readonly oneTimeUpload: boolean;
    readonly limit: number;
    readonly httpRequest: (files: File[]) => void;
}>;
export default _default;
