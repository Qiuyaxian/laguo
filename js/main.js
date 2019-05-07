function View(){
 	    		return {
 	    			w:document.documentElement.clientWidth,
 	    			h:document.documentElement.clientHeight
 	    		}
 	    	}

 	       document.getElementById('login').style.height=View().h+"px";