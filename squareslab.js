

const rainbow= function() {
            var randomRed = Math.floor(Math.random() * 350);
            var randomGreen = Math.floor(Math.random() * 350);
            var randomBlue = Math.floor(Math.random() * 350);
            var rainbow = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
            return rainbow
        }
var divId = 1;
var pleaseWork = function(){
    var belleDivDevoe = document.createElement('div');
    belleDivDevoe.style.backgroundColor = 'black';
    belleDivDevoe.style.height = '100px';
    belleDivDevoe.style.width = '80px';
    belleDivDevoe.style.clear = "both";
    belleDivDevoe.id = divId;
    divId++;
    belleDivDevoe.addEventListener('mouseout',function(){
        this.innerHTML = "";
    });
    belleDivDevoe.addEventListener('mouseover', function () {
        this.innerHTML = this.id;
    });
    belleDivDevoe.addEventListener('dblclick', function(){
      
        if ((this.id % 2) === 0 && this.nextSibling != null) {
            this.nextSibling.remove();
        }
        else if ((this.id % 2) == 1 && this.previousSibling != document.getElementById('divBuildBtn')) {
            this.previousSibling.remove();
        }
        else {
            alert('Element does not exist');
        }
    });
    belleDivDevoe.addEventListener('click', function(){
      this.style.backgroundColor = rainbow();
    });
    document.body.appendChild(belleDivDevoe);
};