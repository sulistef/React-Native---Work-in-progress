const initialState = { favoritesPhotos: [] };

function toggleFavorites(state = initialState, action) {
	let nextState;
	switch (action.type) {
		case "TOGGLE_FAVORITE":
			const favoritePictureIndex = state.favoritesPhotos.findIndex(
				item => item.id === action.value.id
			);
			if (favoritePictureIndex != -1) {
				//remove from favorites
				nextState = {
					...state,
					favoritesPhotos: state.favoritesPhotos.filter(
						(item, index) => index !== favoritePictureIndex
					)
				};
			} else {
				// add picture to favorites
				nextState = {
					...state,
					favoritesPhotos: [...state.favoritesPhotos, action.value]
				};
			}
			return nextState || state;

		default:
			return state;
	}
}

export default toggleFavorites;
