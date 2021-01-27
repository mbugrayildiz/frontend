const initialState = {
  projects: [],
  isLoading: false,
  isLoaded: false,
  hasError: false
}

/* export const actions = {
  fetchProject: () => ({ type: 'FETCH_NEWS', payload: null }),
} */

export default function globalReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_PROJECTS':
      return {
        ...state,
        isLoading: true
      }

    case 'FETHED_PROJECTS':
      return {
        ...state,
        isLoading: false,
        isLoaded: true
      }

    default:
      return state
  }
}
