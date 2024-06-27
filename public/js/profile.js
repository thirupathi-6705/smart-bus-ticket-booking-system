// Assuming you have the following code in your index.js to handle the '/profile' route.

app.get('/profile', (req, res) => {
    // Check if the user is logged in (session contains user information)
    if (req.session.user) {
      const user = req.session.user;
      res.render('profile', { user: user }); // Render the 'profile.html' file and pass the user details
    } else {
      res.redirect('/');
    }
  });
  