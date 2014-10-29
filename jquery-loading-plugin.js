(function($){
	/**
	 * 显示搜索遮罩层
	 * param：可以传入一个div的id来控制在哪个div上显示遮罩层,
	 * 也可以不传,默认为全屏遮罩
	 */
    $.fn.showLoadingDiv = function(id){
        if(document.getElementById("maskLayerDiv")){
            $("#maskLayerDiv").remove();
        }
        var loadingDiv = "<div id='maskLayerDiv' style='text-align:center;overflow-y:hidden;position:absolute;width:100%;height:100%;left:0px;top:0px;z-index:2;display:none;background:;'>"+
            "<div style='text-align:center;overflow-y:hidden;opacity:0.5;filter:alpha(opacity=50);position:absolute; width:100%; height:100%; left:0px; top:0px; background: #E9EDF9;'></div>"+
            "</div>";
        if(!id){
            if(!document.getElementById("maskLayerDiv")){
                $("body").append(loadingDiv);
            }
        }else{
            var inWrapDiv = document.getElementById(id);
            if(inWrapDiv){
                $(loadingDiv).appendTo(inWrapDiv);
                $(inWrapDiv).css("position","relative");
                $("#maskLayerDiv").css("height",$("#maskLayerDiv").parent().height());
                $("#maskLayerDiv").css("width",$("#maskLayerDiv").parent().width());
            }else{
                $("body").append(loadingDiv);
            }
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
 * jquery 遮罩层插件，显示调用$.fn.showLoadingDiv();
* 		      隐藏调用$.fn.hideLoadingDiv();
* 		      也可以传入div的id，在该id上显示遮罩层。调用方式：$.fn.showLoadingDiv(id);
**/
