import {expect} from 'chai';
import {Contract,Signer} from 'ethers'
import hre from 'hardhat' ;



describe("Count", function (){
    let contract :Contract;
    let owner: Signer;
    let second :Signer;
    async function init() {
         [owner,second]=await hre.ethers.getSigners();
        const countFactory=await hre.ethers.getContractFactory("Count");
        contract=await countFactory.deploy(0);
        await contract.deployed();
        console.log("deployed address ",contract.address);
    }

    before(async function () {
        await init()
    })

    it("owner caller", async function () {
        expect(await contract.counter()).to.equal(0);
        await contract.connect(owner).count();
        expect(await contract.counter()).to.equal(1);
    });

    it("second caller", async function () {
        expect(await contract.counter()).to.equal(1);
        await contract.connect(second).count();
        expect(await contract.counter()).to.equal(2);
    });


})
