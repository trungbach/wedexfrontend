/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Team } from 'config/constants/types'
import BigNumber from 'bignumber.js'
import {TeamData, TeamsState, TeamState} from '../types'
import { getTeams, getMoreReferrals } from './helpers'


const teamData: TeamState = {
  name: '',
  address: '',
  users: 0,
  totalCommission: new BigNumber(0),
  points: new BigNumber(0),
  referralAddresses: [],
  referralList: [],
  isVip: false,
  owner: {
    name: '',
    address: '',
    avatar: null,
    vipBranch: false
  },
  avatar: null,
  nftCommission: new BigNumber(0)
}

const initialState: TeamsState = {
  isInitialized: false,
  isLoading: true,
  data: teamData,
}

export const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.isLoading = true
    },
    fetchFailed: (state) => {
      state.isLoading = false
      state.isInitialized = true
    },
    teamFetchSucceeded: (state, action: PayloadAction<Team>) => {
      state.isInitialized = true
      state.isLoading = false
      state.data[action.payload.id] = action.payload
    },
    teamsFetchSucceeded: (state, action: PayloadAction<TeamState>) => {
      state.isInitialized = true
      state.isLoading = false
      state.data = action.payload
    },
    referralsFetchSucceeded: (state, action: PayloadAction<Array<TeamData>>) => {
      state.isInitialized = true
      state.isLoading = false
      if (state.data.referralList.length < state.data.users) {
        state.data.referralList = [...state.data.referralList, ...action.payload]
      }
    }
  },
})

// Actions
export const { fetchStart, teamFetchSucceeded, fetchFailed, teamsFetchSucceeded, referralsFetchSucceeded } = teamsSlice.actions

// Thunks
export const fetchTeams = (account) => async (dispatch) => {
  try {
    dispatch(fetchStart())
    const teams = await getTeams(account)
    dispatch(teamsFetchSucceeded(teams))
  } catch (error) {
    dispatch(fetchFailed())
  }
}

export const fetchReferrals = (accounts) => async (dispatch) => {
  try {
    dispatch(fetchStart())
    const referrals = await getMoreReferrals(accounts)
    dispatch(referralsFetchSucceeded(referrals))
  } catch (error) {
    dispatch(fetchFailed())
  }
}

export default teamsSlice.reducer
