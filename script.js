var controller = ViewController();
addToWindow(controller);

var btn = Button(184, 150, 200, 80); 
btn.setBackgroundColor(Color(0.45,0.75,0.83,1)); 
btn.setTitle('Unlock New Level'); 
controller.view.addSubview(btn);





var ct2 = ViewController();
ct2.view.setBackgroundColor(Color(1,1,1,1));

var lbl2 = Label(134, 100, 300, 80); 
lbl2.setText('More levels with new skills and scenarios');
controller.view.addSubview(lbl2);


var btn2a = Button(100, 180, 150, 80); 
btn2a.setBackgroundColor(Color(0.2,0.8,0.2,1)); 
btn2a.setTitle('Survey'); 
ct2.view.addSubview(btn2a);
var btn2b = Button(318, 180, 150, 80); 
btn2b.setBackgroundColor(Color(0.45,0.75,0.83,1)); 
btn2b.setTitle('$0.99'); 
ct2.view.addSubview(btn2b);


var survey1 = ViewController();
survey1.view.setBackgroundColor(Color(1,1,1,1));

var lbl3 = Label(134, 25, 300, 80); 
lbl3.setText('Have you purchased a TV in the past 6 months?');
survey1.view.addSubview(lbl3);
var btn3a = Button(100, 180, 150, 80); 
btn3a.setBackgroundColor(Color(0.7,0.7,0.7,1)); 
btn3a.setTitle('Yes'); 
survey1.view.addSubview(btn3a);
var btn3b = Button(318, 180, 150, 80); 
btn3b.setBackgroundColor(Color(0.7,0.7,0.7,1)); 
btn3b.setTitle('No'); 
survey1.view.addSubview(btn3b);



function buttonPress(sender){
  if(sender.currentTitle == 'Unlock New Level'){
    PresentModalDialog(ct2);
  } else if (sender.currentTitle == 'Survey'){
    PresentModalDialog(survey1);
  }
}