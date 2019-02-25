"use strict";
const assert = require('assert');
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const server = require('../app');

const Estimate = require('../models/estimate');

chai.use(chaiHttp);


describe('GET /api/test', () => {
    it('should respond with 200 and status success', (done) => {
    chai.request(server)
    .get('/api/test')
    .end((err, res) => {
    // there should be no errors
    should.not.exist(err);
    // there should be a 200 status code
    res.status.should.equal(200);
    // the response should be JSON
    res.type.should.equal('application/json');
    // the JSON response body should have a
    // key-value pair of {"status": "success"}
    res.body.status.should.eql('success');
    // the JSON response body should have a
    // key-value pair of {"data": [2 user objects]}
    // res.body.data.length.should.eql(2);
    // the first object in the data array should
    // have the right keys
    // res.body.data[0].should.include.keys(
    // 'id', 'username', 'email', 'created_at'
    // );
    done();
        });
      });
});

describe('GET /api/estimate', () => {
    it('should respond with user\'s estimate and 200 code', (done) => {
        chai.request(server)
        .get(`/api/estimate/${randomString()}/${randomString()}/${randomString()}/${randomString()}`)
        .end((err, res) => {
            should.not.exist(err);
            res.status.should.equal(200);
            res.type.should.equal('application/json');
            res.body.status.should.eql('success');
            // res.body.data.length.should.eql(2);
            // console.log(res.body.estimate)
            res.body.estimate.should.include.keys(
            '_id', 'name', 'email', 'projectCost', 'projectDuration'
            );
            done();
        })
    })

    it('should save document in mongoDB document', (done) => {
        const name = randomString()
        const email = randomString()
        const projectCost = randomString()
        const projectDuration = randomString()

        chai.request(server)
        .get(`/api/estimate/${name}/${email}/${projectDuration}/${projectCost}`)
        .end((err, res) => {
            should.not.exist(err);
            res.status.should.equal(200);
            res.type.should.equal('application/json');
            res.body.status.should.eql('success');
            const id = res.body.estimate._id;

            Estimate.findById(id, (err, data) => {
                should.not.exist(err);
                if (data.name !== name) { throw new Error('No name found in posted collection!') }
                if (data.email !== email) { throw new Error('No email found in posted collection!') }
                if (data.projectCost !== projectCost) { throw new Error('No projectCost found in posted collection!') }
                if (data.projectDuration !== projectDuration) { throw new Error('No projectDuration found in posted collection!') }
            })
            done();
        })
    })
})

describe('POST /api/new-estimate', () => {
    
    it('should respond with user\'s estimate and 200 code', (done) => {
        chai.request(server)
        .post(`/api/new-estimate`)
        .send({
            "name": randomString(),
            "email": randomString(),
            "projectCost": randomString(),
            "projectDuration": randomString()
        })
        .end((err, res) => {
            should.not.exist(err);
            res.status.should.equal(200);
            res.type.should.equal('application/json');
            res.body.should.include.keys(
            '_id', 'name', 'email', 'projectCost', 'projectDuration'
            );
            done();
        })
    })

    it('should save document in mongoDB document', (done) => {
        const name = randomString()
        const email = randomString()
        const projectCost = randomString()
        const projectDuration = randomString()

        chai.request(server)
        .post(`/api/new-estimate`)
        .send({
            "name": name,
            "email": email,
            "projectCost": projectCost,
            "projectDuration": projectDuration
        })
        .end((err, res) => {
            should.not.exist(err);
            res.status.should.equal(200);
            const id = res.body._id;

            Estimate.findById(id, (err, data) => {
                should.not.exist(err);
                // console.log(`DATA IS HERER => ${data}`)
                if (data.name !== name) { throw new Error('No name found in posted collection!') }
                if (data.email !== email) { throw new Error('No email found in posted collection!') }
                if (data.projectCost !== projectCost) { throw new Error('No projectCost found in posted collection!') }
                if (data.projectDuration !== projectDuration) { throw new Error('No projectDuration found in posted collection!') }
            })
            done();
        })
    })
})

    // Util
    // generate random string
    function randomString() {
        return Math.random().toString(36).substring(7);
    }