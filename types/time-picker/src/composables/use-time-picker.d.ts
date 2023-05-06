import { Ref } from 'vue';
import { UseTimerPickerFn } from '../types';
import { TimePickerProps } from '../time-picker-types';
export default function useTimePicker(hh: Ref, mm: Ref, ss: Ref, format: string, props: TimePickerProps): UseTimerPickerFn;
