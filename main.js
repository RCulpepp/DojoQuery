document.addEventListener('DOMContentLoaded', function(){
	var $Dojo;
	(function(global, globalCallback){
		$Dojo = function(id){
			return globalCallback(id, window);
		}

	})(window, function Dojo(id, wind){
		console.log(wind);
		var docu = wind.document;
		console.log(docu);
		var ele = docu.getElementById(id);
		console.log(ele);
		wind.click = function(callback) {
			ele.addEventListener('click', callback)
		}

		wind.hover = function(hoverIn, hoverOut){
			ele.addEventListener('mouseenter', hoverIn)
			ele.addEventListener('mouseleave', hoverOut)
		}
		return wind
	});


	$Dojo('button').click(function(){
		this.style.backgroundColor = 'red'
		})
	$Dojo('header').hover(function(){
		this.style.color = 'purple'
	})
});
