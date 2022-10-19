/* if (navigator.serviceWorker) {
    navigator.serviceWorker.register (
        '/cadastramento/sw.js',
        { scope: '/cadastramento/' }
    ).then(() => console.log("Service Worker registrado"));
} */

/* const exportJSON = el => {
	const response = {
		"select": $("#exampleFormControlSelect1").val()
	}
	const response_json = encodeURIComponent(JSON.stringify(response)); 
	const data = `text/json;charset=utf-8,${response_json}`;
	console.log(JSON.stringify(response));
	el.setAttribute("href", `data:${data}`);
	el.setAttribute("download", "data.json");
} */

const get_responses = () => {
	const response = {
		//A
		"A0000": $("#A0000").val(),
		"A0100": $("#A0100").val(),
		//B
		"B0000": $("#B0000").val(),
		"B0001": $("#B0001").val(),
		"B0002": $("#B0002").val(),
		"B0003": $("#B0003").val(),
		"B0004": $("#B0004").val(),
		"B0005": $("#B0005").val(),
		"B0006": $("#B0006").val(),
		"B0007": $("#B0007").val(),
		"B0008": $("#B0008").val(),
		"B0009": $("#B0009").val(),
		"B0010": $("#B0010").val(),
		"B0100": $("#B0100").val(),
		"B0101": $("#B0101").val(),
		"B0200": $("#B0200").val(),
		"B0201": $("#B0201").val(),
		"B0202": $("#B0202").val(),
		"B0203": $("#B0203").val(),
		"B0204": $("#B0204").val(),
		"B0205": $("#B0205").val(),
		"B0206": $("#B0206").val(),
		//C
		"C0000": $("#C0000").val(),
		"C0001": $("#C0001").val(),
		"C0002": $("#C0002").val(),
		"C0003": $("#C0003").val(),
		"C0004": $("#C0004").val(),
		"C0005": $("#C0005").val(),
		"C0006": $("#C0006").val(),
		"C0007": $("#C0007").val(),
	}
	return JSON.stringify(response);
}

const get_file_name = () => {
    const today = new Date();
    return "3V3-CAD-" 
			+ today.getFullYear()  
			+ (today.getMonth() + 1) 
			+ today.getDate()
			+ today.getHours() 
			+ today.getMinutes() 
			+ today.getSeconds()
			+ ".json";
}

const download = () => {
	const content = get_responses();
	const file_name = get_file_name();
    const file = new Blob([content],
    {
        type: 'text/json;charset=UTF-8'
    });
    const reader = new FileReader();
    reader.onload = () => {
        const popup = window.open();
        const link = document.createElement('a');
        link.setAttribute('href', reader.result);
        link.setAttribute('download', file_name);
        popup.document.body.appendChild(link);
        link.click();
    }
    reader.readAsDataURL(file);
}