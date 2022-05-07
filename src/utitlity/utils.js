import { loadStdlib } from '@reach-sh/stdlib'
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib'

export const stdlib = loadStdlib(process.env)
stdlib.setWalletFallback(
  stdlib.walletFallback({
    providerEnv: 'TestNet',
    MyAlgoConnect
  })
)

export const getAddressWording = (address, targetAddress) => {
  let defaultAddress = '0x0000000000000000000000000000000000000000'
  console.log(address, defaultAddress)
  let addressesEquate = address === defaultAddress
  if (addressesEquate) address = 'You'
  if (address === undefined) address = '...'
  if (address !== undefined) address = `${address.substring(0, 5)}...`
  return address
}
export const defaultEventName = 'Enter Event Name'
export const defaultEventDescription = 'Enter Event Description'
export const defaultPrice = '20'
export const defaultDeadline = '50'
