var $ = require('jquery');

module.exports = {

    filterTodos: function(todos, showCompleted, searchText){
        var filteredTodos = todos;
        // console.log(filteredTodos);
        // console.log("test");
        // console.log(showCompleted);
        
        //Filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) =>{
            return !todo.completed || showCompleted;
        });
        // console.log("1");
        // console.log(filteredTodos);
        //Filter by searchText
        
        filteredTodos = filteredTodos.filter((todo) =>{
            var text = todo.text.toLowerCase();
            return searchText.length ===0 || text.indexOf(searchText) > -1;
        }); 
        // console.log("2");
        // console.log(filteredTodos);
        // Sort todos with non-completed first
        
        filteredTodos = filteredTodos.sort((a, b) =>{
            if(!a.completed && b.completed){
                return -1;
            }else if (a.completed && !b.completed){
                return 1;
            }else {
                return 0;
            }
        });           
        
        return filteredTodos;
    }
    
};