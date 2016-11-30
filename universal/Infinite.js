Infinite = new Mongo.Collection('infinites');

if (Meteor.isServer) {
    Meteor.publish('infinite', function(limit) {
        return Infinite.find({},{limit:limit});
    })

}
