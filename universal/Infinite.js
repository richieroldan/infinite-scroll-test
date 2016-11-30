Infinite = new Mongo.Collection('infinites');

if (Meteor.isServer) {
	Meteor.methods({
		'addData' : function(){
			for (var i = 0; i < 200; i++) {
				Infinite.insert({name:"myname"})
			}
		
		}
	})
    Meteor.publish('infinite', function(limit) {
        return Infinite.find({},{limit:limit});
    })

}
