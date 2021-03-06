import { expect } from 'chai';

import 'config/env';

import mongoose from 'mongoose';
// import * as http from 'http';
// import supertest from 'supertest';

// import app from 'app';
import { connectionUrl, connectionSettings } from 'config/db';
import Country from 'models/country';

// supertest(http.createServer(app.callback()));

describe('Sample describe', () => {

  before(async () => {
    console.log('Przed połączeniem z DB');
    console.log('URL łączenia', connectionUrl);
    await mongoose.connect(connectionUrl, connectionSettings);
    
    console.log(mongoose.connection.readyState)
    console.log('Po połączeniu z DB')

    return true;
  });

  it('Sample test', async () => {
    console.log('Zaczynamy test');
    expect(1).to.equal(1);

    const country = new Country({ name: 'Polska' });
    console.log('Przed zapisem');
    await country.save();
    console.log('Po zapisie');
    expect(country.name).to.equal('Polska');
  });
});
