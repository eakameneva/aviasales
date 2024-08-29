import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

export const fetchTickets = createAsyncThunk('aviasales/fetchTickets', async (searchId, { rejectWithValue }) => {
  try {
    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
    if (!response.ok) {
      throw new Error('something went wrong')
    }
    const data = await response.json()
    const ticketsWithId = data.tickets.map((ticket) => ({
      ...ticket,
      id: uniqid(),
    }))

    return {
      tickets: ticketsWithId,
      stop: data.stop,
    }
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

const aviasalesSlice = createSlice({
  name: 'aviasales',
  initialState: {
    tickets: [],
    chosenTab: 'cheapest',
    chosenCheckbox: [0, 1, 2, 3],
    searchId: '',
    loading: false,
    error: null,
    isAllTicketsLoaded: false,
  },
  reducers: {
    changeTab(state, action) {
      state.chosenTab = action.payload
    },
    setSearchId(state, action) {
      state.searchId = action.payload
    },
    selectAllCheckbox(state, action) {
      const checkboxes = [0, 1, 2, 3]
      if (action.payload) {
        state.chosenCheckbox = []
      } else {
        state.chosenCheckbox = checkboxes
      }
    },

    selectCheckbox(state, action) {
      if (state.chosenCheckbox.includes(action.payload)) {
        state.chosenCheckbox = state.chosenCheckbox.filter((filter) => filter !== action.payload)
      } else {
        state.chosenCheckbox = [...state.chosenCheckbox, action.payload]
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        const { tickets, stop } = action.payload
        state.loading = false
        state.error = null
        state.tickets = [...state.tickets, ...tickets]
        state.isAllTicketsLoaded = stop
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { changeTab, changeCheckbox, setSearchId, selectAllCheckbox, selectCheckbox } = aviasalesSlice.actions
export default aviasalesSlice.reducer
