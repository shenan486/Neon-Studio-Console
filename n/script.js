let name = document.querySelector('#name');
let projectId = document.querySelector('#project-id');
let date = document.querySelector('#date');
let creator = document.querySelector('#creator');
let tester = document.querySelector('#tester');
let description = document.querySelector('#description');
let link = document.querySelector('#link');

let content = document.querySelector('#content');
let replace1 = document.querySelector('#replace1');
let replace2 = document.querySelector('#replace2');


replace1.addEventListener('click', () => {
	name.innerText = 'Name : Riptile';
	projectId.innerText = 'Project Id : 1';
	date.innerText = 'Date : Unknown';
	creator.innerText = 'Creators : Shenan';
	tester.innerText = 'Testers : Rivith, Buwaneka, Deneth';
	description.innerText = 'Description : This Website Was Created To Share A Software Called Riptile.';
	link.innerHTML = '<p>Link : <a href="https://getriptile.carrd.co" class="link">https://getriptile.carrd.co</a></p>';
});

replace2.addEventListener('click', () => {
	name.innerText = 'Name : B-Day-For-Bros';
	projectId.innerText = 'Project Id : 2';
	date.innerText = 'Date : 2025 October 25';
	creator.innerText = 'Creators : Shenan';
	tester.innerText = `Testers : Haven't Been Tested!`;
	description.innerText = 'Description : This Website Was Created To Wish Happy Birthday For The Neon Team';
	link.innerHTML = '<p>Link : <a href="https://b-day-for-bros.carrd.co" class="link">https://b-day-for-bros.carrd.co</a></p>';
});