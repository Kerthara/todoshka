$(function() {

	var todos = ["Drink tea"];

	generateTodoList();

	$("#addButton").click(function() {
		var todo = $("#todoInput").val();
		if(todo.length > 0) {
			todos.push(todo);
			$("#todoInput").val("");

			generateTodoList();
		}
	});

	function generateTodoList() {
		var html = "";

		for (var i = 0; i < todos.length; i++) {
			var element = todos[i];
			html += "<li class='list-group-item' data-index=" + i + "><span class='todo-text'>" + element + "</span><span class='remove-icon glyphicon glyphicon-remove'></span></li>";
		};

		$("#todoList").html(html);

		$(".remove-icon").click(function (e) {
			var index = $(e).parent().attr('data-index');
			todos.splice(index, 1);
			generateTodoList();
		});
	}

});
