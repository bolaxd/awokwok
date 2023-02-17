import { readFileSync } from "fs";
import { run, stop } from "./helper.js";
import chalk from "chalk";

class Spins {
	constructor(options){
		if (typeof options == 'string') options = { text: options };
		if (!options) return options = {}
		if (!("text" in options)) options.text = ''
		if (!("color" in options)) options.color = 'cyan'
		if (!("stream" in options)) options.stream = process.stdout
		if (!("speed" in options)) options.speed = 60
		if (!("frames" in options)) options.frames = ["◜", "◠", "◝", "◞", "◡", "◟"]
		this.text = options.text;
		this.color = options.color;
		this.interval = options.speed;
		this.stream = options.stream;
		this.frames = options.frames;
		this.id = null;
		this.enabled = options.enabled || ((this.stream && this.stream.isTTY) && !process.env.CI);
		this.frameIndex = 0;
		this.layer = (frame) => {
			if (frame) this.frames = frame;
			var frames = this.frames;
			var frame = frames[this.frameIndex];
			if (this.color) frame = chalk[this.color](frame);
			this.frameIndex = ++this.frameIndex % frames.length;
			return frame + ' ' + this.text;
		};
		this.clear = () => {
		  if (!this.enabled) return this;
		  this.stream.clearLine();
		  this.stream.cursorTo(0);
		  return this;
		};
		this.render = () => {
		  this.clear();
		  this.stream.write(this.layer());
		  return this;
		};
		this.on = (text) => {
			if (text) this.text = text;
			if (!this.enabled || this.id) return this;
			this.clear();
			stop(this.stream);
			this.id = setInterval(this.render.bind(this), this.interval);
			return this;
		};
		this.off = () => {
			if (!this.enabled) return this;
			clearInterval(this.id);
			this.id = null;
			this.clear();
			run(this.stream);
			return this;
		};
		this.offPresist = (symbol, text) => {
			text = text || this.text;
			this.off();
			this.stream.write((symbol ? symbol + ' ' : ' ') + text + '\n');
			return this;
		};
	}
}

export default chalk;
export { Spins };