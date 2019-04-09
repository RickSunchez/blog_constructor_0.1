function add_TextEditor(parentNode, save_script) {
	//CONTAINER DESCRIPTION
	var container_main = document.createElement("div");
	var container_head = document.createElement("div");
	var container_elem = document.createElement("div");
	var container_text = document.createElement("iframe");
	var container_stat = document.createElement("div");
	var container_save = document.createElement("div");
	
	container_main.id = "container_main";
	container_head.id = "container_head";
	container_elem.id = "container_elem";
	container_text.id = "container_text";
	container_stat.id = "container_stat";
	container_save.id = "container_save";
	//END CONTAINER DESCRIPTION
	//HEADER DESCRIPTION
	var header_input = document.createElement("input");
	header_input.placeholder = "Введите заголовок";

	container_head.appendChild(header_input);
	//END HEADER DESCRIPTION
	//ELEMENTS DESCRIPTION
	var select_font = document.createElement("select");
	var select_size = document.createElement("select");
	var textAlign_l = document.createElement("button");
	var textAlign_c = document.createElement("button");
	var textAlign_r = document.createElement("button");
	var textAlign_j = document.createElement("button");
	var fontStyle_b = document.createElement("button");
	var fontStyle_i = document.createElement("button");
	var fontStyle_u = document.createElement("button");
	var list_rnd    = document.createElement("button");
	var list_num    = document.createElement("button");
	var imge_insrt  = document.createElement("button");
	var link_insrt  = document.createElement("button");
	var unlk_insrt  = document.createElement("button");
	
	select_font.id = "select_font";
	select_size.id = "select_size";
	textAlign_l.id = "textAlign_l"; textAlign_l.className = "sq_butt";
	textAlign_c.id = "textAlign_c"; textAlign_c.className = "sq_butt";
	textAlign_r.id = "textAlign_r"; textAlign_r.className = "sq_butt";
	textAlign_j.id = "textAlign_j"; textAlign_j.className = "sq_butt";
	fontStyle_b.id = "fontStyle_b"; fontStyle_b.className = "sq_butt";
	fontStyle_i.id = "fontStyle_i"; fontStyle_i.className = "sq_butt";
	fontStyle_u.id = "fontStyle_u"; fontStyle_u.className = "sq_butt";
	list_rnd.id    = "list_rnd";    list_rnd.className    = "sq_butt";
	list_num.id    = "list_num";    list_num.className    = "sq_butt";
	imge_insrt.id  = "imge_insrt";  imge_insrt.className  = "sq_butt";
	link_insrt.id  = "link_insrt";  link_insrt.className  = "sq_butt";
	unlk_insrt.id  = "unlk_insrt";  unlk_insrt.className  = "sq_butt";

	var fonts = ["Times", "Courier", "Arial", "Verdana"];
	for (var i=0; i<fonts.length; i++) {
		var option = document.createElement("option");
		option.value     = fonts[i];
		option.innerText = fonts[i];
		select_font.appendChild(option);
	}

	var font_sizes = [1,2,3,4,5,6,7];
	for (var i=0; i<font_sizes.length; i++) {
		var option = document.createElement("option");
		option.value     = font_sizes[i];
		option.innerText = font_sizes[i];
		select_size.appendChild(option);
	}
	
	container_elem.appendChild(select_font);
	container_elem.appendChild(select_size);

	container_elem.appendChild(textAlign_l);
	container_elem.appendChild(textAlign_c);
	container_elem.appendChild(textAlign_r);
	container_elem.appendChild(textAlign_j);

	container_elem.appendChild(fontStyle_b);
	container_elem.appendChild(fontStyle_i);
	container_elem.appendChild(fontStyle_u);

	container_elem.appendChild(list_rnd);
	container_elem.appendChild(list_num);

	container_elem.appendChild(imge_insrt);
	container_elem.appendChild(link_insrt);
	container_elem.appendChild(unlk_insrt);
	//END ELEMENTS DESCRIPTION ###############################################
	//STATUS DESCRIPTION #####################################################
	var char_count  = document.createElement("span");
	var button_save = document.createElement("button");

	char_count.innerText  = "num: 0";
	button_save.innerText = "Сохранить";

	container_stat.appendChild(char_count);
	container_stat.appendChild(button_save);
	//ENDSTATUS DESCRIPTION ##################################################
	//BUILD ELMENT ###########################################################
	container_main.appendChild(container_head);
	container_main.appendChild(container_elem);
	container_main.appendChild(container_text);
	container_main.appendChild(container_stat);
	parentNode.appendChild(container_main);
	parentNode.appendChild(container_save);
	//END BUILD ELMENT #######################################################
	//FUNCTION DESCRIPTION ###################################################
	var text_window = container_text.contentWindow;
	var text_docmnt = container_text.contentDocument;
    
	text_docmnt.open();
	text_docmnt.write("<html><head></head><body id='content' style='background-color: #f3fbff;'></body></html>");
	text_docmnt.close();
	text_docmnt.designMode = "on";

	text_window.onkeypress = function (event) {
		//console.log(event.keyCode)
		
		char_count.innerText = "num:" + text_docmnt.body.innerText.length;
		text_window.focus();
		switch (event.keyCode) {
			case 25: //Ctrl+Y
				text_window.document.execCommand("redo", null, "");
				break;
			case 26: //Ctrl+Z
				text_window.document.execCommand("undo", null, "");
				break;	
			default:
			    console.log(event.keyCode);
			    break;
		}
	}
	select_font.onchange = function () {
		text_window.focus();
		text_window.document.execCommand("fontName", null, select_font.value);
	}
	select_size.onchange = function () {
		text_window.focus();
		text_window.document.execCommand("fontSize", null, select_size.value);
	}

	textAlign_l.onclick = function () {
		text_window.focus();
		text_window.document.execCommand("justifyLeft", null, "");
	}
	textAlign_c.onclick = function () {
		text_window.focus();
		text_window.document.execCommand("justifyCenter", null, "");
	}
	textAlign_r.onclick = function () {
		text_window.focus();
		text_window.document.execCommand("justifyRight", null, "");
	}
	textAlign_j.onclick = function () {
		text_window.focus();
		text_window.document.execCommand("justifyFull", null, "");
	}

	fontStyle_b.onclick = function () {
		text_window.focus();
		text_window.document.execCommand("bold", null, "");
	}
	fontStyle_i.onclick = function () {
		text_window.focus();
		text_window.document.execCommand("italic", null, "");
	}
	fontStyle_u.onclick = function () {
		text_window.focus();
		text_window.document.execCommand("underline", null, "");
	}

	list_rnd.onclick = function () {
		text_window.focus();
		text_window.document.execCommand("insertUnorderedList", null, "");
	}
	list_num.onclick = function () {
		text_window.focus();
		text_window.document.execCommand("insertOrderedList", null, "");
	}

	imge_insrt.onclick = function () {
		text_window.focus();
		image_upload(document.body);
	}
		function image_upload(parentNode) {
			var choose_img     = document.createElement("div");
			var submit_upload  = document.createElement("input");
			var close_butt     = document.createElement("button");
			//IMG LIST
			choose_img.id   = "choose_img";

			xmlHTTPconnect("text_editor/img_upload.php", "", image_list)
			function image_list(txt) {
				//console.log(txt);
				var list = JSON.parse(txt).images;

				for (var i=0; i<list.length; i++) {
					var img   = document.createElement("img");
					var radio = document.createElement("input");
					var label = document.createElement("label");

					img.src = "../../user_images/" + list[i].name

					radio.type = "radio";
					radio.name = "images";

					var ID = "img"+i;
					radio.id  = ID;
					label.for = ID;

					var div = document.createElement("div");
					div.className = "images_container";

					label.appendChild(radio);
					label.appendChild(img);
					
					div.appendChild(label);

					choose_img.appendChild(div);
				}
			}
			//END IMG LIST
			submit_upload.id = "submit_upload";
			close_butt.id = "close_butt";

			submit_upload.type = "submit"
			submit_upload.value = "Upload";
			close_butt.innerText = "X";

			submit_upload.onclick = function() {
				var images = document.getElementsByName("images");
				for (var i=0; i<images.length; i++) {
					if (images[i].checked) {
						var image = images[i].parentNode.getElementsByTagName("img")[0];
						var image_src = image.src;
						text_window.document.execCommand("insertImage", null, image_src);
						parentNode.removeChild(choose_img);
						
						var images = text_docmnt.getElementsByTagName("img");
						var last_insertIMG = images[images.length-1];
						
						last_insertIMG.onload = function () {
						    var img_prop = document.createElement("div");
						    var w_label  = document.createElement("span");
						    var h_label  = document.createElement("span");
						    var w  = document.createElement("input");
						    var h  = document.createElement("input");
						    var s_butt = document.createElement("button");
						    
						    img_prop.id = "img_prop";
						    w.id = "image_width";
						    h.id = "image_height";

						    w.type = "number";
						    h.type = "number";

						    w_label.innerText = "width:";
						    h_label.innerText = "height:";
						    
						    img_prop.appendChild(w_label);
						    img_prop.appendChild(w); img_prop.innerHTML += "<br>";
						    img_prop.appendChild(h_label);
						    img_prop.appendChild(h); img_prop.innerHTML += "<br>";
						    img_prop.appendChild(s_butt);
							document.body.appendChild(img_prop);

							var imageW = document.getElementById("image_width");
							var imageH = document.getElementById("image_height");
						    imageW.value = this.width;
						    imageH.value = this.height;
						    
						    s_butt.innerText = "Submit";
						    
						    var scale_transform = +imageH.value / +imageW.value
						    imageW.oninput = function () {imageH.value = +imageW.value*scale_transform};
						    imageH.oninput = function () {imageW.value = +imageH.value/scale_transform};
						    
						    s_butt.onclick = function () {
						        last_insertIMG.width  = +imageW.value;
						        last_insertIMG.height = +imageH.value;
						        document.body.removeChild(img_prop);
						    }
						    
						    
						}
						
						break;
					}
				}
				
			}

			close_butt.onclick = function() {
				parentNode.removeChild(choose_img);
			}

			choose_img.appendChild(submit_upload);
			choose_img.appendChild(close_butt);
			parentNode.appendChild(choose_img);
		}
	link_insrt.onclick = function () {
		text_window.focus();
		text_window.document.execCommand("createLink", null, prompt());
	}
	unlk_insrt.onclick = function () {
		text_window.focus();
		text_window.document.execCommand("unlink", null, "");
	}

	button_save.onclick = function () {
		var header = header_input.value;
		var content = text_docmnt.body.innerHTML;
		content = content.replace(/"/g,"\\'");
		content = content.replace(/&nbsp;/g,"\u00A0");
		var data = {
			"header": header,//Component()
			"content": content//encodeURIComponent()
		}
		if (save_script) {
			save_script(JSON.stringify(data));
			alert("Добавлено!");
		}
		container_save.innerHTML = text_docmnt.body.innerHTML;
	}
	//END FUNCTION DESCRIPTION
}


function xmlHTTPconnect(scenario, data, callback) {
	var xml = new XMLHttpRequest();
	xml.open("POST", scenario, false);
	xml.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");
	xml.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
			callback(this.responseText);
	    }
	}
	xml.send(data);
}