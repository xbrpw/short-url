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
		el.innerHTML = '<span style="font-family: \'vinme\'">' + entity + '</span>' + html;
	}
	var icons = {
		'b-google-my-business': '&#xe900;',
		'b-grindr': '&#xe901;',
		'b-hornet': '&#xe902;',
		'b-mercado-libre': '&#xe903;',
		'b-onlyfans': '&#xe904;',
		'b-scruff': '&#xe905;',
		'tripadvisor': '&#xf65e;',
		'avatar-hihello': '&#xec41;',
		'logo-hihello': '&#xea51;',
		'hhm': '&#xea54;',
		'logo-xiiber-2021c': '&#xea56;',
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
		c = c.match(/[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
