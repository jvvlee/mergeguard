$(".merge-pr .btn-group-merge button").on('click', function(e) {
  if ($(this).text.trim() === "Confirm merge") {
    if (confirm("You're about to merge to master. Are you going to deploy to production within the next 5 minutes?")) {
    } else {
      e.preventDefault();
      return false
    }
  }
})

// Lingering problem?