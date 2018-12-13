$.ajax({
    type: "GET",
    url: "/api/user/:id?"
  }).done(function(user) {
    console.log(user)
    // update pagfe heere
  });