import React from 'react'
import { Button } from 'semantic-ui-react'

import './styles.scss'

const Popup = (props) => {
    const { onClose, content, title, button, assetItem } = props

    return (
        <div className='popup'>
            <p className='popup--title'>{title}</p>
            <p className='popup--content'>{content.replace('{asset}', assetItem.key)}</p>
            <Button className='popup--close' content={button} onClick={() => onClose()} />
        </div>
    )
}

export default Popup