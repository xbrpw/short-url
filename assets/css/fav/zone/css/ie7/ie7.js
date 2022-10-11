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
		'google-my-business': '&#xe906;',
		'grindr': '&#xe90b;',
		'hornet': '&#xe90c;',
		'mercado-libre': '&#xe914;',
		'onlyfans': '&#xe91b;',
		'scruff': '&#xe91d;',
		'netflix-gayflix': '&#xe929;',
		'netflix-gayflix1': '&#xe92a;',
		'tumblr': '&#xe92b;',
		'youtube': '&#xea5c;',
		'logo-tepozspa-2021': '&#xea58;',
		'tripadvisor': '&#xf65e;',
		'google': '&#xea5b;',
		'twitter-bird': '&#xf5a4;',
		'whatsapp': '&#xea5a;',
		'facebook-azul-letra': '&#xf0a1;',
		'gmail': '&#xe92c;',
		'tumbrl': '&#xf660;',
		'intagram-camera': '&#xf66c;',
		'pinterest': '&#xe92d;',
		'viajes-one': '&#xf5bf;',
		'entradas': '&#xea78;',
		'faq': '&#xea71;',
		'send': '&#xe92e;',
		'codepen': '&#xf657;',
		'repliit': '&#xf658;',
		'codesandbox': '&#xf659;',
		'github-logo': '&#xf65b;',
		'github': '&#xf65c;',
		'w3spaces': '&#xf65d;',
		'www': '&#xf65f;',
		'hi5': '&#xf661;',
		'like': '&#xf66a;',
		'twiiter-bird': '&#xf66b;',
		'instagram': '&#xee02;',
		'logo-ciudad-de-mexico': '&#xeb0e;',
		'logo-morelos': '&#xeb0f;',
		'logo-acapulco': '&#xeb10;',
		'logo-puerto-vallarta': '&#xeb11;',
		'avatar-hihello': '&#xec41;',
		'logo-dragvesti-negro': '&#xea4f;',
		'pokebola': '&#xf413;',
		'amazon': '&#xe92f;',
		'codepen1': '&#xe930;',
		'css3': '&#xe931;',
		'gitpod': '&#xe932;',
		'html5': '&#xe933;',
		'mastodon': '&#xe934;',
		'medium': '&#xe935;',
		'meetup': '&#xe936;',
		'mega': '&#xe937;',
		'logo-geus-bai-bai-cosmeticos': '&#xec3e;',
		'logo-la-mas-draga-drag-queen': '&#xf25a;',
		'logo-dragvesti': '&#xf257;',
		'logo-dragvesti-blanco': '&#xea4e;',
		'logo-hihello': '&#xea51;',
		'hhm': '&#xea54;',
		'xiiber-logo-horizontal-color': '&#xea57;',
		'logo-xiiber-2021c': '&#xea56;',
		'xiiber-circular-blanco-azul': '&#xf5c5;',
		'xiiber-logo-circular-rojo-negro': '&#xf5d1;',
		'xiiber-recomienda-negro-curvas': '&#xf5d4;',
		'ico': '&#xf0b5;',
		'xiiber-circular': '&#xf5c3;',
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
