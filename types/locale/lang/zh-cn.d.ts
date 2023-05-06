declare const _default: {
    pagination: {
        totalItemText: string;
        goToText: string;
        perPage: string;
    };
    accordion: {
        loading: string;
        noData: string;
    };
    autoCompleteDropdown: {
        latestInput: string;
    };
    cascaderList: {
        noData: string;
    };
    colorPicker: {
        foundationPanel: string;
        advancedPanel: string;
    };
    datePickerPro: {
        ok: string;
        placeholder: string;
        month1: string;
        month2: string;
        month3: string;
        month4: string;
        month5: string;
        month6: string;
        month7: string;
        month8: string;
        month9: string;
        month10: string;
        month11: string;
        month12: string;
        year: string;
        startPlaceholder: string;
        endPlaceholder: string;
        getWeekDays(): Array<string>;
        getTimeArr(): Array<string>;
        getYearMonthStr(year: number, month: number): string;
    };
    editableSelect: {
        noRelatedRecords: string;
        noData: string;
    };
    input: {
        placeholder: string;
    };
    splitterBar: {
        collapse: string;
        expand: string;
    };
    stepsGuide: {
        previous: string;
        continue: string;
        ok: string;
    };
    table: {
        selectAll: string;
        ok: string;
    };
    timePopup: {
        ok: string;
    };
    transfer: {
        unit: string;
        panelUnit: string;
        headerUnit: string;
        noData: string;
        placeholder: string;
    };
    tree: {
        loading: string;
        newNode: string;
        selectPlaceholder: string;
    };
    upload: {
        placeholder: string;
        getExistSameNameFilesMsg(sameNames: string): string;
        getAllFilesBeyondMaximalFileSizeMsg(maximalSize: number): string;
        getBeyondMaximalFileSizeMsg(filename: string, maximalSize: number): string;
        getNotAllowedFileTypeMsg(filename: string, scope: string): string;
    };
    search: {
        placeholder: string;
    };
    select: {
        placeholder: string;
        noDataText: string;
        noMatchText: string;
        loadingText: string;
    };
    tagInput: {
        maxTagsText: string;
    };
    timeSelect: {
        placeholder: string;
    };
};
export default _default;
