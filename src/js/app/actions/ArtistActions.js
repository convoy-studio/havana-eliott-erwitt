import ArtistConstants from 'ArtistConstants'
import AppDispatcher from 'AppDispatcher'
import 'fetch'

var ArtistActions = {

    receiveAll : function(artists){
        AppDispatcher.handleServerAction({
            actionType: ArtistConstants.RECEIVE_ALL_ARTISTS,
            item: artists
        });
    },

    receive : function(artist){
        AppDispatcher.handleServerAction({
            actionType: ArtistConstants.RECEIVE_ARTIST,
            item: artist
        });
    },

    receiveError : function(error){
        AppDispatcher.handleServerAction({
            actionType: ArtistConstants.ERROR,
            item: error
        });
    }

}

export default ArtistActions


      
