const hamburger = document.querySelector('.hamburger');
const hamburger_icon = hamburger.querySelector('span');
const mobile_menu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
	hamburger_icon.innerText = hamburger_icon.innerText === 'menu' 
		? 'close'
		: 'menu';
	
	mobile_menu.classList.toggle('is-open');
});

let user = {
	"html": "80%",
	"css": "50%",
	"javascript": "30%",
	"python": "90%"
};

var multiply = 4;

$.each( user, function( language, pourcent) {

	var delay = 300;
	
	setTimeout(function() {
	  $('#'+language+'-pourcent').html(pourcent);
	},delay*multiply);
	
	multiply++;
});


var data = document.getElementById('copy');
var text = document.getElementById('button');

text.addEventListener('click', function() {
	var user = data.textContent;
	navigator.clipboard.writeText(user).then(function() {
		console.log('success copy to clipboard');
	},function(err) {
		console.err('invalid copy to clipboard please try again',err)
	});
});

var copy = document.getElementById('copy_text');
var button = document.getElementById('button_text');

button.addEventListener('click', function() {
	var shell = copy.textContent;
	navigator.clipboard.writeText(shell).then(function() {
		console.log('success copy to clipboard');
	},function(abm) {
		console.err('invalid copy to clipboard please try again',abm)
	});
});

var copy_world = document.getElementById('copy_cmd');
var button_world = document.getElementById('button_data');

button_world.addEventListener('click', function() {
	var shell = copy_world.textContent;
	navigator.clipboard.writeText(shell).then(function() {
		console.log('success copy to clipboard');
	},function(abm) {
		console.err('invalid copy to clipboard please try again',abm)
	});
});

async function keyboard(){
	const url = "https://api.github.com/repos/Technical-Abm/ip-info/forks";
	const response = await fetch(url);
    const data = await response.json();
	const forks = data.length;
	document.getElementById('forks').innerHTML = forks;
}
document.addEventListener("DOMContentLoaded", keyboard);

async function abm(){
	const url = "https://api.github.com/repos/Technical-Abm/enc/forks";
	const response = await fetch(url);
    const data = await response.json();
	const forks = data.length;
	document.getElementById('forks-data').innerHTML = forks;
}
document.addEventListener("DOMContentLoaded", abm);

async function assembly_data(){
	const url = "https://api.github.com/repos/Technical-Abm/Header/forks";
	const response = await fetch(url);
    const data = await response.json();
	const forks = data.length;
	document.getElementById('forks-abm').innerHTML = forks;
}
document.addEventListener("DOMContentLoaded", assembly_data);

fetch('https://api.github.com/users/Technical-Abm/followers')
.then(response => response.json())
.then(followers =>{
	const first10Followers = followers.slice(0, 10);
	const followersList = document.querySelector('#follower-list-here');
	for (let i = 0; i < first10Followers.length; i++) {
		const follower = first10Followers[i];
		const li = document.createElement('li');
		li.innerHTML = `<a href="${follower.html_url}">${follower.login}</a>`;
		followersList.appendChild(li);
	}
});

fetch('https://api.github.com/users/Technical-Abm/followers')
.then(response => response.json())
.then(followers =>{
	const first10Followers = followers.slice(10, 20);
	const followersList = document.querySelector('#follower-list-abm');
	for (let i = 0; i < first10Followers.length; i++) {
		const follower = first10Followers[i];
		const li = document.createElement('li');
		li.innerHTML = `<a href="${follower.html_url}">${follower.login}</a>`;
		followersList.appendChild(li);
	}
});

fetch('https://api.github.com/users/Technical-Abm/followers')
.then(response => response.json())
.then(followers =>{
	const first10Followers = followers.slice(20, 30);
	const followersList = document.querySelector('#follower-list-github');
	for (let i = 0; i < first10Followers.length; i++) {
		const follower = first10Followers[i];
		const li = document.createElement('li');
		li.innerHTML = `<a href="${follower.html_url}">${follower.login}</a>`;
		followersList.appendChild(li);
	}
});