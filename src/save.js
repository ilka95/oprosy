import {$} from '@vkontakte/vkui';

function data2blob(data, isBase64) {
	var chars = "";
	if (isBase64)
		chars = atob(data);
	else
		chars = data;
	var bytes = new Array(chars.length);
	for (var i = 0; i < chars.length; i++)
		bytes[i] = chars.charCodeAt(i);
	var blob = new Blob([new Uint8Array(bytes)]);
	return blob;
}

function getJson(form) {
	var result = {};
	form.find("input").each(function (element) {
		var $element = $(element);
		var name = $element.attr("name");
		if (!name)
			return true;

		if ($element.is("input[type='text']")) {
			result[name] = $element.prop("checked");
		}  else {
			result[name] = $element.val();
		}
	});
	return JSON.stringify(result);
}


function showValues() {
	//console.log(getJson($("form")));
	//$("#results").text(getJson($("form")));
}
showValues();

