import { ethers } from 'ethers'
import Web3 from 'web3-providers-http'
import { FaucetMeta } from '../../../utils'
const gsn = require('@opengsn/gsn')

const paymasterAddress = '0x4eFA8962F68aD36ecb215beCA1B6eF5E29DC4438' // deployed paymaster address
const targetContract = '0xCbe5860657b5e7AFBC2d1E62b3926833B38541C3' // deployed faucet address

const web3Provider = new Web3(process.env.REACT_APP_PROVIDER_URI)

export const receive = async (e) => {
  e.preventDefault()
  const address = e.target['address']['value']
  try {
    const gsnProvider = await gsn.RelayProvider.newProvider({ provider: web3Provider, config: { paymasterAddress }}).init()

    const account = new ethers.Wallet(Buffer.from('1'.repeat(64),'hex'))
    gsnProvider.addAccount({address: account.address, privateKey: Buffer.from(account.privateKey.replace('0x',''),'hex') })

    const etherProvider = new ethers.providers.Web3Provider(gsnProvider)
    const signer = etherProvider.getSigner(account.address)

    const faucet = new ethers.Contract(
      targetContract,
      FaucetMeta.abi,
      signer
    )
    return await faucet.dropTo(address)
  } catch(e) {
    return e.error.message
  }
}

export const sendDrop = async (e, toast, setHash, toastId, setRequested) => {
  setRequested(true)
  const res = await receive(e)
  if(res.hash) {
    toast.success('A drop for you', { toastId })
    setHash(`Successful: https://goerli.etherscan.io/tx/${res.hash}`)
  } else if(typeof res === 'string' && res.includes('reverted')) {
    toast.error(res, { toastId })
  }
  setRequested(false)
}