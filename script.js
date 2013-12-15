$(function() {

	var todos = [];

	$("#addButton").click(function() {
		var todo = $("#todoInput").val();
		if(todo.length > 0) {
			todos.push(todo);
			$("#todoInput").val("");

			// generate todo list
			var html = "";

			for (var i = 0; i < todos.length; i++) {
				var element = todos[i];
				html += "<li class='list-group-item'>" + element + "</li>";
			};

			$("#todoList").html(html);
		}

	});

});
