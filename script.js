var controller = ViewController();
addToWindow(controller);

var btn = Button(184, 150, 200, 80); 
btn.setBackgroundColor(Color(0.45,0.75,0.83,1)); 
btn.setTitle('Unlock New Level'); 
controller.view.addSubview(btn);





var ct2 = ViewController();
ct2.view.setBackgroundColor(Color(1,1,1,1));

var lbl = Label(134, 125, 300, 80); 
lbl.setText('More levels with new skills and scenarios');
ct2.view.addSubview(lbl);
var btn2a = Button(100, 225, 150, 80); 
btn2a.setBackgroundColor(Color(0.2,0.8,0.2,1)); 
btn2a.setTitle('Take a survey'); 
ct2.view.addSubview(btn2a);
var btn2b = Button(318, 225, 150, 80); 
btn2b.setBackgroundColor(Color(0.45,0.75,0.83,1)); 
btn2b.setTitle('$0.99'); 
ct2.view.addSubview(btn2b);




function buttonPress(sender){
  if(sender.currentTitle == 'Unlock New Level'){
    PresentModalDialog(ct2);
  }
}