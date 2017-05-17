document.addEventListener('DOMContentLoaded', function(){
	var convos = [
		'Alligators all around',
		'Bursting balloons',
		'Catching colds',
	]
	var convoList = document.getElementById('convoList');
	for(var i = 0, l = convos.length; i < l; i++){
		convoList.innerHTML += '<li>' + convos[i] + '</li>';
	}
});
