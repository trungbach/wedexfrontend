import React, { useState } from 'react';
import styled from 'styled-components';
import { Flex } from 'wedex-uikit/src';

interface Props {
  typeBet?: string // all bets show player column, my bets hide.
}

const MAX_ROWS = 15;
const ClassicBetTable: React.FC<Props> = () => {

  const [isShowMore, setIsShowMore] = useState(false);

  const handleToggleShowMore = () => {
    setIsShowMore(!isShowMore);
  }

  const allBets = [
    {
      player: "Trung bach van trung bacj vam trimg",
      cash_out: "1.56x",
      amount: "0.00045329222",
      profit: "betting"
    },
    {
      player: "Trung",
      cash_out: "1.56x",
      amount: "0.00045329",
      profit: "0.00002342"
    },
    {
      player: "Trung",
      cash_out: "1.56x",
      amount: "0.00045329",
      profit: "0.00002342"
    },
    {
      player: "Trung bach van trung bacj vam trimg",
      cash_out: "1.56x",
      amount: "0.00045329222",
      profit: "0.00002342"
    },
    {
      player: "Trung",
      cash_out: "1.56x",
      amount: "0.00045329",
      profit: "0.00002342"
    },
    {
      player: "Trung",
      cash_out: "1.56x",
      amount: "0.00045329",
      profit: "0.00002342"
    },
    {
      player: "Trung bach van trung bacj vam trimg",
      cash_out: "1.56x",
      amount: "0.00045329222",
      profit: "0.00002342"
    },
    {
      player: "Trung",
      cash_out: "1.56x",
      amount: "0.00045329",
      profit: "0.00002342"
    },
    {
      player: "Trung",
      cash_out: "1.56x",
      amount: "0.00045329",
      profit: "0.00002342"
    },
    {
      player: "Trung",
      cash_out: "1.56x",
      amount: "0.00045329",
      profit: "0.00002342"
    },
    {
      player: "Trung",
      cash_out: "1.56x",
      amount: "0.00045329",
      profit: "0.00002342"
    },
    {
      player: "Trung",
      cash_out: "1.56x",
      amount: "0.00045329",
      profit: "0.00002342"
    },
    {
      player: "Trung bach van trung bacj vam trimg",
      cash_out: "1.56x",
      amount: "0.00045329222",
      profit: "0.00002342"
    },
    {
      player: "Trung",
      cash_out: "1.56x",
      amount: "0.00045329",
      profit: "0.00002342"
    },
    {
      player: "Trung",
      cash_out: "1.56x",
      amount: "0.00045329",
      profit: "0.00002342"
    },
    {
      player: "Trung",
      cash_out: "1.56x",
      amount: "0.00045329",
      profit: "0.00002342"
    },
    {
      player: "Trung",
      cash_out: "1.56x",
      amount: "0.00045329",
      profit: "0.00002342"
    },
    {
      player: "Trung",
      cash_out: "1.56x",
      amount: "0.00045329",
      profit: "0.00002342"
    },
  ]
  const renderBets =
    <StyledWrapper>
      <StyledScroll>
        <StyledTable>
          <StyledTHead>
            <tr >
              <StyledPlayerTh>Player</StyledPlayerTh>
              <StyledCashOutTh>Cash Out</StyledCashOutTh>
              <th>Amount</th>
              <th>Profit</th>
            </tr>
          </StyledTHead>
          <StyledTBody>
            {allBets.map((bet, index) => {
              if (!!(!isShowMore && index < MAX_ROWS) || isShowMore) {
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <tr key={index}>
                    <StyledPlayerTd >
                      <div>
                        {bet.player}
                      </div>
                    </StyledPlayerTd>
                    <td>
                      <StyledCashOut>
                        {bet.cash_out}
                      </StyledCashOut>
                    </td>

                    <td>
                      <StyledAmount>
                        <img src="https://bc.game/coin/BCD.black.png" alt="" />
                        <span>{bet.amount}</span>
                      </StyledAmount>
                    </td>
                    <td>
                      <StyledProfit>
                        {bet.profit === 'betting' ? 'betting' :
                          <>
                            <img src="https://bc.game/coin/BCD.black.png" alt="" />
                            <span>{bet.profit}</span>
                          </>
                        }

                      </StyledProfit>
                    </td>
                  </tr>
                )
              }
              return null;
            })}
          </StyledTBody >
        </StyledTable>
      </StyledScroll>
    </StyledWrapper>



  return (
    <div>
      {renderBets}
      <StyledFooter>
        <StyledState>80/234 Player</StyledState>
        <StyledToggleShowMore onClick={handleToggleShowMore}>
          {isShowMore ?
            <>
              Show less
              <img src="images/minigame/up-arrow.png" alt="" />
            </> :
            <>
              Show more
              <img src="images/minigame/down-arrow.png" alt="" />
            </>
          }
        </StyledToggleShowMore>
      </StyledFooter>
    </div>
  );
}

