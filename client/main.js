import { Template } from 'meteor/templating';

import './main.html';

Template.body.helpers({
  notes:[
    {text:"akshay"},
    {text:"aditya"},
    {text:"yash"},
    {text:"abhishek"}
  ]
});
