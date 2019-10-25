let canvas = document.getElementById('displayCanvas');
let display = new Display(canvas);
let cursor = new Cursor(display);

let controller = new BleController();
document.addEventListener('DOMContentLoaded', (event) => {
	document.getElementById('connect').addEventListener('click', () => {
		controller
			.connect()
			.then(() => {
				console.log('Connected to BLE controller');
				controller.addEventListener('touch', (event) => {
					switch (event.touchedKey) {
						case 'R':
							cursor.move_right();
							break;
						case 'L':
							cursor.move_left();
							break;
						case 'U':
							cursor.move_up();
							break;
						case 'D':
							cursor.move_down();
							break;
						case 'X':
							cursor.change_color({ r: 51, g: 153, b: 255 });
							cursor.colorize();
							break;
						case 'A':
							cursor.change_color({ r: 255, g: 0, b: 127 });
							cursor.colorize();
							break;
						case 'B':
							cursor.change_color({ r: 127, g: 0, b: 255 });
							cursor.colorize();
							break;
					}
				});
			})
			.catch((error) => {
				console.log(error);
			});
	});
});
