$(".merge-pr .btn-group-merge button.js-merge-commit-button").on('click', function(e) {
  if (confirm("You're about to merge to master. Are you going to deploy to production within the next 5 minutes?")) {
  } else {
    e.preventDefault();
    return false
  }
})

// Lingering problem?