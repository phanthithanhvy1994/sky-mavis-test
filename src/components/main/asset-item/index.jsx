import React from 'react'

import './styles.scss'

const AssetItem = (props) => {
  const { item, handleAssetClick } = props

  return (
    <div className='asset-item' onClick={() => handleAssetClick(item)}>
      <div className='asset-item--icon'>
        <img src={item.icon} alt={item.asset} />
      </div>
      <div className='asset-item--info'>
        <p className='asset-item--title'>{item.text}</p>
        <p className='dong'>{item.dong}</p>
      </div>
    </div>
  )
}

export default AssetItem