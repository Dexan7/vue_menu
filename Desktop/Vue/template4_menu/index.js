// создаем новую сущность Vue
var demo = new Vue({
	// Dom элемент, к котрому прекреплена сущность
	el: '#main',

		// Начало модели.
	// Определяем свойства и присваиваем им необходимые значения.
	data: {
		active: 'home'
	},

	// Фукнции, которые будем использовать.
	metods: {
		makeActive: function(item) {
			//Когда модель будет изменена, представление обновится.
			this.active = item
		}
	}
});