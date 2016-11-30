Template.app.onCreated(function() {
  	this.infiniteScroll({
        perPage: 4, // How many results to load "per page"
        query: { // The query to use as the selector in our collection.find() query
            
        },
         //   subManager: new SubsManager(), // (optional, experimental) A meteorhacks:subs-manager to set the subscription on
        // Useful when you want the data to persist after this template
        // is destroyed.
        collection: 'infinites', // The name of the collection to use for counting results
        publication: 'infinite', // (optional) The name of the publication to subscribe.
        // Defaults to {collection}Infinite
        //container: window, // (optional) Selector to scroll div. Defaults to window
      //  loadingTemplateName: 'ForumLoadingMore' // (optional) Name of loading graphic (spinner) template. Default will show "Loading..."
    });

    
});

Template.app.helpers({
  infinites() {
    return Infinite.find()
  },
});

