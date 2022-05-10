import { loadStdlib } from '@reach-sh/stdlib'
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib'

export const stdlib = loadStdlib(process.env)
stdlib.setWalletFallback(
  stdlib.walletFallback({
    providerEnv: {
      ALGO_TOKEN: '',
      ALGO_SERVER: 'https://testnet-api.algonode.cloud',
      ALGO_PORT: '',
      ALGO_INDEXER_TOKEN: '',
      ALGO_INDEXER_SERVER: 'https://testnet-idx.algonode.cloud',
      ALGO_INDEXER_PORT: ''
    },

    MyAlgoConnect
  })
)

export const defaultEventName = 'Enter Event Name'
export const defaultEventDescription = 'Enter Event Description'
export const defaultPrice = '5'
export const defaultDeadline = '25'
