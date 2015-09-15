import ProjectConstants from 'ProjectConstants'
import AppDispatcher from 'AppDispatcher'
import 'fetch'

var ProjectActions = {

    receiveAll : function(projects){
        AppDispatcher.handleServerAction({
            actionType: ProjectConstants.RECEIVE_ALL_PROJECTS,
            item: projects
        });
    },

    receiveFirsts : function(projects){
        AppDispatcher.handleServerAction({
            actionType: ProjectConstants.RECEIVE_FIRSTS,
            item: projects
        });
    },

    receive : function(project){
        AppDispatcher.handleServerAction({
            actionType: ProjectConstants.RECEIVE_PROJECT,
            item: project
        });
    },

    receiveError : function(error){
        AppDispatcher.handleServerAction({
            actionType: ProjectConstants.ERROR,
            item: error
        });
    }

}

export default ProjectActions


      
