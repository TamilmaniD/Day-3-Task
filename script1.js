var request=new XMLHttpRequest();

request.open('GET','https://restcountries.com/v3.1/all',true)

request.send();

request.onload=function() {

    var data=JSON.parse(this.response)
    console.log(data)
    console.log(data[0].name)
    console.log(data[0].name.common)
    console.log(data[0].region)
    console.log(data[0].subregion)
    console.log(data[0].population)
    
    for(i=0;i<data.length;i++) {
      console.log(data[i].name.common)
      console.log(data[i].region)
      console.log(data[i].subregion)
      console.log(data[i].population)
      
}
}