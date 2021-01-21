const btns = document.querySelectorAll('.btn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');


btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});
});

// modalOverlay.addEventListener('click', (e) => {
// 	console.log(e.target);

// 	if (e.target == modalOverlay) {
// 		modalOverlay.classList.remove('modal-overlay--visible');
// 		modals.forEach((el) => {
// 			el.classList.remove('modal--visible');
// 		});
// 	}
// });

(function main() {
	document.addEventListener('DOMContentLoaded', DOMContentLoaded);
 
	function DOMContentLoaded() {
		 var buttonNode = document.querySelector('.form-set-show');
	  buttonNode.addEventListener('click', showForm);
	}
	  
	function showForm() {
		var node = document.querySelector('.form-set');
		node.classList.remove('hidden');
	}

 })();

 (function main() {
	document.addEventListener('DOMContentLoaded', DOMContentLoaded);
 
	function DOMContentLoaded() {
		 var buttonNode = document.querySelector('.empire-name-show');
	  buttonNode.addEventListener('click', showTable);
	}
	  
	function showTable() {
		var node = document.querySelector('.empire-boxs');
		node.classList.remove('hidden2');
	}

 })();





