 const sinon = require('sinon');
 const expect = require('chai').expect;


const PrimeController = require('../controllers/prime')

describe('Testing prime controller', function(){
    it('Should return prime median based on limit', function(){
        const req = {
            body : {
                number : 12
            } 
        }
        
        const res = { median : 5}
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
        
        PrimeController.getMedianFromPrimes(req, res, () => {});
        
        //expect(req).to.have.property('body', {number : 12} )
    });
});


