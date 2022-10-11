/***************************************
 *           REMAKE DEMO               *
 *           ===========               *
 *                                     *
 *    See how Remake works without     *
 *        installing anything!         *
 *                                     *
 *    For the full framework, with     *
 *    data saving and user accounts:   *
 *                                     *
 *    https://docs.remaketheweb.com/   *
 ***************************************/

Remake.demoInit({
  // Log data to console when page is 
  // saved, useful for debugging
  logDataOnSave: true,
  // Load Sortable library for drag and 
  // drop reordering (only use if your 
  // app  needs drag-and-drop reordering)
  sortable: {sortablejs: Sortable},
  // Load crostini for displaying 
  // temporary success/error notices
  crostini: crostini,
  // Load Handlebars for rendering the 
  // demo on the client-side
  Handlebars: Handlebars,
  // Where in localStorage to store data
  demoLocalStorageNamespace: "remake-demo-todo-app",
  // Initial data to load into the demo app
  demoStartingData: {
    "todos": [
      {"text": "Get a cat"},
      {"text": "Buy a rocket ship"},
      {"text": "Go to Mars"}
    ]
  }
});