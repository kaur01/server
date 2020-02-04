import {ContainerModule} from 'inversify';
import {MongooseModule} from './MongooseModule';
import '../repositories/EmployeeRepository';

export class RepositoryModule extends ContainerModule {
    constructor() {
        super(() => {
        });
        /* tslint:disable: no-unused-expression */
        new MongooseModule();
    }
}
