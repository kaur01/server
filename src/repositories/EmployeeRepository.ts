import {Employee, EmployeeModel} from "../models/Employee";
import {injectable} from "inversify";

@injectable()
export class EmployeeRepository {
    public async create(employee: Employee) {
        return Employee.from((await EmployeeModel.create(employee)).toObject());
    }

    public async update(employee: Employee): Promise<void> {
        await EmployeeModel.findByIdAndUpdate(employee._id, employee);
    }

    public async findAll(): Promise<Employee[]> {
        return  await EmployeeModel.find().lean().sort({createdAt: -1});
    }

    public async delete(id: string): Promise<void> {
        await EmployeeModel.deleteOne({_id : id});
    }
}
