import React, { useState } from 'react'
import styled from 'styled-components'
import { Card, CardBody, CardHeader } from '@pancakeswap/uikit'
import useLoadUserInfo from '../../hooks/useLoadUserInfo'
import useLoadUserWithdrawals from '../../hooks/useLoadUserWithdrawals'
import Page from '../../components/layout/Page'
import { Button, ToastContainer, useModal } from '../../wedex-uikit/src'
import useCancelWithdraw from '../../hooks/useCancelWithdraw'
import CancelWithdrawModal from './components/CancelWithdrawalModal'

const History: React.FC = () => {
  const status = ["Not Confirm", "Confirmed", "Paid", "Cancelled"]
  const onLoadUserInfo = useLoadUserInfo
  const onLoadHistoryData = useLoadUserWithdrawals
  const onCancelWithdraw = useCancelWithdraw
  const [logged, setLogged] = useState(false)
  const [userInfo, setUserInfo] = useState(undefined)
  const [historyData, setHistoryData] = useState(undefined)
  const [userInfoLoading, setUserInfoLoading] = useState(false)
  const [toasts, setToasts] = useState([])
  const loadUserInfo = async (loginCall, page) => {
    if (loginCall || (!userInfoLoading && userInfo === undefined) || (!userInfoLoading && historyData === undefined)) {
      setUserInfoLoading(true)
      const response = await onLoadUserInfo()
      if (response.data !== undefined && response.data.success) {
        setUserInfo(response.data.user)
        setLogged(true)
        console.log("userInfo", userInfo)
      } else {
        setUserInfo(null)
      }
      const historyResponse = await onLoadHistoryData(page)
      if (historyResponse.data !== undefined && historyResponse.data.success) {
        console.log(historyResponse.data)
        setHistoryData(historyResponse.data.data)
        console.log(historyData)
      } else {
        setHistoryData(null)
      }
      setUserInfoLoading(false)
    }
  }
  const handleCancelWithdraw = async (id) => {
    const response = await onCancelWithdraw(id)
    let toast
    const now = Date.now()
    if (response.data.success) {
      toast = {
        id: `id-${now}`,
        title: response.data.message,
        type: 'success',
      }
    } else if (response.data !== undefined) {
      toast = {
        id: `id-${now}`,
        title: response.data.message,
        type: 'danger',
      }
    }
    loadUserInfo(false, 1)
    setToasts((prevToasts) => [toast, ...prevToasts])
  }
  loadUserInfo(false, 1)
  const handleRemove = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((prevToast) => prevToast.id !== id))
  }
  // if (userInfoLoading || historyData === undefined)
  //   return (<div style={{ textAlign: 'center' }}><img src='/images/lucky-loading.gif' alt='loading' /></div>)
  // if (!logged)
  //   return (
  //     <Page>
  //       <Button as="a" href="/">Return to HomePage</Button>
  //     </Page>
  //   )
  return (
    <Page>
      <Card>
        <CardHeader>
          Withdrawal History
        </CardHeader>
        <CardBody>
          <Table>
            <thead>
              <tr>
                <RankTh>ID</RankTh>
                <RankTh>Amount</RankTh>
                <RankTh>To Address</RankTh>
                <RankTh>Date</RankTh>
                <ConditionTh>Status</ConditionTh>
                <ConditionTh>Action</ConditionTh>
              </tr>
            </thead>
            <tbody>
              {
                historyData.list.map(row => {
                  return (
                    <tr key={row.id}>
                      <RankTd>{row.id}</RankTd>
                      <RankTd>{row.amount / 100}</RankTd>
                      <td>{row.wallet.slice(0, 11)}.....{row.wallet.slice(row.wallet.length - 11, row.wallet.length)}</td>
                      <td>{new Date(row.createdAt).toLocaleString()} </td>
                      <td>{status[row.status]}</td>
                      <td>
                        {row.status === 0 && ((new Date(row.createdAt).getTime() <= Date.now() - 30 * 1000)) && <Button scale="sm" onClick={() => {
                          handleCancelWithdraw(row.id)
                        }}>Cancel</Button>}</td>
                    </tr>

                  )
                })
              }
            </tbody>
          </Table>
        </CardBody>
      </Card>
      <ToastContainer toasts={toasts} onRemove={handleRemove} />
    </Page>
  )
}
const Table = styled.table`
      width: 100%;
      color: ${({ theme }) => theme.colors.text};
      border: solid 1px;
      border-color: ${({ theme }) => theme.colors.cardBorder};
      border-radius: 8px;

      th,
      td {
        vertical-align: middle;
        border-bottom: solid 1px;
        border-bottom-color: ${({ theme }) => theme.colors.cardBorder};
      }

      & > thead th {
        font-size: 16px;
        padding: 8px;

        ${({ theme }) => theme.mediaQueries.sm} {
        padding: 16px;
        font-size: 18px;
      }
      }

      td  {
        font-size: 14px;
        padding: 8px;

        ${({ theme }) => theme.mediaQueries.sm} {
        padding: 16px;
        font-size: 16px;
      }
      }
      `;

const ProfitTd = styled.td`
      text-align: center;
      background: ${({ theme }) => theme.colors.input};
      `;

const RankTh = styled.th`
      text-align: left;
      `;

const RankTd = styled.td`
      min-width: 60px;
      `;

const ProfitTh = styled.th`
      text-align: center;
      background: ${({ theme }) => theme.colors.input};
      `;

const ConditionTh = styled.th`
      text-align: center;
      `;
export default History;