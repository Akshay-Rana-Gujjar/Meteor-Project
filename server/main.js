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

    },

    'notes.update'(note,text){

      if(note.owner !== Meteor.userId()){
         console.log("\n=============== note.owner  =================");
         console.log(note.owner);
         console.log("\n===============   =================");
         console.log(Meteor.userId());
         
        
          return console.log("Un-Authorized Request");

          
        }
  
          check(note._id , String);


          console.log("\n=============== note._id  =================");
          console.log(note._id);
          console.log("\n===============   =================");
          console.log(Meteor.userId());
          console.log("\n=============== note.owner  =================");
          console.log(note.owner);
          console.log("\n===============   =================");
          console.log(Meteor.userId());

          console.log("=================  Above update  ==============");
          console.log(text);
          Notes.update(note._id,{$set :{text : text}});

    }


});






});
