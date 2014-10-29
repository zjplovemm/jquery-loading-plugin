(function($){
	/**
	 * 显示搜索遮罩层 
	 */
	$.fn.showLoadingDiv = function(){
		if(!document.getElementById("maskLayerDiv")){
			var loadingDiv = "<div id='maskLayerDiv' style='text-align:center;overflow-y:hidden;position:absolute;width:100%;height:100%;left:0px;top:0px;z-index:2;display:none;background:;'>"+
			"<div style='text-align:center;overflow-y:hidden;opacity:0.5;filter:alpha(opacity=50);position:absolute; width:100%; height:100%; left:0px; top:0px; background: #E9EDF9;'></div>"+
			"</div>";
			$("body").append(loadingDiv);
		}	
		var loadDiv = document.getElementById("maskLayerDiv");
		loadDiv.style.display = "block";  
	};
	/**
	 * 隐藏搜索遮罩层
	 */
	$.fn.hideLoadingDiv = function(divId){
		var loadDiv = document.getElementById("maskLayerDiv");
		loadDiv.style.display = "none";
	};
})(jQuery);
/**
 *  jquery 遮罩层插件:
 *  使用前提，需引用jquery js,再引入jquery-loading-plugin.js
 *                 显示调用$.fn.showLoadingDiv();
 * 								 隐藏调用$.fn.hideLoadingDiv();
**/
