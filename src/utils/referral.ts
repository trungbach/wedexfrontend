import BigNumber from "bignumber.js";
import {getBalanceAmount} from "./formatBalance";

export const formatNumber = (number: number | string) => {
  return `$${(Number(number)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })}`
}

export const formatToken = (token: string) => {
  return `${token.substr(0, token.length - 6)  }******`;
}

export const getChildrenList = (userIdList: number[]) => {
  let idList = userIdList;
  let finalList = []
  while(idList.length > 0){
    const list = idList;
    const fList = MOCK_REFERRAL_DATA.filter(item => list.includes(item.parentId));
    idList = fList.map(item => item.userId);
    finalList = finalList.concat(fList);
  }
  return finalList;
  
}

export const MOCK_REFERRAL_DATA = [
  {
    "userId": 1,
    "token": "82862daf-cfe2-422a-aa16-18b466a93727",
    "revenue": 47710,
    "profit": 2682,
    "source": "F1"
  },
  {
    "userId": 2,
    "token": "98aa4a73-7315-4b53-a260-3c3dfb0d6cb8",
    "revenue": 38513,
    "profit": 4948,
    "source": "F1"
  },
  {
    "userId": 3,
    "token": "03bfabc2-2d92-41aa-bc80-7a126a0683d4",
    "revenue": 35550,
    "profit": 3751,
    "source": "F2",
    parentId: 1
  },
  {
    "userId": 4,
    "token": "472a1088-4472-4765-8159-c04f1b5ba0fe",
    "revenue": 15178,
    "profit": 3695,
    "source": "F2",
    parentId: 2
  },
  {
    "userId": 5,
    "token": "b0ae14ce-8b08-4383-91df-65631973e58c",
    "revenue": 15195,
    "profit": 3201,
    "source": "F2",
    parentId: 1
  },
  {
    "userId": 6,
    "token": "671880a7-760a-4e0b-935d-7782aa043196",
    "revenue": 12140,
    "profit": 1085,
    "source": "F2",
    parentId: 2
  },
  {
    "userId": 8,
    "token": "f9ea549b-492e-4465-ad81-f537e2240340",
    "revenue": 19263,
    "profit": 1913,
    "source": "F3",
    parentId: 3
  },
  {
    "userId": 9,
    "token": "b56f2d31-bd0f-4381-a941-c1624d1aeb7e",
    "revenue": 42867,
    "profit": 1099,
    "source": "F3",
    parentId: 4
  },
  {
    "userId": 10,
    "token": "068e53e1-3722-49e8-9d77-63ade59e01de",
    "revenue": 28128,
    "profit": 1731,
    "source": "F3",
    parentId: 5
  },
  {
    "userId": 11,
    "token": "392e8948-a612-47d5-a95f-71167be3aded",
    "revenue": 20538,
    "profit": 4473,
    "source": "F4",
    parentId: 10
  },
  {
    "userId": 12,
    "token": "5057634e-c1cc-4116-b09d-ea0baebeb4ee",
    "revenue": 14448,
    "profit": 3609,
    "source": "F4",
    parentId: 8
  }
]