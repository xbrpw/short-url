/* jshint esversion:6 */
const searchSection = document.querySelector('#search');
const searchBtn     = document.querySelector('#search-btn');
const searchInput   = document.querySelector('#search-input');
const resultsCon    = document.querySelector('#results-con');

const keypressHandler = (key) => {
  /** 13 === Enter Keycode **/
  if (key.keyCode === 13) { ceremony(); }
};

/* Add listeners for initial search animation
==============================================================================*/
searchBtn.addEventListener("click", ceremony);
searchInput.addEventListener('keypress', keypressHandler);

/* Remove animation listeners & set normal eventListeners for getting results
==============================================================================*/
function ceremony() {
  searchBtn.removeEventListener("click", ceremony);
  searchInput.removeEventListener('keypress', keypressHandler);
  searchSection.classList.add("ceremony");

  function eventListeners() {
    searchBtn.addEventListener("click", getResults);
    searchInput.addEventListener('keypress', (key) => {
      if (key.keyCode === 13) { getResults(); }}
    );
    getResults();
  }
  /** 1.8s delay to match my animation **/
  window.setTimeout(eventListeners, 1800);
}

/* Get results as JSON using XHR.
==============================================================================*/
function getResults() {
  let keyword = encodeURIComponent(searchInput.value.trim());
  let url     = `https://en.wikipedia.org/w/api.php?action=opensearch&limit=15&format=json&search=${keyword}&origin=*`;

  xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.setRequestHeader('Api-User-Agent', 'Header_doest_work_._Update_your_MediaWiki_API_doc_.'); // Include this so Wiki developers can see it. https://www.mediawiki.org/wiki/API:Main_page#Identifying_your_client
  xhr.onerror = () => getScriptJsonp(keyword);
  xhr.onload  = () => resultsHandler(JSON.parse(xhr.response));
  xhr.send(null);
}

/* Display results.
==============================================================================*/
function resultsHandler(response) {
  /** Clean up from previous queries **/
  let results = '';
  resultsCon.innerHTML = '';
  searchInput.value    = '';

  if (response[1].length !== 0) {
    resultsCon.innerHTML += `<h2 id="results-heading">Wikipedia Articles For: <i>${response[0]}</i></h2>`;
    resultsCon.innerHTML += `<ul id="result-list"></ul>`;
    let ul = document.querySelector('#result-list');

    response[1].forEach(
      (item, index) =>
        /** Push all elements inside results first. (To load all at once) **/
        results += component(item, index, response)
    );

    ul.innerHTML += results;
  } else {
    resultsCon.innerHTML =
    `<h2 id="results-heading">No Resutls Found For: ${response[0]}</h2>`; // Add animation and style
  }
}

function component(item, index, results) {
  return `
    <li class="result-list-item flex-r">
      <a class="item-link flex-r" href="${results[3][index]}" target="_blank">
        <i class="fa fa-wikipedia-w item-icon" aria-hidden="true"></i>
        <h3 class="item-title">${results[1][index]}</h3>
        <p class="item-description"><b>:</b> ${results[2][index]}</p>
      </a>
    </li>`;
}

/* JSONP script technique as a CROS error handler.
==============================================================================*/
function getScriptJsonp(keyword) {
  let script = document.createElement('script');
  let url    = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${keyword}` + '&callback=wikiJsonpCb';
  /**
  * Create a window's proparty method with a simillar name to the requested function from
  * the Wiki server (wikiJsonpCb) to be used as a callback. This method cleans up the
  * JSONP mess and passes the data to cb.
  */
  window.wikiJsonpCb = response => {
    // Cleaning as we no longer need those elements.
    delete window.wikiJsonpCb;
    document.body.removeChild(script);
    resultsHandler(response); // NOTE: MB try to make resultsHandler handle this one as well...
  };
  /**
  * Set script src to the 'url' + Request a callback to 'wikiJsonpCb'. (JSONP technique)
  * When script is set to the body, the server will return a call to 'wikiJsonpCb' with the API query result as a passed argument (JSONP technique)
  * window.wikiJsonpCb will handle the rest afterwards.
  */
  script.src = url;
  script.onerror = connectionErr;
  document.body.appendChild(script);
}

/* Connection error handler.
==============================================================================*/
function connectionErr() {
  resultsCon.innerHTML = '<h2 id="NetworkErr">Unable to connect to the intrenet, Please check your network connection</h2>';
}

/* Adding project Details
==============================================================================*/
addProjDetails(0, 'Project Overview', 'This is a Wikipedia viewer application. Consider it something similar to the google search engine, it uses the Wikimedia API to search through the Wikipedia entries, then it displays a sum of the results with a brief description for each title.');
addProjDetails(0, 'Techniques/Technologies', 'This project had no complex components. AJAX was used for better client-side interactivity, and HTML and CSS was used for structure and presentation. I added some decent on search, hover, and display animation for a better UX.');

addProjDetails(1, 'Hurdles encountered', 'The Wikimedia API (the core for my search engine) had some outdated and misleading documentation. So I had a bit of trouble following the instruction provided, as they were incorrect.');
addProjDetails(1, 'Future implementations', 'I am interested into integrating caching functionality to the application. So if the user searched a keyword before, it should not request it again form the server. Instead, it should use the cached results for a faster and more efficient processing.');