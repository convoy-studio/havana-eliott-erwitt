export default (el) => {
	if (el.getBoundingClientRect) {
		return el.getBoundingClientRect();
	}
	else {
		let x = 0, y = 0;
		do {
			x += el.offsetLeft - el.scrollLeft;
			y += el.offsetTop - el.scrollTop;
		} 
		while (el = el.offsetParent);

		return { "left": x, "top": y }
	}
}