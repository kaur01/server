import {ContainerModule} from 'inversify';
import '../controllers/EmployeeController';

export class ControllerModule extends ContainerModule {
    constructor() {
        super(() => {
        });
    }
}
