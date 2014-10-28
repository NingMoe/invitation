/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         //Copyright by miningdata. Developed by Jdaie.
         //Dec 12 2013
         
         
         //Setup App id & Server URL
      	var id = "IV01";
      	var server = "http://wx.miningdata.com.cn/invitation/";
      
      
      	//guest_thumb_touchEvent
         var guest_select = 0;
         var guest_touchstart = 0;
      
         //load cover page
         sym.$("cover").append('<img src="'+server+id+'/cover.jpg" width=100% height=100%>');
         sym.$("register").append('<img src="'+server+id+'/register.png" width=100% height=100%>');
      
         //load intro page
         sym.$("intro_bg").append('<img src="'+server+id+'/intro_bg.jpg" width=100% height=100%>');
         sym.$("intro_header").append('<img src="'+server+id+'/intro_header.png" width=100% height=100%>');
      
         //load guest page
         sym.$("guest_bg").append('<img src="'+server+id+'/guest_bg.jpg" width=100% height=100%>');
         sym.$("guest_head").append('<img src="'+server+id+'/guest_head.png" width=100% height=100%>');
         //sym.$("guest_01").append('<img src="'+server+id+'/guest_01.png" width=100%>');
         //sym.$("guest_02").append('<img src="'+server+id+'/guest_02.jpg" width=100%>');
         sym.$("guest_01").append('<img src="'+server+id+'/guest_01.png" width=100%>');
         sym.$("guest_04").append('<img src="'+server+id+'/guest_04.png" width=100%>');
         //sym.$("guest_05").append('<img src="'+server+id+'/guest_05.jpg" width=100%>');
         //sym.$("guest_06").append('<img src="'+server+id+'/guest_06.jpg" width=100%>');
         sym.$("guest_07").append('<img src="'+server+id+'/guest_07.png" width=100%>');
      
         //load agenda page
         sym.$("agenda_bg").append('<img src="'+server+id+'/agenda_bg.jpg" width=100% height=100%>');
         sym.$("agenda_head").append('<img src="'+server+id+'/agenda_head.png" width=100% height=100%>');
         sym.$("agenda_map").append('<img src="'+server+id+'/agenda_map.jpg" width=100%>');
      
         //load sponsor page
         sym.$("sponsor_bg").append('<img src="'+server+id+'/agenda_bg.jpg" width=100% height=100%>');
         sym.$("sponsor_head").append('<img src="'+server+id+'/sponsor_head.png" width=100% height=100%>');
         sym.$("contact").append('<img src="'+server+id+'/contact.png" width=100%>');
      
      
         //mouse & touch event
      
         //监听鼠标mousedown事件，记录鼠标起始位置
         	$(document).bind("mousedown", function(e) {
         			 e.preventDefault();
         			 var yStart = e.originalEvent.clientY;
         			 sym.setVariable('yStart', yStart);
         	});
         //监听鼠标mouseup事件，记录鼠标结束位置，并依次计算滑动方向
         	$(document).bind("mouseup", function(e) {
         		 e.preventDefault();
         		 yStart = sym.getVariable('yStart');
         		 var yEnd = e.originalEvent.clientY;
      
         		if (yEnd - 300> yStart & yEnd > yStart & sym.getPosition() > 10)
         		{
                   sym.playReverse();
                                //向下滑动
         			// play the timeline from the given position (ms or label)
         		}
         		else if (yEnd + 200 < yStart & yEnd < yStart & sym.getPosition() < 4800)
         		{
                                //向上滑动
         			// play the timeline from the given position (ms or label)
         			sym.play();
         		}
         	});
      
         //监听手势touchstart事件，记录初始位置
         	$(document).bind("touchstart", function(e) {
         			 //e.preventDefault();
         			 var touch = e.originalEvent.touches[0];
         			 var yStart = touch.pageY;
         			 sym.setVariable('yStart', yStart);
         	});
      
         //监听手势touchmove事件，而不是touchend事件。并依此计算滑动方向
         	$(document).bind("touchmove", function(e) {
         		if(event.preventDefault) event.preventDefault();
         		event.returnValue = false;
         		var touch = e.originalEvent.touches[0];
         		yStart = sym.getVariable('yStart');
         		var yEnd = touch.pageY;
         		if (yEnd - 200> yStart & yEnd > yStart & sym.getPosition() > 10 & sym.getSymbol("guest_detail").getPosition() != 500)
         		{
                  sym.playReverse();
                                //向下滑动
      
      				sym.getSymbol("intro_slider").stop();
      				sym.getSymbol("agenda_slider").stop();
      				if(sym.getSymbol("form").getPosition() == 500){ sym.getSymbol("form").play();}
      				if(sym.getSymbol("guest_detail").getPosition()==500){sym.getSymbol("guest_detail").play();}
      				if(sym.getSymbol("cancel2").getPosition()==500){sym.getSymbol("cancel2").play();}
         		}
         		else if (yEnd + 200 < yStart & yEnd < yStart & sym.getPosition() < 4800 & sym.getSymbol("guest_detail").getPosition() != 500)
         		{
                                //向上滑动
         			sym.play();
         			sym.getSymbol("intro_slider").stop();
      				sym.getSymbol("agenda_slider").stop();
      				if(sym.getSymbol("form").getPosition() == 500){ sym.getSymbol("form").play();}
      				if(sym.getSymbol("guest_detail").getPosition() == 500){sym.getSymbol("guest_detail").play();}
      				if(sym.getSymbol("cancel2").getPosition()==500){sym.getSymbol("cancel2").play();}
         		}
         	});
      
      
      
      //
      
      
      
      
      

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
      
         //load guest page
      
      
      
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end
      
      
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${_guest_02}", "click", function(sym, e) {
         sym.getSymbol("guest_detail").getSymbol("slider_guest").stop(750);
         if(sym.getSymbol("guest_detail").getPosition()<20){sym.getSymbol("guest_detail").play();}
         if(sym.getSymbol("cancel2").getPosition()<20){sym.getSymbol("cancel2").play();}

      });
      //Edge binding end
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${_guest_03}", "click", function(sym, e) {
         sym.getSymbol("guest_detail").getSymbol("slider_guest").stop(1250);
         if(sym.getSymbol("guest_detail").getPosition()<20){sym.getSymbol("guest_detail").play();}
         if(sym.getSymbol("cancel2").getPosition()<20){sym.getSymbol("cancel2").play();}

      });
      //Edge binding end
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${_guest_04}", "click", function(sym, e) {
         sym.getSymbol("guest_detail").getSymbol("slider_guest").stop(1750);
         if(sym.getSymbol("guest_detail").getPosition()<20){sym.getSymbol("guest_detail").play();}
         if(sym.getSymbol("cancel2").getPosition()<20){sym.getSymbol("cancel2").play();}

      });
      //Edge binding end
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${_guest_05}", "click", function(sym, e) {
         sym.getSymbol("guest_detail").getSymbol("slider_guest").stop(2250);
         if(sym.getSymbol("guest_detail").getPosition()<20){sym.getSymbol("guest_detail").play();}
         if(sym.getSymbol("cancel2").getPosition()<20){sym.getSymbol("cancel2").play();}

      });
      //Edge binding end
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${_guest_06}", "click", function(sym, e) {
         sym.getSymbol("guest_detail").getSymbol("slider_guest").stop(2750);
         if(sym.getSymbol("guest_detail").getPosition()<20){sym.getSymbol("guest_detail").play();}
         if(sym.getSymbol("cancel2").getPosition()<20){sym.getSymbol("cancel2").play();}

      });
      //Edge binding end
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${_guest_07}", "click", function(sym, e) {
         sym.getSymbol("guest_detail").getSymbol("slider_guest").stop(3250);
         if(sym.getSymbol("guest_detail").getPosition()<20){sym.getSymbol("guest_detail").play();}
         if(sym.getSymbol("cancel2").getPosition()<20){sym.getSymbol("cancel2").play();}

      });
      //Edge binding end
      
      
      
      
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${_arrow_jump2}", "click", function(sym, e) {
         sym.play();
      
      
      });
      //Edge binding end
      
      
      
      
      
      
      
      
      
      

      

      Symbol.bindElementAction(compId, symbolName, "${_guest_01}", "click", function(sym, e) {
         sym.getSymbol("guest_detail").getSymbol("slider_guest").stop(250);
         if(sym.getSymbol("guest_detail").getPosition()<20){sym.getSymbol("guest_detail").play();}
         if(sym.getSymbol("cancel2").getPosition()<20){sym.getSymbol("cancel2").play();}

      });
      //Edge binding end

  
      Symbol.bindElementAction(compId, symbolName, "${_register_btn}", "click", function(sym, e) {
         if(sym.getSymbol("form").getPosition() !== 500){ 
         	sym.getSymbol("form").play();
         	sym.$("form").show();
         	}

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2191, function(sym, e) {
         sym.getSymbol("agenda_slider").play(1);
         // insert code here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_phone}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("tel:057189703309", "_self");
         // insert code for mouse click here

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_phone_btn}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         if(sym.getSymbol("form").getPosition() !== 500){ window.open("tel:057189703309", "_self");}
         // insert code for mouse click here

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_ad}", "touchstart", function(sym, e) {
         if(sym.getPosition() == 4000){ sym.play();}

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4111, function(sym, e) {
         sym.getSymbol("ad").play(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_guest_head}", "click", function(sym, e) {
         if(sym.getSymbol("guest_detail").getPosition() == 500){sym.getSymbol("guest_detail").play();}

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_arrow_jump2Copy}", "click", function(sym, e) {
         
         if(sym.getSymbol("guest_detail").getPosition() == 500){sym.getSymbol("guest_detail").play();}else{sym.play();}
         if(sym.getSymbol("cancel2").getPosition()==500){sym.getSymbol("cancel2").play();}

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ad}", "click", function(sym, e) {
         if(sym.getPosition() == 4000){ sym.play();}

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_arrow_jump2Copy2}", "click", function(sym, e) {
         if(sym.getSymbol("guest_detail").getPosition() == 500){sym.getSymbol("guest_detail").play();}else{sym.playReverse();}
         if(sym.getSymbol("cancel2").getPosition()==500){sym.getSymbol("cancel2").play();}

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cancel2}", "click", function(sym, e) {
         if(sym.getSymbol("cancel2").getPosition()==500){sym.getSymbol("cancel2").play();}
         if(sym.getSymbol("guest_detail").getPosition()>20){sym.getSymbol("guest_detail").play();}

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'spin'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(1);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here

      });
      //Edge binding end

   })("spin");
   //Edge symbol end:'spin'

   //=========================================================
   
   //Edge symbol: 'arrow'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         //setup invitation ID & server
         var id = "IV01/";
         var server = "http://wx.miningdata.com.cn/invitation/";
         
         sym.$("arrow_holder").append('<img src="'+server+id+'arrow.png" width=auto height=100% horizonal-align = middle>');

      });
      //Edge binding end

   })("arrow");
   //Edge symbol end:'arrow'

   //=========================================================
   
   //Edge symbol: 'arrow_jump'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(1);

      });
      //Edge binding end

   })("arrow_jump");
   //Edge symbol end:'arrow_jump'

   //=========================================================
   
   //Edge symbol: 'slider'
   (function(symbolName) {   
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         //Setup App id & Server URL
         var id = "IV01";
         var server = "http://wx.miningdata.com.cn/invitation/";
         console.log( "Hello miningdata");
         //load sliders
         sym.$("slider_1").append('<img src="'+server+id+'/intro_slider1.jpg" width=100%>');
         //sym.$("slider_2").append('<img src="'+server+id+'/intro_slider2.jpg" width=100%>');
         //sym.$("slider_3").append('<img src="'+server+id+'/intro_slider3.jpg" width=100%>');
         
         
         
         //slider mouse & touch event
         
         //监听鼠标mousedown事件，记录鼠标起始位置
         	$(document).bind("mousedown", function(e) {
         			 e.preventDefault();
         			 var xStart = e.originalEvent.clientX;
         			 sym.setVariable('xStart', xStart);
         	});
         //监听鼠标mouseup事件，记录鼠标结束位置，并依次计算滑动方向
         	$(document).bind("mouseup", function(e) {
         		 e.preventDefault();
         		 xStart = sym.getVariable('xStart');
         		 var xEnd = e.originalEvent.clientX;
         
         		if (xEnd > xStart)
         		{
                   sym.playReverse();
                                //向右滑动
         			// play the timeline from the given position (ms or label)
         		}
         		else if (xEnd < xStart)
         		{
                                //向左滑动
         			// play the timeline from the given position (ms or label)
         			sym.play();
         		}
         	});
         
         //监听手势touchstart事件，记录初始位置
         	$(document).bind("touchstart", function(e) {
         			 //e.preventDefault();
         			 var touch = e.originalEvent.touches[0];
         			 var xStart = touch.pageX;
         			 sym.setVariable('xStart', xStart);
         	});
         
         //监听手势touchmove事件，而不是touchend事件。并依此计算滑动方向
         	$(document).bind("touchmove", function(e) {
         		e.preventDefault();
         		var touch = e.originalEvent.touches[0];
         		xStart = sym.getVariable('xStart');
         		var xEnd = touch.pageX;
         
         		if (xEnd > xStart & xEnd -100 > xStart)
         		{
                  sym.playReverse();
                                //向右滑动
         		}
         		else if (xEnd < xStart & xEnd +100 < xStart)
         		{
                                //向左滑动
         			sym.play();
         
         		}
         	});
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();
      
      });
      //Edge binding end
      
      
      
   
      

   })("slider");
   //Edge symbol end:'slider'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   

   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'slider_1'
   (function(symbolName) {   
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();
      
      });
         //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();
      
      });
         //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();
      
      });
         //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.stop();
      
      });
         //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.stop();
      
      });
         //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.stop();
      
      });
         //Edge binding end
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         //Setup App id & Server URL
         
         var id = "IV01";
         var server = "http://wx.miningdata.com.cn/invitation/";
         
         
         //load sliders
         sym.$("slider_1").append('<img src="'+server+id+'/guest_large01.jpg" width=100%>');
         sym.$("slider_2").append('<img src="'+server+id+'/guest_large02.jpg" width=100%>');
         sym.$("slider_3").append('<img src="'+server+id+'/guest_large03.jpg" width=100%>');
         sym.$("slider_4").append('<img src="'+server+id+'/guest_large04.jpg" width=100%>');
         sym.$("slider_5").append('<img src="'+server+id+'/guest_large05.jpg" width=100%>');
         sym.$("slider_6").append('<img src="'+server+id+'/guest_large06.jpg" width=100%>');
         sym.$("slider_7").append('<img src="'+server+id+'/guest_large07.jpg" width=100%>');
         
         /*
         //slider mouse & touch event
         
         //监听鼠标mousedown事件，记录鼠标起始位置
         	$(document).bind("mousedown", function(e) {
         			 e.preventDefault();
         			 var xStart = e.originalEvent.clientX;
         			 sym.setVariable('xStart', xStart);
         	});
         //监听鼠标mouseup事件，记录鼠标结束位置，并依次计算滑动方向
         	$(document).bind("mouseup", function(e) {
         		 e.preventDefault();
         		 xStart = sym.getVariable('xStart');
         		 var xEnd = e.originalEvent.clientX;
         
         		if (xEnd > xStart)
         		{
                   sym.playReverse();
                                //向右滑动
         			// play the timeline from the given position (ms or label)
         		}
         		else if (xEnd < xStart)
         		{
                                //向左滑动
         			// play the timeline from the given position (ms or label)
         			sym.play();
         		}
         	});
         
         //监听手势touchstart事件，记录初始位置
         	$(document).bind("touchstart", function(e) {
         			 //e.preventDefault();
         			 var touch = e.originalEvent.touches[0];
         			 var xStart = touch.pageX;
         			 var yStart = touch.pageY;
         			 sym.setVariable('xStart', xStart);
         			 sym.setVariable('yStart', yStart);
         	});
         
         //监听手势touchmove事件，而不是touchend事件。并依此计算滑动方向
         	$(document).bind("touchmove", function(e) {
         		e.preventDefault();
         		var touch = e.originalEvent.touches[0];
         		xStart = sym.getVariable('xStart');
         		yStart = sym.getVariable('yStart');
         		var xEnd = touch.pageX;
         		var yEnd = touch.pageY;
         		if (xEnd > xStart & xEnd -100 > xStart)
         		{
                  sym.playReverse();
                                //向右滑动
         		}
         		else if (xEnd < xStart & xEnd +100 < xStart)
         		{
                                //向左滑动
         			sym.play();
         
         		}
         	});
         
         
         */

      });
         //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.playReverse();
      
      });
      //Edge binding end

      })("slider_guest");
   //Edge symbol end:'slider_guest'

   //=========================================================
   
   //Edge symbol: 'slider_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
         //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         //Setup App id & Server URL
         
         //load sliders
         
         
         //slider mouse & touch event
         
         //监听鼠标mousedown事件，记录鼠标起始位置
         	$(document).bind("mousedown", function(e) {
         			 e.preventDefault();
         			 var xStart = e.originalEvent.clientX;
         			 sym.setVariable('xStart', xStart);
         	});
         //监听鼠标mouseup事件，记录鼠标结束位置，并依次计算滑动方向
         	$(document).bind("mouseup", function(e) {
         		 e.preventDefault();
         		 xStart = sym.getVariable('xStart');
         		 var xEnd = e.originalEvent.clientX;
         
         		if (xEnd > xStart)
         		{
                   sym.playReverse();
                                //向右滑动
         			// play the timeline from the given position (ms or label)
         		}
         		else if (xEnd < xStart)
         		{
                                //向左滑动
         			// play the timeline from the given position (ms or label)
         			sym.play();
         		}
         	});
         
         //监听手势touchstart事件，记录初始位置
         	$(document).bind("touchstart", function(e) {
         			 //e.preventDefault();
         			 var touch = e.originalEvent.touches[0];
         			 var xStart = touch.pageX;
         			 sym.setVariable('xStart', xStart);
         	});
         
         //监听手势touchmove事件，而不是touchend事件。并依此计算滑动方向
         	$(document).bind("touchmove", function(e) {
         		e.preventDefault();
         		var touch = e.originalEvent.touches[0];
         		xStart = sym.getVariable('xStart');
         		var xEnd = touch.pageX;
         
         		if (xEnd > xStart & xEnd -100 > xStart)
         		{
                  sym.playReverse();
                                //向右滑动
         		}
         		else if (xEnd < xStart & xEnd +100 < xStart)
         		{
                                //向左滑动
         			sym.play();
         
         		}
         	});
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      })("slider_agenda");
   //Edge symbol end:'slider_agenda'

   //=========================================================
   
   //Edge symbol: 'sponsor_logos'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         //Setup App id & Server URL
         var id = "IV01";
         var server = "http://wx.miningdata.com.cn/invitation/";
         
         
         //load logos
         sym.$("logo_1").append('<img src="'+server+id+'/logo_1.png" width=100%>');
         /*sym.$("logo_2").append('<img src="'+server+id+'/logo_2.jpg" width=100%>');
         sym.$("logo_3").append('<img src="'+server+id+'/logo_3.jpg" width=100%>');
         sym.$("logo_4").append('<img src="'+server+id+'/logo_4.jpg" width=100%>');
         sym.$("logo_5").append('<img src="'+server+id+'/logo_5.jpg" width=100%>');
         sym.$("logo_6").append('<img src="'+server+id+'/logo_6.jpg" width=100%>');*/
         

      });
      //Edge binding end

   })("sponsor_logos");
   //Edge symbol end:'sponsor_logos'

   //=========================================================
   
   //Edge symbol: 'right_arrow'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("right_arrow");
   //Edge symbol end:'right_arrow'

   //=========================================================
   
   //Edge symbol: 'tip'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(1);

      });
      //Edge binding end

   })("tip");
   //Edge symbol end:'tip'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   

