/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'sponsor_bg',
            display:'none',
            type:'rect',
            rect:['0px','0px','100%','100%','auto','auto'],
            fill:["rgba(213,255,195,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'contactCopy',
            display:'none',
            type:'rect',
            rect:['9.1%','auto','81.9%','27.8%','auto','-373px'],
            fill:["rgba(255,255,255,0.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
            {
               id:'contact',
               display:'none',
               type:'rect',
               rect:['0%','auto','100%','52.7%','auto','0px'],
               fill:["rgba(255,255,255,0.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'phone',
               display:'none',
               type:'text',
               rect:['18.3%','153px','68.6%','42.3%','auto','auto'],
               text:"0571-89703309",
               align:"left",
               font:['Tahoma, Geneva, sans-serif',[200,"%"],"rgba(26,26,26,1.00)","normal","none","normal"]
            },
            {
               id:'email',
               display:'none',
               type:'text',
               rect:['18.3%','236px','68.6%','42.3%','auto','auto'],
               text:"wangz@idacker.com",
               align:"left",
               font:['Tahoma, Geneva, sans-serif',[200,"%"],"rgba(26,26,26,1.00)","normal","none","normal"]
            },
            {
               id:'addr',
               display:'none',
               type:'text',
               rect:['18.3%','330px','55.3%','42.3%','auto','auto'],
               text:"杭州，舟山",
               align:"left",
               font:['Tahoma, Geneva, sans-serif',[200,"%"],"rgba(26,26,26,1.00)","normal","none","normal"]
            }]
         },
         {
            id:'sponsor_logos',
            display:'none',
            type:'rect',
            rect:['9.1%','16.9%','81.4%','24%','auto','auto']
         },
         {
            id:'sponsor_head',
            display:'none',
            type:'rect',
            rect:['auto','-262.4%','20.8%','193px','409.1%','auto'],
            fill:["rgba(150,189,94,0.90)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'phone_btn',
            type:'rect',
            rect:['14.5%','58.5%','51.4%','9.7%','auto','auto'],
            fill:["rgba(255,75,75,0)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'form',
            display:'none',
            type:'rect',
            rect:['0%','0','100%','100%','auto','auto']
         },
         {
            id:'register_btn',
            display:'none',
            type:'rect',
            rect:['64.2%','66%','25.5%','13.9%','auto','auto'],
            fill:["rgba(209,209,209,0)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'ad',
            display:'none',
            type:'rect',
            rect:['0%','0%','100%','100%','auto','auto']
         },
         {
            id:'agenda_bg',
            display:'none',
            type:'rect',
            rect:['0px','0px','100%','100%','auto','auto'],
            fill:["rgba(213,255,195,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'agenda_slider',
            display:'none',
            type:'rect',
            rect:['295','1.8%','auto','auto','auto','auto']
         },
         {
            id:'agenda_info',
            display:'none',
            type:'rect',
            rect:['0px','auto','100%','27.1%','auto','27.4%'],
            fill:["rgba(255,255,255,0.55)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
            {
               id:'agenda_info_dateCopy2',
               type:'rect',
               rect:['0px','0%','36%','100%','auto','auto'],
               fill:["rgba(255,255,255,0.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               c:[
               {
                  id:'agenda_info_date_red',
                  type:'rect',
                  rect:['0px','0%','100%','8%','auto','auto'],
                  fill:["rgba(255,102,102,1.00)"],
                  stroke:[0,"rgb(0, 0, 0)","none"]
               },
               {
                  id:'Text5',
                  type:'text',
                  rect:['0.1%','21.8%','99.8%','13.1%','auto','auto'],
                  text:"2014.11.",
                  align:"center",
                  font:['Tahoma, Geneva, sans-serif',[250.1,"%"],"rgba(94,73,36,1.00)","normal","none","normal"]
               },
               {
                  id:'Text5Copy',
                  type:'text',
                  rect:['0.2%','38.7%','99.5%','51.3%','auto','auto'],
                  text:"14",
                  align:"center",
                  font:['Trebuchet MS, Arial, Helvetica, sans-serif',[1000,"%"],"rgba(94,73,36,1.00)","100","none","normal"]
               }]
            },
            {
               id:'agenda_info_detail',
               display:'none',
               type:'rect',
               rect:['auto','0%','64%','100%','0px','auto'],
               fill:["rgba(255,255,255,0.39)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               c:[
               {
                  id:'time',
                  type:'rect',
                  rect:['10.6%','15.3%','80.8%','23.4%','auto','auto'],
                  fill:["rgba(255,255,255,0.00)"],
                  stroke:[0,"rgb(0, 0, 0)","none"],
                  c:[
                  {
                     id:'agenda_icon12',
                     type:'image',
                     rect:['2.4%','21.1%','9.7%','59.3%','auto','auto'],
                     fill:["rgba(0,0,0,0)",im+"agenda_icon1.png",'0%','0%','100%','auto']
                  },
                  {
                     id:'time_text',
                     type:'text',
                     rect:['82px','16px','437px','35px','auto','auto'],
                     text:"2014年11月14日  08:30",
                     align:"left",
                     font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',[230,"%"],"rgba(94,73,36,1)","100","none","normal"]
                  }]
               },
               {
                  id:'scale',
                  type:'rect',
                  rect:['10.7%','38%','80.8%','24.3%','auto','auto'],
                  fill:["rgba(255,255,255,0.00)"],
                  stroke:[0,"rgb(0, 0, 0)","none"],
                  c:[
                  {
                     id:'agenda_icon22',
                     type:'image',
                     rect:['1.2%','22.9%','12.1%','53.7%','auto','auto'],
                     fill:["rgba(0,0,0,0)",im+"agenda_icon2.png",'0%','0%','100%','auto']
                  },
                  {
                     id:'scale_text',
                     type:'text',
                     rect:['82px','17px','436px','35px','auto','auto'],
                     text:"会议规模 300人",
                     align:"left",
                     font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',[230,"%"],"rgba(94,73,36,1)","100","none","normal"]
                  }]
               },
               {
                  id:'address',
                  type:'rect',
                  rect:['10.7%','61.7%','80.7%','23.7%','auto','auto'],
                  fill:["rgba(255,255,255,0.00)"],
                  stroke:[0,"rgb(0, 0, 0)","none"],
                  c:[
                  {
                     id:'agenda_icon32',
                     type:'image',
                     rect:['3.3%','19.2%','6.1%','63%','auto','auto'],
                     fill:["rgba(0,0,0,0)",im+"agenda_icon3.png",'0%','0%','100%','auto']
                  },
                  {
                     id:'address_text',
                     type:'text',
                     rect:['82px','15px','436px','35px','auto','auto'],
                     text:"中国舟山市  海中洲国际大酒店",
                     align:"left",
                     font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',[230,"%"],"rgba(94,73,36,1)","100","none","normal"]
                  }]
               }]
            }]
         },
         {
            id:'agenda_map',
            display:'none',
            type:'rect',
            rect:['0px','auto','100%','28.4%','auto','-1%'],
            fill:["rgba(165,188,255,0.55)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'agenda_head',
            display:'none',
            type:'rect',
            rect:['auto','-262.4%','20.8%','193px','409.1%','auto'],
            fill:["rgba(150,189,94,0.90)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'guest_bg',
            display:'none',
            type:'rect',
            rect:['0px','0px','100%','100%','auto','auto'],
            fill:["rgba(196,222,255,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'guest_01',
            display:'none',
            type:'rect',
            rect:['20.6%','15.8%','26.7%','11.7%','auto','auto'],
            fill:["rgba(164,167,254,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Rt01',
            display:'none',
            type:'rect',
            rect:['-10.9%','auto','47.5%','4.2%','auto','70.8%'],
            opacity:0.75,
            fill:["rgba(254,163,171,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'name01',
            display:'none',
            type:'text',
            rect:['4.7%','25.5%','27.8%','3.2%','auto','auto'],
            text:"",
            align:"right",
            font:['Tahoma, Geneva, sans-serif',[200,"%"],"rgba(255,255,255,1)","normal","none","normal"]
         },
         /*{
            id:'guest_02',
            display:'none',
            type:'rect',
            rect:['auto','24.5%','26.7%','11.7%','19.6%','auto'],
            fill:["rgba(164,167,254,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Rt02',
            display:'none',
            type:'rect',
            rect:['auto','auto','47.5%','4.2%','-11.2%','62%'],
            opacity:0.75,
            fill:["rgba(212,206,147,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'name02',
            display:'none',
            type:'text',
            rect:['auto','34.3%','35.6%','3.2%','-2.2%','auto'],
            text:"BECHAM",
            align:"justify",
            font:['Tahoma, Geneva, sans-serif',[200,"%"],"rgba(255,255,255,1)","normal","none","normal"]
         },*/
         {
            id:'guest_03',
            display:'none',
            type:'rect',
            rect:['20.6%','34.2%','26.7%','11.7%','auto','auto'],
            fill:["rgba(164,167,254,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
/*         {
            id:'Rt03',
            display:'none',
            type:'rect',
            rect:['-10.9%','auto','47.5%','4.2%','auto','52.8%'],
            opacity:0.75,
            fill:["rgba(181,215,133,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },*/
/*         {
            id:'name03',
            display:'none',
            type:'text',
            rect:['4.7%','43.5%','27.8%','3.2%','auto','auto'],
            text:"CODY",
            align:"right",
            font:['Tahoma, Geneva, sans-serif',[200,"%"],"rgba(255,255,255,1)","normal","none","normal"]
         },*/
         {
            id:'guest_04',
            display:'none',
            type:'rect',
            rect:['auto','41.7%','26.7%','11.7%','19.6%','auto'],
            fill:["rgba(164,167,254,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Rt04',
            display:'none',
            type:'rect',
            rect:['auto','auto','47.5%','4.2%','-11.2%','44.7%'],
            opacity:0.75,
            fill:["rgba(145,170,207,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'name04',
            display:'none',
            type:'text',
            rect:['auto','51.7%','35.6%','3.2%','-2.2%','auto'],
            text:"",
            align:"justify",
            font:['Tahoma, Geneva, sans-serif',[200,"%"],"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'guest_07',
            display:'none',
            type:'rect',
            rect:['20.6%','70%','26.7%','11.7%','auto','auto'],
            fill:["rgba(164,167,254,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Rt07',
            display:'none',
            type:'rect',
            rect:['-10.9%','auto','47.5%','4.2%','auto','17%'],
            opacity:0.75,
            fill:["rgba(181,215,133,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'name07',
            display:'none',
            type:'text',
            rect:['4.7%','79.3%','27.8%','3.2%','auto','auto'],
            text:"",
            align:"right",
            font:['Tahoma, Geneva, sans-serif',[200,"%"],"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'guest_detail',
            type:'rect',
            rect:['0','110.2%','100%','74.5%','auto','auto']
         },
         {
            id:'guest_head',
            display:'none',
            type:'rect',
            rect:['auto','-262.4%','20.8%','193px','64.5%','auto'],
            fill:["rgba(150,189,94,0.90)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'cancel2',
            display:'none',
            type:'rect',
            rect:['137.5%','-94','100%','auto','auto','auto']
         },
         {
            id:'intro_bg',
            type:'rect',
            rect:['0px','0px','100%','100%','auto','auto'],
            fill:["rgba(207,220,169,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'intro_slider',
            type:'rect',
            rect:['0','6.3%','100%','auto','auto','auto']
         },
         {
            id:'intro_text_bg',
            type:'rect',
            rect:['0px','auto','100%','296px','auto','-7%'],
            opacity:0.5,
            fill:["rgba(106,106,106,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'intro_text',
            type:'text',
            rect:['34px','auto','90.9%','248px','auto','0.8%'],
            text:"2014 舟山互联网峰会，汇聚互联网行业精英和创新型中小企业到舟山，搭建合作共赢的平台，同时也领略舟山迷人的自然风光和佛教文化。目的是汇集大数据领域的专家、企业家和投资人，信息共享、资源整合，共同探讨加快舟山互联网产业的发展模式和方法。搭建交流的平台，通过“路演+对接”的方式充分沟通、交流，最后达成项目合作。",
            align:"justify",
            font:['Tahoma, Geneva, sans-serif',[2,"em"],"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'intro_header',
            type:'rect',
            rect:['auto','0%','133px','193px','9.8%','auto'],
            fill:["rgba(150,189,94,0.90)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'cover',
            type:'rect',
            rect:['0px','-1px','100%','100.1%','auto','auto'],
            fill:["rgba(150,148,107,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'spin3',
            type:'rect',
            rect:['0px','32','100%','auto','auto','auto']
         },
         {
            id:'arrow_jump2',
            type:'rect',
            rect:['0','auto','100%','auto','auto','15%']
         },
         {
            id:'arrow_jump2Copy',
            display:'none',
            type:'rect',
            rect:['0px','auto','100%','auto','auto','15%']
         },
         {
            id:'arrow_jump2Copy2',
            display:'none',
            type:'rect',
            rect:['0px','24.5%','100%','auto','auto','auto']
         },
         {
            id:'Text3',
            type:'text',
            rect:['0px','auto','100%','96px','auto','5.8%'],
            opacity:0.7109375,
            text:"向上滑动",
            align:"center",
            font:['Arial, Helvetica, sans-serif',[300,"%"],"rgba(255,255,255,1.00)","normal","none","normal"]
         }],
         symbolInstances: [
         {
            id:'spin3',
            symbolName:'spin'
         },
         {
            id:'cancel2',
            symbolName:'cancel2'
         },
         {
            id:'agenda_slider',
            symbolName:'slider_agenda'
         },
         {
            id:'sponsor_logos',
            symbolName:'sponsor_logos'
         },
         {
            id:'form',
            symbolName:'form'
         },
         {
            id:'arrow_jump2Copy2',
            symbolName:'arrow_jump'
         },
         {
            id:'arrow_jump2Copy',
            symbolName:'arrow_jump'
         },
         {
            id:'intro_slider',
            symbolName:'slider'
         },
         {
            id:'ad',
            symbolName:'ad'
         },
         {
            id:'arrow_jump2',
            symbolName:'arrow_jump'
         },
         {
            id:'guest_detail',
            symbolName:'guest_detail'
         }
         ]
      },
   states: {
      "Base State": {
         "${_name07}": [
            ["style", "letter-spacing", '0em'],
            ["style", "left", '-44.7%'],
            ["style", "width", '27.82%'],
            ["style", "top", '70%'],
            ["style", "text-align", 'right'],
            ["style", "text-indent", '0%'],
            ["style", "height", '3.15%'],
            ["style", "display", 'none'],
            ["style", "word-spacing", '0em'],
            ["style", "font-size", '200%'],
            ["style", "color", '#00C41C']
         ],
         "${_intro_slider}": [
            ["style", "top", '6.3%'],
            ["style", "opacity", '1'],
            ["style", "display", 'block'],
            ["style", "width", '100%']
         ],
         "${_time}": [
            ["style", "top", '15.26%'],
            ["style", "height", '23.37%'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "left", '10.6%'],
            ["style", "width", '80.8%']
         ],
         "${_guest_bg}": [
            ["style", "height", '100%'],
            ["color", "background-color", 'rgba(196,222,255,1.00)'],
            ["style", "top", '0px'],
            ["style", "display", 'none']
         ],
         "${_Rt05}": [
            ["color", "background-color", 'rgba(254,163,171,1.00)'],
            ["style", "top", 'auto'],
            ["style", "bottom", '34.76%'],
            ["style", "height", '4.2%'],
            ["style", "opacity", '0.75'],
            ["style", "left", '-60.31%'],
            ["style", "display", 'none']
         ],
         "${_addr}": [
            ["style", "top", '330px'],
            ["style", "font-size", '200%'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(26,26,26,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '18.88%'],
            ["style", "left", '18.29%'],
            ["style", "width", '55.3%']
         ],
         "${_agenda_info}": [
            ["color", "background-color", 'rgba(255,255,255,0.55)'],
            ["style", "bottom", '-48.24%'],
            ["style", "height", '27.13%'],
            ["style", "display", 'none'],
            ["style", "top", 'auto']
         ],
         "${_name01}": [
            ["style", "letter-spacing", '0em'],
            ["style", "left", '-44.69%'],
            ["style", "font-size", '200%'],
            ["style", "top", '25.5%'],
            ["style", "text-align", 'right'],
            ["style", "text-indent", '0%'],
            ["style", "height", '3.15%'],
            ["style", "display", 'none'],
            ["style", "word-spacing", '0em'],
            ["style", "width", '27.82%'],
            ["style", "color", '#ECAFBF']
         ],
         "${_sponsor_bg}": [
            ["style", "display", 'none'],
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(62,188,255,1.00)'],
            ["style", "width", '100%']
         ],
         "${_intro_header}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1.17'],
            ["style", "right", '10.63%'],
            ["style", "left", 'auto'],
            ["style", "width", '146px'],
            ["style", "top", '0.58%'],
            ["transform", "scaleY", '1.17'],
            ["style", "height", '212px'],
            ["style", "display", 'block']
         ],
         "${_contact}": [
            ["color", "background-color", 'rgba(209,209,209,0.00)'],
            ["style", "top", 'auto'],
            ["style", "bottom", '-361px'],
            ["style", "height", '100%'],
            ["style", "display", 'none'],
            ["style", "left", '0%'],
            ["style", "width", '100%']
         ],
/*         "${_Rt03}": [
            ["color", "background-color", 'rgba(181,215,133,1.00)'],
            ["style", "top", 'auto'],
            ["style", "bottom", '52.76%'],
            ["style", "height", '4.2%'],
            ["style", "opacity", '0.75'],
            ["style", "left", '-60.31%'],
            ["style", "display", 'none']
         ],*/
         "${_guest_detail}": [
            ["style", "top", '100%'],
            ["style", "height", '74.45%'],
            ["style", "width", '100%']
         ],
/*         "${_guest_02}": [

            ["style", "top", '25%'],
            ["color", "background-color", 'transparent'],
            ["style", "display", 'none'],
            ["style", "height", '11.68%'],
            ["style", "left", 'auto'],
            ["style", "width", '50%']
         ],*/
         "${_agenda_icon22}": [
            ["style", "top", '22.91%'],
            ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
            ["style", "left", '1.21%']
         ],
         "${_cover}": [
            ["style", "top", '-1px'],
            ["style", "display", 'block'],
            ["color", "background-color", 'rgba(150,148,107,1.00)'],
            ["style", "height", '100.06%'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '100.01%']
         ],
         "${_agenda_head}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1.17'],
            ["style", "right", '11.98%'],
            ["style", "left", 'auto'],
            ["style", "width", '19.36%'],
            ["style", "top", '-1.46%'],
            ["transform", "scaleY", '1.17'],
            ["style", "height", '242px'],
            ["style", "display", 'none']
         ],
         "${_Text3}": [
            ["style", "letter-spacing", '0em'],
            ["style", "bottom", '5.76%'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0.65'],
            ["style", "left", '0px'],
            ["style", "width", '100%'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "display", 'block'],
            ["style", "font-size", '300%'],
            ["style", "word-spacing", '0em'],
            ["style", "height", '96px']
         ],
         "${_agenda_map}": [
            ["color", "background-color", 'rgba(165,188,255,0.55)'],
            ["style", "bottom", '-0.96%'],
            ["style", "height", '28.36%'],
            ["style", "display", 'none'],
            ["style", "top", 'auto']
         ],
         "${_agenda_icon32}": [
            ["style", "top", '19.23%'],
            ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
            ["style", "left", '3.33%']
         ],
         "${_agenda_slider}": [
            ["style", "top", '2.64%'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "bottom", 'auto']
         ],
         "${_phone_btn}": [
            ["style", "top", '58.48%'],
            ["style", "height", '9.68%'],
            ["style", "left", '14.52%'],
            ["style", "width", '51.37%']
         ],
         "${_guest_05}": [
            ["style", "top", '52.08%'],
            ["color", "background-color", 'rgba(164,167,254,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '11.68%'],
            ["style", "left", '-28.77%'],
            ["style", "width", '28%']
         ],
         "${_cancel2}": [
            ["style", "top", '99px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '0%'],
            ["style", "width", '100%']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '100%'],
            ["style", "height", '100%'],
            ["style", "overflow", 'hidden']
         ],
         "${_sponsor_head}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1.17'],
            ["style", "right", '11.98%'],
            ["style", "left", 'auto'],
            ["style", "width", '19.36%'],
            ["style", "top", '-41.26%'],
            ["transform", "scaleY", '1.17'],
            ["style", "height", '242px'],
            ["style", "display", 'none']
         ],
         "${_Rt06}": [
            ["color", "background-color", 'rgba(212,206,147,1.00)'],
            ["style", "top", 'auto'],
            ["style", "right", '-60%'],
            ["style", "bottom", '27.09%'],
            ["style", "height", '4.2%'],
            ["style", "opacity", '0.75'],
            ["style", "left", 'auto'],
            ["style", "display", 'none']
         ],
         "${_intro_bg}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["color", "background-color", 'rgba(207,220,169,1.00)'],
            ["style", "height", '100%'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '100.01%']
         ],
         "${_agenda_bg}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["color", "background-color", 'rgba(213,255,195,1.00)'],
            ["style", "width", '100%']
         ],
         "${_scale_text}": [
            ["style", "top", '17px'],
            ["style", "text-align", 'left'],
            ["style", "height", '35px'],
            ["style", "font-size", '230%'],
            ["style", "left", '82px'],
            ["style", "width", '436px']
         ],
         "${_register_btn}": [
            ["style", "top", '55.97%'],
            ["color", "background-color", 'rgba(255,75,75,0.00)'],
            ["style", "height", '24.41%'],
            ["style", "display", 'none'],
            ["style", "left", '54.22%'],
            ["style", "width", '45.49%']
         ],
         "${_sponsor_logos}": [
            ["style", "display", 'none'],
            ["style", "height", '23.96%'],
            ["style", "left", '10%'],
            ["style", "width", '81.41%']
         ],
         "${_name04}": [
            ["style", "letter-spacing", '0em'],
            ["style", "right", '-50.93%'],
            ["style", "left", 'auto'],
            ["style", "width", '35.63%'],
            ["style", "top", '50%'],
            ["style", "text-indent", '0%'],
            ["style", "height", '3.15%'],
            ["style", "display", 'none'],
            ["style", "word-spacing", '0em'],
            ["style", "font-size", '200%'],
            ["style", "color", '#E7E900']
         ],
         "${_Text5Copy}": [
            ["color", "color", 'rgba(94,73,36,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "left", '0.24%'],
            ["style", "font-size", '1000%'],
            ["style", "top", '38.74%'],
            ["style", "text-align", 'center'],
            ["style", "height", '51.29%'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "width", '99.51%']
         ],
         "${_guest_04}": [
            ["color", "background-color", 'transparent'],
            ["style", "top", '50%'],
            ["style", "display", 'none'],
            ["style", "height", '11.68%'],
            ["style", "right", '0%'],
            ["style", "left", 'auto'],
            ["style", "width", '50%']
         ],
         "${_contactCopy}": [
            ["color", "background-color", 'rgba(209,209,209,0.00)'],
            ["style", "bottom", '-631px'],
            ["style", "height", '34.54%'],
            ["style", "top", 'auto'],
            ["style", "left", '9.06%'],
            ["style", "display", 'none']
         ],
         "${_email}": [
            ["style", "top", '236px'],
            ["style", "font-size", '200%'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(26,26,26,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '18.88%'],
            ["style", "left", '18.29%'],
            ["style", "width", '66%']
         ],
         "${_agenda_info_date_red}": [
            ["color", "background-color", 'rgba(255,102,102,1.00)'],
            ["style", "bottom", 'auto'],
            ["style", "height", '8%'],
            ["style", "top", '0%'],
            ["style", "width", '100%']
         ],
         "${_guest_head}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1.17'],
            ["style", "right", '11.98%'],
            ["style", "left", 'auto'],
            ["style", "width", '19.36%'],
            ["style", "top", '-46.54%'],
            ["transform", "scaleY", '1.17'],
            ["style", "height", '242px'],
            ["style", "display", 'none']
         ],
         "${_intro_text}": [
            ["style", "letter-spacing", '0em'],
            ["style", "bottom", '-39.04%'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '34px'],
            ["style", "font-size", '2em'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'justify'],
            ["style", "text-indent", '0%'],
            ["style", "height", '248px'],
            ["style", "display", 'block'],
            ["style", "word-spacing", '0em'],
            ["style", "width", '90.94%']
         ],
         "${_form}": [
            ["style", "overflow", 'visible'],
            ["style", "height", '100%'],
            ["style", "display", 'none'],
            ["style", "left", '100%'],
            ["style", "width", '100%']
         ],
         "${_phone}": [
            ["style", "top", '153px'],
            ["style", "font-size", '200%'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(26,26,26,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '18.88%'],
            ["style", "left", '18.29%'],
            ["style", "width", '66%']
         ],
         "${_address}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "height", '23.7%'],
            ["style", "top", '61.68%'],
            ["style", "left", '10.72%'],
            ["style", "width", '80.72%']
         ],
         "${_Text5}": [
            ["style", "top", '21.75%'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '250.1%'],
            ["color", "color", 'rgba(94,73,36,1.00)'],
            ["style", "height", '13.08%'],
            ["style", "left", '0.08%'],
            ["style", "width", '99.84%']
         ],
         "${_scale}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "height", '24.34%'],
            ["style", "top", '37.99%'],
            ["style", "left", '10.69%'],
            ["style", "width", '80.8%']
         ],
         "${_agenda_info_dateCopy2}": [
            ["style", "top", '0%'],
            ["style", "bottom", 'auto'],
            ["style", "height", '100%'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '36%']
         ],
         "${_arrow_jump2Copy2}": [
            ["style", "top", '0.1%'],
            ["transform", "scaleY", '0.60417'],
            ["transform", "rotateZ", '-180deg'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "bottom", 'auto'],
            ["style", "width", '100%']
         ],
         "${_arrow_jump2}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '14.97%'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "width", '100%']
         ],
         "${_arrow_jump2Copy}": [
            ["style", "top", 'auto'],
            ["transform", "scaleY", '0.60417'],
            ["style", "bottom", '0.1%'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "width", '100%']
         ],
         "${_agenda_icon12}": [
            ["style", "top", '21.06%'],
            ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
            ["style", "left", '2.42%']
         ],
/*         "${_guest_01}": [
            ["style", "top", '25%'],
            ["color", "background-color", 'transparent'],
            ["style", "display", 'none'],
            ["style", "height", '11.68%'],
            ["style", "left", '0%'],
            ["style", "width", '50%']
         ],*/
         "${_Text2Copy}": [
            ["style", "top", '25.42%'],
            ["style", "letter-spacing", '0em'],
            ["style", "font-size", '200%'],
            ["style", "text-indent", '0%'],
            ["style", "height", '3.15%'],
            ["style", "left", '22.81%'],
            ["style", "word-spacing", '0em'],
            ["style", "width", '9.69%']
         ],
         "${_guest_01}": [
            ["style", "top", '34.17%'],
            ["color", "background-color", 'transparent'],
            ["style", "display", 'none'],
            ["style", "height", '11.68%'],
            ["style", "left", '-28.77%'],
            ["style", "width", '50%']
         ],
         "${_spin3}": [
            ["style", "top", '32px'],
            ["style", "opacity", '1'],
            ["style", "display", 'block'],
            ["style", "width", '100%']
         ],
         "${_intro_text_bg}": [
            ["style", "-webkit-transform-origin", [50,101], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,101],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,101],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,101],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,101],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "bottom", '-46.6%'],
            ["style", "opacity", '0.75'],
            ["style", "left", '0px'],
            ["style", "width", '100%'],
            ["style", "top", 'auto'],
            ["style", "height", '300px'],
            ["style", "display", 'block'],
            ["color", "background-color", 'rgba(106,106,106,1.00)']
         ],
         "${_time_text}": [
            ["style", "top", '16px'],
            ["style", "text-align", 'left'],
            ["style", "height", '35px'],
            ["style", "width", '437px'],
            ["style", "left", '82px'],
            ["style", "font-size", '230%']
         ],
         "${_address_text}": [
            ["style", "top", '15px'],
            ["style", "text-align", 'left'],
            ["style", "height", '35px'],
            ["style", "width", '436px'],
            ["style", "left", '82px'],
            ["style", "font-size", '230%']
         ],
         "${_ad}": [
            ["style", "display", 'none'],
            ["style", "top", '100%'],
            ["style", "height", '100%'],
            ["style", "width", '100%']
         ],
         "${_guest_07}": [
            ["style", "top", '70%'],
            ["color", "background-color", 'transparent'],
            ["style", "display", 'none'],
            ["style", "height", '11.68%'],
            ["style", "left", '-1%'],
            ["style", "width", '50%']
         ],
         "${_agenda_info_detail}": [
            ["color", "background-color", 'rgba(255,255,255,0.39)'],
            ["style", "top", '0%'],
            ["style", "height", '100%'],
            ["style", "bottom", 'auto'],
            ["style", "display", 'none'],
            ["style", "right", '0px'],
            ["style", "left", 'auto'],
            ["style", "width", '64%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: true,
         timeline: [
            { id: "eid166", tween: [ "style", "${_cover}", "top", '-1335px', { fromValue: '-1px'}], position: 0, duration: 750, easing: "easeInQuad" },
            { id: "eid2265", tween: [ "style", "${_intro_text}", "display", 'none', { fromValue: 'block'}], position: 1615, duration: 0, easing: "easeInQuad" },
            { id: "eid1899", tween: [ "style", "${_name03}", "left", '4.68%', { fromValue: '-44.7%'}], position: 1250, duration: 750, easing: "easeOutQuad" },
            { id: "eid2011", tween: [ "style", "${_name03}", "left", '-46.26%', { fromValue: '4.68%'}], position: 2000, duration: 659, easing: "easeInOutQuad" },
            { id: "eid3357", tween: [ "style", "${_cancel2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3356", tween: [ "style", "${_cancel2}", "display", 'block', { fromValue: 'none'}], position: 1615, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3355", tween: [ "style", "${_cancel2}", "display", 'none', { fromValue: 'block'}], position: 2438, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2464", tween: [ "color", "${_contact}", "background-color", 'rgba(209,209,209,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(209,209,209,0.00)'}], position: 4000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2266", tween: [ "style", "${_intro_text_bg}", "display", 'none', { fromValue: 'block'}], position: 1615, duration: 0, easing: "easeInQuad" },
            { id: "eid2272", tween: [ "style", "${_name06}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInQuad" },
            { id: "eid2293", tween: [ "style", "${_name06}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeInQuad" },
            /*{ id: "eid1881", tween: [ "style", "${_guest_01}", "left", '0%', { fromValue: '0%'}], position: 1318, duration: 682, easing: "easeOutQuad" },
            { id: "eid2002", tween: [ "style", "${_guest_01}", "left", '0%', { fromValue: '0%'}], position: 2000, duration: 750, easing: "easeInOutQuad" },*/
            { id: "eid2276", tween: [ "style", "${_Rt05}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInQuad" },
            { id: "eid2297", tween: [ "style", "${_Rt05}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeInQuad" },
            { id: "eid2261", tween: [ "style", "${_spin3}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0, easing: "easeInQuad" },
            { id: "eid188", tween: [ "style", "${_intro_text_bg}", "bottom", '0%', { fromValue: '-46.6%'}], position: 445, duration: 555, easing: "easeOutQuad" },
            { id: "eid1847", tween: [ "style", "${_intro_text_bg}", "bottom", '112.43%', { fromValue: '0%'}], position: 1000, duration: 615, easing: "easeInQuad" },
            { id: "eid2428", tween: [ "style", "${_agenda_info}", "bottom", '27.44%', { fromValue: '-48.24%'}], position: 2000, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid2424", tween: [ "style", "${_agenda_info}", "bottom", '137.5%', { fromValue: '27.44%'}], position: 3001, duration: 750, easing: "easeInOutQuad" },
            { id: "eid3255", tween: [ "style", "${_arrow_jump2Copy2}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0, easing: "easeInQuad" },
            { id: "eid3256", tween: [ "style", "${_arrow_jump2Copy2}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0, easing: "easeInQuad" },
            { id: "eid3215", tween: [ "style", "${_agenda_head}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeInQuad" },
            { id: "eid2366", tween: [ "style", "${_agenda_head}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0, easing: "easeInQuad" },
            { id: "eid2435", tween: [ "style", "${_agenda_map}", "bottom", '124.69%', { fromValue: '-0.96%'}], position: 3015, duration: 567, easing: "easeInOutQuad" },
            { id: "eid2451", tween: [ "style", "${_contact}", "bottom", '0px', { fromValue: '-361px'}], position: 3251, duration: 749, easing: "easeInOutQuad" },
            { id: "eid1931", tween: [ "style", "${_guest_04}", "right", '0', { fromValue: '-29.18%'}], position: 1206, duration: 750, easing: "easeOutQuad" },
            { id: "eid1997", tween: [ "style", "${_guest_04}", "right", '-60.12%', { fromValue: '0%'}], position: 2000, duration: 597, easing: "easeInOutQuad" },
            { id: "eid1933", tween: [ "style", "${_name02}", "right", '-2.18%', { fromValue: '-50.93%'}], position: 1279, duration: 721, easing: "easeOutQuad" },
            { id: "eid1998", tween: [ "style", "${_name02}", "right", '-51.87%', { fromValue: '-2.18%'}], position: 2000, duration: 713, easing: "easeInOutQuad" },
            { id: "eid2450", tween: [ "style", "${_contact}", "display", 'block', { fromValue: 'none'}], position: 3251, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1897", tween: [ "style", "${_Rt05}", "left", '-10.94%', { fromValue: '-60.31%'}], position: 1185, duration: 750, easing: "easeOutQuad" },
            { id: "eid2013", tween: [ "style", "${_Rt05}", "left", '-61.87%', { fromValue: '-10.94%'}], position: 2000, duration: 535, easing: "easeInOutQuad" },
            { id: "eid2274", tween: [ "style", "${_guest_06}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInQuad" },
            { id: "eid2295", tween: [ "style", "${_guest_06}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeInQuad" },
            { id: "eid3216", tween: [ "style", "${_agenda_info_detail}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3217", tween: [ "style", "${_agenda_info_detail}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0, easing: "easeInOutQuad" },
            /*{ id: "eid2555", tween: [ "style", "${_guest_01}", "top", '25%', { fromValue: '25%'}], position: 2000, duration: 0, easing: "easeInOutQuad" },*/
            { id: "eid2286", tween: [ "style", "${_guest_02}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInQuad" },
            { id: "eid2307", tween: [ "style", "${_guest_02}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeInQuad" },
           /* { id: "eid2289", tween: [ "style", "${_guest_01}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInQuad" },
            { id: "eid2310", tween: [ "style", "${_guest_01}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeInQuad" },*/
            { id: "eid2259", tween: [ "style", "${_arrow_jump2}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0, easing: "easeInQuad" },
            { id: "eid3202", tween: [ "style", "${_Text3}", "opacity", '0', { fromValue: '0.65'}], position: 0, duration: 445 },
            { id: "eid3270", tween: [ "style", "${_arrow_jump2Copy2}", "top", '0.1%', { fromValue: '0.1%'}], position: 750, duration: 0, easing: "easeInQuad" },
            { id: "eid2317", tween: [ "style", "${_guest_head}", "display", 'block', { fromValue: 'none'}], position: 1318, duration: 0, easing: "easeOutQuad" },
            { id: "eid2357", tween: [ "style", "${_guest_head}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0, easing: "easeInQuad" },
            { id: "eid1937", tween: [ "style", "${_guest_06}", "right", '0%', { fromValue: '-29.18%'}], position: 1085, duration: 750, easing: "easeOutQuad" },
            { id: "eid2000", tween: [ "style", "${_guest_06}", "right", '-30.12%', { fromValue: '0%'}], position: 2000, duration: 486, easing: "easeInOutQuad" },
            { id: "eid2264", tween: [ "style", "${_intro_header}", "display", 'none', { fromValue: 'block'}], position: 1615, duration: 0, easing: "easeInQuad" },
            { id: "eid2446", tween: [ "style", "${_sponsor_head}", "top", '-1.46%', { fromValue: '-41.26%'}], position: 3582, duration: 432, easing: "easeOutQuad" },
            { id: "eid2283", tween: [ "style", "${_guest_01}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInQuad" },
            { id: "eid2304", tween: [ "style", "${_guest_01}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeInQuad" },
            { id: "eid1844", tween: [ "style", "${_intro_bg}", "top", '-1348px', { fromValue: '0px'}], position: 1000, duration: 615, easing: "easeInQuad" },
            { id: "eid2466", tween: [ "style", "${_contactCopy}", "height", '34.54%', { fromValue: '34.54%'}], position: 4000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2740", tween: [ "style", "${_ad}", "top", '92.18%', { fromValue: '100%'}], position: 3765, duration: 249, easing: "easeInOutQuad" },
            { id: "eid2741", tween: [ "style", "${_ad}", "top", '8.4%', { fromValue: '92.18%'}], position: 4014, duration: 750, easing: "easeInOutQuad" },
            { id: "eid3220", tween: [ "style", "${_phone}", "display", 'block', { fromValue: 'none'}], position: 3251, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1893", tween: [ "style", "${_name05}", "left", '4.68%', { fromValue: '-44.7%'}], position: 1185, duration: 750, easing: "easeOutQuad" },
            { id: "eid2010", tween: [ "style", "${_name05}", "left", '-46.26%', { fromValue: '4.68%'}], position: 2000, duration: 535, easing: "easeInOutQuad" },
            { id: "eid1854", tween: [ "style", "${_intro_slider}", "opacity", '0', { fromValue: '1'}], position: 1291, duration: 324, easing: "easeInQuad" },
            { id: "eid2707", tween: [ "color", "${_register_btn}", "background-color", 'rgba(255,75,75,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,75,75,0.00)'}], position: 4014, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2364", tween: [ "style", "${_agenda_head}", "top", '-39.52%', { fromValue: '-1.46%'}], position: 3000, duration: 750, easing: "easeInQuad" },
            { id: "eid1862", tween: [ "style", "${_guest_head}", "top", '-1.46%', { fromValue: '-46.54%'}], position: 1318, duration: 0, easing: "easeOutQuad" },
            { id: "eid2356", tween: [ "style", "${_guest_head}", "top", '-39.52%', { fromValue: '-1.46%'}], position: 2000, duration: 750, easing: "easeInQuad" },
            { id: "eid2438", tween: [ "style", "${_agenda_bg}", "top", '-1614px', { fromValue: '0px'}], position: 3000, duration: 750, easing: "easeInOutQuad" },
            { id: "eid2703", tween: [ "style", "${_form}", "display", 'block', { fromValue: 'none'}], position: 3582, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2709", tween: [ "style", "${_form}", "display", 'block', { fromValue: 'block'}], position: 4014, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1855", tween: [ "style", "${_intro_text}", "opacity", '0', { fromValue: '1'}], position: 1291, duration: 324, easing: "easeInQuad" },
            { id: "eid2268", tween: [ "style", "${_intro_bg}", "display", 'none', { fromValue: 'block'}], position: 1615, duration: 0, easing: "easeInQuad" },
            { id: "eid2427", tween: [ "style", "${_agenda_info}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2426", tween: [ "style", "${_agenda_info}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2425", tween: [ "style", "${_agenda_info}", "display", 'none', { fromValue: 'block'}], position: 3751, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2267", tween: [ "style", "${_intro_slider}", "display", 'none', { fromValue: 'block'}], position: 1615, duration: 0, easing: "easeInQuad" },
            { id: "eid2269", tween: [ "style", "${_name07}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInQuad" },
            { id: "eid2290", tween: [ "style", "${_name07}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeInQuad" },
            { id: "eid173", tween: [ "style", "${_arrow_jump2}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250, easing: "easeInQuad" },
            { id: "eid1927", tween: [ "style", "${_Rt04}", "right", '-11.25%', { fromValue: '-60%'}], position: 1206, duration: 750, easing: "easeOutQuad" },
            { id: "eid1995", tween: [ "style", "${_Rt04}", "right", '-60.94%', { fromValue: '-11.25%'}], position: 2000, duration: 597, easing: "easeInOutQuad" },
            { id: "eid2444", tween: [ "style", "${_sponsor_head}", "display", 'block', { fromValue: 'none'}], position: 3582, duration: 0, easing: "easeOutQuad" },
            { id: "eid2441", tween: [ "style", "${_sponsor_bg}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0, easing: "easeInQuad" },
            { id: "eid2282", tween: [ "style", "${_Rt03}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInQuad" },
            { id: "eid2303", tween: [ "style", "${_Rt03}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeInQuad" },
            { id: "eid3199", tween: [ "style", "${_Text3}", "bottom", '5.76%', { fromValue: '5.76%'}], position: 0, duration: 0 },
            { id: "eid2262", tween: [ "style", "${_cover}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0, easing: "easeInQuad" },
            { id: "eid2271", tween: [ "style", "${_guest_07}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInQuad" },
            { id: "eid2292", tween: [ "style", "${_guest_07}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeInQuad" },
            /*{ id: "eid1929", tween: [ "style", "${_guest_02}", "right", '19.5%', { fromValue: '-29.18%'}], position: 1279, duration: 721, easing: "easeOutQuad" },
            { id: "eid1996", tween: [ "style", "${_guest_02}", "right", '-30.12%', { fromValue: '19.5%'}], position: 2000, duration: 713, easing: "easeInOutQuad" },
            { id: "eid2687", tween: [ "style", "${_guest_02}", "top", '23.4%', { fromValue: '23.4%'}], position: 2000, duration: 0, easing: "easeInOutQuad" },*/
            { id: "eid1856", tween: [ "style", "${_intro_text_bg}", "opacity", '0', { fromValue: '0.75'}], position: 1291, duration: 324, easing: "easeInQuad" },
            { id: "eid2275", tween: [ "style", "${_name05}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInQuad" },
            { id: "eid2296", tween: [ "style", "${_name05}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeInQuad" },
            { id: "eid1891", tween: [ "style", "${_name01}", "left", '4.69%', { fromValue: '-44.69%'}], position: 1318, duration: 682, easing: "easeOutQuad" },
            { id: "eid2009", tween: [ "style", "${_name01}", "left", '-46.25%', { fromValue: '4.69%'}], position: 2000, duration: 750, easing: "easeInOutQuad" },
            { id: "eid3250", tween: [ "style", "${_arrow_jump2Copy}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0, easing: "easeInQuad" },
            { id: "eid3251", tween: [ "style", "${_arrow_jump2Copy}", "display", 'none', { fromValue: 'block'}], position: 3765, duration: 0, easing: "easeInQuad" },
            { id: "eid2470", tween: [ "style", "${_contact}", "height", '100%', { fromValue: '100%'}], position: 4000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3242", tween: [ "style", "${_intro_header}", "top", '-113.41%', { fromValue: '0.58%'}], position: 1000, duration: 615, easing: "easeInQuad" },
            { id: "eid174", tween: [ "style", "${_cover}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250, easing: "easeInQuad" },
            { id: "eid2287", tween: [ "style", "${_name01}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInQuad" },
            { id: "eid2308", tween: [ "style", "${_name01}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeInQuad" },
            { id: "eid1883", tween: [ "style", "${_Rt03}", "left", '-10.94%', { fromValue: '-60.31%'}], position: 1250, duration: 750, easing: "easeOutQuad" },
            { id: "eid2003", tween: [ "style", "${_Rt03}", "left", '-61.87%', { fromValue: '-10.94%'}], position: 2000, duration: 659, easing: "easeInOutQuad" },
            { id: "eid2277", tween: [ "style", "${_guest_05}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInQuad" },
            { id: "eid2298", tween: [ "style", "${_guest_05}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeInQuad" },
            { id: "eid2704", tween: [ "style", "${_register_btn}", "display", 'block', { fromValue: 'none'}], position: 3922, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2710", tween: [ "style", "${_register_btn}", "display", 'block', { fromValue: 'block'}], position: 4014, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2527", tween: [ "style", "${_sponsor_logos}", "display", 'block', { fromValue: 'none'}], position: 3251, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2706", tween: [ "style", "${_register_btn}", "height", '16.41%', { fromValue: '16.41%'}], position: 4014, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2431", tween: [ "style", "${_agenda_map}", "display", 'block', { fromValue: 'none'}], position: 2070, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2436", tween: [ "style", "${_agenda_map}", "display", 'none', { fromValue: 'block'}], position: 3582, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3333", tween: [ "style", "${_cancel2}", "left", '0%', { fromValue: '0%'}], position: 1999, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3198", tween: [ "style", "${_arrow_jump2}", "bottom", '122.66%', { fromValue: '14.97%'}], position: 0, duration: 750, easing: "easeInQuad" },
            { id: "eid1857", tween: [ "style", "${_intro_bg}", "opacity", '0', { fromValue: '1'}], position: 1291, duration: 324, easing: "easeInQuad" },
            { id: "eid2714", tween: [ "style", "${_form}", "left", '100%', { fromValue: '100%'}], position: 4014, duration: 0 },
            { id: "eid1901", tween: [ "style", "${_guest_07}", "left", '0%', { fromValue: '-28.77%'}], position: 1000, duration: 750, easing: "easeOutQuad" },
            { id: "eid2012", tween: [ "style", "${_guest_07}", "left", '-60.33%', { fromValue: '0%'}], position: 2000, duration: 438, easing: "easeInOutQuad" },
            { id: "eid163", tween: [ "style", "${_spin3}", "top", '-1302px', { fromValue: '32px'}], position: 0, duration: 750, easing: "easeInQuad" },
            { id: "eid1923", tween: [ "style", "${_name06}", "right", '-2.18%', { fromValue: '-50.93%'}], position: 1085, duration: 750, easing: "easeOutQuad" },
            { id: "eid1993", tween: [ "style", "${_name06}", "right", '-51.87%', { fromValue: '-2.18%'}], position: 2000, duration: 486, easing: "easeInOutQuad" },
            { id: "eid2285", tween: [ "style", "${_Rt02}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInQuad" },
            { id: "eid2306", tween: [ "style", "${_Rt02}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeInQuad" },
            { id: "eid2284", tween: [ "style", "${_name02}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInQuad" },
            { id: "eid2305", tween: [ "style", "${_name02}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeInQuad" },
            { id: "eid2278", tween: [ "style", "${_name04}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInQuad" },
            { id: "eid2299", tween: [ "style", "${_name04}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeInQuad" },
            { id: "eid2467", tween: [ "style", "${_contactCopy}", "display", 'block', { fromValue: 'none'}], position: 3251, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3218", tween: [ "style", "${_email}", "display", 'block', { fromValue: 'none'}], position: 3251, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2348", tween: [ "style", "${_guest_bg}", "top", '-1360px', { fromValue: '0px'}], position: 2000, duration: 629, easing: "easeInQuad" },
            { id: "eid2465", tween: [ "color", "${_contactCopy}", "background-color", 'rgba(209,209,209,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(209,209,209,0.00)'}], position: 4000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2273", tween: [ "style", "${_Rt06}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInQuad" },
            { id: "eid2294", tween: [ "style", "${_Rt06}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeInQuad" },
            { id: "eid2281", tween: [ "style", "${_name03}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInQuad" },
            { id: "eid2302", tween: [ "style", "${_name03}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeInQuad" },
            { id: "eid1887", tween: [ "style", "${_name07}", "left", '4.68%', { fromValue: '-44.7%'}], position: 1000, duration: 750, easing: "easeOutQuad" },
            { id: "eid2005", tween: [ "style", "${_name07}", "left", '-46.26%', { fromValue: '4.68%'}], position: 2000, duration: 438, easing: "easeInOutQuad" },
            { id: "eid3219", tween: [ "style", "${_addr}", "display", 'block', { fromValue: 'none'}], position: 3251, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3350", tween: [ "style", "${_cancel2}", "top", '99px', { fromValue: '99px'}], position: 1999, duration: 0, easing: "easeInOutQuad" },
            /*{ id: "eid1885", tween: [ "style", "${_guest_05}", "left", '20.61%', { fromValue: '-28.77%'}], position: 1185, duration: 750, easing: "easeOutQuad" },
            { id: "eid2004", tween: [ "style", "${_guest_05}", "left", '-30.33%', { fromValue: '20.61%'}], position: 2000, duration: 535, easing: "easeInOutQuad" },*/
            { id: "eid3284", tween: [ "style", "${_guest_detail}", "top", '100%', { fromValue: '100%'}], position: 750, duration: 0, easing: "easeInQuad" },
            { id: "eid1889", tween: [ "style", "${_guest_01}", "left", '0%', { fromValue: '-58.77%'}], position: 1250, duration: 750, easing: "easeOutQuad" },
            { id: "eid2006", tween: [ "style", "${_guest_01}", "left", '-50.33%', { fromValue: '0%'}], position: 2000, duration: 659, easing: "easeInOutQuad" },
            { id: "eid2533", tween: [ "style", "${_agenda_slider}", "display", 'block', { fromValue: 'none'}], position: 1999, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2686", tween: [ "style", "${_agenda_slider}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1846", tween: [ "style", "${_intro_slider}", "top", '-106.13%', { fromValue: '6.3%'}], position: 1000, duration: 615, easing: "easeInQuad" },
            { id: "eid1935", tween: [ "style", "${_Rt06}", "right", '-11.25%', { fromValue: '-60%'}], position: 1085, duration: 750, easing: "easeOutQuad" },
            { id: "eid1999", tween: [ "style", "${_Rt06}", "right", '-60.94%', { fromValue: '-11.25%'}], position: 2000, duration: 486, easing: "easeInOutQuad" },
            { id: "eid2468", tween: [ "style", "${_contactCopy}", "bottom", '203px', { fromValue: '-631px'}], position: 3251, duration: 749, easing: "easeInOutQuad" },
            { id: "eid1939", tween: [ "style", "${_name04}", "right", '-2.18%', { fromValue: '-50.93%'}], position: 1206, duration: 750, easing: "easeOutQuad" },
            { id: "eid1994", tween: [ "style", "${_name04}", "right", '-51.87%', { fromValue: '-2.18%'}], position: 2000, duration: 597, easing: "easeInOutQuad" },
            { id: "eid2351", tween: [ "style", "${_guest_bg}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid2350", tween: [ "style", "${_guest_bg}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInQuad" },
            { id: "eid2349", tween: [ "style", "${_guest_bg}", "display", 'none', { fromValue: 'block'}], position: 2629, duration: 0, easing: "easeInQuad" },
            { id: "eid1650", tween: [ "style", "${_intro_text}", "bottom", '0.8%', { fromValue: '-39.04%'}], position: 445, duration: 555, easing: "easeInOutQuad" },
            { id: "eid1845", tween: [ "style", "${_intro_text}", "bottom", '113.23%', { fromValue: '0.8%'}], position: 1000, duration: 615, easing: "easeInQuad" },
            { id: "eid171", tween: [ "style", "${_spin3}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250, easing: "easeInQuad" },
            { id: "eid2280", tween: [ "style", "${_guest_04}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInQuad" },
            { id: "eid2301", tween: [ "style", "${_guest_04}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeInQuad" },
            { id: "eid3233", tween: [ "style", "${_ad}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3200", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid1861", tween: [ "style", "${_intro_header}", "right", '10.63%', { fromValue: '10.63%'}], position: 1000, duration: 0, easing: "easeInQuad" },
            { id: "eid2554", tween: [ "style", "${_agenda_slider}", "top", '1.76%', { fromValue: '2.64%'}], position: 2999, duration: 111, easing: "easeInOutQuad" },
            { id: "eid2553", tween: [ "style", "${_agenda_slider}", "top", '-92.23%', { fromValue: '1.76%'}], position: 3110, duration: 640, easing: "easeInOutQuad" },
            { id: "eid3374", tween: [ "style", "${_cancel2}", "opacity", '0', { fromValue: '0'}], position: 1999, duration: 0 },
            { id: "eid1925", tween: [ "style", "${_Rt02}", "right", '-11.25%', { fromValue: '-60%'}], position: 1279, duration: 721, easing: "easeOutQuad" },
            { id: "eid2001", tween: [ "style", "${_Rt02}", "right", '-60.94%', { fromValue: '-11.25%'}], position: 2000, duration: 713, easing: "easeInOutQuad" },
            { id: "eid2359", tween: [ "style", "${_agenda_bg}", "display", 'block', { fromValue: 'none'}], position: 1999, duration: 0, easing: "easeInQuad" },
            { id: "eid2458", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_agenda_slider}', [250] ], ""], position: 2191 },
            { id: "eid2528", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_sponsor_logos}', [0] ], ""], position: 3251 },
            { id: "eid2529", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_sponsor_logos}', [] ], ""], position: 3362 }         ]
      }
   }
},
"spin": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'circle_spin',
      type: 'image',
      rect: ['0%','auto','100%','100%','auto','80%'],
      fill: ['rgba(0,0,0,0)','images/circle_spin.png','50%','50%','50%','auto']
   },
   {
      type: 'text',
      rect: ['0px','266px','100%','31%','auto','auto'],
      id: 'Text',
      text: '<br>',
      align: 'center',
      font: ['Tahoma, Geneva, sans-serif',[3.73,'em'],'rgba(78,78,78,1.00)','normal','none','']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_circle_spin}": [
            ["style", "top", '20%'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '100%'],
            ["style", "background-size", [50,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
            ["style", "left", '0%'],
            ["style", "width", '100%']
         ],
         "${_Text}": [
            ["style", "letter-spacing", '0em'],
            ["color", "color", 'rgba(78,78,78,1.00)'],
            ["style", "font-size", '3.73em'],
            ["style", "top", '266px'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "height", '30.95%'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "word-spacing", '0em'],
            ["style", "width", '100%']
         ],
         "${symbolSelector}": [
            ["style", "height", '672px'],
            ["style", "width", '640px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2500,
         autoPlay: true,
         timeline: [
            { id: "eid143", tween: [ "transform", "${_circle_spin}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 2500 }         ]
      }
   }
},
"arrow": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'arrow_holder',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','auto','100%','102px','auto','34.6%'],
      fill: ['rgba(255,255,255,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_arrow_holder}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "bottom", '34.6%'],
            ["style", "height", '102px'],
            ["style", "top", 'auto'],
            ["style", "left", '0px'],
            ["style", "width", '100%']
         ],
         "${symbolSelector}": [
            ["style", "height", '156px'],
            ["style", "width", '640px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"arrow_jump": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [],
      id: 'arrow',
      type: 'image',
      rect: ['0px','0%','100%','100%','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/arrow2.png','50%','50%','80px','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_arrow}": [
            ["style", "top", '0%'],
            ["style", "background-size", [80,'auto'], {valueTemplate:'@@0@@px @@1@@'} ],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '100%'],
            ["style", "opacity", '0.8'],
            ["style", "left", '0px'],
            ["style", "width", '100%']
         ],
         "${symbolSelector}": [
            ["style", "height", '96px'],
            ["style", "width", '596px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2999,
         autoPlay: true,
         timeline: [
            { id: "eid3254", tween: [ "style", "${_arrow}", "opacity", '0.8', { fromValue: '0.8'}], position: 2999, duration: 0, easing: "easeInQuad" },
            { id: "eid161", tween: [ "style", "${_arrow}", "top", '-41.6%', { fromValue: '0%'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid162", tween: [ "style", "${_arrow}", "top", '0.02%', { fromValue: '-41.6%'}], position: 500, duration: 500, easing: "easeInOutQuad" }         ]
      }
   }
},
"slider": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','100%','877px','auto','auto'],
      id: 'intro_slider',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(148,180,217,1.00)']
   },
   {
      rect: ['6.6%','16.4%','86.9%','73.8%','auto','auto'],
      source: ['','','',''],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'slider_1',
      opacity: 1,
      type: 'rect',
      fill: ['rgba(159,180,129,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '877px'],
            ["style", "width", '640px']
         ],
         "${_intro_slider}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(148,180,217,1.00)'],
            ["style", "height", '877px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '100%']
         ],
         "${_slider_1}": [
            ["style", "top", '6.16%'],
            ["style", "max-width", 'none'],
            ["style", "height", '73.77%'],
            ["color", "background-color", 'rgba(159,180,129,0.00)'],
            ["style", "left", '6.56%'],
            ["style", "width", '86.88%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Symbol_1": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','100%','877px','auto','auto'],
      id: 'guest_slider_taker',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,198,104,0.6563)']
   },
   {
      rect: ['43px','49px','86.6%','759px','auto','auto'],
      borderRadius: ['0px','0px','48px','48px'],
      id: 'guest_slider_takerCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,198,104,0.6563)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_guest_slider_takerCopy}": [
            ["style", "top", '49px'],
            ["style", "border-bottom-left-radius", [48,48], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [48,48], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '759px'],
            ["style", "left", '43px'],
            ["style", "width", '86.56%']
         ],
         "${_guest_slider_taker}": [
            ["style", "height", '877px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '100%']
         ],
         "${symbolSelector}": [
            ["style", "height", '877px'],
            ["style", "width", '640px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"slider_guest": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','100%','877px','auto','auto'],
      id: 'intro_slider',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(148,180,217,1.00)']
   },
   {
      rect: ['6.6%','16.4%','86.9%','73.8%','auto','auto'],
      source: ['','','',''],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'slider_1',
      opacity: 1,
      type: 'rect',
      fill: ['rgba(159,180,129,1.00)'],
      c: [
      {
         rect: ['10%','36.6%','400px','65px','auto','auto'],
         font: ['Tahoma, Geneva, sans-serif',[300,'%'],'rgba(255,255,255,1)','normal','none','normal'],
         id: 'Name',
         text: '',
         align: 'justify',
         type: 'text'
      },
      {
         rect: ['10%','43.7%','80.5%','246px','auto','auto'],
         font: ['Tahoma, Geneva, sans-serif',[200,'%'],'rgba(255,255,255,1)','normal','none','normal'],
         id: 'Description',
         text: '李子彬：原国家发改委副主任、原深圳市市长、现任全国中小企业协会会长<br><br>'
         +'孙景淼：浙江省副省长、舟山市委书记<br><br>'
         +'张蔚文：原浙江省政协副主席、原宁波市市长、现任浙江省民营企业家协会会长。<br><br>'
         +'周江勇：舟山市舟山市委副书记、市长<br><br>'
         +'杜祖国：浙江省金融控股有限公司党委书记/董事长/总经理、浙江省财政厅党组成员<br><br>',
         align: 'justify',
         type: 'text'
      },
      {
         id: 'cancel2Copy',
         type: 'rect',
         rect: ['5.6%','auto','9.4%','59.2%','auto','8.9%']
      }]
   },
   {
      type: 'rect',
      source: ['','','',''],
      id: 'slider_4',
      opacity: 1,
      rect: ['280.9%','16.4%','86.9%','73.8%','auto','auto'],
      display: 'none',
      stroke: [0,'rgb(0, 0, 0)','none'],
      fill: ['rgba(159,180,129,1.00)'],
      c: [
      {
         rect: ['10%','36.6%','400px','65px','auto','auto'],
         font: ['Tahoma, Geneva, sans-serif',[300,'%'],'rgba(255,255,255,1)','normal','none','normal'],
         id: 'NameCopy4',
         text: '',
         align: 'justify',
         type: 'text'
      },
      {
         rect: ['10%','43.7%','80.5%','246px','auto','auto'],
         font: ['Tahoma, Geneva, sans-serif',[200,'%'],'rgba(255,255,255,1)','normal','none','normal'],
         id: 'DescriptionCopy3',
         text: '王忠明：全国工商联副秘书长、中国民营经济研究会常务副会长<br><br>'+
         '周  涛 ：中国最年轻的教授、电子科技大学互联网科学中心主任、《大数据》中文译者<br><br>'+
         '黄亚钧：教授、复旦大学经济学院世界经济系主任、复旦大学证券研究所所长<br><br>'+
         '王  坚：博士、阿里巴巴集团首席技术官<br><br>'+
         '车品觉：阿里巴巴集团副总裁、数据委员会会长    阿里巴巴集团大数据第一人<br><br>'+
         '尹於舜  （博士、深圳创新投资集团沪浙片区总经理<br><br>',
         align: 'justify',
         type: 'text'
      }]
   },
   {
      type: 'rect',
      source: ['','','',''],
      id: 'slider_7',
      opacity: 1,
      rect: ['564.2%','16.4%','86.9%','73.8%','auto','auto'],
      display: 'none',
      stroke: [0,'rgb(0, 0, 0)','none'],
      fill: ['rgba(159,180,129,1.00)'],
      c: [
      {
         rect: ['10.3%','36.6%','400px','65px','auto','auto'],
         font: ['Tahoma, Geneva, sans-serif',[300,'%'],'rgba(255,255,255,1)','normal','none','normal'],
         id: 'NameCopy7',
         text: '',
         align: 'justify',
         type: 'text'
      },
      {
         rect: ['10.4%','43.7%','80.5%','246px','auto','auto'],
         font: ['Tahoma, Geneva, sans-serif',[200,'%'],'rgba(255,255,255,1)','normal','none','normal'],
         id: 'DescriptionCopy6',
         text: '林  东：杭州绿盛集团有限公司董事长<br><br>'
         +'苏  萌：百分点科技CEO<br><br>'
         +'曾  途：成都数联铭品科技有限公司CEO<br><br>'
         +'林  森：北京快友世纪科技有限公司CEO<br><br>'
         +'李旭阳：七巧板信息科技CEO<br><br>'
         +'李军华：资本汇CEO<br><br>'
         +'孙海涛：51信用卡管家创始人<br><br>',
         align: 'justify',
         type: 'text'
      }]
   },
   {
      id: 'cancel2Copy2',
      type: 'rect',
      rect: ['5.6%','9.6%','9.4%','59.2%','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'cancel2Copy',
      symbolName: 'cancel'
   },
   {
      id: 'cancel2Copy2',
      symbolName: 'cancel'
   }   ]
   },
   states: {
      "Base State": {
         "${_intro_slider}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(148,180,217,1.00)'],
            ["style", "height", '877px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '100%']
         ],
         "${_DescriptionCopy4}": [
            ["style", "top", '43.7%'],
            ["style", "height", '246px'],
            ["style", "width", '80.51%'],
            ["style", "left", '9.82%'],
            ["style", "font-size", '200%']
         ],
         "${_DescriptionCopy5}": [
            ["style", "top", '43.7%'],
            ["style", "height", '246px'],
            ["style", "font-size", '200%'],
            ["style", "left", '10.18%'],
            ["style", "width", '80.51%']
         ],
         "${_NameCopy4}": [
            ["style", "top", '36.6%'],
            ["style", "height", '65px'],
            ["style", "width", '400px'],
            ["style", "left", '10%'],
            ["style", "font-size", '300%']
         ],
         "${_Name}": [
            ["style", "top", '36.6%'],
            ["style", "height", '65px'],
            ["style", "font-size", '300%'],
            ["style", "left", '9.99%'],
            ["style", "width", '400px']
         ],
         "${_slider_6}": [
            ["color", "background-color", 'rgba(196,196,143,0.79)'],
            ["style", "border-bottom-right-radius", [36,36], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '1'],
            ["style", "left", '472.32%'],
            ["style", "width", '81.26%'],
            ["style", "top", '13.11%'],
            ["style", "border-bottom-left-radius", [36,36], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "max-width", 'none'],
            ["style", "display", 'none'],
            ["style", "height", '100.2%']
         ],
         "${symbolSelector}": [
            ["style", "height", '877px'],
            ["style", "width", '640px']
         ],
         "${_NameCopy3}": [
            ["style", "top", '56.6%'],
            ["style", "height", '65px'],
            ["style", "font-size", '300%'],
            ["style", "left", '10%'],
            ["style", "width", '400px']
         ],
         "${_Description}": [
            ["style", "top", '43.7%'],
            ["style", "height", '246px'],
            ["style", "width", '80.51%'],
            ["style", "left", '9.99%'],
            ["style", "font-size", '200%']
         ],
         "${_slider_7}": [
            ["color", "background-color", 'rgba(196,196,143,0.79)'],
            ["style", "border-bottom-right-radius", [36,36], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '1'],
            ["style", "left", '564.2%'],
            ["style", "width", '81.26%'],
            ["style", "top", '13.11%'],
            ["style", "border-bottom-left-radius", [36,36], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "max-width", 'none'],
            ["style", "display", 'none'],
            ["style", "height", '100.2%']
         ],
         "${_NameCopy5}": [
            ["style", "top", '56.6%'],
            ["style", "height", '65px'],
            ["style", "font-size", '300%'],
            ["style", "left", '10%'],
            ["style", "width", '400px']
         ],
         "${_slider_1}": [
            ["color", "background-color", 'rgba(196,196,143,0.79)'],
            ["style", "border-bottom-right-radius", [36,36], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '1'],
            ["style", "left", '6.56%'],
            ["style", "width", '81.26%'],
            ["style", "top", '13.11%'],
            ["style", "border-bottom-left-radius", [36,36], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "max-width", 'none'],
            ["style", "display", 'block'],
            ["style", "height", '100.2%']
         ],
         "${_DescriptionCopy}": [
            ["style", "top", '43.7%'],
            ["style", "height", '246px'],
            ["style", "font-size", '200%'],
            ["style", "left", '9.97%'],
            ["style", "width", '80.51%']
         ],
         "${_slider_2}": [
            ["color", "background-color", 'rgba(196,196,143,0.79)'],
            ["style", "border-bottom-right-radius", [36,36], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '1'],
            ["style", "left", '97.81%'],
            ["style", "width", '81.26%'],
            ["style", "top", '13.11%'],
            ["style", "border-bottom-left-radius", [36,36], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "max-width", 'none'],
            ["style", "display", 'none'],
            ["style", "height", '100.2%']
         ],
         "${_slider_4}": [
            ["color", "background-color", 'rgba(196,196,143,0.79)'],
            ["style", "border-bottom-right-radius", [36,36], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '1'],
            ["style", "left", '280.92%'],
            ["style", "width", '81.26%'],
            ["style", "top", '13.11%'],
            ["style", "border-bottom-left-radius", [36,36], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "max-width", 'none'],
            ["style", "display", 'none'],
            ["style", "height", '100.2%']
         ],
         "${_cancel2Copy}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '5.6%'],
            ["style", "height", '59.2%'],
            ["style", "opacity", '0'],
            ["style", "left", '7.1%'],
            ["style", "width", '9.38%']
         ],
         "${_DescriptionCopy2}": [
            ["style", "top", '43.7%'],
            ["style", "height", '246px'],
            ["style", "width", '80.51%'],
            ["style", "left", '9.6%'],
            ["style", "font-size", '200%']
         ],
         "${_NameCopy2}": [
            ["style", "top", '56.6%'],
            ["style", "height", '65px'],
            ["style", "width", '400px'],
            ["style", "left", '9.97%'],
            ["style", "font-size", '300%']
         ],
         "${_DescriptionCopy3}": [
            ["style", "top", '43.7%'],
            ["style", "height", '246px'],
            ["style", "font-size", '200%'],
            ["style", "left", '9.99%'],
            ["style", "width", '80.51%']
         ],
         "${_slider_3}": [
            ["color", "background-color", 'rgba(196,196,143,0.79)'],
            ["style", "border-bottom-right-radius", [36,36], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '1'],
            ["style", "left", '189.37%'],
            ["style", "width", '81.26%'],
            ["style", "top", '13.11%'],
            ["style", "border-bottom-left-radius", [36,36], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "max-width", 'none'],
            ["style", "display", 'none'],
            ["style", "height", '100.2%']
         ],
         "${_NameCopy6}": [
            ["style", "top", '56.6%'],
            ["style", "height", '65px'],
            ["style", "width", '400px'],
            ["style", "left", '10.18%'],
            ["style", "font-size", '300%']
         ],
         "${_slider_5}": [
            ["color", "background-color", 'rgba(196,196,143,0.79)'],
            ["style", "border-bottom-right-radius", [36,36], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '1'],
            ["style", "left", '372.31%'],
            ["style", "width", '81.26%'],
            ["style", "top", '13.11%'],
            ["style", "border-bottom-left-radius", [36,36], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "max-width", 'none'],
            ["style", "display", 'none'],
            ["style", "height", '100.2%']
         ],
         "${_NameCopy7}": [
            ["style", "top", '36.6%'],
            ["style", "height", '65px'],
            ["style", "font-size", '300%'],
            ["style", "left", '10.33%'],
            ["style", "width", '400px']
         ],
         "${_DescriptionCopy6}": [
            ["style", "top", '43.7%'],
            ["style", "height", '246px'],
            ["style", "width", '80.51%'],
            ["style", "left", '10.35%'],
            ["style", "font-size", '200%']
         ],
         "${_cancel2Copy2}": [
            ["style", "top", '9.56%'],
            ["style", "bottom", 'auto'],
            ["style", "height", '59.2%'],
            ["style", "opacity", '0'],
            ["style", "left", '5.06%'],
            ["style", "width", '9.38%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3500,
         autoPlay: true,
         timeline: [
            { id: "eid2178", tween: [ "style", "${_slider_5}", "top", '13.11%', { fromValue: '13.11%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2241", tween: [ "color", "${_slider_2}", "background-color", 'rgba(196,196,143,0.79)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(196,196,143,0.79)'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid2176", tween: [ "style", "${_slider_7}", "top", '13.11%', { fromValue: '13.11%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2180", tween: [ "style", "${_slider_3}", "top", '13.11%', { fromValue: '13.11%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2239", tween: [ "color", "${_slider_4}", "background-color", 'rgba(196,196,143,0.79)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(196,196,143,0.79)'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid2192", tween: [ "style", "${_slider_1}", "height", '100.2%', { fromValue: '100.2%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2181", tween: [ "style", "${_slider_2}", "top", '13.11%', { fromValue: '13.11%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2225", tween: [ "style", "${_slider_4}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid2224", tween: [ "style", "${_slider_3}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid2177", tween: [ "style", "${_slider_6}", "top", '13.11%', { fromValue: '13.11%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2243", tween: [ "color", "${_slider_6}", "background-color", 'rgba(196,196,143,0.79)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(196,196,143,0.79)'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid2195", tween: [ "style", "${_slider_6}", "height", '100.2%', { fromValue: '100.2%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1350", tween: [ "style", "${_slider_5}", "left", '375.43%', { fromValue: '381.06%'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1083", tween: [ "style", "${_slider_5}", "left", '280.75%', { fromValue: '375.43%'}], position: 250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid1108", tween: [ "style", "${_slider_5}", "left", '189.5%', { fromValue: '280.75%'}], position: 750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid1113", tween: [ "style", "${_slider_5}", "left", '97.62%', { fromValue: '189.5%'}], position: 1250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid1118", tween: [ "style", "${_slider_5}", "left", '9.96%', { fromValue: '97.62%'}], position: 1750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2101", tween: [ "style", "${_slider_5}", "left", '-79.22%', { fromValue: '9.96%'}], position: 2250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2108", tween: [ "style", "${_slider_5}", "left", '-169.89%', { fromValue: '-79.22%'}], position: 2750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2115", tween: [ "style", "${_slider_5}", "left", '-178.94%', { fromValue: '-169.89%'}], position: 3250, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1354", tween: [ "style", "${_slider_1}", "left", '10%', { fromValue: '15.31%'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1085", tween: [ "style", "${_slider_1}", "left", '-79.99%', { fromValue: '10%'}], position: 250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid1110", tween: [ "style", "${_slider_1}", "left", '-168.44%', { fromValue: '-79.99%'}], position: 750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid1115", tween: [ "style", "${_slider_1}", "left", '-257.18%', { fromValue: '-168.44%'}], position: 1250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid1120", tween: [ "style", "${_slider_1}", "left", '-341.87%', { fromValue: '-257.18%'}], position: 1750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2102", tween: [ "style", "${_slider_1}", "left", '-442.48%', { fromValue: '-341.87%'}], position: 2250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2109", tween: [ "style", "${_slider_1}", "left", '-535.62%', { fromValue: '-442.48%'}], position: 2750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2116", tween: [ "style", "${_slider_1}", "left", '-544.68%', { fromValue: '-535.62%'}], position: 3250, duration: 250, easing: "easeInOutQuad" },
            { id: "eid2228", tween: [ "style", "${_slider_5}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid3376", tween: [ "style", "${_cancel2Copy2}", "left", '4.28%', { fromValue: '5.06%'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid3380", tween: [ "style", "${_cancel2Copy2}", "left", '3.48%', { fromValue: '4.28%'}], position: 250, duration: 250, easing: "easeInOutQuad" },
            { id: "eid2198", tween: [ "style", "${_slider_5}", "height", '100.2%', { fromValue: '100.2%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1352", tween: [ "style", "${_slider_3}", "left", '192.49%', { fromValue: '198.12%'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1084", tween: [ "style", "${_slider_3}", "left", '97.81%', { fromValue: '192.49%'}], position: 250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid1109", tween: [ "style", "${_slider_3}", "left", '9.67%', { fromValue: '97.81%'}], position: 750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid1114", tween: [ "style", "${_slider_3}", "left", '-79.08%', { fromValue: '9.67%'}], position: 1250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid1119", tween: [ "style", "${_slider_3}", "left", '-166.9%', { fromValue: '-79.08%'}], position: 1750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2103", tween: [ "style", "${_slider_3}", "left", '-259.68%', { fromValue: '-166.9%'}], position: 2250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2110", tween: [ "style", "${_slider_3}", "left", '-352.83%', { fromValue: '-259.68%'}], position: 2750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2117", tween: [ "style", "${_slider_3}", "left", '-361.88%', { fromValue: '-352.83%'}], position: 3250, duration: 250, easing: "easeInOutQuad" },
            { id: "eid2090", tween: [ "style", "${_slider_6}", "left", '467.36%', { fromValue: '472.32%'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid2092", tween: [ "style", "${_slider_6}", "left", '372.98%', { fromValue: '467.36%'}], position: 250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2094", tween: [ "style", "${_slider_6}", "left", '281.1%', { fromValue: '372.98%'}], position: 750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2096", tween: [ "style", "${_slider_6}", "left", '189.85%', { fromValue: '281.1%'}], position: 1250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2098", tween: [ "style", "${_slider_6}", "left", '97.51%', { fromValue: '189.85%'}], position: 1750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2100", tween: [ "style", "${_slider_6}", "left", '9.49%', { fromValue: '97.51%'}], position: 2250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2107", tween: [ "style", "${_slider_6}", "left", '-79.22%', { fromValue: '9.49%'}], position: 2750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2114", tween: [ "style", "${_slider_6}", "left", '-88.27%', { fromValue: '-79.22%'}], position: 3250, duration: 250, easing: "easeInOutQuad" },
            { id: "eid3375", tween: [ "style", "${_cancel2Copy2}", "top", '10.66%', { fromValue: '9.56%'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid2230", tween: [ "style", "${_slider_7}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid2256", tween: [ "style", "${_slider_6}", "display", 'block', { fromValue: 'none'}], position: 2401, duration: 0, easing: "easeOutQuad" },
            { id: "eid3319", tween: [ "style", "${_slider_6}", "display", 'none', { fromValue: 'block'}], position: 3107, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2197", tween: [ "style", "${_slider_3}", "height", '100.2%', { fromValue: '100.2%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2229", tween: [ "style", "${_slider_6}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid2257", tween: [ "style", "${_slider_7}", "display", 'block', { fromValue: 'none'}], position: 2874, duration: 0, easing: "easeOutQuad" },
            { id: "eid2242", tween: [ "color", "${_slider_5}", "background-color", 'rgba(196,196,143,0.79)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(196,196,143,0.79)'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid2193", tween: [ "style", "${_slider_4}", "height", '100.2%', { fromValue: '100.2%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2196", tween: [ "style", "${_slider_7}", "height", '100.2%', { fromValue: '100.2%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3366", tween: [ "style", "${_cancel2Copy2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid2247", tween: [ "style", "${_slider_1}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2238", tween: [ "color", "${_slider_3}", "background-color", 'rgba(196,196,143,0.79)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(196,196,143,0.79)'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid2244", tween: [ "color", "${_slider_7}", "background-color", 'rgba(196,196,143,0.79)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(196,196,143,0.79)'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid3316", tween: [ "style", "${_slider_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3315", tween: [ "style", "${_slider_3}", "display", 'block', { fromValue: 'none'}], position: 925, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2249", tween: [ "style", "${_slider_3}", "display", 'none', { fromValue: 'block'}], position: 1639, duration: 0, easing: "easeOutQuad" },
            { id: "eid3318", tween: [ "style", "${_slider_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3317", tween: [ "style", "${_slider_2}", "display", 'block', { fromValue: 'none'}], position: 401, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2248", tween: [ "style", "${_slider_2}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2253", tween: [ "style", "${_slider_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid2252", tween: [ "style", "${_slider_4}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2250", tween: [ "style", "${_slider_4}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0, easing: "easeOutQuad" },
            { id: "eid2240", tween: [ "color", "${_slider_1}", "background-color", 'rgba(196,196,143,0.79)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(196,196,143,0.79)'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid2226", tween: [ "style", "${_slider_1}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid2194", tween: [ "style", "${_slider_2}", "height", '100.2%', { fromValue: '100.2%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2179", tween: [ "style", "${_slider_1}", "top", '13.11%', { fromValue: '13.11%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2227", tween: [ "style", "${_slider_2}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid1358", tween: [ "style", "${_slider_2}", "left", '99.01%', { fromValue: '106.56%'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1087", tween: [ "style", "${_slider_2}", "left", '9.68%', { fromValue: '99.01%'}], position: 250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid1112", tween: [ "style", "${_slider_2}", "left", '-79.51%', { fromValue: '9.68%'}], position: 750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid1117", tween: [ "style", "${_slider_2}", "left", '-167.5%', { fromValue: '-79.51%'}], position: 1250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid1122", tween: [ "style", "${_slider_2}", "left", '-255.31%', { fromValue: '-167.5%'}], position: 1750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2104", tween: [ "style", "${_slider_2}", "left", '-351.23%', { fromValue: '-255.31%'}], position: 2250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2111", tween: [ "style", "${_slider_2}", "left", '-444.37%', { fromValue: '-351.23%'}], position: 2750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2118", tween: [ "style", "${_slider_2}", "left", '-453.43%', { fromValue: '-444.37%'}], position: 3250, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1356", tween: [ "style", "${_slider_4}", "left", '284.04%', { fromValue: '289.67%'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid1086", tween: [ "style", "${_slider_4}", "left", '189.36%', { fromValue: '284.04%'}], position: 250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid1111", tween: [ "style", "${_slider_4}", "left", '98.11%', { fromValue: '189.36%'}], position: 750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid1116", tween: [ "style", "${_slider_4}", "left", '9.47%', { fromValue: '98.11%'}], position: 1250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid1121", tween: [ "style", "${_slider_4}", "left", '-78.47%', { fromValue: '9.47%'}], position: 1750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2105", tween: [ "style", "${_slider_4}", "left", '-168.12%', { fromValue: '-78.47%'}], position: 2250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2112", tween: [ "style", "${_slider_4}", "left", '-261.28%', { fromValue: '-168.12%'}], position: 2750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2119", tween: [ "style", "${_slider_4}", "left", '-270.33%', { fromValue: '-261.28%'}], position: 3250, duration: 250, easing: "easeInOutQuad" },
            { id: "eid2089", tween: [ "style", "${_slider_7}", "left", '559.24%', { fromValue: '564.2%'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid2091", tween: [ "style", "${_slider_7}", "left", '464.86%', { fromValue: '559.24%'}], position: 250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2093", tween: [ "style", "${_slider_7}", "left", '372.98%', { fromValue: '464.86%'}], position: 750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2095", tween: [ "style", "${_slider_7}", "left", '281.73%', { fromValue: '372.98%'}], position: 1250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2097", tween: [ "style", "${_slider_7}", "left", '189.23%', { fromValue: '281.73%'}], position: 1750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2099", tween: [ "style", "${_slider_7}", "left", '97.95%', { fromValue: '189.23%'}], position: 2250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2106", tween: [ "style", "${_slider_7}", "left", '9.7%', { fromValue: '97.95%'}], position: 2750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2113", tween: [ "style", "${_slider_7}", "left", '3.6%', { fromValue: '9.7%'}], position: 3250, duration: 250, easing: "easeInOutQuad" },
            { id: "eid2182", tween: [ "style", "${_slider_4}", "top", '13.11%', { fromValue: '13.11%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2255", tween: [ "style", "${_slider_5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid2254", tween: [ "style", "${_slider_5}", "display", 'block', { fromValue: 'none'}], position: 1881, duration: 0, easing: "easeOutQuad" },
            { id: "eid2251", tween: [ "style", "${_slider_5}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0, easing: "easeOutQuad" }         ]
      }
   }
},
"slider_agenda": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'intro_slider',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','100%','877px','auto','auto'],
      fill: ['rgba(148,180,217,1.00)']
   },
   {
      type: 'rect',
      source: ['','','',''],
      id: 'slider_1',
      opacity: 1,
      rect: ['9.7%','12.9%','46.5%','48.9%','auto','auto'],
      fill: ['rgba(246,255,161,0.76)'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      borderRadius: ['20px 20px','20px 20px','20px 20px','20px 20px'],
      boxShadow: ['',3,3,48,0,'rgba(0,0,0,0.24)'],
      c: [
      {
         type: 'rect',
         source: ['','','',''],
         id: 'slide_head',
         opacity: 1,
         rect: ['0%','0%','100%','26.5%','auto','auto'],
         borderRadius: ['20px 20px','20px 20px','0px','0px'],
         stroke: [0,'rgb(0, 0, 0)','none'],
         fill: ['rgba(118,96,84,0.90)'],
         c: [
         {
            type: 'text',
            rect: ['86px','28px','37.4%','40.5%','auto','auto'],
            id: 'title',
            text: '第一幕',
            align: 'left',
            font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',[230,'%'],'rgba(255,255,255,1.00)','100','none','normal']
         }]
      },
      {
         type: 'text',
         rect: ['33px','143px','77.9%','10.8%','auto','auto'],
         id: 'titleCopy',
         text: '08:30 - 09:30',
         align: 'center',
         font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',[230,'%'],'rgba(111,111,111,1.00)','100','none','normal']
      },
      {
         type: 'text',
         rect: ['33px','229px','77.5%','37.8%','auto','auto'],
         id: 'titleCopy2',
         text: '签到-会面-致辞-揭牌',
         align: 'center',
         font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',[230,'%'],'rgba(111,111,111,1.00)','100','none','normal']
      }]
   },
   {
      type: 'rect',
      source: ['','','',''],
      id: 'slider_2',
      opacity: 1,
      rect: ['63.4%','12.9%','46.5%','48.9%','auto','auto'],
      fill: ['rgba(246,255,161,0.76)'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      borderRadius: ['20px 20px','20px 20px','20px 20px','20px 20px'],
      boxShadow: ['',3,3,48,0,'rgba(0,0,0,0.24)'],
      c: [
      {
         type: 'rect',
         source: ['','','',''],
         id: 'slide_headCopy',
         opacity: 1,
         rect: ['0%','0%','100%','26.5%','auto','auto'],
         borderRadius: ['20px 20px','20px 20px','0px','0px'],
         stroke: [0,'rgb(0, 0, 0)','none'],
         fill: ['rgba(118,96,84,0.90)'],
         c: [
         {
            type: 'text',
            rect: ['86px','28px','37.4%','40.5%','auto','auto'],
            id: 'titleCopy5',
            text: '第二幕',
            align: 'left',
            font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',[230,'%'],'rgba(255,255,255,1.00)','100','none','normal']
         }]
      },
      {
         type: 'text',
         rect: ['33px','143px','77.9%','10.8%','auto','auto'],
         id: 'titleCopy4',
         text: '09:30 - 10:50',
         align: 'center',
         font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',[230,'%'],'rgba(111,111,111,1.00)','100','none','normal']
      },
      {
         type: 'text',
         rect: ['33px','229px','77.5%','37.8%','auto','auto'],
         id: 'titleCopy3',
         text: '嘉宾演讲',
         align: 'center',
         font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',[230,'%'],'rgba(111,111,111,1.00)','100','none','normal']
      }]
   },
   {
      type: 'rect',
      source: ['','','',''],
      id: 'slider_3',
      opacity: 1,
      rect: ['117.5%','12.9%','46.5%','48.9%','auto','auto'],
      fill: ['rgba(246,255,161,0.76)'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      borderRadius: ['20px 20px','20px 20px','20px 20px','20px 20px'],
      boxShadow: ['',3,3,48,0,'rgba(0,0,0,0.24)'],
      c: [
      {
         type: 'rect',
         source: ['','','',''],
         id: 'slide_headCopy3',
         opacity: 1,
         rect: ['0%','0%','100%','26.5%','auto','auto'],
         borderRadius: ['20px 20px','20px 20px','0px','0px'],
         stroke: [0,'rgb(0, 0, 0)','none'],
         fill: ['rgba(118,96,84,0.90)'],
         c: [
         {
            type: 'text',
            rect: ['86px','28px','37.4%','40.5%','auto','auto'],
            id: 'titleCopy11',
            text: '第三幕',
            align: 'left',
            font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',[230,'%'],'rgba(255,255,255,1.00)','100','none','normal']
         }]
      },
      {
         type: 'text',
         rect: ['33px','143px','77.9%','10.8%','auto','auto'],
         id: 'titleCopy10',
         text: '10:50 - 12:30',
         align: 'center',
         font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',[230,'%'],'rgba(111,111,111,1.00)','100','none','normal']
      },
      {
         type: 'text',
         rect: ['33px','229px','77.5%','37.8%','auto','auto'],
         id: 'titleCopy9',
         text: '论坛对话',
         align: 'center',
         font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',[230,'%'],'rgba(111,111,111,1.00)','100','none','normal']
      }]
   },
   {
      type: 'rect',
      source: ['','','',''],
      id: 'slider_4',
      opacity: 1,
      rect: ['171.6%','12.9%','46.5%','48.9%','auto','auto'],
      fill: ['rgba(246,255,161,0.76)'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      borderRadius: ['20px 20px','20px 20px','20px 20px','20px 20px'],
      boxShadow: ['',3,3,48,0,'rgba(0,0,0,0.24)'],
      c: [
      {
         type: 'rect',
         source: ['','','',''],
         id: 'slide_headCopy4',
         opacity: 1,
         rect: ['0%','0%','100%','26.5%','auto','auto'],
         borderRadius: ['20px 20px','20px 20px','0px','0px'],
         stroke: [0,'rgb(0, 0, 0)','none'],
         fill: ['rgba(118,96,84,0.90)'],
         c: [
         {
            type: 'text',
            rect: ['86px','28px','37.4%','40.5%','auto','auto'],
            id: 'titleCopy14',
            text: '第四幕',
            align: 'left',
            font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',[230,'%'],'rgba(255,255,255,1.00)','100','none','normal']
         }]
      },
      {
         type: 'text',
         rect: ['33px','143px','77.9%','10.8%','auto','auto'],
         id: 'titleCopy13',
         text: '12:30 - 13:30',
         align: 'center',
         font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',[230,'%'],'rgba(111,111,111,1.00)','100','none','normal']
      },
      {
         type: 'text',
         rect: ['33px','229px','77.5%','37.8%','auto','auto'],
         id: 'titleCopy12',
         text: '用餐休息',
         align: 'center',
         font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',[230,'%'],'rgba(111,111,111,1.00)','100','none','normal']
      }]
   },
   {
      type: 'rect',
      source: ['','','',''],
      id: 'slider_5',
      opacity: 1,
      rect: ['224.7%','12.9%','46.5%','48.9%','auto','auto'],
      fill: ['rgba(246,255,161,0.76)'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      borderRadius: ['20px 20px','20px 20px','20px 20px','20px 20px'],
      boxShadow: ['',3,3,48,0,'rgba(0,0,0,0.24)'],
      c: [
      {
         type: 'rect',
         source: ['','','',''],
         id: 'slide_headCopy5',
         opacity: 1,
         rect: ['0%','0%','100%','26.5%','auto','auto'],
         borderRadius: ['20px 20px','20px 20px','0px','0px'],
         stroke: [0,'rgb(0, 0, 0)','none'],
         fill: ['rgba(118,96,84,0.90)'],
         c: [
         {
            type: 'text',
            rect: ['86px','28px','37.4%','40.5%','auto','auto'],
            id: 'titleCopy17',
            text: '第五幕',
            align: 'left',
            font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',[230,'%'],'rgba(255,255,255,1.00)','100','none','normal']
         }]
      },
      {
         type: 'text',
         rect: ['33px','143px','77.9%','10.8%','auto','auto'],
         id: 'titleCopy16',
         text: '13:45 - 14:30',
         align: 'center',
         font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',[230,'%'],'rgba(111,111,111,1.00)','100','none','normal']
      },
      {
         type: 'text',
         rect: ['33px','229px','77.5%','37.8%','auto','auto'],
         id: 'titleCopy15',
         text: '峰会总结',
         align: 'center',
         font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',[230,'%'],'rgba(111,111,111,1.00)','100','none','normal']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_slider_2}": [
            ["color", "background-color", 'rgba(246,255,161,0.76)'],
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '48px'],
            ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '69.03%'],
            ["style", "width", '46.49%'],
            ["style", "top", '12.88%'],
            ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "max-width", 'none'],
            ["style", "height", '39.32%'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.24)']
         ],
         "${_titleCopy14}": [
            ["style", "top", '28px'],
            ["style", "height", '40.46%'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '86px'],
            ["style", "width", '37.38%']
         ],
         "${_titleCopy11}": [
            ["style", "top", '28px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '40.46%'],
            ["style", "left", '86px'],
            ["style", "width", '37.38%']
         ],
         "${_titleCopy6}": [
            ["style", "top", '229px'],
            ["color", "color", 'rgba(111,111,111,1.00)'],
            ["style", "height", '37.83%'],
            ["style", "left", '33px'],
            ["style", "width", '77.48%']
         ],
         "${_slider_3}": [
            ["color", "background-color", 'rgba(246,255,161,0.76)'],
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '48px'],
            ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '123.09%'],
            ["style", "width", '46.49%'],
            ["style", "top", '12.88%'],
            ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.24)'],
            ["style", "max-width", 'none'],
            ["style", "height", '39.32%'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_titleCopy17}": [
            ["style", "top", '28px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '40.46%'],
            ["style", "left", '86px'],
            ["style", "width", '37.38%']
         ],
         "${_titleCopy7}": [
            ["style", "top", '143px'],
            ["color", "color", 'rgba(111,111,111,1.00)'],
            ["style", "height", '10.75%'],
            ["style", "left", '33px'],
            ["style", "width", '77.9%']
         ],
         "${_titleCopy}": [
            ["style", "top", '143px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(111,111,111,1.00)'],
            ["style", "height", '10.75%'],
            ["style", "left", '33px'],
            ["style", "width", '77.9%']
         ],
         "${_intro_slider}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(148,180,217,1.00)'],
            ["style", "height", '877px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '100%']
         ],
         "${_slide_headCopy4}": [
            ["style", "top", '0%'],
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["color", "background-color", 'rgba(118,96,84,0.90)'],
            ["style", "max-width", 'none'],
            ["style", "height", '26.5%'],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0%'],
            ["style", "width", '100%']
         ],
         "${_titleCopy13}": [
            ["style", "top", '143px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(111,111,111,1.00)'],
            ["style", "height", '10.75%'],
            ["style", "left", '33px'],
            ["style", "width", '77.9%']
         ],
         "${_titleCopy10}": [
            ["style", "top", '143px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(111,111,111,1.00)'],
            ["style", "height", '10.75%'],
            ["style", "left", '33px'],
            ["style", "width", '77.9%']
         ],
         "${_titleCopy5}": [
            ["style", "top", '28px'],
            ["style", "height", '40.46%'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '86px'],
            ["style", "width", '37.38%']
         ],
         "${_title}": [
            ["style", "top", '28px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '40.46%'],
            ["style", "left", '86px'],
            ["style", "width", '37.38%']
         ],
         "${_slide_headCopy5}": [
            ["color", "background-color", 'rgba(118,96,84,0.90)'],
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "top", '0%'],
            ["style", "max-width", 'none'],
            ["style", "height", '26.5%'],
            ["style", "left", '0%'],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '100%']
         ],
         "${_slide_headCopy3}": [
            ["color", "background-color", 'rgba(118,96,84,0.90)'],
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "top", '0%'],
            ["style", "max-width", 'none'],
            ["style", "height", '26.5%'],
            ["style", "left", '0%'],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '100%']
         ],
         "${_slide_headCopy}": [
            ["style", "top", '0%'],
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["color", "background-color", 'rgba(118,96,84,0.90)'],
            ["style", "max-width", 'none'],
            ["style", "height", '26.5%'],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0%'],
            ["style", "width", '100%']
         ],
         "${_slider_4}": [
            ["color", "background-color", 'rgba(246,255,161,0.76)'],
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '48px'],
            ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '177.15%'],
            ["style", "width", '46.49%'],
            ["style", "top", '12.88%'],
            ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "max-width", 'none'],
            ["style", "height", '39.32%'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.24)']
         ],
         "${_titleCopy4}": [
            ["style", "top", '143px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(111,111,111,1.00)'],
            ["style", "height", '10.75%'],
            ["style", "left", '33px'],
            ["style", "width", '77.9%']
         ],
         "${_slider_5}": [
            ["color", "background-color", 'rgba(246,255,161,0.76)'],
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '48px'],
            ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '230.27%'],
            ["style", "width", '46.49%'],
            ["style", "top", '12.88%'],
            ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.24)'],
            ["style", "max-width", 'none'],
            ["style", "height", '39.32%'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_titleCopy15}": [
            ["style", "top", '229px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(111,111,111,1.00)'],
            ["style", "height", '37.83%'],
            ["style", "left", '33px'],
            ["style", "width", '77.48%']
         ],
         "${_slide_head}": [
            ["color", "background-color", 'rgba(118,96,84,0.90)'],
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "top", '0%'],
            ["style", "max-width", 'none'],
            ["style", "height", '26.5%'],
            ["style", "left", '0%'],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '100%']
         ],
         "${_titleCopy9}": [
            ["style", "top", '229px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(111,111,111,1.00)'],
            ["style", "height", '37.83%'],
            ["style", "left", '33px'],
            ["style", "width", '77.48%']
         ],
         "${_titleCopy3}": [
            ["style", "top", '229px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(111,111,111,1.00)'],
            ["style", "height", '37.83%'],
            ["style", "left", '33px'],
            ["style", "width", '77.48%']
         ],
         "${symbolSelector}": [
            ["style", "height", '877px'],
            ["style", "width", '640px']
         ],
         "${_titleCopy12}": [
            ["style", "top", '229px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(111,111,111,1.00)'],
            ["style", "height", '37.83%'],
            ["style", "left", '33px'],
            ["style", "width", '77.48%']
         ],
         "${_titleCopy8}": [
            ["style", "top", '37px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '40.46%'],
            ["style", "left", '86px'],
            ["style", "width", '37.38%']
         ],
         "${_titleCopy2}": [
            ["style", "top", '229px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(111,111,111,1.00)'],
            ["style", "height", '37.83%'],
            ["style", "left", '33px'],
            ["style", "width", '77.48%']
         ],
         "${_titleCopy16}": [
            ["style", "top", '143px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(111,111,111,1.00)'],
            ["style", "height", '10.75%'],
            ["style", "left", '33px'],
            ["style", "width", '77.9%']
         ],
         "${_slider_1}": [
            ["color", "background-color", 'rgba(246,255,161,0.76)'],
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '48px'],
            ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '15.28%'],
            ["style", "width", '46.49%'],
            ["style", "top", '12.88%'],
            ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.24)'],
            ["style", "max-width", 'none'],
            ["style", "height", '39.32%'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2250,
         autoPlay: true,
         timeline: [
            { id: "eid2480", tween: [ "style", "${_slider_5}", "height", '39.32%', { fromValue: '39.32%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2393", tween: [ "style", "${_slider_3}", "left", '114.37%', { fromValue: '123.09%'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid2399", tween: [ "style", "${_slider_3}", "left", '62.8%', { fromValue: '114.37%'}], position: 250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2404", tween: [ "style", "${_slider_3}", "left", '9.36%', { fromValue: '62.8%'}], position: 750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2409", tween: [ "style", "${_slider_3}", "left", '-50.94%', { fromValue: '9.36%'}], position: 1250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2414", tween: [ "style", "${_slider_3}", "left", '-59.07%', { fromValue: '-50.94%'}], position: 1750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2479", tween: [ "style", "${_slider_2}", "height", '39.32%', { fromValue: '39.32%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2395", tween: [ "style", "${_slider_5}", "left", '221.55%', { fromValue: '230.27%'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid2400", tween: [ "style", "${_slider_5}", "left", '169.98%', { fromValue: '221.55%'}], position: 250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2405", tween: [ "style", "${_slider_5}", "left", '116.54%', { fromValue: '169.98%'}], position: 750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2410", tween: [ "style", "${_slider_5}", "left", '56.24%', { fromValue: '116.54%'}], position: 1250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2415", tween: [ "style", "${_slider_5}", "left", '48.1%', { fromValue: '56.24%'}], position: 1750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2391", tween: [ "style", "${_slider_1}", "left", '6.56%', { fromValue: '15.28%'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid2398", tween: [ "style", "${_slider_1}", "left", '-45.01%', { fromValue: '6.56%'}], position: 250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2403", tween: [ "style", "${_slider_1}", "left", '-98.45%', { fromValue: '-45.01%'}], position: 750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2408", tween: [ "style", "${_slider_1}", "left", '-158.75%', { fromValue: '-98.45%'}], position: 1250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2413", tween: [ "style", "${_slider_1}", "left", '-166.88%', { fromValue: '-158.75%'}], position: 1750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2476", tween: [ "style", "${_slider_3}", "height", '39.32%', { fromValue: '39.32%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2387", tween: [ "style", "${_slider_4}", "left", '168.43%', { fromValue: '177.15%'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid2396", tween: [ "style", "${_slider_4}", "left", '116.86%', { fromValue: '168.43%'}], position: 250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2401", tween: [ "style", "${_slider_4}", "left", '63.42%', { fromValue: '116.86%'}], position: 750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2406", tween: [ "style", "${_slider_4}", "left", '3.12%', { fromValue: '63.42%'}], position: 1250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2411", tween: [ "style", "${_slider_4}", "left", '-5.02%', { fromValue: '3.12%'}], position: 1750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2477", tween: [ "style", "${_slider_4}", "height", '39.32%', { fromValue: '39.32%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2478", tween: [ "style", "${_slider_1}", "height", '39.32%', { fromValue: '39.32%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2389", tween: [ "style", "${_slider_2}", "left", '60.31%', { fromValue: '69.03%'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid2397", tween: [ "style", "${_slider_2}", "left", '8.74%', { fromValue: '60.31%'}], position: 250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2402", tween: [ "style", "${_slider_2}", "left", '-44.7%', { fromValue: '8.74%'}], position: 750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2407", tween: [ "style", "${_slider_2}", "left", '-105%', { fromValue: '-44.7%'}], position: 1250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2412", tween: [ "style", "${_slider_2}", "left", '-113.13%', { fromValue: '-105%'}], position: 1750, duration: 500, easing: "easeInOutQuad" }         ]
      }
   }
},
"sponsor_logos": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0%','0%','32.3%','124px','auto','auto'],
      id: 'logo_1',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.65)']
   }/*,
   {
      rect: ['34.7%','0%','32.3%','124px','auto','auto'],
      id: 'logo_2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.65)']
   },
   {
      rect: ['69.5%','0%','30.5%','124px','auto','auto'],
      id: 'logo_3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.65)']
   },
   {
      rect: ['0%','50.8%','32.3%','124px','auto','auto'],
      id: 'logo_4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.65)']
   },
   {
      rect: ['34.7%','50.7%','32.3%','124px','auto','auto'],
      id: 'logo_5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.65)']
   },
   {
      rect: ['69.5%','50.7%','30.6%','124px','auto','auto'],
      id: 'logo_6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.65)']
   }*/],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
        /* "${_logo_4}": [
            ["style", "top", '55.88%'],
            ["style", "height", '124px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "left", '121.69%'],
            ["style", "width", '32.26%']
         ],
         "${_logo_6}": [
            ["style", "top", '55.83%'],
            ["style", "height", '124px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "left", '191.17%'],
            ["style", "width", '30.53%']
         ],
         "${_logo_3}": [
            ["style", "top", '0%'],
            ["style", "height", '124px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "left", '191.17%'],
            ["style", "width", '30.53%']
         ],
         "${_logo_5}": [
            ["style", "top", '55.83%'],
            ["style", "height", '124px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "left", '156.43%'],
            ["style", "width", '32.26%']
         ],
         "${_logo_2}": [
            ["style", "top", '0%'],
            ["style", "height", '124px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "left", '156.43%'],
            ["style", "width", '32.26%']
         ],*/
         "${symbolSelector}": [
            ["style", "height", '272px'],
            ["style", "width", '521px']
         ],
         "${_logo_1}": [
            ["style", "top", '0.05%'],
            ["style", "height", '124px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "left", '121.69%'],
            ["style", "width", '100%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
            /*{ id: "eid2523", tween: [ "style", "${_logo_2}", "left", '34.74%', { fromValue: '156.43%'}], position: 138, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid2521", tween: [ "style", "${_logo_6}", "left", '69.48%', { fromValue: '191.17%'}], position: 500, duration: 1000, easing: "easeInOutQuad" },*/
            { id: "eid2517", tween: [ "style", "${_logo_1}", "left", '-0.38%', { fromValue: '121.69%'}], position: 0, duration: 1000, easing: "easeInOutQuad" }/*,
            { id: "eid2515", tween: [ "style", "${_logo_5}", "left", '34.74%', { fromValue: '156.43%'}], position: 453, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid2519", tween: [ "style", "${_logo_4}", "left", '-0.38%', { fromValue: '121.69%'}], position: 379, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid2525", tween: [ "style", "${_logo_3}", "left", '69.48%', { fromValue: '191.17%'}], position: 261, duration: 1000, easing: "easeInOutQuad" } */        ]
      }
   }
},
"right_arrow": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['auto','0.1%','90px','90px','0%','auto'],
      id: 'arrow_buttonCopy',
      transform: [[0,0],['180']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/arrow_button.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '120px'],
            ["style", "width", '120px']
         ],
         "${_arrow_buttonCopy}": [
            ["style", "top", '0.01%'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '180deg'],
            ["style", "height", '120px'],
            ["style", "right", '0%'],
            ["style", "left", 'auto'],
            ["style", "width", '120px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid2569", tween: [ "transform", "${_arrow_buttonCopy}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid2570", tween: [ "transform", "${_arrow_buttonCopy}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 1000, easing: "easeInOutQuad" }         ]
      }
   }
},
"tip": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['24px','-23px','162px','86px','auto','auto'],
      borderRadius: ['18px 18px','0px','0px','18px 18px'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'Rectangle',
      opacity: 0.8,
      type: 'rect',
      fill: ['rgba(65,142,255,1.00)']
   },
   {
      rect: ['48px','0px','24px','41px','auto','auto'],
      boxShadow: ['',0,0,0,0,'rgba(0,0,0,0)'],
      id: 'arrow_whiteCopy2',
      opacity: 0.5,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/arrow_white.png','0px','0px']
   },
   {
      rect: ['71px','0px','24px','41px','auto','auto'],
      boxShadow: ['',0,0,0,0,'rgba(0,0,0,0)'],
      id: 'arrow_whiteCopy3',
      opacity: 0.5,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/arrow_white.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_arrow_whiteCopy2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0.15'],
            ["style", "left", '48px']
         ],
         "${_Rectangle}": [
            ["style", "top", '-23px'],
            ["style", "border-top-left-radius", [18,18], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-left-radius", [18,18], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["color", "background-color", 'rgba(65,142,255,1.00)'],
            ["style", "height", '86px'],
            ["style", "opacity", '0.8'],
            ["style", "left", '24px'],
            ["style", "width", '162px']
         ],
         "${_arrow_whiteCopy3}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0.15'],
            ["style", "left", '71px']
         ],
         "${symbolSelector}": [
            ["style", "height", '41px'],
            ["style", "width", '95px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1250,
         autoPlay: true,
         timeline: [
            { id: "eid2630", tween: [ "style", "${_arrow_whiteCopy3}", "opacity", '0.75', { fromValue: '0.15'}], position: 0, duration: 500, easing: "easeInQuad" },
            { id: "eid2634", tween: [ "style", "${_arrow_whiteCopy3}", "opacity", '0.15', { fromValue: '0.750000'}], position: 500, duration: 500, easing: "easeInQuad" },
            { id: "eid2628", tween: [ "style", "${_arrow_whiteCopy2}", "opacity", '0.75', { fromValue: '0.15'}], position: 250, duration: 500, easing: "easeInQuad" },
            { id: "eid2632", tween: [ "style", "${_arrow_whiteCopy2}", "opacity", '0.15', { fromValue: '0.750000'}], position: 750, duration: 500, easing: "easeInQuad" }         ]
      }
   }
},
"form": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      rect: ['0%','0px','100%','100%','auto','auto'],
      id: 'RoundRect',
      stroke: [0,'rgba(0,0,0,1)','none'],
      display: 'none',
      fill: ['rgba(0,0,0,0.66)']
   },
   {
      type: 'rect',
      borderRadius: ['57px 57px','57px 57px','57px 57px','57px 57px'],
      id: 'register_container',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['10.5%','11.9%','79%','72.7%','auto','auto'],
      display: 'none',
      fill: ['rgba(255,255,255,0.75)'],
      boxShadow: ['',3,3,5,0,'rgba(0,0,0,0.65)'],
      c: [
      {
         type: 'rect',
         id: 'ctx',
         stroke: [0,'rgb(0, 0, 0)','none'],
         rect: ['9.6%','6.6%','79.4%','88.5%','auto','auto'],
         fill: ['rgba(255,255,255,0.00)']
      },
      {
         rect: ['auto','2.5%','60px','58px','5.1%','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         opacity: 0.8,
         id: 'Ellipse',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(87,87,87,0.86)'],
         c: [
         {
            id: 'cancel3',
            type: 'image',
            rect: ['10px','9px','39px','39px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/cancel.png','0px','0px']
         }]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_cancel3}": [
            ["style", "height", '39px'],
            ["style", "top", '9px'],
            ["style", "left", '10px'],
            ["style", "width", '39px']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(0,0,0,0.66)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0'],
            ["style", "left", '-100%'],
            ["style", "width", '100%'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '100%'],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Ellipse}": [
            ["style", "top", '2.49%'],
            ["style", "opacity", '0.8'],
            ["style", "left", 'auto'],
            ["style", "right", '5.07%']
         ],
         "${symbolSelector}": [
            ["style", "height", '1143px'],
            ["style", "width", '640px']
         ],
         "${_ctx}": [
            ["style", "top", '6.58%'],
            ["style", "height", '88.45%'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "left", '9.62%'],
            ["style", "width", '79.39%']
         ],
         "${_register_container}": [
            ["color", "background-color", 'rgba(255,255,255,0.87)'],
            ["style", "border-top-left-radius", [57,57], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '5px'],
            ["style", "border-bottom-right-radius", [57,57], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [57,57], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '79.01%'],
            ["style", "top", '11.93%'],
            ["style", "border-bottom-left-radius", [57,57], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "display", 'none'],
            ["style", "height", '72.66%'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "left", '10.62%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid2702", tween: [ "style", "${_RoundRect}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2695", tween: [ "style", "${_register_container}", "left", '-89.05%', { fromValue: '10.62%'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2697", tween: [ "style", "${_register_container}", "left", '109.32%', { fromValue: '-89.05%'}], position: 500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2696", tween: [ "style", "${_register_container}", "display", 'block', { fromValue: 'none'}], position: 157, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2698", tween: [ "style", "${_register_container}", "display", 'none', { fromValue: 'block'}], position: 912, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2700", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 250, easing: "easeInOutQuad" },
            { id: "eid2701", tween: [ "style", "${_RoundRect}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250, easing: "easeInOutQuad" },
            { id: "eid2715", tween: [ "style", "${_RoundRect}", "left", '-100%', { fromValue: '-100%'}], position: 500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2708", tween: [ "color", "${_register_container}", "background-color", 'rgba(255,255,255,0.87)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.87)'}], position: 500, duration: 0, easing: "easeInOutQuad" }         ]
      }
   }
},
"ad": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0%','auto','100%','12.8%','auto','0%'],
      id: 'Ad_bg',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(102,102,102,0.89)']
   },
   {
      rect: ['6.9%','0%','86.3%','101.9%','auto','auto'],
      borderRadius: ['50px 50px','50px 50px','0px','0px'],
      boxShadow: ['',3,3,23,0,'rgba(0,0,0,0.45)'],
      id: 'page',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)'],
      c: [
      {
         rect: ['17.7%','13.1%','82.3%','53.4%','auto','auto'],
         id: 'feature01',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(175,161,161,0.00)']
      },
      {
         rect: ['17.8%','13.1%','82.3%','53.4%','auto','auto'],
         type: 'rect',
         id: 'feature02',
         stroke: [0,'rgb(0, 0, 0)','none'],
         display: 'none',
         fill: ['rgba(175,161,161,0.00)']
      },
      {
         rect: ['17.5%','13.1%','82.3%','53.4%','auto','auto'],
         type: 'rect',
         id: 'feature03',
         stroke: [0,'rgb(0, 0, 0)','none'],
         display: 'none',
         fill: ['rgba(175,161,161,0.00)']
      },
      {
         rect: ['17.5%','13.1%','82.3%','53.4%','auto','auto'],
         type: 'rect',
         id: 'feature04',
         stroke: [0,'rgb(0, 0, 0)','none'],
         display: 'none',
         fill: ['rgba(175,161,161,0.00)']
      },
      {
         rect: ['17.5%','13.1%','82.3%','53.4%','auto','auto'],
         type: 'rect',
         id: 'feature05',
         stroke: [0,'rgb(0, 0, 0)','none'],
         display: 'none',
         fill: ['rgba(175,161,161,0.00)']
      },
      {
         rect: ['8.9%','11%','84.5%','38.3%','auto','auto'],
         type: 'rect',
         id: 'Rectangle',
         stroke: [0,'rgb(0, 0, 0)','none'],
         display: 'none',
         fill: ['rgba(175,161,161,0)']
      }]
   },
   {
      rect: ['14.4%','27px','53px','8px','auto','auto'],
      borderRadius: ['48px 48px','48px 48px','48px 48px','48px 48px'],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(187,187,187,1.00)']
   },
   {
      rect: ['14.4%','41px','53px','8px','auto','auto'],
      borderRadius: ['48px 48px','48px 48px','48px 48px','48px 48px'],
      id: 'RoundRect2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(187,187,187,1.00)']
   },
   {
      rect: ['14.4%','55px','53px','8px','auto','auto'],
      borderRadius: ['48px 48px','48px 48px','48px 48px','48px 48px'],
      id: 'RoundRect2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(187,187,187,1.00)']
   },
   {
      rect: ['35.8%','1.9%','29.7%','3%','auto','auto'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'logo_ad',
      opacity: 0.8,
      type: 'rect',
      fill: ['rgba(112,112,112,0.00)']
   },
   {
      rect: ['15.2%','59.5%','71%','6.7%','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',[150,'%'],'rgba(205,141,58,1.00)','700','none',''],
      id: 'TextCopy',
      text: '新派、创意、美感',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['15.2%','59.5%','71%','6.7%','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',[150,'%'],'rgba(205,141,58,1.00)','700','none',''],
      align: 'center',
      id: 'TextCopy2',
      text: '新派、创意、美感',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['15.2%','59.5%','71%','6.7%','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',[150,'%'],'rgba(205,141,58,1.00)','700','none',''],
      align: 'center',
      id: 'TextCopy11',
      text: '重新定义邀请函 ',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['15.2%','59.5%','71%','6.7%','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',[150,'%'],'rgba(205,141,58,1.00)','700','none',''],
      align: 'center',
      id: 'TextCopy4',
      text: '组织活动变得如此轻松',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['15.2%','59.5%','71%','6.7%','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',[150,'%'],'rgba(205,141,58,1.00)','700','none',''],
      align: 'center',
      id: 'TextCopy6',
      text: '深度优化用户体验',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['15.2%','59.5%','71%','6.7%','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',[150,'%'],'rgba(205,141,58,1.00)','700','none',''],
      align: 'center',
      id: 'TextCopy8',
      text: '多样化应用场景',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['15.2%','59.5%','71%','6.7%','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',[150,'%'],'rgba(205,141,58,1.00)','700','none',''],
      id: 'TextCopy10',
      text: 'Fashion, Creativity, Aesthetics',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['15.2%','59.5%','71%','6.7%','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',[150,'%'],'rgba(205,141,58,1.00)','700','none',''],
      align: 'center',
      id: 'TextCopy9',
      text: 'Redefine the concept of invitation',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['15.2%','59.5%','71%','6.7%','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',[150,'%'],'rgba(205,141,58,1.00)','700','none',''],
      align: 'center',
      id: 'TextCopy7',
      text: 'Activity Never been so Easy',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['15.2%','59.5%','71%','6.7%','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',[150,'%'],'rgba(205,141,58,1.00)','700','none',''],
      align: 'center',
      id: 'TextCopy5',
      text: 'Optimized UE',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['15.2%','59.5%','71%','6.7%','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',[150,'%'],'rgba(205,141,58,1.00)','700','none',''],
      align: 'center',
      id: 'TextCopy3',
      text: 'Made for everyone',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['28.9%','14.5%','70.9%','16.5%','auto','auto'],
      type: 'rect',
      id: 'logo_large',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['15.2%','67.9%','71%','20.5%','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',[150,'%'],'rgba(0,0,0,1)','normal','none',''],
      align: 'center',
      id: 'Text',
      text: 'wx@miningdata.com.cn',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['15.2%','67.9%','71%','20.5%','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',[150,'%'],'rgba(0,0,0,1)','normal','none',''],
      align: 'center',
      id: 'TextCopy12',
      text: '0571 89703306',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['13.4%','36.2%','74.4%','13.5%','auto','auto'],
      type: 'rect',
      id: 'phonebtn',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(175,161,161,0)']
   },
   {
      id: 'arrow_diy',
      type: 'rect',
      rect: ['auto','30%','auto','auto','10%','auto']
   },
   {
      id: 'arrow_diyCopy',
      type: 'rect',
      rect: ['11.1%','30%','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'arrow_diyCopy',
      symbolName: 'arrow_diy'
   },
   {
      id: 'arrow_diy',
      symbolName: 'arrow_diy'
   }   ]
   },
   states: {
      "Base State": {
         "${_TextCopy9}": [
            ["style", "letter-spacing", '0em'],
            ["color", "color", 'rgba(40,147,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '14.53%'],
            ["style", "width", '71.01%'],
            ["style", "top", '63.01%'],
            ["style", "font-size", '200%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "height", '6.65%'],
            ["style", "opacity", '0'],
            ["style", "word-spacing", '0em'],
            ["style", "display", 'none']
         ],
         "${_TextCopy10}": [
            ["style", "letter-spacing", '0em'],
            ["color", "color", 'rgba(232,155,54,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '14.53%'],
            ["style", "width", '71.01%'],
            ["style", "top", '63.01%'],
            ["style", "height", '6.65%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "word-spacing", '0em'],
            ["style", "font-size", '200%']
         ],
         "${_arrow_diyCopy}": [
            ["style", "top", '78.65%'],
            ["transform", "rotateZ", '-180deg'],
            ["style", "right", 'auto'],
            ["style", "left", '34.21%'],
            ["style", "opacity", '1']
         ],
         "${_feature02}": [
            ["style", "top", '13.14%'],
            ["style", "height", '53.36%'],
            ["color", "background-color", 'rgba(175,161,161,0.00)'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '17.75%'],
            ["style", "width", '82.33%']
         ],
         "${_feature03}": [
            ["style", "top", '13.14%'],
            ["style", "height", '53.36%'],
            ["color", "background-color", 'rgba(175,161,161,0.00)'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '17.49%'],
            ["style", "width", '82.33%']
         ],
         "${_TextCopy7}": [
            ["style", "letter-spacing", '0em'],
            ["color", "color", 'rgba(152,184,90,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '14.53%'],
            ["style", "width", '71.01%'],
            ["style", "top", '63.01%'],
            ["style", "display", 'none'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "height", '6.65%'],
            ["style", "opacity", '0'],
            ["style", "word-spacing", '0em'],
            ["style", "font-size", '200%']
         ],
         "${_TextCopy2}": [
            ["style", "letter-spacing", '0em'],
            ["color", "color", 'rgba(232,155,54,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '14.53%'],
            ["style", "width", '71.01%'],
            ["style", "top", '69.26%'],
            ["style", "height", '6.65%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "word-spacing", '0em'],
            ["style", "font-size", '370%']
         ],
         "${_TextCopy5}": [
            ["style", "letter-spacing", '0em'],
            ["color", "color", 'rgba(67,110,192,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '14.53%'],
            ["style", "width", '71.01%'],
            ["style", "top", '63.01%'],
            ["style", "font-size", '200%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "word-spacing", '0em'],
            ["style", "height", '6.65%']
         ],
         "${_Text}": [
            ["style", "letter-spacing", '0em'],
            ["color", "color", 'rgba(72,165,196,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '14.46%'],
            ["style", "width", '71.01%'],
            ["style", "top", '65.89%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "height", '10.67%'],
            ["style", "display", 'none'],
            ["style", "word-spacing", '0em'],
            ["style", "font-size", '250%']
         ],
         "${symbolSelector}": [
            ["style", "height", '1143px'],
            ["style", "width", '640px']
         ],
         "${_feature01}": [
            ["style", "top", '13.14%'],
            ["color", "background-color", 'rgba(175,161,161,0.00)'],
            ["style", "height", '53.35%'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '17.67%'],
            ["style", "width", '82.33%']
         ],
         "${_Rectangle}": [
            ["style", "display", 'none'],
            ["style", "height", '38.25%'],
            ["style", "top", '11.01%'],
            ["style", "width", '84.54%']
         ],
         "${_RoundRect2Copy2}": [
            ["color", "background-color", 'rgba(187,187,187,1.00)'],
            ["style", "border-top-left-radius", [48,48], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [48,48], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [48,48], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '53px'],
            ["style", "top", '55px'],
            ["style", "border-bottom-left-radius", [48,48], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '8px'],
            ["style", "left", '14.36%']
         ],
         "${_feature05}": [
            ["style", "top", '13.14%'],
            ["color", "background-color", 'rgba(175,161,161,0.00)'],
            ["style", "height", '53.36%'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '17.49%'],
            ["style", "width", '82.33%']
         ],
         "${_TextCopy4}": [
            ["style", "letter-spacing", '0em'],
            ["color", "color", 'rgba(152,184,90,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '14.53%'],
            ["style", "width", '71.01%'],
            ["style", "top", '69.3%'],
            ["style", "font-size", '370%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "height", '6.65%'],
            ["style", "opacity", '0'],
            ["style", "word-spacing", '0em'],
            ["style", "display", 'none']
         ],
         "${_TextCopy3}": [
            ["style", "letter-spacing", '0em'],
            ["color", "color", 'rgba(135,108,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '14.53%'],
            ["style", "width", '71.01%'],
            ["style", "top", '63.01%'],
            ["style", "height", '6.65%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "word-spacing", '0em'],
            ["style", "font-size", '200%']
         ],
         "${_RoundRect2Copy}": [
            ["color", "background-color", 'rgba(187,187,187,1.00)'],
            ["style", "border-top-left-radius", [48,48], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [48,48], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [48,48], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '53px'],
            ["style", "top", '41px'],
            ["style", "border-bottom-left-radius", [48,48], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '8px'],
            ["style", "left", '14.36%']
         ],
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(187,187,187,1.00)'],
            ["style", "border-top-left-radius", [48,48], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [48,48], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [48,48], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '53px'],
            ["style", "top", '27px'],
            ["style", "border-bottom-left-radius", [48,48], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '8px'],
            ["style", "left", '14.35%']
         ],
         "${_TextCopy12}": [
            ["style", "letter-spacing", '0em'],
            ["color", "color", 'rgba(72,165,196,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '14.37%'],
            ["style", "width", '71.01%'],
            ["style", "top", '58.48%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "height", '6.65%'],
            ["style", "font-size", '350%'],
            ["style", "word-spacing", '0em'],
            ["style", "display", 'none']
         ],
         "${_TextCopy8}": [
            ["style", "letter-spacing", '0em'],
            ["color", "color", 'rgba(135,108,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '14.53%'],
            ["style", "width", '71.01%'],
            ["style", "top", '69.3%'],
            ["style", "font-size", '370%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "word-spacing", '0em'],
            ["style", "height", '6.65%']
         ],
         "${_TextCopy}": [
            ["style", "letter-spacing", '0em'],
            ["color", "color", 'rgba(232,155,54,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '14.53%'],
            ["style", "width", '71.01%'],
            ["style", "top", '69.94%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "height", '6.65%'],
            ["style", "font-size", '350%'],
            ["style", "word-spacing", '0em'],
            ["style", "opacity", '0']
         ],
         "${_logo_large}": [
            ["style", "top", '14.53%'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '46.07%'],
            ["style", "width", '43.52%']
         ],
         "${_phonebtn}": [
            ["style", "top", '54.33%'],
            ["style", "display", 'none'],
            ["style", "left", '15.16%'],
            ["style", "width", '71.01%']
         ],
         "${_arrow_diy}": [
            ["style", "top", '78.65%'],
            ["style", "opacity", '1'],
            ["style", "left", 'auto'],
            ["style", "right", '33.28%']
         ],
         "${_page}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.45)'],
            ["style", "left", '6.88%'],
            ["style", "width", '86.25%'],
            ["style", "top", '0%'],
            ["subproperty", "boxShadow.blur", '23px'],
            ["style", "height", '101.85%'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_TextCopy11}": [
            ["style", "letter-spacing", '0em'],
            ["color", "color", 'rgba(40,147,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '14.53%'],
            ["style", "width", '71.01%'],
            ["style", "top", '69.3%'],
            ["style", "font-size", '370%'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "height", '6.65%'],
            ["style", "opacity", '0'],
            ["style", "word-spacing", '0em'],
            ["style", "display", 'none']
         ],
         "${_feature04}": [
            ["style", "top", '13.14%'],
            ["style", "height", '53.36%'],
            ["color", "background-color", 'rgba(175,161,161,0.00)'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '17.49%'],
            ["style", "width", '82.33%']
         ],
         "${_Ad_bg}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '-99.7%'],
            ["style", "height", '100%'],
            ["color", "background-color", 'rgba(102,102,102,0.00)'],
            ["style", "left", '0%'],
            ["style", "width", '100%']
         ],
         "${_TextCopy6}": [
            ["style", "letter-spacing", '0em'],
            ["color", "color", 'rgba(67,110,192,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '14.53%'],
            ["style", "width", '71.01%'],
            ["style", "top", '69.3%'],
            ["style", "display", 'none'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0%'],
            ["style", "height", '6.65%'],
            ["style", "opacity", '0'],
            ["style", "word-spacing", '0em'],
            ["style", "font-size", '370%']
         ],
         "${_logo_ad}": [
            ["color", "background-color", 'rgba(112,112,112,0.00)'],
            ["style", "top", '1.92%'],
            ["style", "height", '3.02%'],
            ["style", "opacity", '0.8'],
            ["style", "left", '35.76%'],
            ["style", "width", '29.7%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6000,
         autoPlay: true,
         timeline: [
            { id: "eid3186", tween: [ "style", "${_logo_large}", "left", '28.91%', { fromValue: '46.07%'}], position: 5000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid3187", tween: [ "style", "${_logo_large}", "left", '10.18%', { fromValue: '28.91%'}], position: 5500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2755", tween: [ "style", "${_feature02}", "left", '9.6%', { fromValue: '17.75%'}], position: 1000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2756", tween: [ "style", "${_feature02}", "left", '0.19%', { fromValue: '9.6%'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid3180", tween: [ "style", "${_TextCopy12}", "left", '14.37%', { fromValue: '14.37%'}], position: 5500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2753", tween: [ "style", "${_feature01}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2754", tween: [ "style", "${_feature01}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2829", tween: [ "color", "${_TextCopy4}", "color", 'rgba(152,184,90,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(152,184,90,1.00)'}], position: 2500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3055", tween: [ "style", "${_TextCopy3}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3056", tween: [ "style", "${_TextCopy3}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3089", tween: [ "style", "${_TextCopy9}", "font-size", '200%', { fromValue: '200%'}], position: 1500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3090", tween: [ "style", "${_TextCopy9}", "font-size", '200%', { fromValue: '200%'}], position: 1579, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3155", tween: [ "style", "${_TextCopy2}", "top", '69.3%', { fromValue: '69.3%'}], position: 500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3086", tween: [ "style", "${_TextCopy10}", "font-size", '200%', { fromValue: '200%'}], position: 500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2976", tween: [ "style", "${_arrow_diy}", "top", '78.65%', { fromValue: '78.65%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2774", tween: [ "style", "${_feature02}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2775", tween: [ "style", "${_feature02}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3067", tween: [ "style", "${_TextCopy7}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid3068", tween: [ "style", "${_TextCopy7}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2969", tween: [ "style", "${_arrow_diyCopy}", "opacity", '1', { fromValue: '1'}], position: 6000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3063", tween: [ "color", "${_TextCopy5}", "color", 'rgba(67,110,192,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(67,110,192,1.00)'}], position: 3500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2689", tween: [ "style", "${_Ad_bg}", "bottom", '0%', { fromValue: '-99.7%'}], position: 5000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3184", tween: [ "color", "${_Text}", "color", 'rgba(72,165,196,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(72,165,196,1.00)'}], position: 5500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2888", tween: [ "style", "${_phonebtn}", "display", 'block', { fromValue: 'none'}], position: 5159, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2889", tween: [ "style", "${_phonebtn}", "display", 'none', { fromValue: 'block'}], position: 5861, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3078", tween: [ "color", "${_TextCopy9}", "color", 'rgba(40,147,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(40,147,255,1.00)'}], position: 1500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2831", tween: [ "style", "${_TextCopy6}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2832", tween: [ "style", "${_TextCopy6}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3045", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3046", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2767", tween: [ "style", "${_feature03}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2768", tween: [ "style", "${_feature03}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid3167", tween: [ "style", "${_TextCopy12}", "opacity", '1', { fromValue: '0'}], position: 5000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid3168", tween: [ "style", "${_TextCopy12}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid3157", tween: [ "style", "${_TextCopy6}", "top", '69.3%', { fromValue: '69.3%'}], position: 3500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2841", tween: [ "color", "${_TextCopy6}", "color", 'rgba(67,110,192,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(67,110,192,1.00)'}], position: 3500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2782", tween: [ "style", "${_feature05}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2783", tween: [ "style", "${_feature05}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid3141", tween: [ "color", "${_TextCopy11}", "color", 'rgba(40,147,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(40,147,255,1.00)'}], position: 1500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3053", tween: [ "style", "${_TextCopy3}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid3054", tween: [ "style", "${_TextCopy3}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid3153", tween: [ "style", "${_TextCopy11}", "top", '69.3%', { fromValue: '69.3%'}], position: 1500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2770", tween: [ "style", "${_feature04}", "left", '9.6%', { fromValue: '17.49%'}], position: 3000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2771", tween: [ "style", "${_feature04}", "left", '0.18%', { fromValue: '9.6%'}], position: 3500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid3085", tween: [ "color", "${_TextCopy10}", "color", 'rgba(232,155,54,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,155,54,1.00)'}], position: 500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2784", tween: [ "style", "${_feature05}", "left", '9.6%', { fromValue: '17.49%'}], position: 4000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2785", tween: [ "style", "${_feature05}", "left", '0.18%', { fromValue: '9.6%'}], position: 4500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid3149", tween: [ "style", "${_TextCopy8}", "font-size", '370%', { fromValue: '370%'}], position: 4500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3069", tween: [ "style", "${_TextCopy7}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3070", tween: [ "style", "${_TextCopy7}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3146", tween: [ "style", "${_TextCopy11}", "font-size", '370%', { fromValue: '370%'}], position: 1500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2776", tween: [ "style", "${_feature03}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2777", tween: [ "style", "${_feature03}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3175", tween: [ "style", "${_TextCopy12}", "height", '6.65%', { fromValue: '6.65%'}], position: 5500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2751", tween: [ "style", "${_feature01}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3195", tween: [ "style", "${_TextCopy12}", "top", '58.48%', { fromValue: '58.48%'}], position: 5500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3083", tween: [ "style", "${_TextCopy10}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid3084", tween: [ "style", "${_TextCopy10}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid3050", tween: [ "style", "${_Text}", "font-size", '250%', { fromValue: '250%'}], position: 5500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3061", tween: [ "style", "${_TextCopy5}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid3062", tween: [ "style", "${_TextCopy5}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2807", tween: [ "style", "${_TextCopy2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2808", tween: [ "style", "${_TextCopy2}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2991", tween: [ "style", "${_phonebtn}", "width", '71.01%', { fromValue: '71.01%'}], position: 5500, duration: 0 },
            { id: "eid3059", tween: [ "style", "${_TextCopy5}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3060", tween: [ "style", "${_TextCopy5}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3071", tween: [ "style", "${_TextCopy7}", "font-size", '200%', { fromValue: '200%'}], position: 2500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2778", tween: [ "style", "${_feature04}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2779", tween: [ "style", "${_feature04}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2819", tween: [ "style", "${_TextCopy4}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2820", tween: [ "style", "${_TextCopy4}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid3047", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 5000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid3048", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2780", tween: [ "style", "${_feature05}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2781", tween: [ "style", "${_feature05}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3081", tween: [ "style", "${_TextCopy10}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3082", tween: [ "style", "${_TextCopy10}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3158", tween: [ "style", "${_TextCopy8}", "top", '69.3%', { fromValue: '69.3%'}], position: 4500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3173", tween: [ "style", "${_TextCopy12}", "font-size", '350%', { fromValue: '350%'}], position: 5500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3057", tween: [ "style", "${_TextCopy3}", "font-size", '200%', { fromValue: '200%'}], position: 4500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2762", tween: [ "style", "${_feature03}", "left", '9.6%', { fromValue: '17.49%'}], position: 2000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2763", tween: [ "style", "${_feature03}", "left", '0.18%', { fromValue: '9.6%'}], position: 2500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2733", tween: [ "style", "${_Ad_bg}", "width", '100%', { fromValue: '100%'}], position: 5000, duration: 0 },
            { id: "eid3159", tween: [ "color", "${_TextCopy2}", "color", 'rgba(232,155,54,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(232,155,54,1.00)'}], position: 500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2978", tween: [ "style", "${_arrow_diy}", "right", '33.28%', { fromValue: '33.28%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3002", tween: [ "style", "${_arrow_diyCopy}", "left", '34.21%', { fromValue: '34.21%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2975", tween: [ "style", "${_arrow_diyCopy}", "top", '78.65%', { fromValue: '78.65%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2760", tween: [ "style", "${_feature02}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2761", tween: [ "style", "${_feature02}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid3358", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3197", tween: [ "style", "${_phonebtn}", "top", '54.33%', { fromValue: '54.33%'}], position: 5500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3051", tween: [ "style", "${_TextCopy3}", "top", '63.01%', { fromValue: '63.01%'}], position: 4500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3176", tween: [ "style", "${_Text}", "left", '14.46%', { fromValue: '14.46%'}], position: 5500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3160", tween: [ "style", "${_TextCopy2}", "font-size", '370%', { fromValue: '370%'}], position: 500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2822", tween: [ "style", "${_TextCopy4}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2823", tween: [ "style", "${_TextCopy4}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2992", tween: [ "style", "${_phonebtn}", "left", '15.16%', { fromValue: '15.16%'}], position: 5500, duration: 0 },
            { id: "eid2736", tween: [ "style", "${_Ad_bg}", "left", '0%', { fromValue: '0%'}], position: 5000, duration: 0 },
            { id: "eid3080", tween: [ "style", "${_TextCopy10}", "top", '63.01%', { fromValue: '63.01%'}], position: 500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3189", tween: [ "color", "${_logo_large}", "background-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 5500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3156", tween: [ "style", "${_TextCopy4}", "top", '69.3%', { fromValue: '69.3%'}], position: 2500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3066", tween: [ "color", "${_TextCopy7}", "color", 'rgba(152,184,90,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(152,184,90,1.00)'}], position: 2500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3191", tween: [ "style", "${_logo_large}", "opacity", '1', { fromValue: '0'}], position: 5000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid3192", tween: [ "style", "${_logo_large}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2853", tween: [ "color", "${_TextCopy8}", "color", 'rgba(135,108,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(135,108,255,1.00)'}], position: 4500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3072", tween: [ "style", "${_TextCopy9}", "top", '63.01%', { fromValue: '63.01%'}], position: 1500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3139", tween: [ "style", "${_TextCopy11}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid3140", tween: [ "style", "${_TextCopy11}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2805", tween: [ "style", "${_TextCopy2}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3135", tween: [ "style", "${_TextCopy2}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3137", tween: [ "style", "${_TextCopy11}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3138", tween: [ "style", "${_TextCopy11}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3076", tween: [ "style", "${_TextCopy9}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid3077", tween: [ "style", "${_TextCopy9}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2749", tween: [ "style", "${_feature01}", "left", '9.53%', { fromValue: '17.67%'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2750", tween: [ "style", "${_feature01}", "left", '0.3%', { fromValue: '9.53%'}], position: 500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid3058", tween: [ "style", "${_TextCopy5}", "top", '63.01%', { fromValue: '63.01%'}], position: 3500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3196", tween: [ "style", "${_Text}", "top", '65.89%', { fromValue: '65.89%'}], position: 5500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2833", tween: [ "style", "${_TextCopy6}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2834", tween: [ "style", "${_TextCopy6}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2844", tween: [ "style", "${_TextCopy8}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2845", tween: [ "style", "${_TextCopy8}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid3147", tween: [ "style", "${_TextCopy4}", "font-size", '370%', { fromValue: '370%'}], position: 2500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2966", tween: [ "style", "${_arrow_diy}", "opacity", '1', { fromValue: '1'}], position: 4829, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3183", tween: [ "color", "${_TextCopy12}", "color", 'rgba(72,165,196,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(72,165,196,1.00)'}], position: 5500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3148", tween: [ "style", "${_TextCopy6}", "font-size", '370%', { fromValue: '370%'}], position: 3500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2731", tween: [ "style", "${_Ad_bg}", "height", '100%', { fromValue: '100%'}], position: 5000, duration: 0 },
            { id: "eid3064", tween: [ "style", "${_TextCopy5}", "font-size", '200%', { fromValue: '200%'}], position: 3500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2738", tween: [ "color", "${_Ad_bg}", "background-color", 'rgba(102,102,102,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(102,102,102,0.00)'}], position: 5000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3065", tween: [ "style", "${_TextCopy7}", "top", '63.01%', { fromValue: '63.01%'}], position: 2500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3190", tween: [ "style", "${_logo_large}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3073", tween: [ "style", "${_TextCopy9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3074", tween: [ "style", "${_TextCopy9}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3075", tween: [ "style", "${_TextCopy9}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3052", tween: [ "color", "${_TextCopy3}", "color", 'rgba(135,108,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(135,108,255,1.00)'}], position: 4500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3165", tween: [ "style", "${_TextCopy12}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3166", tween: [ "style", "${_TextCopy12}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid2772", tween: [ "style", "${_feature04}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2773", tween: [ "style", "${_feature04}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid2846", tween: [ "style", "${_TextCopy8}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3121", tween: [ "style", "${_TextCopy8}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0, easing: "easeInOutQuad" }         ]
      }
   }
},
"arrow_diy": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0],['50']],
      borderRadius: ['48px 48px','48px 48px','48px 48px','48px 48px'],
      rect: ['-8.1%','12px','37px','8px','auto','auto'],
      id: 'RoundRect2Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(203,203,203,1.00)']
   },
   {
      transform: [[0,0],['-50']],
      borderRadius: ['48px 48px','48px 48px','48px 48px','48px 48px'],
      rect: ['-11.4%','36px','37px','8px','auto','auto'],
      id: 'RoundRect2Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(203,203,203,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['-11px','-1px','53px','56px','auto','auto'],
      fill: ['rgba(187,187,187,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '56px'],
            ["style", "width", '31px']
         ],
         "${_Rectangle3}": [
            ["style", "opacity", '0']
         ],
         "${_RoundRect2Copy4}": [
            ["color", "background-color", 'rgba(203,203,203,1.00)'],
            ["style", "border-top-left-radius", [48,48], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [48,48], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [48,48], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '37px'],
            ["style", "top", '36px'],
            ["style", "border-bottom-left-radius", [48,48], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '8px'],
            ["transform", "rotateZ", '-50deg'],
            ["style", "left", '-11.42%']
         ],
         "${_RoundRect2Copy3}": [
            ["color", "background-color", 'rgba(203,203,203,1.00)'],
            ["style", "border-top-left-radius", [48,48], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [48,48], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [48,48], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '37px'],
            ["style", "top", '12px'],
            ["style", "border-bottom-left-radius", [48,48], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '8px'],
            ["transform", "rotateZ", '50deg'],
            ["style", "left", '-8.12%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"guest_detail": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-36px','auto','110.6%','145.2%','auto','932px'],
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(0,0,0,0.48)']
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['47.5%','-166%','100%','103.8%','auto','auto'],
      id: 'slider_guest'
   }],
   symbolInstances: [
   {
      id: 'slider_guest',
      symbolName: 'slider_guest'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '851px'],
            ["style", "width", '640px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(0,0,0,0.76)'],
            ["style", "bottom", '764px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "height", '192.67%'],
            ["style", "top", 'auto']
         ],
         "${_slider_guest}": [
            ["style", "bottom", 'auto'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '0%'],
            ["style", "width", '100%'],
            ["style", "top", '-134.89%'],
            ["transform", "scaleY", '0.96351'],
            ["style", "height", '103.79%'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid3209", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 161, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3210", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'block'}], position: 835, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3208", tween: [ "style", "${_slider_guest}", "display", 'block', { fromValue: 'none'}], position: 161, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3207", tween: [ "style", "${_slider_guest}", "display", 'none', { fromValue: 'block'}], position: 835, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3205", tween: [ "style", "${_slider_guest}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid3206", tween: [ "style", "${_slider_guest}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid3378", tween: [ "style", "${_slider_guest}", "top", '-134.89%', { fromValue: '-134.89%'}], position: 161, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3214", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(0,0,0,0.76)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.76)'}], position: 500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3212", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 161, duration: 339, easing: "easeInOutQuad" },
            { id: "eid3213", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 335, easing: "easeInOutQuad" }         ]
      }
   }
},
"cancel": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['auto','0%','60px','58px','0%','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      opacity: 0.8,
      id: 'EllipseCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(87,87,87,0.86)'],
      c: [
      {
         id: 'cancel',
         type: 'image',
         rect: ['9px','8px','41px','41px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/cancel.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_cancel}": [
            ["style", "top", '8px'],
            ["style", "height", '41px'],
            ["style", "left", '9px'],
            ["style", "width", '41px']
         ],
         "${_EllipseCopy}": [
            ["style", "top", '0%'],
            ["style", "opacity", '0.8'],
            ["style", "left", 'auto'],
            ["style", "right", '0%']
         ],
         "${symbolSelector}": [
            ["style", "height", '58px'],
            ["style", "width", '60px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"cancel2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','auto','100%','73.1%','auto','26.9%'],
      fill: ['rgba(87,87,87,0.00)'],
      c: [
      {
         display: 'none',
         type: 'rect',
         id: 'cancel2',
         rect: ['5.6%','auto','9.4%','59.2%','auto','8.9%']
      }]
   }],
   symbolInstances: [
   {
      id: 'cancel2',
      symbolName: 'cancel'
   }   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(87,87,87,0.00)'],
            ["style", "bottom", '26.89%'],
            ["style", "height", '73.12%'],
            ["style", "left", '0px'],
            ["style", "top", 'auto']
         ],
         "${symbolSelector}": [
            ["style", "height", '134px'],
            ["style", "width", '640px']
         ],
         "${_cancel2}": [
            ["style", "top", 'auto'],
            ["style", "height", '59.2%'],
            ["style", "bottom", '5.6%'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '7.1%'],
            ["style", "width", '9.38%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid3354", tween: [ "style", "${_cancel2}", "left", '7.1%', { fromValue: '7.1%'}], position: 500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3304", tween: [ "style", "${_cancel2}", "opacity", '1', { fromValue: '0'}], position: 161, duration: 339 },
            { id: "eid3305", tween: [ "style", "${_cancel2}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 335 },
            { id: "eid3293", tween: [ "style", "${_cancel2}", "display", 'block', { fromValue: 'none'}], position: 161, duration: 0, easing: "easeInQuad" },
            { id: "eid3294", tween: [ "style", "${_cancel2}", "display", 'none', { fromValue: 'block'}], position: 835, duration: 0, easing: "easeInQuad" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-32363606");
