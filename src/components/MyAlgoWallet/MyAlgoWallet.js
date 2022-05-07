import React, { useState } from 'react'
import ConnectWalletButton from './ConnectButton/ConnectWalletBtn'
import { MyAlgoWalletMain } from './MyAlgoWallet.styles'
import { stdlib } from '../../utitlity/utils'

const MyAlgoWallet = ({ setAccount, setBal }) => {
  const [accountAddress, setAccountAddress] = useState('')
  const connectWallet = async () => {
    try {
      await getAccount()
    } catch (err) {
      console.log(err)
    }
  }
  const getAccount = async () => {
    try {
      const acc = await stdlib.getDefaultAccount()
      setAccount(acc)
      setAccountAddress(acc.networkAccount.addr)
      console.log(acc)
      console.log('Account :' + acc.networkAccount.addr)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <MyAlgoWalletMain>
        <ConnectWalletButton
          accountAddress={accountAddress}
          connectWallet={connectWallet}
        />
      </MyAlgoWalletMain>
    </div>
  )
}

export default MyAlgoWallet
