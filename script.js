var controller = ViewController();
addToWindow(controller);

var btn = Button(184, 150, 200, 80); 
btn.setBackgroundColor(Color(0.45,0.75,0.83,1)); 
btn.setTitle('Unlock New Level'); 
controller.view.addSubview(btn);

var ct2 = ViewController();
ct2.view.setBackgroundColor(Color(1,1,1,1));

var lbl = Label(20, 20, 225, 100); 
lbl.setText('Hi from Javascript');
lbl.setBackgroundColor(Color(0.5,0.5,0.5,0.5)); 
ct2.view.addSubview(lbl);

function buttonPress(sender){
  if(sender.currentTitle == 'Unlock New Level'){
    PresentModalDialog(ct2);
  }
}