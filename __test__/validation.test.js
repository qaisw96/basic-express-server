'use strict';

const server = require('../src/server.js')

const superTest = require('supertest');
const serverRequest = superTest(server.app);

describe('Bad method and route check', () => {

    it('404 on a bad route', async () => {
        let res = await serverRequest.get('/city');
        expect(res.status).toEqual(404);
    })


    it('404 on a bad method', async () => {
        let res = await serverRequest.post('/person');
        expect(res.status).toEqual(404)
       
    })
    
})