import { Meteor } from 'meteor/meteor';
import {check} from 'meteor/check';
import {Notes} from '../lib/collection.js';


Meteor.startup(() => {
  // code to run on server at startup

Meteor.methods({
    'notes.insert'(text){
        // checking the data type of text
        check(text,String);

        // check if user logged in
        if(!Meteor.userId()){

            Materialize.toast('Un-Authorized Request', 4000);
            return;
        }

        //insert data to DB
        Notes.insert({
        text:text,
        owner : Meteor.userId(),
        username : Meteor.user().username
      });
    },
    'notes.remove'(note){

      if(note.owner !== Meteor.userId()){
      
        return console.log("Un-Authorized Request");
      }

        check(note._id , String);
        
        Notes.remove(note._id);

    }


});






});
