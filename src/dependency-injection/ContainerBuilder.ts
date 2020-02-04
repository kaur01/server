import {Container} from 'inversify';
import Employee from '../../src/Employee';
const EmployeeController = require('../EmployeeController');

export class ContainerBuilder {
    public static build(): Container {
        const container = new Container({autoBindInjectable: true});
        container.load(new EmployeeController(), new Employee());
        return container;
    }
}
