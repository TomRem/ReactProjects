const initState = {
  projects: [
    { id: '1', title: 'Jakis tam tytul', content: 'jakis tam opis' },
    { id: '2', title: 'jeszcze jeden tytul', content: 'jakis tam opis kolejnego tytulu' },
    { id: '3', title: 'i ostatni tytul', content: 'jakis tam opis ostatniego tytulu' },
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      return state;
    case 'CREATE_PROJECT_ERROR':
      return state;
    default:
      return state;
  }
}

export default projectReducer