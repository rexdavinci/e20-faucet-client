// import { RelayProvider } from '@opengsn/gsn/dist/src/relayclient/RelayProvider'
import { ethers } from 'ethers'
const gsn = require('@opengsn/gsn')


const conf = {
	ourContract: '0x32149B21406A2bb1715Cd0978758EcBA4ac8Db18',
  paymaster:   '0xe2542946E185541d2324e6d435FAd9dFc24B8E41',
  forwarder: '0xa530F85085C6FE2f866E7FdB716849714a89f4CD',
	gasPrice:  20000000000   // 20 Gwei
}

class ETHAPI {
  gsnProvider;
  rpcProvider = new ethers.providers.JsonRpcProvider('https://eth-goerli.alchemyapi.io/v2/9GJ40fZ1PGwqID6jUHOyzdyEsPLqE7Kn')
  signer = new ethers.Wallet(process.env.REAT_APP_SIGNER).connect(this.rpcProvider)

  async connectGSN() {
    console.log(process.env.REACT_APP_SIGNER)
    // this.gsnProvider = await gsn.RelayProvider.newProvider({
    //   provider: new ethers.providers.JsonRpcProvider('https://eth-goerli.alchemyapi.io/v2/9GJ40fZ1PGwqID6jUHOyzdyEsPLqE7Kn'),
    //   config: { paymasterAddress: conf.paymaster, forwarderAddress: conf.forwarder }
    // }).init()

    // this.provider = new ethers.providers.Web3Provider(this.gsnProvider)
    // this.userAddr = this.gsnProvider.origProvider.selectedAddress

    // console.log(this.userAddr)
  }


  // connectGSN = async () => {
  //   await window.ethereum.enable()
  
  //   if (provider != undefined)
  //     return;
  
  //     let gsnProvider = await gsn.RelayProvider.newProvider({
  //     provider: window.web3.currentProvider,
  //     config: { paymasterAddress: conf.paymaster } }).init()
  
  //   provider = new ethers.providers.Web3Provider(gsnProvider)
  //   userAddr = gsnProvider.origProvider.selectedAddress
  
  //   window.app.gsnProvider = gsnProvider
  //   window.app.provider = provider
  //   window.app.userAddr = userAddr
  // }



  // async connectGSN() {
  //   if(!this.gsnProvider) {
  //     this.gsnProvider = await gsn.RelayProvider(this.provider, {
  //         forwarderAddress: conf.forwarder,
  //         paymasterAddress: conf.paymaster,
  //         verbose: false
  //       })
  //   }
  //   this.provider = new ethers.providers.getDefaultProvider(this.gsnProvider)
  //   return this.gsnProvider
  // } 
  // userAddr = this.gsnProvider.origProvider.selectedAddress
}

const ethAPI = new ETHAPI()
export default ethAPI.connectGSN()

  // onboard(){
  //   if (!this.ob){
  //     this.ob = Onboard({
  //       dappId,
  //       hideBranding: true,
  //       networkId,
  //       subscriptions: {
  //         wallet: (wallet) => {
  //           this.provider = new ethers.providers.Web3Provider(wallet.provider);
  //         },
  //       },
  //       walletCheck: [
  //         {
  //           checkName: 'accounts'
  //         },
  //         { checkName: 'connect' },
  //         { checkName: 'balance' }
  //       ]
  //     });
  //   }
  //   return this.ob;
  // }

  // async connect(){
  //   const result = await this.onboard().walletSelect()
  //   if(result){
  //     this.connected = await this.onboard().walletCheck()
  //   }
  // }

  // isConnected(){
  //   return !!this.provider && !!this.ob
  // }

  // getSigner() {
  //   return this.provider.getSigner()

  // }
  
  // getAddress() {
  //   if(this.connected){
  //     return this.getSigner().getAddress()
  //   }
  // }

  // async getNetwork() {
  //   const net = (await (await this.provider).getNetwork()).name
  //   return net
  // }

  // toBigNumber (number: string) {
  //   return ethers.utils.parseEther(number)
  // }

  // getAddressBalance() {
  //   return this.provider.getBalance(this.getAddress())
  // }

  // // Creates an interface to create an an instance of a contract (swipswap)
  // async contractInterface ({ contractAddress, contractABI }) {
  //   return new Contract(
  //       contractAddress,
  //       contractABI,
  //       this.getSigner()
  //   )
  // }

  // async getTokenBalance ({ tokenContract }) {
  //   return tokenContract.balanceOf(this.getAddress())
  // }

  // // gets the spending allowance of a given tokenAddress (pool) by a swipswap contract
  // async checkAllowance ({ swipSwapAddress, tokenContract }) {
  //     const allowance = await tokenContract.allowance(await this.getAddress(), swipSwapAddress)
  //     const decimals = await tokenContract.decimals()
  //     const tokenSymbol = await tokenContract.symbol()
  //     return { allowance, decimals, tokenSymbol }
  // }







// class APP {
//   provider: undefined,

//   async GSNProvider() {
//     return await new gsn.RelayProvider(window.ethereum, {
//       forwarderAddress: conf.forwarder,
//       paymasterAddress: conf.paymaster,
//       verbose: false
//     }).init()
//   }
// }

// let provider = new ethers.providers.Web3Provider(gsnProvider)
// let userAddr = gsnProvider.origProvider.selectedAddress

// const app = {
// 	gsnContractCall: gsnContractCall,
// 	listenToEvents: listenToEvents,
// 	gsnPaymasterRejection: gsnPaymasterRejection, 
// 	conf: conf,
// 	ethers: ethers,
// 	provider: provider,
// 	addr: flagAddr,
// 	abi: flagAbi
// };