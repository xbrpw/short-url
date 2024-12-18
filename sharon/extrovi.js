let pen_socialbutton_items = [
   "LYBRzEX",
   "dyjgrVZ",
   "wvQNGrJ",
   "rNqZZjy",
   "MWQeogo",
   "poxMVKR"
];
let pen_socialbutton_num = ["one", "two", "three", "four", "five", "six"];
let pen_socialbutton_randomItem = `<a class="u-random" href="https://codepen.io/luisangelmaciel/details/${pen_socialbutton_items[Math.floor(Math.random() * pen_socialbutton_items.length)]}" target="_blank" style="background:white"><div class="u-card fas fa-dice-${pen_socialbutton_num[Math.floor(Math.random() * pen_socialbutton_num.length)]}"></div></a>`
let pen_socialbutton_theme_needed = document.body.parentNode.classList.contains(`theme_switchable`);// (new URL(window.location.href)).searchParams?.get(`theme`) != undefined; //REMOVE
let pen_socialbutton_theme = pen_socialbutton_theme_needed ? (window.matchMedia(`(prefers-color-scheme: dark)`).matches ? `dark` : `light` ) : `none`;
document.body.className = pen_socialbutton_theme
//document.getElementById(`theme_status`).innerHTML = `${theme_needed} : ${theme}`;

let pen_socialbutton_theme_buttons = {
   none: {},
   light: {
      style:`border:none; background:#323133; color:white;`,
      innerHTML:`<i class="fas fa-lightbulb-slash"></i>`,
      title:`Use dark theme`
   },
   dark:{
      style:`border:none; background:white; color:#323133;`,
      innerHTML:`<i class="fas fa-lightbulb-on"></i>`,
      title:`Use light theme`
   }
}
var pen_socialbutton_button = pen_socialbutton_button || false;

const pen_socialbutton_theme_switch = () => {
   const el = document.getElementById(`theme_button`);
   pen_socialbutton_theme = pen_socialbutton_theme == `dark` ? `light` : `dark`;
   el.setAttribute(`style`, pen_socialbutton_theme_buttons[pen_socialbutton_theme].style)
   el.setAttribute(`title`, pen_socialbutton_theme_buttons[pen_socialbutton_theme].title)
   el.innerHTML = pen_socialbutton_theme_buttons[pen_socialbutton_theme].innerHTML
   
   document.body.className = pen_socialbutton_theme
}

let pen_socialbutton_re_hide_notification_timeout = null;

if(window.location.href.indexOf("fullcpgrid") == -1 /*Small on pages*/ && window.location.href.indexOf("debug") /*...debug, mentioned for whenever I forget how to read code*/ == -1 && window.location.href.indexOf("fullembedgrid") == -1 /*Focused/details*/) { //Don't show on these pages
   /*document.body.innerHTML +=
   `<link href="https://codepen.io/z-/pen/a8e37caf2a04602ea5815e5acedab458.css" rel="stylesheet" arial-label="Codepen"><div style=position:fixed;bottom:-5rem;right:-5rem; id=user-button><div class=u-icons style=position:absolute;z-index:950;top:50%;left:50%;width:0;height:0%;opacity:0;><a href=https://twitter.com/Osorpenke target=_blank><div class="u-card fab fa-twitter"></div></a><a href=https://codepen.io/z- target=_blank><div class="u-card fab fa-codepen"></div></a>${randomItem}</div><div class="u-card u-main"style=position:relative;z-index:1000;width:4rem;height:4rem;display:grid;place-items:center;background:var(--user-button-background)><img alt=""style="height:100%; width:100%;"src=https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg>${button?`<iframe frameborder=0 src=https://codepen.io/z-/posts/></iframe>`:``}</div></div>` */
   /*document.body.innerHTML +=
   `<link href="https://codepen.io/z-/pen/a8e37caf2a04602ea5815e5acedab458.css" rel="stylesheet" arial-label="Codepen"><div style=position:fixed;bottom:-5rem;right:-5rem; id=user-button><div class=u-icons style=position:absolute;z-index:950;top:50%;left:50%;width:0;height:0%;opacity:0;><a href=https://twitter.com/zed_dash target=_blank><div class="u-card fab fa-twitter"></div></a><a href=https://codepen.io/z- target=_blank><div class="u-card fab fa-codepen"></div></a>${randomItem}${theme_needed ? `<a id="theme_button" onclick="theme_switch()" style="${theme_buttons[theme].style}" title="${theme_buttons[theme].title}">${theme_buttons[theme].innerHTML}</button>` : ``}</div><div class="u-card u-main"style=position:relative;z-index:1000;width:4rem;height:4rem;display:grid;place-items:center;background:var(--user-button-background)><a href="https://codepen.io/z-" target="_blank" arial-label="Codepen"><iframe alt=""style="height:200%; width:200%; transform: translate(-25%, -25%) scale(0.5); border-radius:100%; border:none;"src="https://cdpn.io/z-/debug/4677c6bd4703f7a7f95eab9764b71812" arial-label="Codepen"></iframe></a></div></div>` //https://codepen.io/z-/pen*/
   document.body.innerHTML +=
   `<link href="https://www.xbr.pw/sharon/estylecode.css" rel="stylesheet"><div style=position:fixed;bottom:-5rem;right:-5rem; id=user-button><div class=u-icons style=position:absolute;z-index:950;top:50%;left:50%;width:0;height:0%;opacity:0;><a id="socialbutton-twitter" href="https://twitter.com/luisangelmaciel" target=_top rel="no-refer" aria-label="Twitter"><div class="u-card fab fa-twitter"></div></a><a href=https://codepen.io/luisangelmaciel target=_blank><div class="u-card fab fa-codepen"></div></a>${pen_socialbutton_randomItem}${pen_socialbutton_theme_needed ? `<a id="theme_button" onclick="pen_socialbutton_theme_switch()" style="${pen_socialbutton_theme_buttons[pen_socialbutton_theme].style}" title="${pen_socialbutton_theme_buttons[pen_socialbutton_theme].title}">${pen_socialbutton_theme_buttons[pen_socialbutton_theme].innerHTML}</button>` : ``}</div><div class="u-card u-main"style=position:relative;z-index:1000;width:4rem;height:4rem;display:grid;place-items:center;background:var(--user-button-background)><a href="https://codepen.io/luisangelmaciel" target="_blank" arial-lebel="Codepen"><img src="https://i.koya.io/S70jhQ.webp" style="border-radius:100%; width:64px; height:64px;" at="image"/></a></div></div>` //https://codepen.io/z-/pen/37f471adc6c5dba134cac86a34c93a61
   // setTimeout(() => {
   //    const twitter = document.getElementById(`socialbutton-twitter`);
   //    twitter.addEventListener(`click`, e => {
   //       e.preventDefault();
   //       clearTimeout(pen_socialbutton_re_hide_notification_timeout);
   //       twitter.classList.add(`show`);
   //       pen_socialbutton_re_hide_notification_timeout =
   //         setTimeout(() => {
   //           twitter.classList.remove(`show`);
   //         },1000)
   //    })
   // },1000)
}

//fullcpgrid/a8e37caf2a04602ea5815e5acedab458