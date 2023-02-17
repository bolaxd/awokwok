var status = false

const run = (stream) => {
	if (!stream.isTTY) return;
	status = false;
	stream.write("\u001b[?25h"); // Code Ansi ketika isTYY gada
};

const stop = (stream) => {
	if (!stream.isTTY) return;
	status = true;
	stream.write("\u001b[?25l"); // Code Ansi ketika isTYY gada
};

const btn = (f) => {
	if (f !== undefined) status = f;
	status ? run(process.stdout) : stop(process.stdout());
};

export {
	run,
	stop,
	btn
}