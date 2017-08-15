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
    console.log("123");

    return false;
  }
});
