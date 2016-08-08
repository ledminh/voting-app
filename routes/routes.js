var data = require('../data/data.js');

module.exports = (app, express, passport) => {
  //=========================
  //MAIN ENTRANCE
  //=========================
  app.get('/', (req, res) => {
    res.render('index');
  });

  //=========================
  //ASSETS
  //=========================
  app.use(express.static('views'));

  //========================
  //FACEBOOK ROUTES
  //========================
  //submit route
  app.get('/facebook-login', passport.authenticate('facebook'));


  //callback routes
  app.get('/facebook-return', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/'
  }));

  app.get('/check-login', (req, res) => {
    if(req.user){
      data.user.findOne({_id: req.user}, (err, user) => {
        if(err)
          throw err;

        return res.send({
          username: user.username,
          photo: user.photo
        });
      });
    }
    else
        res.send({error: "You are not login yet"});
  });


    //============================
    //DELETE POLL
    //============================
    app.get('/delete-poll', (req,res) => {
      if(req.user){
        var poll_id = req.query.poll_id;

        data.poll.find({_id: poll_id}).remove((err, poll) => {
          if(err)
            throw err;

          console.log("Sucessfully removed " + poll);
        });

        data.user.findOne({_id: req.user}, (err, user) => {
          if(err)
            throw err;

          var result = {
            username: user.username,
            photo: user.photo,
            num_polls: 0,
            my_polls: []
          };

          data.poll.find({owner_id: req.user}, (err, dbPolls) => {
            if(err)
              throw err;


            user.num_polls = dbPolls.length;
            user.save();

            result.num_polls = user.num_polls;

            
            dbPolls.forEach((poll) => {

                result.my_polls.push({
                  name: poll.name,
                  id: poll._id
                });
            });

            return res.send(result);
          });


        });
      }
      else{
        res.send({error: "You are not login yet"});
      }
    });

  //============================
  //MY PAGE ROUTE
  //============================
  app.get('/mypage', (req,res) => {
    if(req.user){
      data.user.findOne({_id: req.user}, (err, user) => {
        if(err)
          throw err;

        var result = {
          username: user.username,
          photo: user.photo,
          num_polls: user.num_polls,
          my_polls: []
        };

        data.poll.find({owner_id: req.user}, (err, dbPolls) => {
          if(err)
            throw err;


          dbPolls.forEach((poll) => {

              result.my_polls.push({
                name: poll.name,
                id: poll._id
              });
          });

          return res.send(result);
        });


      });
    }
    else{
      res.send({error: "You are not login yet"});
    }
  });

  //============================
  //HOMEPAGE ROUTE
  //============================
  app.get('/homepage', (req, res) => {
      data.poll.find((err, polls) => {
        if(err)
          throw err;

        var result = {
          polls: []
        };

        polls.forEach((poll) => {
          result.polls.push({
            id: poll._id,
            name: poll.name
          });
        });

        return res.send(result);
      });
  });


  //============================
  //A POLL ROUTE
  //============================
    //loading page
  app.get('/a-poll', (req, res) => {
    var poll_id = req.query.id;

    data.poll.findOne({_id: poll_id}, (err, poll) => {
      if(err)
        throw err;

      var result = {
        id: poll._id,
        name: poll.name,
        options: poll.options
      };


      return res.send(result);

    });
  });

    //voting
  app.get('/voting', (req, res) => {
    var value = req.query.value,
        poll_id = req.query.id;

    data.poll.findOne({_id: poll_id}, (err, poll) => {
      if(err)
        throw err;

      var option = poll.options.find((option) => {
        return option.value === value;
      });

      option.num_votes++;

      poll.save();

      var result = {
        id: poll._id,
        name: poll.name,
        options: poll.options
      };


      return res.send(result);

    });


  });

  //============================
  //ADD POLL ROUTE
  //============================
  app.post('/submit_poll', (req, res) => {

      var options = [];

      req.body.options.forEach((value) => {
        options.push({
          value: value,
          num_votes: 0
        });
      });

      var newPoll = new data.poll({
        owner_id: req.user,
        name: req.body.name,
        options: options
      });

      newPoll.save();

      data.user.findOne({_id: req.user}, (err, user) => {
        if(err)
          throw err;

        user.num_polls++;
        user.save();

      });
  });

  //============================
  //LOG OUT
  //============================
  app.get('/logout', (req, res) => {
     req.logout();
     res.redirect('/');
  });
};
