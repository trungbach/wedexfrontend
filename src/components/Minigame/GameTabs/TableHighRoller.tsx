import React from 'react';
import styled from 'styled-components';
import { Flex } from 'wedex-uikit/src';
import EmptyBet from './EmptyBet';

interface Props {
  typeBet?: string;
}

const TableHighRoller: React.FC<Props> = () => {

  const allBets = [
    {
      game: 66247800366590818,
      player: "Trung",
      amount: "18:27:31",
      multiplier: "1.00",
      profit: "0.00002342"
    },
    {
      game: 66247800366590818,
      player: "Trung",
      amount: "18:27:31",
      multiplier: "1.00",
      profit: "0.00002342"
    },
    {
      game: 66247800366590818,
      player: "Trung",
      amount: "18:27:31",
      multiplier: "1.00",
      profit: "0.00002342"
    },
    {
      game: 66247800366590818,
      player: "Trung",
      amount: "18:27:31",
      multiplier: "1.00",
      profit: "0.00002342"
    },
    {
      game: 66247800366590818,
      player: "Trung",
      amount: "18:27:31",
      multiplier: "1.00",
      profit: "0.00002342"
    },
  ]
  const renderBets = allBets.length === 0 ? (
    <EmptyBet />
  ) : (
    <StyledTable>
      <StyledTHead>
        <tr>
          <th className="col-lg-3">Game</th>
          <th className="col-lg-2">Player</th>
          <th className="col-lg-2">Bet Amount</th>
          <th className="col-lg-3">Multiplier</th>
          <th className="col-lg-2">Profit Amount</th>
        </tr>
      </StyledTHead>
      <StyledTBody>{allBets.map((bet, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <tr key={index}>
          <td className="col-lg-3">{bet.game}</td>
          <td className="col-lg-2">{bet.player}</td>
          <td className="col-lg-2">
            <StyledBet>
              <img src="https://bc.game/coin/BCD.black.png" alt="" />
              <span>{bet.amount}</span>
            </StyledBet>

          </td>
          <td className="col-lg-3">{bet.multiplier}x</td>
          <td className="col-lg-2">
            <StyledProfit>
              <img src="https://bc.game/coin/BCD.black.png" alt="" />
              <span>{bet.profit}</span>
            </StyledProfit>
          </td>
        </tr>
      ))}</StyledTBody>
    </StyledTable>
  )

  return (
    <div>
      {renderBets}
    </div>
  );
}

const StyledTable = styled.table`
  color: #fff;
  width: 100%;
`

const StyledTHead = styled.thead`
  & > tr > th {
    padding: 0.875rem 0.75rem;
    font-weight: 400;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textSubtle};
    text-align: center;
  }
  & > tr > th:first-child {
    text-align: left;
  }
  & > tr > th:last-child {
    text-align: right;
  }
`

const StyledTBody = styled.tbody`
  & > tr {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
    align-items: center;
  }
  & > tr:hover {
    background-color: ${({ theme }) => theme.colors.backgroundAltHover};
  }
  & > tr > td {
    padding: 0.875rem 0.75rem;
    font-weight: 400;
    font-size: 1rem;
    text-align: center;
    overflow: hidden;
    vertical-align: middle;
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

const StyledBet = styled(Flex)`
  justify-content: center;
  font-weight: bold;
  & > img {
    width: 1.4rem;
    height: 1.4rem;
    margin-right: 0.25em;
  }
`

const StyledProfit = styled(StyledBet)`
  justify-content: right;
  color: ${({ theme }) => theme.colors.primary};
`

export default TableHighRoller;