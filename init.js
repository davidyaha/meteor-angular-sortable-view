Meteor.startup(function() {
    if (typeof(angularMeteor) !== 'undefined') {
      angularMeteor.requires.push('angular-sortable-view');
    }
});

