import Web3 from 'web3'
import { useLocation } from 'react-router-dom'
// @ts-ignore
import Cookies from 'universal-cookie'

const cookies = new Cookies();

function decode(str1){
  const hex  = str1.toString();
  let str = '';
  for (let n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  return str;
}

const useReferrer = () => {
  const location = useLocation();
  const search  = new URLSearchParams(location.search)
  if(search.get("team")){

    let isVip = false
    let referralCode = search.get('team')
    let leaderCommission = 0

    const strDecode = decode(search.get('team'))
    if (strDecode.slice(-3, -2) === '-') {
      const _leaderCommission = parseInt(strDecode.split('-')[1])
      if (_leaderCommission >= 0 && _leaderCommission <= 10) {
        isVip = true
        referralCode = strDecode.split('-')[0]
        leaderCommission = _leaderCommission
      }
    }

    cookies.set('referal_code', referralCode, { path: '/', domain: 'wedex.app' })
    cookies.set('vipBranch', isVip, { path: '/', domain: 'wedex.app' })
    cookies.set('leaderCommission', leaderCommission, { path: '/', domain: 'wedex.app' })
  }
  const ref = cookies.get('referal_code');
  const vipBranch = (cookies.get('vipBranch')&&cookies.get('vipBranch')!==null)?cookies.get('vipBranch'):false
  const refLeaderCommission = (cookies.get('leaderCommission')&&cookies.get('leaderCommission') !==null)?cookies.get('leaderCommission')&&cookies.get('leaderCommission'):0
  if (ref && ref !== "null") {
    if (Web3.utils.isAddress(ref)) {
      return {
        ref: Web3.utils.toChecksumAddress(ref),vipBranch,refLeaderCommission
      }
    }
  }
  return {
    ref: "0x0000000000000000000000000000000000000000",vipBranch,refLeaderCommission
  }
}
export default useReferrer;