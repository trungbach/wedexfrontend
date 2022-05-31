import React, { useState } from 'react'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/layout/Page'
import { Button } from '@pancakeswap/uikit'
import { useLocation } from 'react-router-dom'
import useConfirmWithdraw from '../../hooks/useConfirmWithdraw'

const ConfirmWithdraw: React.FC = () => {
  const { t } = useTranslation()
  const onConfirmWithdraw = useConfirmWithdraw
  const location = useLocation()
  const [called, setCalled] = useState(false)
  const [message, setMessage] = useState('')
  const [imgPath, setImgPath] = useState('')
  const callActive = async () => {
    if (called) return
    setCalled(true)

    const search = new URLSearchParams(location.search)
    const id = search.get('id')
    const key = search.get('key')

    if (id === undefined || key === undefined) {
      return
    }

    const response = await onConfirmWithdraw(id, key)
    if (response.data) {
      setMessage(response.data.message)
      if (response.data.success) {
        setImgPath('/images/luck-activated.svg')
      } else {
        setImgPath('/images/fail-activate.svg')
      }
    }
  }

  callActive()

  return (
    <Page>
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <img src={imgPath} alt={message} width='80px' />
        <p style={{ marginTop: '10px' }}>{message}</p>
        <div style={{ marginTop: '20px' }}><Button as="a" href="/">Homepage</Button></div>
      </div>
    </Page>
  )
}

export default ConfirmWithdraw
