/*
	gSwitch developed by George Broadhurst
	feel free to redistribute and alter this code as you see fit (but don't claim it as your own work!)
	
*/

$(function() {
	$.fn.gSwitch = function(options) {
		var colours = {
			red : 'F44336',
			pink : 'E91E63',
			purple : '9C27B0',
			deepPurple : '673AB7',
			indigo : '3F51B5',
			blue: '2196F3',
			lightBlue : '03A9F4',
			cyan: '00BCD4',
			teal: '009688',
			green: '4CAF50',
			lightGreen : '8BC34A',
			lime: 'CDDC39',
			yellow: 'FFEB3B',
			amber: 'FFC107',
			orange: 'FF9800',
			deepOrange: 'FF5722',
			brown: '795548',
			grey: '9E9E9E',
			lightGrey: 'F5F5F5',
			darkGrey: '616161',
			blueGrey: '607D8B',
			black: '000000',
			white: 'ffffff'
		},
		defaultOptions = {
			colour : 'blue',
			disabledColour : 'grey',
			toggleColour : 'lightGrey',
			thinBar : false,
			width : 40
		};
		
		
		
		options = $.extend(defaultOptions, options);
		
		options.width = Math.round(options.width/4) * 4;
		
		var elem = $(this);
		
		init(elem);
		
		/* Initialises switch toggle */		
		function init (elem) {
			
			elem.addClass('js-switch')
				.append('<input type="checkbox">')
				.append('<div class="js-switch-background"></div>')
				.append('<div class="js-switch-toggle"></div>')
				.css('width', options.width)
				.css('height', options.width/2)
			
			elem.find('.js-switch-background')
				.css('background-color', getColour(options.colour))
				.css('border-color', getColour(options.disabledColour))
				.css('border-width', Math.round(options.width/4));
			
			elem.find('.js-switch-toggle').css('background-color', getColour(options.toggleColour));
			
			elem.on('click', function() {
				$(this).find('input[type="checkbox"]').click();
			});
			
			if (options.thinBar){
				elem.addClass('thin-bar')
					.css('height', options.width/4)
					
				elem.find('.js-switch-background')
					.css('border-width', Math.round(options.width/8));
			}
			
			if (elem.data('defaultState') == 'checked')
				elem.find('input[type="checkbox"]').prop('checked', true);
		}
		
		/* fetches colour from colours object if possible, otherwise returns passed colour */
		function getColour(colourName) {
			if (typeof colours[colourName] != 'undefined')
				return '#' + colours[colourName];
			else
				return colourName;
		}
	}
});
