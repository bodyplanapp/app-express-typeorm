import { getRepository, getConnection } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { File } from "../../models/file.model";

import * as auth from '../../auth/auth.service';

export class FileController {

    // fileRepository: getRepository(File);

    async save(request: Request, response: Response, next: NextFunction) {
        console.log('FileController --> save');
        const fileRepository = getConnection().getRepository(File);
        fileRepository.save(request.body)
            .then(file => {
                response.status(200).json({ message: 'File created' });
            }).catch(error => {
                response.status(500).json({ message: 'Server error', error });
            });
    }
}