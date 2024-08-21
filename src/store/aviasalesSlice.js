/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const aviasalesSlice = createSlice({
  name: 'aviasales',
  initialState: {
    chosenTab: 'cheapest',
    chosenCheckbox: {
      all: false,
      noTransfer: false,
      oneTransfer: false,
      twoTransfers: false,
      threeTransfers: false,
    },
  },
  reducers: {
    changeTab(state, action) {
      state.chosenTab = action.payload
    },
    changeCheckbox(state, action) {
      if (action.payload === 'all') {
        const newState = !state.chosenCheckbox.all
        state.chosenCheckbox = {
          all: newState,
          noTransfer: newState,
          oneTransfer: newState,
          twoTransfers: newState,
          threeTransfers: newState,
        }
      } else {
        state.chosenCheckbox[action.payload] = !state.chosenCheckbox[action.payload]

        if (!state.chosenCheckbox[action.payload]) {
          state.chosenCheckbox.all = false
        }
        if (
          state.chosenCheckbox.noTransfer &&
          state.chosenCheckbox.oneTransfer &&
          state.chosenCheckbox.twoTransfers &&
          state.chosenCheckbox.threeTransfers
        ) {
          state.chosenCheckbox.all = true
        }
      }
    },
  },
})

export const { changeTab, changeCheckbox } = aviasalesSlice.actions
export default aviasalesSlice.reducer
