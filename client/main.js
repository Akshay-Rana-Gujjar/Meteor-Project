import { Template } from 'meteor/templating';
import {Notes} from '../lib/collection.js';

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

    console.log(inputValue);

    //insert value to DB
    Notes.insert({
      text:inputValue
    });

    // set value to empty
    target.text.value = '';

    $('#addNotes').modal('close')
    


    return false;
  }
});

Template.note.events({
  "click .delete-note": function(){
    Notes.remove(this._id);
    return false;

  }


});