const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
  'history session basket jump bus bag bring state depend sorry mouse ritual',
  'https://rinkeby.infura.io/v3/822b10150946418888eda9382ff33834'
);

const web3 = new Web3(provider);

const deploy = async() => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy contract ', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:'0x' + bytecode, arguments:['Hi there!']})
    .send({gas:'1000000', from:accounts[0]});

    console.log('Contract deployed to', result.options.address);
};

deploy();
