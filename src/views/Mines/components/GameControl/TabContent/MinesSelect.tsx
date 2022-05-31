import React from 'react'
import { Flex, Input } from 'wedex-uikit/src'
import styled from 'styled-components'
import { Select } from 'antd'

const { Option } = Select

interface Props {
  mines: number
}

const Mines: React.FC<Props> = () => {
  const selectNumber = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
  ]
  return (
    <div className="mt-4">
      <Flex justifyContent="space-between" className="mb-2 px-3">
        <span>Mines</span>
      </Flex>
      <GameMines>
        {/* <CoinImg src="https://bc.game/coin/USDT.black.png" alt="" /> */}
        <StyledSelect
          dropdownStyle={{
            borderRadius: '1.25rem',
            padding: '0.125rem 0.375rem',
            backgroundColor: '#17181b',
            boxShadow: '0 0 8px rgb(0 0 0 / 14%)',
            height: 'auto',
            minHeight: '16.25rem',
          }}
          dropdownClassName="minesDropdown"
          defaultValue={1}
        >
          {selectNumber.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <StyledOption value={item.id} key={index}>
              {item.id}
            </StyledOption>
          ))}
        </StyledSelect>
      </GameMines>
    </div>
  )
}

const CoinImg = styled.img`
  order: -1;
  margin-right: 0.3125rem;
  margin-left: -0.625rem;
  width: 1.25rem;
  height: 1.25rem;
`

const GameMines = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(49, 52, 60, 0.4);
  border-radius: 1.5rem;
  height: 2.75rem;
`

const StyledSelect = styled(Select)`
  && {
    background-color: transparent;
    width: 100%;
    .ant-select-selector {
      background-color: transparent;
      border: none;
      color: #fff;
      padding: 0 1.25rem;
      box-shadow: none !important;
      border-color: transparent;
      .ant-select-selection-item {
        padding-right: 0;
      }
    }
    .ant-select-arrow {
      right: 20px;
      color: rgba(153, 164, 176, 0.6);
    }
  }
  .minesDropdown {
    padding: 0.25rem;
    font-weight: 100;
  }
`
const StyledOption = styled(Option)`
  div {
    padding: 0.25rem;
    font-weight: 100;
    .ant-select-item-option-active {
      padding: 0.25rem;
    }
  }
`

export default Mines
