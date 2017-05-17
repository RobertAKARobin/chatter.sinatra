document.addEventListener('DOMContentLoaded', function(){
	var convos = [
		'Alligators all around',
		'Bursting balloons',
		'Catching colds',
	]
	var convoList = document.getElementById('convoList');
	var newConvo;
	m.mount(convoList, {
		view: function(){
			return [
				m('p', 'There are ' + convos.length + ' conversations:'),
				m('ul', [
					convos.map(function(convo, index){
						return m('li', (index + 1) + '. ' + convo);
					}),
					m('li', [
						m('input', {
							placeholder: 'New convo',
							oninput: function(event){
								newConvo = event.target.value;
							}
						}),
						m('button', {
							onclick: function(event){
								convos.push(newConvo);
							}
						}, 'Add new convo')
					])
				])
			]
		}
	});
});
