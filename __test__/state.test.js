import { Spins, log, opts } from "../index.js"

// TODO: Test spinner loading...
let i = () => {
	const loading = new Spins("testing")
	loading.on();
	setTimeout(function() {
		loading.off();
	}, 3000);
}
// i()

// TODO: Test spinner loading with options
let u = () => {
	const loading = new Spins({
		text: "loading...",
		colors: "cyan",
		frames: ['🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛', '🕐', '🕑']
	})
	loading.on()
}
// u()

// TODO: Test spinner loading with prototype
let k = () => {
	const loading = new Spins({
		text: "loading...",
		colors: "cyan",
	})
	loading.layer(['🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛', '🕐', '🕑'])
	loading.on()
}
k()

// TODO: Test console animations
let n = () => {
	opts.animate = false; // ketika true maka duration, speed, spread, dan freq berfungsi
	opts.duration = 12
	opts.speed = 20
	opts.spread = 8.0
	opts.freq = 0.3
	// seed ketika warna di mulai dari mana 
	opts.seed = 3000
	
	let jumlah = 40;
	for (let i = 0; i < jumlah; i++) log("Jangan lupa follow github bolaxd");
}
// n()