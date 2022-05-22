import React from 'react'
import { Image } from 'semantic-ui-react'

import Close from '../../../assets/Images/close.svg'

const Asset = (props) => {
    const { onClose, assets, handleAssetClick } = props

    return (
        <div className='asset'>
            <div className='asset--title'>
                <p>Assets</p>
                <Image className='close-btn' src={Close} onClick={() => onClose()} />
            </div>
            <div>
                {assets.map((item, index) => (
                    <div key={index} className='asset-item' onClick={() => handleAssetClick(item)}>
                        <div className='asset-item--icon'>
                            <img src={item.icon} alt={item.asset} />
                        </div>
                        <div className='asset-item--info'>
                            <p className='asset-item--title'>{item.text}</p>
                            <p className='dong'>{item.dong}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Asset