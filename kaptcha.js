$(document).ready(function(){
	first_number = get_random_number();
	second_number = get_random_number();
	true_answer = first_number + second_number;
	test_string = get_test_string(first_number, second_number);
	$("#txtMessage").after(test_string);
	$("#contactform").submit(function(event){
        //event.preventDefault();
		submitForm(event);
	});
});
function submitForm(event){
	provided_answer = $("#test_question").val();
	pass_test = check_test(true_answer, provided_answer, event);
	
}
function get_random_number(){
	return Math.floor(Math.random() * 6) + 1;
}
function get_test_string(first_number, second_number){
    return '<br />What is ' + first_number + ' + ' + second_number + '?: <input type="text" id="test_question" /><br />';
}
function check_test(true_answer, provided_answer, event){
    //alert("True answer:" + true_answer + " Provided answer: " + provided_answer);
	if(true_answer == provided_answer){
        //alert("passed");
		return true;
	}
	else {
        event.preventDefault();
        alert("You failed the simple math question.  Are you a robot?");
		return false;
	}
}