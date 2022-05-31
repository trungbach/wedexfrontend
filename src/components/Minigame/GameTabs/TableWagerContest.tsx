import React from 'react';
import styled from 'styled-components';
import { Flex } from 'wedex-uikit/src';
import EmptyBet from './EmptyBet';

interface Props {
  typeBet?: string;
}

const TableWagerContest: React.FC<Props> = () => {

  const allWagers = [
    {
      rank: 1,
      player: "Trung",
      wagered: "0.00002342",
      multiplier: "1.00",
      prize: "0.00002342"
    },
    {
      rank: 2,
      player: "Trung",
      wagered: "0.00002342",
      multiplier: "1.00",
      prize: "0.00002342"
    },
    {
      rank: 3,
      player: "Trung",
      wagered: "0.00002342",
      multiplier: "1.00",
      prize: "0.00002342"
    },
    {
      rank: 4,
      player: "Trung",
      wagered: "0.00002342",
      multiplier: "1.00",
      prize: "0.00002342"
    },
    {
      rank: 5,
      player: "Trung",
      wagered: "0.00002342",
      multiplier: "1.00",
      prize: "0.00002342"
    },
  ]
  const renderWager = allWagers.length === 0 ? (
    <EmptyBet />
  ) : (
    <StyledTable>
      <StyledTHead>
        <tr>
          <th className="col-lg-3">#</th>
          <th className="col-lg-3">Player</th>
          <th className="col-lg-3">Wagered</th>
          <th className="col-lg-3">Prize</th>
        </tr>
      </StyledTHead>
      <StyledTBody>{allWagers.map((wager, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <tr key={index}>
          <td className="col-lg-3">{wager.rank}</td>
          <td className="col-lg-3">{wager.player}</td>
          <td className="col-lg-3">
            <StyledWager>
              <span>$ {wager.wagered}</span>
            </StyledWager>
          </td>
          <td className="col-lg-3">
            <StyledPrize>
              <span>$ {wager.prize}</span>
            </StyledPrize>
          </td>
        </tr>
      ))}</StyledTBody>
    </StyledTable>
  )

  return (
    <div>
      {renderWager}
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
    text-align: left;
  }
  & > tr > th:last-child {
    text-align: right;
  }
`

const StyledTBody = styled.tbody`
  & > tr {
    align-items: center;
  }
  & > tr > td {
    padding: 0.875rem 0.75rem;
    font-weight: 400;
    font-size: 1rem;
    text-align: left;
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

const StyledWager = styled(Flex)`
  font-weight: bold;
  justify-content: left;
  color: ${({ theme }) => theme.colors.primary};
`

const StyledPrize = styled(StyledWager)`
  justify-content: right;
`

export default TableWagerContest;