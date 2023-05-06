import { DrawerOptions } from './drawer-types';
export default class DrawerService {
    open(options: DrawerOptions): {
        close: () => void;
    };
}
