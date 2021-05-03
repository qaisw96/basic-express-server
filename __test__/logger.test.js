'use strict';

const server = require('../src/server');

const superTest = require('supertest');
const serverRequest = superTest(server.app)

describe('Test logger', () => {
    it('500 if no name in the query string', async () => {
        let res = await serverRequest.get('/person?name=')
        expect(res.status).toEqual(500)
    })

        it('200 if the name is in the query string', async () => {
            let res = await serverRequest.get('/person?name=Qais')
            expect(res.status).toEqual(200)
    })
})

