import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Menu } from 'semantic-ui-react'
import { Row, Col, Container } from 'react-bootstrap';

import Account from '../../assets/Images/account.svg'

import MyWallet from './my-wallet'
import AssetItem from './asset-item'
import { menu, assets, walletID } from './constant.js'

import './styles.scss'

const Main = (props) => {
  const navigate = useNavigate();
  const [assetsList, setAssetsList] = useState([])
  const [assetItem, setAssetItem] = useState(assets[0])

  useEffect(() => {
    const list = assets.filter(item => item.id !== assetItem.id)
    setAssetsList(list)
  }, [assetItem])

  const handleItemClick = () => {
    navigate('/send', { state: { assetItem: assetItem, walletID: walletID, assets: assets } });
  }

  const handleAssetClick = (assetItem) => {
    setAssetItem(assetItem)
  }

  return (
    <Container className='main-page'>
      <Row>
        <Col xs={6}>
          <div className='app-name'>Ronin Wallet</div>
        </Col>
        <Col xs={6} className="right account">
          <img src={Account} alt="logo" />
        </Col>
      </Row>
      <MyWallet data={assetItem} walletID={walletID}></MyWallet>
      <div>
        <Menu secondary>
          {menu.map((item, index) => (
            <Menu.Item
              key={index}
              className={!item.isEnabled ? 'disabled' : ''}
              name={item.name}
              active={item.isEnabled}
              onClick={() => handleItemClick()}
            ><span><img src={item.url} alt={item.name} /></span>
              {item.name}
            </Menu.Item>
          ))}
        </Menu>
      </div>
      <div className='asset-group'>
        <p className='title'>Assets</p>
        {
          assetsList.map((item, index) => (
            <AssetItem key={index} item={item} handleAssetClick={handleAssetClick}></AssetItem>
          ))
        }
      </div>
    </Container>
  )
}

export default Main