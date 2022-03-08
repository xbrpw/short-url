/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'LuisAngelMaciel\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-avatar': '&#xe900;',
		'icon-pokebola': '&#xe904;',
		'icon-tepozspa-locker': '&#xe905;',
		'icon-tepozspa-vestidor': '&#xe906;',
		'icon-xiiber-logo-horizontal-color': '&#xe907;',
		'icon-xiiber-travel-log': '&#xe913;',
		'icon-xiib': '&#xf0b5;',
		'icon-logo-dragvesti': '&#xf257;',
		'icon-logo-dragvesti-negro': '&#xea4f;',
		'icon-logo-dragvesti-blanco-letras': '&#xea50;',
		'icon-viajero': '&#xea68;',
		'icon-bus': '&#xea6c;',
		'icon-ayuda': '&#xea72;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
