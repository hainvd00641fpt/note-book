// function openCity(evt, cityName) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += " active";
// }

// // Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();

function onClose(){
  $( ".suggest-div").remove();
}

function changeImg(url, e) {
	document.getElementById("img_change").src = url;
	let notes = document.getElementById("thumb_img");
	let img_child = nodes.children;
	for (i = 0; i < img_child.length; i++) {
    	img_child[i].classList.remove('active')
	  }
	  e.classList.add('active');
}

$(document).on('click', '.map-point-sm', function() {
	  var show = $(this).data('show');
	  $(show).removeClass("hide").siblings().addClass("hide");
});

$(document).on('click','.icon-search',function() {
            if ($('#navbar-search').is(":visible")) {
                $('#navbar-search').hide();
                $('#navbar-menu').show();
                // $(this).children().attr("src", "./assets/img/icon/search.png");
            } else {
                // $(this).children().attr("src", "./assets/img/icon/close.png");
                $('#navbar-search').show();
                $('#navbar-menu').hide();
            }
 });
