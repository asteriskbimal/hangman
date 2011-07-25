/*
-----------------------------------------------------
@name           Hanging game in HTML5/Canvas 
@author         Bimal Sharma
@author-url     http://bimalsharma.com.np 
@description    Online Hangign game  
-----------------------------------------------------
*/

 /*----------------variables------------------------------*/
                
        var str=new Array();
		var str1=new Array(25);
        var context,canvas;               // variables to assign canvas context
        var x=0;                          
        var hang=5;
        var tempStr=new Array(25);      
        var i=0,j,temp3=null,l=0;                        //variables for string manipulation
        var charCount=0;                                 
        var n;
       
       
        var img=new Image(30,30);
        img.src="hangman3.png";
		var img1=new Image(30,30);
        img1.src="hangman4.png";
		var img2=new Image(30,30);
        img2.src="hangman5.png";
		var img3=new Image(30,30);
        img3.src="hangman16.png";
		var img4=new Image(30,30);
        img4.src="hangman17.png";
		var img5=new Image(30,30);
        img5.src="hangman8.png";
		var img6=new Image(30,30);
        img6.src="hangman9.png";
		var img7=new Image(30,30);
        img7.src="bg1.png";
		var img8=new Image(30,30);
        img8.src="bg2.png";
        var letters="abcdefghijklmnopqrstuvwxyz";
/*-------------------------------------------------------*/
        
/*-----------------initialization-------------------------*/ 
var rectangles = [];

for (n = 0; n < 26; n++) 
		{
			if(n<13)
			{
				rectangles.push(  
				{
					x: (n-1) * 30 + 40,
					y: 270,
					width: 25,
					height: 25,
					color: img7,
					color1:img8,
					letter:letters[n],
					
				}); 
			}
			else	if(n>=13&&n<26)
			{
				rectangles.push(
				{
					x: (n-14) * 30 + 40,
					y: 320,
					width: 25,
					height: 25,
					color:img7,
					color1:img8,
					letter:letters[n],
					
				});
			}
			
		}   

       
        //var streng=new Array();
        var district_str=new Array();
         
        //initialize strings

        district_str[0] =     "darchula";
        district_str[1] =     "baitadi";
        district_str[2] =     "nawalparasi";
        district_str[3] =     "pachthar";
        district_str[4] =     "dadeldhura";
		district_str[5] =     "surkhet";
        district_str[6] =     "jajarkot";
        district_str[7] =     "udayapur";
        district_str[8] =     "okhaldhunga";
        district_str[9] =     "mustang";
		
		var places_str=new Array();
		
		places_str[0] =     "sinamangal";
        places_str[1] =     "jorpati";
        places_str[2] =     "jhamsikhel";
        places_str[3] =     "tinkune";
        places_str[4] =     "nagarkot";
		places_str[5] =     "dhulikhel";
        places_str[6] =     "thapathali";
        places_str[7] =     "sankhamul";
        places_str[8] =     "ratnapark";
        places_str[9] =     "oldbaneswor";
		
		var movie_str=new Array();
		
		movie_str[0] =     "kusumerumal";
        movie_str[1] =     "karodpati";
        movie_str[2] =     "daxchina";
        movie_str[3] =     "saraswati";
        movie_str[4] =     "prempinda";
		movie_str[5] =     "afnomanche";
        movie_str[6] =     "darpanchaya";
        movie_str[7] =     "munamadan";
        movie_str[8] =     "bhanubhakta";
        movie_str[9] =     "pratikchya";
		var gamefinish=0;
		var chooseStr=0;
        var temp=Math.floor(Math.random()*district_str.length);
       str=movie_str[temp];
	   var temp1=Math.floor(Math.random()*str.length);
/*-------------------------------------------------------*/
            var once=1;

