export const createProject = (project) => {
  return (dispatch, gestState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'Tom',
      authorLastName: 'Rem',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project });
    }).catch((error) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', error });
    })
  }
};