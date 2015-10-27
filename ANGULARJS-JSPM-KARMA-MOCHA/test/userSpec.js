import { assert, expect } from 'chai';
import 'angular';
import 'angular-mocks/angular-mocks';
import '../src/component';

describe('User factory', ()=>{
    var Client;

    beforeEach(angular.mock.module('component'));

    beforeEach(angular.mock.inject(function(_client_) {
	Client = _client_;
    }));


    it('sould return "default" when calling loggedUser ', ()=> {
	expect(Client.loggedUser()).to.be.equal('default');
    });

});
