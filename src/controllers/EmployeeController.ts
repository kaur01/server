import {Request, Response} from 'express';
import {HttpStatusCode} from "../HttpStatusCode";
import {
    controller, httpDelete,
    httpGet,
    httpPost,
    httpPut,
    request,
    requestBody,
    requestParam,
    response
} from "inversify-express-utils";

import {Employee} from "../models/Employee";
import {EmployeeRepository} from "../repositories/EmployeeRepository";

require('express');
require('express-validator/check');
require('inversify-express-utils');


@controller('/employee')
export class EmployeeController {

    constructor(private repository: EmployeeRepository) {
    }

    @httpGet('/health-check')
    public healthCheck(@request() request: Request, @response() response: Response): void {
        response.status(HttpStatusCode.Ok).send({health: 'ok'});
    }

    @httpPost('')
    public async create(@requestBody() reqBody: { name: string, dateOfBirth: Date }, @response() res: Response): Promise<void> {
        let employee = new Employee(reqBody.name, reqBody.dateOfBirth, undefined, undefined, undefined);
        const createdEmployee = await this.repository.create(employee);
        res.status(HttpStatusCode.Created).json(createdEmployee);
    }

    @httpGet('/')
    public async get(@response() res: Response): Promise<void> {
        res.json(await this.repository.findAll());
    }

    @httpPut("/:id")
    public async update(@requestParam('id') id: string, @requestBody() reqBody: { name: string, dateOfBirth: Date }, @response() response: Response) {
        const employee = new Employee(reqBody.name, reqBody.dateOfBirth, undefined, undefined, undefined);
        await this.repository.update(employee);
        response.status(HttpStatusCode.Ok).send();
    }

    @httpDelete("/:id")
    public async delete(@requestParam('id') id: string, @response() response: Response) {
        await this.repository.delete(id);
        response.status(HttpStatusCode.Ok).send();
    }

}