/*----------------loading windows---------------------------*/
        window.onload = function()
        {   
            canvas = document.getElementById("canvas");               //pass the canvas element
            context = canvas.getContext("2d");                        //get the context
            x = 0;
            y = 0;
            context.font = "12px Arial";
			context.textBaseline = "middle";
			context.fillStyle = "blue";
            document.addEventListener('keypress',doKeyDown,true); 
            setInterval("display(context)",100);                     //call dispaly in every 100 milliseconds
        }; 
        /*-------------------------------------------------------*/


            function display(context)                               // display the whole context
            {   
			   context.clearRect(0,0,400,400); 
			    if(i>7)
				{ str1=str;
				 context.fillText("oops you are hanged:( ",10,150);
				 context.fillText("the string is:"+str1,10,170);
				 gamefinish=1;
				}
				if(charCount==str.length+1)
				{ 
				 context.fillText("you saved urself from hanging:",10,150);
				 context.fillText("you are a real hero:P",10,170);
				 gamefinish=1;
				}
				if(once)
				{
			   for(n=0;n<str.length;n++)
		       { str1[n]='_';
			     if(n==temp1)
				 {str1[n]=str[n];
				 charCount++;
			     }
			   } 
			   once=0;
			   }
			   for(n=0;n<26;n++)
				{
					//context.fillStyle=rectangles[n].color;
					// context.drawImage(rectangles[n].color,rectangles[n].x,rectangles[n].y);
					context.font = "12px Georgia";
					context.drawImage(rectangles[n].color,rectangles[n].x,rectangles[n].y);
					context.strokeRect(rectangles[n].x,rectangles[n].y,rectangles[n].width,rectangles[n].height);
					context.fillText(rectangles[n].letter,rectangles[n].x+10,rectangles[n].y+15);
				}
				context.font = "20px Georgia";
				if(!gamefinish && chooseStr==1)
				{
				 for(var m=0;m<str.length;m++)
			     context.fillText(str1[m],10+m*35,150);
				 
			    }
                 if(i==1 && x==1)
				{context.drawImage(img,400,10);
                		
				 }
			    if(i==2 && x==2)
				{context.drawImage(img1,400,20);
                 
				}
				 if(i==3 && x==3)
				{context.drawImage(img2,400,20);
                				 }
				 if(i==4 && x==4)
				{context.drawImage(img3,400,20);
                
				 }
				 if(i==5 && x==5)
				{context.drawImage(img4,400,20);
				
                 }
				  if(i==6 && x==6)
				{context.drawImage(img5,400,20);
				
                 }
				  if(i==7 && x==7)
				{context.drawImage(img6,400,20);
				i++;
                 }
				 
				/* if(i==8 && x==8)
				{context.drawImage(img7,20,20);
				}*/
				
			      
            }


        function doKeyDown(e) //keyboard event
        {   
           charc=charConvert(e.keyCode);
		   tempStr[l]=charc;
		   for(var k=0;k<26;k++)
			  {
			  if(rectangles[k].letter==charc)
			  rectangles[k].color=rectangles[k].color1;
			  }
		      hang=5;
		   
		   for(n=0;n<str.length;n++)
		   {  
		    if(str[n]==charc)
		    { str1[n]=str[n];
			  hang=0;
			  if(!(tempStr[l-1]==charc))
			  charCount++;
			}
			}
			if(hang!=0)
			hang=1;
		   
		 //  alert(i+" "+x);
		   if(hang==1)
		   {
		   i++;
		   x++;
		 //  alert(i+" "+x);
		   }
          l++; 
        }
		
	

         function Strings1()
		 {temp1=Math.floor(Math.random()*str.length);
		  chooseStr=1;
		  j=Math.floor(Math.random()*district_str.length);
		  str=district_str[j];
		  for(n=0;n<str.length;n++)
		{ str1[n]='_';
			
		}
		 }
		 
		 function Strings2()
		 {temp1=Math.floor(Math.random()*str.length);
		 chooseStr=1;
		  j=Math.floor(Math.random()*places_str.length);
		  str=places_str[j];
		  for(n=0;n<str.length;n++)
		{ str1[n]='_';
			
		}
		 }
		 
		 function Strings3()
		 {temp1=Math.floor(Math.random()*str.length);
		  j=Math.floor(Math.random()*movie_str.length);
		  chooseStr=1;
		  str=movie_str[j];
		  for(n=0;n<str.length;n++)
		{ str1[n]='_';
			
		}
		 }
		 
		 function charConvert(Ascii)
		{
			if( Ascii==65) chac='a';	
			if( Ascii==66) chac='b';
			if( Ascii==67) chac='c';
			if( Ascii==68) chac='d';
			if( Ascii==69) chac='e';
			if( Ascii==70) chac='f';	
			if( Ascii==71) chac='g';
			if( Ascii==72) chac='h';
			if( Ascii==73) chac='i';
			if( Ascii==74) chac='j';
			if( Ascii==75) chac='k';	
			if( Ascii==76) chac='l';
			if( Ascii==77) chac='m';
			if( Ascii==78) chac='n';
			if( Ascii==79) chac='o';
			if( Ascii==80) chac='p';	
			if( Ascii==81) chac='q';
			if( Ascii==82) chac='r';
			if( Ascii==83) chac='s';
			if( Ascii==84) chac='t';
			if( Ascii==85) chac='u';	
			if( Ascii==86) chac='v';
			if( Ascii==87) chac='w';
			if( Ascii==88) chac='x';
			if( Ascii==89) chac='y';
			if( Ascii==90) chac='z';	
			if( Ascii==97) chac='a'; 
			if( Ascii==98)	 chac='b'; 
			if( Ascii==99)	 chac='c'; 
			if( Ascii==100)	 chac='d'; 
			if( Ascii==101)	 chac='e'; 	
			if( Ascii==102)	 chac='f'; 
			if( Ascii==103)	 chac='g'; 	
			if( Ascii==104)	 chac='h'; 
			if( Ascii==105)	 chac='i'; 	
			if( Ascii==106)	 chac='j'; 
			if( Ascii==107)	 chac='k'; 	
			if( Ascii==108)	 chac='l'; 
			if( Ascii==109)	 chac='m'; 	
			if( Ascii==110)	 chac='n'; 
			if( Ascii==111)	 chac='o'; 	
			if( Ascii==112)	 chac='p'; 
			if( Ascii==113)	 chac='q'; 	
			if( Ascii==114)	 chac='r'; 
			if( Ascii==115)	 chac='s'; 	
			if( Ascii==116)	 chac='t'; 	
			if( Ascii==117)	 chac='u'; 
			if( Ascii==118)	 chac='v'; 	
			if( Ascii==119)	 chac='w'; 
			if( Ascii==120)	 chac='x'; 	
			if( Ascii==121)	 chac='y'; 
			if( Ascii==122)	 chac='z'; 	
						
			return chac;
		}
       


           

/*  function Chr(AsciiNum)//to convert ascci to character
{
return String.fromCharCode(AsciiNum)
}
*/