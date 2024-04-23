// userActions.js
// export const toggleBookmark = userId => ({
//     type: 'TOGGLE_BOOKMARK',
//     payload: userId,
//   });
  
//   // userReducer.js
//   const initialState = {
//     users: [],
//     bookmarkedUsers: [],
//     // other state properties
//   };
  
//   const userReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'TOGGLE_BOOKMARK':
//         const userId = action.payload;--legacy-peer-deps

//         const userIndex = state.users.findIndex(user => user.id === userId);
//         const updatedUsers = [...state.users];
//         updatedUsers[userIndex].bookmarked = !updatedUsers[userIndex].bookmarked;
  
//         return {
//           ...state,
//           users: updatedUsers,
//           bookmarkedUsers: updatedUsers.filter(user => user.bookmarked),
//         };
//       // other cases if any
//       default:
//         return state;
//     }
//   };
  
//   export default userReducer;
  