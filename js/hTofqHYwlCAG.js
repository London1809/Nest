(()=>{function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var n=function(){function n(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.xhr=null,this.handleEvents()}var t,o,a;return t=n,(o=[{key:"handleEvents",value:function(){var e=this,n=$("body");n.on("click",".product-attributes .visual-swatch label, .product-attributes .text-swatch label",(function(e){e.preventDefault();var n=$(e.currentTarget).find("input[type=radio]");if(n.is(":checked"))return!1;n.prop("checked",!0),$(e.currentTarget).closest(".visual-swatch").find("input[type=radio]:checked").length<1&&n.prop("checked",!0),n.trigger("change")})),n.off("change").on("change",".product-attributes input, .product-attributes select",(function(n){$(n.currentTarget).closest(".product-attributes").find(".attribute-swatches-wrapper").each((function(e,n){var t=$(n);"dropdown"===t.data("type")?t.find("select").val():t.find("input[type=radio]:checked").val()})),e.getProductVariation($(n.currentTarget).closest(".product-attributes"))}))}},{key:"getProductVariation",value:function(e){var n=this,t=[];n.xhr&&(n.xhr.abort(),n.xhr=null),e.find(".attribute-swatches-wrapper").each((function(e,n){var o,a=$(n);(o="dropdown"===a.data("type")?a.find("select").val():a.find("input[type=radio]:checked").val())&&t.push(o)})),t.length?n.xhr=$.ajax({url:e.data("target"),type:"GET",data:{attributes:t},beforeSend:function(){window.onBeforeChangeSwatches&&"function"==typeof window.onBeforeChangeSwatches&&window.onBeforeChangeSwatches(t,e)},success:function(n){window.onChangeSwatchesSuccess&&"function"==typeof window.onChangeSwatchesSuccess&&window.onChangeSwatchesSuccess(n,e)},complete:function(n){window.onChangeSwatchesComplete&&"function"==typeof window.onChangeSwatchesComplete&&window.onChangeSwatchesComplete(n,e)},error:function(n){window.onChangeSwatchesError&&"function"==typeof window.onChangeSwatchesError&&window.onChangeSwatchesError(n,e)}}):(window.onBeforeChangeSwatches&&"function"==typeof window.onBeforeChangeSwatches&&window.onBeforeChangeSwatches({attributes:t},e),window.onChangeSwatchesSuccess&&"function"==typeof window.onChangeSwatchesSuccess&&window.onChangeSwatchesSuccess(null,e),window.onChangeSwatchesComplete&&"function"==typeof window.onChangeSwatchesComplete&&window.onChangeSwatchesComplete(null,e),window.onChangeSwatchesError&&"function"==typeof window.onChangeSwatchesError&&window.onChangeSwatchesError(null,e))}}])&&e(t.prototype,o),a&&e(t,a),Object.defineProperty(t,"prototype",{writable:!1}),n}();$(document).ready((function(){new n}))})();