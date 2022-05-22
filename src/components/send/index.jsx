import React, { useState, useEffect, useMemo } from 'react'
import { useLocation } from "react-router-dom";
import { Row, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { Input } from 'semantic-ui-react'

import Popup from './popup'
import Asset from './asset'
import { form } from './constant.js'
import './styles.scss'


const Send = (props) => {

  const { state } = useLocation();
  const [isOpen, setIsOpen] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [assetItem, setAssetItem] = useState(state.assetItem)

  const { register, setValue, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data, e) => {
    console.log('data', data)
    setIsSuccess(true)
  };

  useEffect(() => {
    setValueForm()
  }, [])

  const setValueForm = () => {
    form(state.walletID, assetItem).map((item, index) => setValue(item.label, item.defaultValue))
  }

  const openPopup = () => {
    setIsOpen(true)
  }

  const onClose = () => {
    setIsOpen(false)
    setIsSuccess(false)
  }

  const handleAssetClick = (item) => {
    setAssetItem(item)
    setIsOpen(false)
  }

  const customOnChange = (e, name) => {
    setValue(name, e.target.value)
  }

  const handleReset = () => {
    setValueForm()
    reset()
  }

  const showAsset = useMemo(() => {
    return (
      <Container>
        <Row>
          <Asset onClose={onClose} assets={state.assets} handleAssetClick={handleAssetClick} />
        </Row>
      </Container>)
  }, [state.assets])

  const showPopup = useMemo(() => {
    return (
      <Container >
        <Row>
          <Popup title='Successfully sent'
            content='Your {asset} has been sent!
            Thank you for using our service'
            button='OK'
            onClose={onClose}
            assetItem={assetItem}
          />
        </Row>
      </Container>)
  }, [assetItem])

  const renderItem = (item) => {

    switch (item.type) {

      case 'seletct':
        return (
          <>
            <Input type={item.type} disabled={item.isDisabled} value={item.defaultValue} className='primary-input'
              {...register(`${item.label}`, { required: item.required, onChange: (e) => customOnChange(e, item.label) })}
              action={item.icon && { icon: <img src={item.icon} alt='' />, onClick: () => openPopup() }}
              icon={item.iconAsset && <img src={item.iconAsset} alt='' />}
              iconPosition="left"
            />
          </>
        )
      case 'number':
        return (
          <>
            <Input type={item.type} {...register(`${item.label}`, { required: item.required, max: item.max, onChange: (e) => customOnChange(e, item.label) })} disabled={item.isDisabled} value={item.defaultValue} className='primary-input' max={item.max} />
          </>
        )
      default:
        return (
          <>
            <Input type={item.type} {...register(`${item.label}`, { required: item.required, onChange: (e) => customOnChange(e, item.label) })} disabled={item.isDisabled} value={item.defaultValue} className='primary-input' />
          </>
        )
    }
  }

  return (
    <Container className='send-page'>
      <div className={`${(isOpen || isSuccess) && 'hidden'}`}>
        <Row>
          <div className='title'>Send Assets</div>
        </Row>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className='form-asset'>
            {
              form(state.walletID, assetItem).map((item, index) => (
                <div key={index} className='input-item'>
                  <label>{item.label}</label>
                  <span className='helper'>{item.helper}</span>
                  {renderItem(item)}
                  {errors[item.label] && <p className='err'>{item.message}</p>}

                </div>
              ))
            }
            <div className='wrapper-btn'>
              <input
                className='second-btn'
                type="reset"
                value="Cancel"
                onClick={() => handleReset()}
              />
              <input type="submit"
                value="Send"
                className='primary-btn' />
            </div>
          </form>
        </div>
      </div>
      {isOpen && showAsset}
      {isSuccess && showPopup}
    </Container>
  )
}

export default Send