/* if (navigator.serviceWorker) {
    navigator.serviceWorker.register (
        '/cadastramento/sw.js',
        { scope: '/cadastramento/' }
    ).then(() => console.log("Service Worker registrado"));
} */

const exportJSON = el => {
	const response = {
		"select": $("#exampleFormControlSelect1").val()
	}
	const response_json = encodeURIComponent(JSON.stringify(response)); 
	const data = `text/json;charset=utf-8,${response_json}`;
	console.log(JSON.stringify(response));
	el.setAttribute("href", `data:${data}`);
	el.setAttribute("download", "data.json");
}