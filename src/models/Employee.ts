import * as mongoose from "mongoose";
import {Types} from "mongoose";
import {prop, Typegoose} from "typegoose";


export class Employee extends Typegoose {

    public _id: Types.ObjectId;

    @prop()
    public name: string;

    @prop()
    public dateOfBirth: Date;

    @prop()
    public salary: number;

    @prop()
    public skills: number[];

    @prop()
    public photo: string;


    constructor();
    constructor(name: string, dateOfBirth: Date, salary: number, skills: number[], photo: string);
    constructor(name?: string, dateOfBirth?: Date, salary?: number, skills?: number[], photo?: string) {
        super();
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.salary = salary;
        this.skills = skills;
        this.photo = photo;
    }

    public static from(json: any): Employee {
        if (!json) {
            return json;
        }
        return Object.assign(new Employee(), json);
    }
}

export const EmployeeModel = new Employee().getModelForClass(Employee, {
    existingMongoose: mongoose,
    schemaOptions: {
        collection: 'zet_cc_harpreet',
        timestamps: true
    }
});

