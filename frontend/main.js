document.addEventListener('DOMContentLoaded', function(){
	var convos = [
		'Alligators all around',
		'Bursting balloons',
		'Catching colds',
	]
	var convoList = document.getElementById('convoList');
	m.mount(convoList, {
		view: function(){
			return convos.map(function(convo){
				return m('li', convo);
			});
		}
	});
});
