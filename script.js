  var controller = ViewController();
addToWindow(controller);

var btn = Button(184, 150, 200, 80); 
btn.tag = 1;
btn.setBackgroundColor(Color(0.45,0.75,0.83,1)); 
btn.setTitle('Unlock A New Level'); 
controller.view.addSubview(btn);
controller.view.setBackgroundColor(Color(0.45,0.2,0.15,1));





var ct2 = ViewController();
ct2.view.setBackgroundColor(Color(1,1,1,1));

var lbl2 = Label(134, 100, 300, 80); 
lbl2.setText('Would you like to take a survey instead?');
ct2.view.addSubview(lbl2);  

var btn2a = Button(100, 180, 150, 80); 
btn2a.tag = 2;
btn2a.setBackgroundColor(Color(0.2,0.8,0.2,1)); 
btn2a.setTitle('Survey'); 
ct2.view.addSubview(btn2a);

var btn2b = Button(318, 180, 150, 80); 
btn2b.tag = 3;
btn2b.setBackgroundColor(Color(0.45,0.75,0.83,1)); 
btn2b.setTitle('$0.99'); 
ct2.view.addSubview(btn2b);


var survey1 = ViewController();
survey1.view.setBackgroundColor(Color(1,1,1,1));

var lbl3 = Label(134, 25, 300, 80); 
lbl3.setText('Have you purchased a TV recently?');
survey1.view.addSubview(lbl3);
var btn3a = Button(100, 180, 150, 80); 
btn3a.setBackgroundColor(Color(0.7,0.7,0.7,1)); 
btn3a.setTitle('Yes');
btn3a.tag = 4;
survey1.view.addSubview(btn3a);

var btn3b = Button(318, 180, 150, 80); 
btn3b.tag = 5;
btn3b.setBackgroundColor(Color(0.7,0.7,0.7,1)); 
btn3b.setTitle('No'); 
survey1.view.addSubview(btn3b);






var survey2 = ViewController();
survey2.view.setBackgroundColor(Color(1,1,1,1));

var lbl4 = Label(134, 25, 300, 80); 
lbl4.setText('How often do you play videogames?');
survey2.view.addSubview(lbl4);

var btn4a = Button(100, 180, 150, 80); 
btn4a.setBackgroundColor(Color(0.7,0.7,0.7,1)); 
btn4a.setTitle('Never');
btn4a.tag = 6;
survey2.view.addSubview(btn4a);

var btn4b = Button(318, 180, 150, 80); 
btn4b.tag = 7;
btn4b.setBackgroundColor(Color(0.7,0.7,0.7,1)); 
btn4b.setTitle('2 hours'); 
survey2.view.addSubview(btn4b);


var btn4c = Button(318, 20, 50, 80); 
btn4c.tag = 8;
btn4c.setBackgroundColor(Color(0.7,0.7,0.7,1)); 
btn4c.setTitle('1 hour'); 
survey2.view.addSubview(btn4c);




function buttonPress(sender){
  if(sender.currentTitle == 'Unlock New Level'){
    PresentModalDialog(ct2);
  } else if (sender.currentTitle == 'Survey'){
    addToWindow(survey1);
  } else if (sender.tag == 4 || sender.tag == 5) {
    addToWindow(survey2);
  }
}