const StyledWrapper = styled.div`
  position: relative;
`

const StyledScroll = styled.div`
  height: calc(${MAX_ROWS} * 3rem); 
  margin-top: 3rem;
  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.input};;
    border-radius: 10rem;
  }

`

const StyledTable = styled.table`
  color: #fff;
  width: 100%;
`

const StyledTHead = styled.thead`
  position:absolute;   
  top:-3rem;
  left: 0;
  right: 0;
  z-index:2;
  height: 3rem;
  display: flex;
  & > tr {
    width: 100%;
    display: flex;
  }
  & > tr > th {
    font-weight: 400;
    font-size: 1rem;
    padding: 0.875rem 0.375rem;
   
    color: ${({ theme }) => theme.colors.textSubtle};
    text-align: center;
  }
  & > tr > th:first-child {
    text-align: left;
  }
  & > tr > th:last-child {
    text-align: right;
    margin-left: auto;
  }
`

const StyledTBody = styled.tbody`
  & > tr {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
  }
  & > tr:hover {
    background-color: ${({ theme }) => theme.colors.backgroundAltHover};
  }
  & > tr > td {
    font-weight: 400;
    font-size: 1rem;
    text-align: center;
    overflow: hidden;
    vertical-align: middle;
    height: 3rem;
  }
  & > tr > td:first-child {
    border-radius: 0.625rem 0 0 0.625rem;
    text-align: left;
    
  }
  & > tr > td:last-child {
    border-radius: 0 0.625rem 0.625rem 0;
    text-align: right;
  }
`

const StyledPlayerTd = styled.td`
  font-weight: 700 !important;
  div {
    padding: 0 0.375rem;
    width: 6.75rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`

const StyledPlayerTh = styled.th`
  width: 6.75rem;
`

const StyledCashOut = styled.div`
  width: 6.35rem;
  padding: 0 0.375rem;
`

const StyledCashOutTh = styled.th`
  width: 6.35rem;
    padding-right: 0 !important;
    padding-left: 0 !important;
`

const StyledAmount = styled(Flex)`
  padding: 0 0.375rem;
  color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  font-weight: bold;
  overflow: hidden;
  & > img {
    width: 1.4rem;
    height: 1.4rem;
    margin-right: 0.25em;
  }
  span {
    width: 6.6rem;
    display: inline-block;
  }
`

const StyledProfit = styled(StyledAmount)`
  justify-content: right;
`

const StyledFooter = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.4375rem;
  position: relative;
  z-index: 11;
`
const StyledState = styled.div`
  &::before {
    content: "";
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 0.4375rem;
    height: 0.4375rem;
    border-radius: 0.25rem;
    margin-right: 0.4375rem;
  }
`

const StyledToggleShowMore = styled.div`
  display: flex;
  align-items: center;
  width: 7.5rem;
  height: 2rem;
  border-radius: 1rem;
  padding: 0 0.625rem;
  white-space: nowrap;
  background-color: ${({ theme }) => theme.colors.input};
  cursor: pointer;
  img {
    width: 1rem;
    height: 1rem;
    margin-left: 0.375rem;
  }
`

export default ClassicBetTable;