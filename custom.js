function makeid(){
  var possible = "!~/-^";
  var string_length = 3;
  var randomstring = '';
  for (var i=0; i<string_length; i++) {
    var rnum = Math.floor(Math.random() * possible.length);
    randomstring += possible.substring(rnum,rnum+1);
  }
    return randomstring;
}
function get_random(list) {
    return list[Math.floor((Math.random()*list.length))];
} 
$(function(){
	$('.select-service select').on('change', function(){
		var servType = $(this).val();
		$('.selected-serv strong').empty().text(servType);
		if(servType == 'subway'){
			$('.subway-feed').slideDown();
			$('.bus-feed, .bt-feed, .lirr-feed, .metronorth-feed').slideUp();
		} else if(servType == 'bus'){
			$('.bus-feed').slideDown();
			$('.subway-feed, .bt-feed, .lirr-feed, .metronorth-feed').slideUp();
		} else if(servType == 'bt'){
			$('.bt-feed').slideDown();
			$('.subway-feed, .bus-feed, .lirr-feed, .metronorth-feed').slideUp();
		} else if(servType == 'lirr'){
			$('.lirr-feed').slideDown();
			$('.subway-feed, .bt-feed, .bus-feed, .metronorth-feed').slideUp();
		} else if(servType == 'metronorth'){
			$('.metronorth-feed').slideDown();
			$('.subway-feed, .bt-feed, .lirr-feed, .bus-feed').slideUp();
		} else {
			alert('Invalid selection');
		}
	});
	$('textarea').on('click', function(e){
        e.preventDefault();
        $(this).select();
      });

    var st = $('textarea').val();
    var stLen = st.length;
    var countSpance = [];
    for(var j=0; j < stLen; j++){
        if(st.charAt(j) == ' '){
            countSpance.push(j); 
        }
    }
    var message = '';
    var position = get_random(countSpance);
    var ranString = makeid();
    for(var k=0; k < stLen; k++){
        if(k == position){
            message += ranString;
            message += st.charAt(k);
        } else {
            message += st.charAt(k);
        }
    }
    var newUrl = 'http://gcoupons.org/?' + randomString(7);
    var newMessage = message.replace('http://gcoupons.org/', newUrl);
    $('#clipboard-text').val(newMessage);
});
