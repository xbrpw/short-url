console.clear();
$(function(){
	var l = 1,
		noInt = $(".no-int"),
		menuP = $("[data-paneltype=menu]"),
	
		// ensure only elements on current panel can be tabbed
		setTabIndexes = function(targetEl, index) {
			let els = ["a","button","input"];
			for (let el in els) {
				$(targetEl + " " + els[el]).attr("tabindex", index);
			}
		};
	
	setTabIndexes(".app", -1);
	setTabIndexes(".level" + l, 0);
	setTabIndexes("nav", 0);
	
	// close side with Esc if using keyboard
	$(document).on("keydown",function(e){
		if (e.keyCode == 27) {
			$(".no-int").click();
		}
	});
	
	noInt.on("click",function(){
		$(this).removeClass("no-int-true");
		menuP.removeClass("active");
		
		setTabIndexes(".level" + l, 0);
		setTabIndexes(".menu-items", -1);
	});

	// main panel navigation
	$("button").on("click",function(){
		let dt = $(this).attr("data-target"),
			dp = $(this).attr("data-prev"),
			dh = $(this).attr("data-home"),
			dm = $(this).attr("data-menu");

		if (dt) {
			let dtId = $("#" + dt);
			// prevent breadcrumbing the same panel twice
			if (!dtId.hasClass("active")) {
				++l;
				let prevLvl = $(".level" + (l - 1));

				dtId.addClass("active level" + l);

				if (dtId.attr("data-paneltype") == "right") {
					prevLvl.addClass("prev-left");

				} else if (dtId.attr("data-paneltype") == "left") {
					prevLvl.addClass("prev-right");

				}
			}
			
		} else if (dp) {
			$(".level" + l).removeClass("active level" + l);
			--l;
			let prevLvl = $(".level" + l);

			if (prevLvl.hasClass("prev-right")) {
				prevLvl.removeClass("prev-right");
			} else {
				prevLvl.removeClass("prev-left");
			}
		} else if (dh) {
			let pnl = $(".panel");
			
			if (pnl.hasClass("prev-left")) {
				pnl.removeClass("prev-left");
			}
			if (pnl.hasClass("prev-right")) {
				pnl.removeClass("prev-right");
			}
			for (let rl = 2; rl <= l; ++rl) {
				$(".level" + rl).removeClass("active level" + rl);
			}
			l = 1;
		} else if (dm) {
			noInt.toggleClass("no-int-true");
			menuP.toggleClass("active");
			
			setTabIndexes(".level" + l, -1);
			setTabIndexes(".menu-items", 0);
		}
		
		if (!dm) {
			if (noInt.hasClass("no-int-true") && menuP.hasClass("active")) {
				noInt.removeClass("no-int-true");
				menuP.removeClass("active");
			}
			setTabIndexes(".panel:not(.level" + l + ")", -1);
			setTabIndexes(".level" + l, 0);
		}
		
	});

	// search
	$("form").submit(function(){
		let sTerm = $(this).find("input[name=search]").val().toLowerCase(),
			fakeSTime = Math.floor(Math.random() * (1500 - 500)) + 500;
		
		setTabIndexes(".close", 0);
		
		$(".searching").addClass("s-show");
		$(".results").html("");
		
		setTimeout(function(){
			let p2search = ["panel1","panel2","panel3"],
				rs = [],
				rsEl = $(".results");
			
			// get instances of term
			for (let p in p2search) {
				let pMain = "#" + p2search[p] + " main";
				if ($(pMain).html().toLowerCase().indexOf(sTerm) > -1 && sTerm != "") {

					rs.push([
						$(pMain + " > h1").html(),
						$(pMain + " > h1 + p").html() || $(pMain + " > h1 + button .btn-cnt").html()
					]);
				}
			}
			
			$(".searching").removeClass("s-show");
			rsEl.addClass("r-show");
			
			// restrict displayed characters for each result
			if (rs.length > 0) {
				let copyLim = 64,
					sTermExp = new RegExp(sTerm,"g");
				
				for (let r in rs) {
					if (rs[r][1].length > copyLim) {
						rs[r][1] = rs[r][1].substr(0,copyLim);
						
						let lastChar = rs[r][1][rs[r][1].length - 1];
						
						while (lastChar != " ") {
							rs[r][1] = rs[r][1].substr(0,rs[r][1].length - 1);
							lastChar = rs[r][1][rs[r][1].length - 1];
						}
						rs[r][1] += "…";
					}
					
					// bold the keyword
					for (let rp in rs[r]) {
						rs[r][rp] = rs[r][rp].replace(sTermExp,"<strong>" + sTerm + "</strong>");
					}
					
					let hdg = $("<h3></h3>"),
						lnk = $("<a href='#'></a>").html(rs[r][0]),
						par = $("<p></p>").html(rs[r][1]);
					
					hdg.append(lnk);
					rsEl.append(hdg,par);
				}
			}
			
			rsEl.prepend($("<p></p>").text(rs.length + " result" + (rs.length != 1 ? "s" : "") + " for \u201C" + sTerm + "\u201D"));

		}, fakeSTime);
		
		return false;
	});

	// prevent scrolling of whole document in mobile devices
	$(document).on("touchmove", function(e) {
		//e.preventDefault();
	});
});