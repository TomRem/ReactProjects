export const createProject = (project) => {
    return (dispatch, gestState, { getFirebase, getFirestore }) => {
        // make async call to database
        dispatch({ type: 'CREATE_PROJECT', project });
    }
};