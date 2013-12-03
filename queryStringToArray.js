/*
* Javascript convertation of window query string to Array
* https://github.com/redlive/queryStringToArray
*
* Created; 02/12/2013 by Vilder Eugene
*/

(function(global){
	"use strict";  

	global.location.queryStringToArray = function(){
		var queryString = global.location.href.replace('?','&').replace('&&','&');
		var parseQueryString = function(q) {
			var queryStringArr = q.split('&').slice(1);
			return queryStringArr.map(function(val,ind){
				var q = val.split('=');        
				return {
					key : q[0],
					value : q[1]
				};        
			});
		}
		return queryString.length == 0 ? [] : parseQueryString(queryString);
	}

})(window);
