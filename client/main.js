Meteor.subscribe("allPosts");


  Template.hello.greeting = function () {
    console.log("ejecutando Template.hello.greeting ");
    return "Welcome to tutoMeteor.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
