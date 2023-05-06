declare type TProps = {
    onSelected?: (date: Date) => void;
    disabled?: boolean;
};
declare const TodayDefault: (props: TProps) => JSX.Element;
export default TodayDefault;
