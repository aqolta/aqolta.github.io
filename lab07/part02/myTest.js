"use strict"
describe("Sum",()=>{

    it("Sum of 4 and 11 is 15",()=>{
        assert.equal(sum(4,11),15);
    });
    it("Sum of 2 and 1 is 3",()=>{
        assert.equal(sum(2,1),3);
    });
    it("Sum of 7 + 0 is 7",()=>{
        assert.equal(sum(7),7);
    });
});

describe("Multiply",()=>{
    it("Multiplying 2 by 5 is 10",()=>{
        assert.equal(multiply(2,5),10);
    });
    it("Multiplying 10 by 27 is 270",()=>{
        assert.equal(multiply(10,27),270);
    });
});

describe("Reverse",()=>{
    it("Reversing \'nice\' is \'ecin\'",()=>{
        assert.equal(reverse("nice"),"ecin");
    });
    it("Reversing \'WAP\' is \'PAW\'",()=>{
        assert.equal(reverse("WAP"),"PAW");
    });
    it("Reversing empty string \' \' is \' \'",()=>{
        assert.equal(reverse(" ")," ");
    });
});

describe("filterLongWords",()=>{
    it("Filtering Long words of size 5",()=>{
        assert.deepEqual(filterLongWords(5,"nice","Andrew","ok","Awesome"),["Andrew","Awesome"]);
    });
    it("Filtering Long words of size 6",()=>{
        assert.deepEqual(filterLongWords(6,"nice","Andrew","ok","Awesome"),["Awesome"]);
    });
});