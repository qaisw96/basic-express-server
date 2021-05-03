'use strict';

const server = require('../src/server.js')

const superTest = require('supertest');
const serverRequest = superTest(server.app);

describe('output object', () => {

    it('output object is correct', async () => {
        let req = await serverRequest.get('/person?name=qais');
        expect(req.body.name).toEqual('qais');
    })
})