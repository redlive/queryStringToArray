/*
* Javascript convertation of window query string to JSON
* https://github.com/redlive/queryStringToJSON
*
* Created; 02/12/2013 by Vilder Eugene
*/

(function(global){
	"use strict";  

	global.location.queryStringToJSON = function(){
		var queryString = global.location.pathname.replace('?','&').replace('&&','&');
		var parseQueryString = function(q) {
			var queryStringArr = q.split('&').slice(1);
			return queryStringArr.map(function(val,ind){
				var q = val.split('='),        
					res = {};
				res.key = q[0];
				res.value = q[1];
				return res;        
			});
		}
	return queryString.length == 0 ? [] : parseQueryString(queryString);
}

})(window);
