import { getRepository, getConnection } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Customer } from "./customer.model";

import * as auth from '../../auth/auth.service';

export class CustomerController {

    // customerRepository: getRepository(Customer);

}