var output = [];
function buildImageSet(prefix, n, iSet) {
  output = [];
  for(var i = 1; i <= n; i++) {
    if(i == 1) {
      output[i-1] = '<a href="'+prefix+'/img'+i+'.jpg" rel="lightbox['+iSet.toLowerCase()+']">'+iSet+'</a>';
    } else {
      output[i-1] = '<a href="'+ prefix+'/img'+i+'.jpg" rel="lightbox['+iSet.toLowerCase()+']"></a>';
    }
  }
}

function placeImageSet(iSet) {
  document.getElementById(iSet).innerHTML = "";
  for(var i = 0; i < output.length; i++) {
    document.getElementById(iSet).innerHTML += output[i];
  }
}