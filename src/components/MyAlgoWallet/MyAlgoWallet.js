import React, { useRef, useState } from 'react'
import ConnectWalletButton from './ConnectButton/ConnectWalletBtn'
import { MyAlgoWalletMain } from './MyAlgoWallet.styles'
import { stdlib } from '../../utitlity/utils'

const MyAlgoWallet = ({ setAccount, setBal }) => {
  const [accountAddress, setAccountAddress] = useState('')
  const [accountBal, setAccountBal] = useState(0)
  const balance = useRef()
  const connectWallet = async () => {
    try {
      await getAccount()
      await getBalance()
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

  const getBalance = async () => {
    try {
      const acc = await stdlib.getDefaultAccount()
      let rawBalance = await stdlib.balanceOf(acc)
      balance.current = stdlib.formatCurrency(rawBalance, 4)
      setAccountBal(balance.current)
      console.log('Balance :' + balance.current + 'ALGOS')
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
          accountBal={accountBal}
        />
      </MyAlgoWalletMain>
    </div>
  )
}

export default MyAlgoWallet
