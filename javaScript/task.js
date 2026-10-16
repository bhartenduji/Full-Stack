var objlist = [];

function addObj(obj) {
    var val1= document.getElementById("val1").value;
    var val2= document.getElementById("val2").value;

    varobj={
        value1: val1,
        value2: val2
    };
    objlist.push(varobj);

    console.log(objlist);
}
