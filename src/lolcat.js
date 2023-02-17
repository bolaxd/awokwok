import ansi from "ansi";
import chalk from "./spinner.js";

let sleep;
try {
	sleep = await import('sleep');
} catch (error) {
	console.error('Unable to load the sleep module (no animations available)');
}
const cursor = ansi(process.stdout);
let opts = {
	animate: false,
	duration: 12,
	seed: 0,
	speed: 20,
	spread: 8.0,
	freq: 0.3,
};

const rainbow = (freq, i) => {
	const red   = Math.round(Math.sin(freq * i + 0) * 127 + 128);
	const green = Math.round(Math.sin(freq * i + 2 * Math.PI / 3) * 127 + 128);
	const blue  = Math.round(Math.sin(freq * i + 4 * Math.PI / 3) * 127 + 128);
	return {
		red,
		green,
		blue
	}
};

const colorize = (char, colors) => {
	process.stdout.write(chalk.rgb(colors.red, colors.green, colors.blue)(char));
};
const printlnPlain = (colorize, line) => {
	for (let i = 0; i < line.length; i++) colorize(line[i], rainbow(opts.freq, opts.seed + i / opts.spread));
};
const printlnAnimated = (colorize, line) => {
	if (sleep) {
		const seed = opts.seed;
		for (let j = 1; j < opts.duration; j++) {
			process.stdout.cursorTo(0);
			opts.seed += opts.spread;
			if (j % 2 === 0) printlnPlain(colorize, line);
			sleep.default.usleep(1/opts.speed * 500000);
		}
		opts.seed = seed;
	}
	printlnPlain(colorize, line);
};

const println = (line) => {
	cursor.show();
	if (opts.animate) cursor.hide(), printlnAnimated(colorize, line);
	else printlnPlain(colorize, line);
	process.stdout.write('\n');
};


const log = (string) => {
	string = string || '';
	const lines = string.split('\n')
	lines.forEach((line) => { opts.seed += 1; println(line); cursor.show() });
};

export {
	opts,
	log,
}