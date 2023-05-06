import type { App } from 'vue';
import DraggableDirective from './src/draggable-directive';
import DroppableDirective from './src/droppable-directive';
import SortableDirective from './src/sortable-directive';
export { DraggableDirective, DroppableDirective, SortableDirective };
declare const _default: {
    title: string;
    category: string;
    status: string;
    install(app: App): void;
};
export default _default;