//异常
   //Edge symbol: 'form'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // sym.$("name") resolves an Edge Animate element name to a DOM
         // element that can be used with jQuery
         sym.$("ctx").append('<iframe height=100% allowTransparency="true" frameborder="0" scrolling="no" style="width:100%;border:none"  src="http://wx.miningdata.com.cn/invitation/email/"></iframe>')
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().getSymbol("form").hide();
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop(1);
         sym.getComposition().getStage().getSymbol("form").hide();
         // insert code here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Ellipse}", "click", function(sym, e) {
         sym.play();
         // insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RoundRect}", "swiperight", function(sym, e) {
         sym.play();
         // insert code to be run when a swiperight event occurs on an element

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("form");
   //Edge symbol end:'form'

   //=========================================================
   
   //Edge symbol: 'ad'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         //Setup App id & Server URL
         
         var id = "AD01";
         var server = "http://wx.miningdata.com.cn/invitation/";
         
         
         //load sliders
         sym.$("logo_ad").append('<img src="'+server+id+'/logo_ad.png" width=100%>');
         sym.$("logo_large").append('<img src="'+server+id+'/logo_large.jpg" width=100%>');
         sym.$("feature01").append('<img src="'+server+id+'/feature01.jpg" width=100%>');
         sym.$("feature02").append('<img src="'+server+id+'/feature02.jpg" width=100%>');
         sym.$("feature03").append('<img src="'+server+id+'/feature03.jpg" width=100%>');
         sym.$("feature04").append('<img src="'+server+id+'/feature04.jpg" width=100%>');
         sym.$("feature05").append('<img src="'+server+id+'/feature05.jpg" width=100%>');
         
         //
         //监听鼠标mousedown事件，记录鼠标起始位置
         	$(document).bind("mousedown", function(e) {
         			 e.preventDefault();
         			 var xStart = e.originalEvent.clientX;
         			 sym.setVariable('xStart', xStart);
         	});
         //监听鼠标mouseup事件，记录鼠标结束位置，并依次计算滑动方向
         	$(document).bind("mouseup", function(e) {
         		 e.preventDefault();
         		 xStart = sym.getVariable('xStart');
         		 var xEnd = e.originalEvent.clientX;
         
         		if (xEnd > xStart)
         		{
                   sym.playReverse();
                                //向右滑动
         			// play the timeline from the given position (ms or label)
         		}
         		else if (xEnd < xStart)
         		{
                                //向左滑动
         			// play the timeline from the given position (ms or label)
         			sym.play();
         		}
         	});
         
         //监听手势touchstart事件，记录初始位置
         	$(document).bind("touchstart", function(e) {
         			 //e.preventDefault();
         			 var touch = e.originalEvent.touches[0];
         			 var xStart = touch.pageX;
         			 sym.setVariable('xStart', xStart);
         	});
         
         //监听手势touchmove事件，而不是touchend事件。并依此计算滑动方向
         	$(document).bind("touchmove", function(e) {
         		e.preventDefault();
         		var touch = e.originalEvent.touches[0];
         		xStart = sym.getVariable('xStart');
         		var xEnd = touch.pageX;
         
         		if (xEnd > xStart & xEnd -100 > xStart)
         		{
                  sym.playReverse();
                                //向右滑动
         		}
         		else if (xEnd < xStart & xEnd +100 < xStart)
         		{
                                //向左滑动
         			sym.play();
         
         		}
         	});

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_phonebtn}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("tel:057189703309", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_arrow_diyCopy}", "click", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_arrow_diy}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle}", "click", function(sym, e) {
         window.open("http://miningdata.com.cn", "_self");
         

      });
      //Edge binding end

   })("ad");
   //Edge symbol end:'ad'

   //=========================================================
   
   //Edge symbol: 'arrow_diy'
   (function(symbolName) {   
   
   })("arrow_diy");
   //Edge symbol end:'arrow_diy'

   //=========================================================
   
   //Edge symbol: 'guest_detail'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         // stop the timeline at the given position (ms or label)
         sym.stop(1);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle}", "click", function(sym, e) {
         
         

      });
      //Edge binding end

   })("guest_detail");
   //Edge symbol end:'guest_detail'

   //=========================================================
   
   //Edge symbol: 'cancel'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_EllipseCopy}", "click", function(sym, e) {
         sym.play();
         // insert code for mouse click here

      });
      //Edge binding end

   })("cancel");
   //Edge symbol end:'cancel'

   //=========================================================
   
   //Edge symbol: 'cancel2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop(1);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("cancel2");
   //Edge symbol end:'cancel2'

})(jQuery, AdobeEdge, "EDGE-32363606");