const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../src/app');
const knex = require('knex')






describe('POST /api/mailinglist', () => {

    it('responds with 400 error', () => {
        const user = {
            full_name: 'phoney user',
        }
        
      return supertest(app)
        .post('/api/mailinglist')
        .send(user)
        .expect(400);
    });
  });



