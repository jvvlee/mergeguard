$(".btn-group-merge button").on('click', function(e) {
  if (confirm("You're about to merge to master. Are you going to deploy to production within the next 5 minutes?")) {
    alert("Don't leave if you're just doing a staging deploy!")
  } else {
    e.preventDefault();
  }
})