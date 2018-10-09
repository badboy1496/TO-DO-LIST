// check off specific todos by clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click","span",function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(e){
	if(e.which===13){
		//grabbing a new todo text from the user
		var todoText=$(this).val();
		//clearing the input text
		$(this).val("");
		//create a new li and add to ul
		$('ul').append("<li><span><i class='fas fa-trash-alt'></i></i></span>"+todoText+"</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});