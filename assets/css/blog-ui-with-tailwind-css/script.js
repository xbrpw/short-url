const allElements = document.querySelectorAll('*:not([theme-button])');
const themeButtons = document.querySelectorAll('[theme-button]');
const escapeRegExp = string => string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const replaceAll = (str, term, replacement) => str.replace(new RegExp(escapeRegExp(term), 'g'), replacement);
let currTheme = 'gray';

const changeTheme = theme => {
  allElements.forEach(element => {
    if (element.getAttribute('class') !== null) {
      const newClasses = replaceAll(element.getAttribute('class'), currTheme, theme);
      element.setAttribute('class', newClasses);
    }
  });
  currTheme = theme;
};

themeButtons.forEach(button => {
  button.addEventListener('click', e => {
    changeTheme(e.target.getAttribute('theme-button'));
  });
});