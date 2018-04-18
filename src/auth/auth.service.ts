'use strict';
import { config } from '../config/environment';
import * as jwt from 'jsonwebtoken';
import * as expressJwt from 'express-jwt';
import * as compose from 'composable-middleware';
import { NextFunction, Request, Response } from "express";

var validateJwt = expressJwt({
    secret: config.secrets.session
});

/**
 * Attaches the user object to the request if authenticated
 * Otherwise returns 403
 */
export function isAuthenticated() {
    return compose()
        // Validate jwt
        .use((request: Request, response: Response, next: NextFunction) => {
            console.log('Validation 1')
            // allow access_token to be passed through query parameter as well
            // if (request.query && request.query.hasOwnProperty('access_token')) {
            //     request.headers.authorization = `Bearer ${request.query.access_token}`;
            // }
            // IE11 forgets to set Authorization header sometimes. Pull from cookie instead.
            // if (request.query && typeof request.headers.authorization === 'undefined') {
            //     request.headers.authorization = `Bearer ${request.cookies.token}`;
            // }
            validateJwt(request, response, next);
        })
        // Attach user to request
        .use((error, request, response, next) => {
            console.log('Validation 2')
            if (error) {
                return response.status(505).json({
                    status: 'error',
                    message: 'Not Authenticated',
                    error: error
                }).end();
            }
            next();
        });
}

/**
 * Checks if the user role meets the minimum requirements of the route
 */
export function hasRole(roleRequired) {
    if (!roleRequired) {
        throw new Error('Required role needs to be set');
    }
    return compose()
        .use(isAuthenticated())
        .use(function meetsRequirements(req, res, next) {
            console.log('REQ 2.2')
            if (config.userRoles.indexOf(req.user.role) >= config.userRoles.indexOf(roleRequired)) {
                return next();
            } else {
                return res.status(403).send('Forbidden');
            }
        });
}

/**
 * Returns a jwt token signed by the app secret
 */
export function signToken(id, role?) {
    // return jwt.sign({ _id: id, role }, config.secrets.session, {
    //     expiresIn: 60 * 60 * 5
    // });
    return jwt.sign({ _id: id }, config.secrets.session);
}

/**
 * Set token cookie directly for oAuth strategies
 */
export function setTokenCookie(req, res) {
    if (!req.user) {
        return res.status(404).send('It looks like you aren\'t logged in, please try again.');
    }
    var token = signToken(req.user._id, req.user.role);
    res.cookie('token', token);
    res.redirect('/');
}
