import React from 'react'
import './styles.scss'

const MyWallet = (props) => {
  const { data, walletID } = props

  return (
    <div className='my-wallet'>
      <div>
        <p className='my-wallet--info'>My Wallet <span>({walletID})</span></p>
        <p className='my-wallet--value'>{data.text}</p>
        <p className='my-wallet--dong'>{data.dong}</p>
      </div>
    </div>
  )
}

export default MyWallet