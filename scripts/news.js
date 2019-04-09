function add_news(parentNode, id, header, content, create_date, author, prop) {
	//MAIN DESCRIPTION
	var newsContent_main = document.createElement("div");
	var newsContent_text = document.createElement("div");
	var newsContent_stat = document.createElement("div");
	
	newsContent_main.className = "newsContent_main";
	newsContent_main.setAttribute("news_id", id);
	newsContent_text.className = "newsContent_text";
	newsContent_stat.className = "newsContent_stat";
	//END MAIN DESCRIPTION
	//NEWS DESCRIPTION
	var news_hedr = document.createElement("div");
	var news_cont = document.createElement("div");
	var news_sldr = document.createElement("div");
	
	news_hedr.className = "news_hedr";
	news_cont.className = "news_cont";
	news_sldr.className = "news_sldr";
	
	news_hedr.innerText = header;
	news_cont.innerHTML = content;
	news_sldr.innerText = "РАЗВЕРНУТЬ";
	
	newsContent_text.appendChild(news_hedr);
	newsContent_text.appendChild(news_cont);
	newsContent_text.appendChild(news_sldr);
	
	/*var checker = document.createElement("script");
	checker.textContent = " \
						var news = document.body.getElementsByClassName('news_cont'); \
						var sldr = document.body.getElementsByClassName('news_sldr'); \
						var lastNewsIndex = news.length - 1; \
						var lastNewsHeight = news[lastNewsIndex].parentNode.getBoundingClientRect().height; \
						if (lastNewsHeight < 280) sldr[lastNewsIndex].style.display = 'none';";
	
	newsContent_text.appendChild(checker);*/
	//END NEWS DESCRIPTION
	//STAT DESCRIPTION
	var newsStat_like = document.createElement("div");
	var newsStat_shre = document.createElement("div");
	var newsStat_reps = document.createElement("div");
	var newsStat_autr = document.createElement("div");
	
	newsStat_like.className = "newsStat_like";
	newsStat_shre.className = "newsStat_shre";
	newsStat_reps.className = "newsStat_reps";
	newsStat_autr.className = "newsStat_autr";
		//AUTHOR DESCRIPTION
		var author_nm_dt = document.createElement("div");
		var author_avatr = document.createElement("div");
		var athr_avr_img = document.createElement("img");
		
		author_nm_dt.className = "author_nm_dt";
		author_avatr.className = "author_avatr";
		
		
		author_nm_dt.innerHTML  = author.name + "<br>";
		author_nm_dt.innerHTML += create_date + "\n";
		athr_avr_img.src = author.img;
		
		

		author_avatr.appendChild(athr_avr_img);
		newsStat_autr.appendChild(author_nm_dt);
		newsStat_autr.appendChild(author_avatr);
		//END AUTHOR DESCRIPTION
	
	var prop_value = (prop == "0") ? {"likes":"1","share":"1","reprt":"1"} : JSON.parse(prop);

	if (prop_value.likes == "1") newsContent_stat.appendChild(newsStat_like);
	if (prop_value.share == "1") newsContent_stat.appendChild(newsStat_shre);
	if (prop_value.reprt == "1") newsContent_stat.appendChild(newsStat_reps);
	newsContent_stat.appendChild(newsStat_autr);
	//END STAT DESCRIPTION
	//BUILD
	newsContent_main.appendChild(newsContent_text);
	newsContent_main.appendChild(newsContent_stat);
	parentNode.appendChild(newsContent_main);
	//END BUILD
	//FUNCTION DESCRIPTION
	news_sldr.onclick = function () {
		if (news_sldr.innerText == "РАЗВЕРНУТЬ") {
			news_sldr.innerText = "СВЕРНУТЬ";
			newsContent_text.style.maxHeight = "none";
		} else {
			news_sldr.innerText = "РАЗВЕРНУТЬ";
			newsContent_text.style.maxHeight = "250px";
		}
	}
	//END FUNCTION DESCRIPTION
}