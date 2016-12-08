FlowRouter.route('/',{
  action:function(){
    console.log("Running Action to render templates into layouts.");
    FlowLayout.render('layout',{sidebar:'sidebar',main:'home',cart:'cart'});
  }
});
FlowRouter.route('/register',{
  action:function(){
    FlowLayout.render('layout',{sidebar:'',main:'register',cart:''});
  }
});
FlowRouter.route('/signin',{
  action:function(){
    FlowLayout.render('layout',{sidebar:'',main:'signin',cart:''});
  }
});


FlowRouter.route('/category/:categoryName',{
  subscriptions:function(params){
    console.log("SUBSCRIBE", params);
    //make sure subscriptions exist
  },
  triggersEnter:function(params){
    console.log("ENTER", params);
    //check that user is logged in
  },
  triggersExit:function(params){
    console.log("EXIT", params);
    //check that there is no unsaved data
  },
  action:function(){
    FlowLayout.render('layout',{sidebar:'sidebar',main:'category',cart:'cart'});
  }
});
