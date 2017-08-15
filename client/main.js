import { Template } from 'meteor/templating';
import {Notes} from '../lib/collection.js';
import {Account} from 'meteor/accounts-base';


//  Account configuration

Accounts.ui.config({
  passwordSignupFields :'USERNAME_ONLY',
});

import './main.html';

Template.body.helpers({
  // notes:[
  //   {text:"akshay"},
  //   {text:"aditya"},
  //   {text:"yash"},
  //   {text:"abhishek"}
  // ]


  notes(){
    return Notes.find();
  }
});
Template.add.events({
  'submit .add-form':function(){
    event.preventDefault();
    // get input vaue
    const target = event.target;
    const inputValue = target.text.value;


    //insert value to DB
    // Notes.insert({
    //   text:inputValue,
    //   owner : Meteor.userId(),
    //   username : Meteor.user().username
    // });

    // call method from collection.js to insert data
    Meteor.call('notes.insert',inputValue);


    // set value to empty
    target.text.value = '';

    $('#addNotes').modal('close')
    


    return false;
  }
});

Template.note.events({
  // delete action perform
  "click .delete-note": function(){

    
    if(this.owner !== Meteor.userId()){
      Materialize.toast('Un-Authorized Request', 2000,'rounded red lighten-2');
      return;
    }

    const returnCallback = Meteor.call('notes.remove',this);
    

    // Notes.remove(this._id);
    return false;

  }


});