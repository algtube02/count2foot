function countdown(t,e){var i,a={stepTime:60,format:"dd:hh:mm:ss",eventTime:"Jan, 1, 2013, 00:00",digitImages:6,digitWidth:13,digitHeight:19,timerEnd:function(){},image:"http://i.imgur.com/oeB0uLB.png"},n=[];e.startTime=timeleft(e.eventTime);var s=function(t){for(var e=0,i=a.startTime,s=0;s<a.startTime.length;s++){if(parseInt(i.charAt(s))>=0){switch(elem=jQuery('<div id="cnt_'+s+'" class="cntDigit" />').css({height:a.digitHeight*a.digitImages*10,"float":"left",background:"url('"+a.image+"')",width:a.digitWidth}),n.push(elem),r(e,-(parseInt(i.charAt(s))*a.digitHeight*a.digitImages)),n[e].__max=9,a.format.charAt(s)){case"h":n[e].__max=e%2==0?2:9,e%2!=0&&(n[e].__condmax=3);break;case"d":n[e].__max=9;break;case"m":case"s":n[e].__max=e%2==0?5:9}++e}else elem=jQuery('<div class="cntSeparator"/>').css({"float":"left"}).text(i.charAt(s));t.append("<div>"),t.append(elem),t.append("</div>")}},r=function(t,e){return void 0!==e?n[t].css({marginTop:e+"px"}):parseInt(n[t].css("marginTop").replace("px",""))},d=function(t){return n[t]._digitInitial=-(n[t].__max*a.digitHeight*a.digitImages),function e(){if(mtop=r(t)+a.digitHeight,mtop==a.digitHeight){if(r(t,n[t]._digitInitial),!(t>0)){clearInterval(i);for(var s=0;s<n.length;s++)r(s,0);a.timerEnd();var m=n[t].parent().parent().parent().children(".match-info").children("a:first-child").attr("href");return void n[t].parent().parent().html('<a href="'+m+'" class="live-now"><img width="145" height="35" src="https://s18.postimg.org/w32h6i9d5/direct.png" class="attachment-medium" alt="Voir EN Direct" title="Voir EN Direct"></a>')}return d(t-1)(),void(t>0&&void 0!==n[t].__condmax&&n[t-1]._digitInitial==r(t-1)&&r(t,-(n[t].__condmax*a.digitHeight*a.digitImages)))}r(t,mtop),r(t)/a.digitHeight%a.digitImages!=0&&setTimeout(e,a.stepTime),0==mtop&&(n[t].__ismax=!0)}};jQuery.extend(a,e),t.css({height:a.digitHeight,overflow:"hidden"}),s(t),i=setInterval(d(n.length-1),1e3)}function timeleft(t){var e=new Date,i=new Date(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()),a=new Date(t),n=i.getTime(),s=a.getTime(),r=new Date(parseInt(s-n));return 0>r?"00:00:00:00":(msPerDay=864e5,days=Math.floor(r/msPerDay),days<10&&(days="0"+days),hours=r.getUTCHours(),hours<10&&(hours="0"+hours),minutes=r.getUTCMinutes(),minutes<10&&(minutes="0"+minutes),seconds=r.getUTCSeconds(),seconds<10&&(seconds="0"+seconds),days+":"+hours+":"+minutes+":"+seconds)}jQuery(function(){jQuery(".simple_countdown_timer").each(function(){countdown(jQuery("#"+jQuery(this).attr("id")+" .sct_count"),{eventTime:jQuery("#"+jQuery(this).attr("id")+" .sct_event_time").text(),image:jQuery("#"+jQuery(this).attr("id")+" .sct_image").text()})})});
