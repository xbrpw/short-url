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
    "boardHeading": "Hometown Dance Recital",
    "stacks": [
      {
        "stackHeading": "Logistics",
        "cards": [
          {
            "cardText": "Confirm the venue"
          },
          {
            "cardText": "Determine the number of chairs needed"
          },
          {
            "cardText": "Distribute the tickets"
          },
          {
            "cardText": "Finalize Vendors"
          },
          {
            "cardText": "Write up the schedule"
          }
        ]
      },
      {
        "stackHeading": "Volunteers",
        "cards": [
          {
            "cardText": "Reach out to potential sponsors"
          },
          {
            "cardText": "Confirm sponsors"
          },
          {
            "cardText": "Recruit people to build the set"
          },
          {
            "cardText": "Recruit ushers"
          },
          {
            "cardText": "Recruit ticket takers"
          },
          {
            "cardText": "Recruit parking attendants"
          },
          {
            "cardText": "Recruit concession and merchandise sales"
          },
          {
            "cardText": "Send volunteer packets out"
          },
          {
            "cardText": "Assemble “Thank You” swag bags for volunteers"
          }
        ]
      },
      {
        "stackHeading": "Performance",
        "cards": [
          {
            "cardText": "Announce the soloists for the finale"
          },
          {
            "cardText": "Schedule additional rehearsals for the soloists"
          },
          {
            "cardText": "Design Costumes"
          },
          {
            "cardText": "Order costumes 4 weeks before recital"
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
        "stackHeading": "Photography and Video",
        "cards": [
          {
            "cardText": "Hire a photographer for studio photos"
          },
          {
            "cardText": "Hire a photographer for the performance"
          },
          {
            "cardText": "Acquire video camera"
          },
          {
            "cardText": "Acquire a tripod"
          },
          {
            "cardText": "Hire someone to record the performance"
          }
        ]
      },
      {
        "stackHeading": "Promotion",
        "cards": [
          {
            "cardText": "Print flyers"
          },
          {
            "cardText": "Promote the event on Facebook and Instagram"
          },
          {
            "cardText": "Prepare the programs"
          },
          {
            "cardText": "Cross promote other dance studios"
          },
          {
            "cardText": "Speak to local radio stations"
          }
        ]
      }
    ]
  }
});
