let getViewport = () => {
	return (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= 720)
	? 'mobile'
	: 'desktop'
}

let o = {viewport: getViewport()}

window.addEventListener('resize', () => { o.viewport = getViewport() });

export default o
