
            
            $(".loginHover").hover(function() {
               $(this).addClass("highlightedButton");
            }, function() {
                $(this).removeClass("highlightedButton");
            
            });
            
            $(".toggleButton").hover(function() {
               $(this).addClass("highlightedButton");
            }, function() {
                $(this).removeClass("highlightedButton");
               
           
            });
            
            $(".toggleButton").click(function() {
                $(this).toggleClass("active");
                
                $(this).removeClass("highlightedButton");
                 
                var panelId="#" + $(this).attr("id") + "Panel";
                
                
                $(panelId).toggleClass("hidden");
                
                var numberOfActivePannels = 3-$(".hidden").length;
                $(".panel").width(($(window).width()/numberOfActivePannels)-3);
            })
            
           $(".panel").height($(window).height() - $("#header").height() - 10);
            
         $(".panel").width(($(window).width()/2)-3);
            
         $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>"); 
            
        $("textarea").on('change keyup paste',function() {
             $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
        });
            
         $("#login").click(function() {
                 alert("hiii,You are Redirected to login page");
                  
                 window.location.replace("loginpage.html");
         });
            
           
        