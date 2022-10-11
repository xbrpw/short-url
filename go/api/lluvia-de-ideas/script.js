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
  demoLocalStorageNamespace: "remake-demo-kanban-app",
  // Initial data to load into the demo app
  demoStartingData: {
    "boardHeading": "Xiiber Power Dashboard",
    "stacks": [
      {
        "stackHeading": "lam:P",
        "cards": [
          {
            "cardText": "Confirm the venue"
          },      
          {
            "cardText": "Write up the schedule"
          }
        ]
      },
      {
        "stackHeading": "Xiiber",
        "cards": [
          {
            "cardText": "Reach out to potential sponsors"
          },         
          {
            "cardText": "Assemble “Thank You” swag bags for volunteers"
          }
        ]
      },
      {
        "stackHeading": "ESO-0514",
        "cards": [
          {
            "cardText": "Announce the soloists for the finale"
          },
          {
            "cardText": "Schedule additional rehearsals for the soloists"
          },      
          {
            "cardText": "Send ill fitting costumes for alterations"
          },
          {
            "cardText": "Buy the props"
          }
        ]
      },
      {
        "stackHeading": "Herbolaría, Mueganitos y Mom´s Pizzas",
        "cards": [
          {
            "cardText": "Hire a photographer for studio photos"
          },
          {
            "cardText": "Hire someone to record the performance"
          }
        ]
      },
      {
        "stackHeading": "Dragvesti",
        "cards": [
          {
            "cardText": "Print flyers"
          },
          {
            "cardText": "Promote the event on Facebook and Instagram"
          },
          {
            "cardText": "Speak to local radio stations"
          }
        ]
      }
    ]
  }
});