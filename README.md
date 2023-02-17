# AWOKWOK

Library ini berisi tentang: 
* console loading
* console warna seperti kaum Pelangi

![](https://badgen.net/npm/v/@bolaxd/awokwok)
![](https://badgen.net/badge/node/>=18.0.0/green)
![](https://badgen.net/npm/dt/@bolaxd/awokwok)

---

# Installation

```
$ npm i @bolaxd/awokwok
```

---

# Example 

Library ini hanya di khususkan javascript ES6,
Jika anda menggunakan CJS anda harus mengimport dynamic ( tetapi ini akan menjadi permasalahan )

---

## Penggunaan Spinner:

### Contoh sederhana penggunaan spinner: `.on()` / `.off()`
```js
import AWOKWOK from "@bolaxd/awokwok";

(() => {
	const spin = new AWOKWOK.Spins(); // Memanggil class
	spin.on()
	setTimeout(() => {
		spin.off()
	}, 5000)
})()
```

### Penggunaan spinner loading custom: `.layer([frame])`
```js
import AWOKWOK from "@bolaxd/awokwok";

(() => {
	const spin = new AWOKWOK.Spins(); // Memanggil class
	spin.layer(['🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛', '🕐', '🕑']);
	spin.on()
	setTimeout(() => {
		spin.off()
	}, 5000)
})()
```

### Penggunaan Loading spinner custom in Class: 

```js 
new AWOKWOK.Spins({ /*Add your options*/ })
```

Options :

```js
(() => {
	const options = {
		text: "Loading...",
		color: "cyan",
		stream: process.stdout,
		frames: ["a", "b", "c", "d", "e", "f"]
	}
	const spin = new AWOKWOK.Spins(options);
	spin.on();
	setTimeout(() => {
		spin.off()
	}, 3000)
})()
```

---

## Penggunaan Console pelangi:

contoh sederhana:

```js
import AWOKWOK from "@bolaxd/awokwok";

(() => {
	const log = AWOKWOK.log
	log("Heloo bang")
	log("Nama saya iqbal")
	log("Saya hanya... ah kepo amat luh")
	log("dahlah...")
})()
```

cara penggunaan console pelangi dengan options:

```js
import AWOKWOK, { opts } from "@bolaxd/awokwok";

(() => {
	const log = AWOKWOK.log
	
	opts.seed = Math.floor(Math.random() * 39398)
	
	log("Heloo bang")
	log("Nama saya iqbal")
	log("Saya hanya... ah kepo amat luh")
	log("dahlah...")
})()
```

untuk cara penggunaan yang lain anda bisa baca sendiri di repository di github, males gw
---

Jangan lupa sawer saya disini:
* [`Buy Me A Coffee`](https://www.buymeacoffee.com/bolaxd1)
* [`Trakteer`](https://trakteer.id/geichi-mv-yotba)