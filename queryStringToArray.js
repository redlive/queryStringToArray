/*
* Javascript convertation of window query string to Array , Object
* https://github.com/redlive/queryStringToArray
*
* Created; 02/12/2013 by Vilder Eugene
*/

(function(global){
	"use strict";  
	
	function QueryString(){
		
		var queryStr = global.location.href.replace('?','&').replace('&&','&') || '';
		var queryStringArr = queryStr.split('&').slice(1);
			
		var parseQueryStringToArray = function() {
			return queryStringArr.map(function(val,ind){
				var q = val.split('=');        
				return {
					key : q[0],
					value : q[1]
				};        
			});
		}
		
		var parseQueryStringToObject = function() {
			var i , item , key, value , res = {};
			for (i in queryStringArr) {
				item = queryStringArr[i].split('=');
				key = item[0];
				value = item[1];
				res[key] = value;
			}
			return res;
		}
		
		var toArray = function(){
			return queryStr.length == 0 ? [] : parseQueryStringToArray();
		};
		
		var toObject = function(){
			return queryStr.length == 0 ? {} : parseQueryStringToObject();
		};
		
		return {
			toArray : toArray,
			toObject : toObject
		}
	}
	
	global.queryString = QueryString();

})(window);
