  Meteor.startup(function() {

    if (Posts.find().count() === 0) {
      for (var cause = 0; cause < 10; cause++) {
        Posts.insert({
          author: cause,
          title: "la gran causa",
          approved: true,
          completed: false,
          votes: 3,
          imgUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQmcbBQiLqgOJk-eb4txZFi77oZQA30z_sBMTw31VyYGg-eVjILww"
        });
      }
    }

     if (Comments.find().count() === 0) {
      for (var cause = 0; cause < 10; cause++) {
        Comments.insert({
          description:' El gran comentario',
          imgUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQmcbBQiLqgOJk-eb4txZFi77oZQA30z_sBMTw31VyYGg-eVjILww"
        });
      }
    }
  });