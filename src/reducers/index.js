import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{ title: 'Purple Rain', duration: '4:05' },
		{ title: 'Smells Like Teen Spirt', duration: '2:30' },
		{ title: 'I Want It That Way', duration: '3:15' },
		{ title: 'Bohemian Rhapsody', duration: '1:45' }
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});
