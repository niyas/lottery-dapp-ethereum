const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    "<Your Mnemonic>",
    "https://rinkeby.infura.io/cA9UUVGEirI1dErdkLNE"
);

const web3 = new Web3(provider); 

const deploy = async () => {
        const accounts = await web3.eth.getAccounts();

        const inbox = await new web3.eth.Contract(JSON.parse(interface))
            .deploy({ data: bytecode })
            .send({ gas: '1000000', from: accounts[0] });
        
        console.log('Contract deployed to', inbox.options.address);    

};

deploy();
