import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class RestProvider {

  //apiUrl =  'https://luasforecasts.rpa.ie/xml/get.ashx?action=forecast&stop=sti&encrypt=false';

  constructor(public http: HttpClient) {
    //console.log('Hello RestProvider Provider');
  }
//////////////////////////////////////////////////////////////////////////
  getBusTime=function(){
    var httpRequest;
    var httpRequest2;
    var respText,respText2, parse, xmlObj;
  
    makeRequest();
  
    function makeRequest() {
      httpRequest = new XMLHttpRequest();
      httpRequest2 = new XMLHttpRequest();
  
      if(!httpRequest){
        alert('Unable to create a XMLHTTP instance');
        return false;
      }
  
      httpRequest.onreadystatechange = alertContents;

      httpRequest2.onreadystatechange = alertContents;

      httpRequest.open('GET', 'https://data.smartdublin.ie/cgi-bin/rtpi/realtimebusinformation?stopid=5022&format=xml');
      httpRequest.send();

      httpRequest2.open('GET', 'https://data.smartdublin.ie/cgi-bin/rtpi/realtimebusinformation?stopid=4438&format=xml');
      httpRequest2.send();
    }

    function alertContents() {
      if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest2.readyState === XMLHttpRequest.DONE){
        if(httpRequest.status === 200 && httpRequest2.status === 200){

          respText = httpRequest.responseText;
          respText2 = httpRequest2.responseText;
          //console.log("resptext2: "+respText2);

          parse = new DOMParser();
          var respXML = parse.parseFromString(respText, "text/xml");
          var respXML2 = parse.parseFromString(respText2, "text/xml");
          

          //var directionIn = respXML.getElementsByTagName("direction")[0].childNodes[0].data;
          var destination = respXML.getElementsByTagName("destinationlocalized")[0].innerHTML;
          var dueTime = respXML.getElementsByTagName("duetime")[0].innerHTML;
          var destination2 = respXML2.getElementsByTagName("destinationlocalized")[0].innerHTML;
          var dueTime2 = respXML2.getElementsByTagName("duetime")[0].innerHTML;
          //console.log(dueTime);

          document.getElementsByClassName("nextBusTime")[0].innerHTML = dueTime;
          document.getElementsByClassName("nextBusDestination")[0].innerHTML = destination;
          document.getElementsByClassName("nextBusTime")[1].innerHTML = dueTime2;
          document.getElementsByClassName("nextBusDestination")[1].innerHTML = destination2;

          
  
        } else {
          alert('There was a problem with the request\n');
          alert(httpRequest.responseText);
        }
      }
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////
  /////////////////Luas Function////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////

   getLuasTime = function(){
    var httpRequest;
    var respText, parse, xmlObj;
  
    makeRequest();
  
    function makeRequest() {
      httpRequest = new XMLHttpRequest();
  
      if(!httpRequest){
        alert('Unable to create a XMLHTTP instance');
        return false;
      }
  
      httpRequest.onreadystatechange = alertContents;
      httpRequest.open('GET', 'https://luasforecasts.rpa.ie/xml/get.ashx?action=forecast&stop=cit&encrypt=false');
      httpRequest.send();
    }
  
    function alertContents() {
      if (httpRequest.readyState === XMLHttpRequest.DONE){
        if(httpRequest.status === 200){
          // alert(httpRequest.responseText);
          // document.getElementById("").innerHTML = reponseXML.getElementsByTagName("direction")[0].childNodes[0].nodeValue;
  
          // Get XML response
          respText = httpRequest.responseText;
         // console.log(respText);
          //alert(typeof(respText));
          //alert(respText);
  
          // Setup XML Object from responseText (if using responseText)
          parse = new DOMParser();
          var respXML = parse.parseFromString(respText, "text/xml");
          //alert("type of respXML is " + typeof(respXML));
          //alert(respXML);
  
          /////////////////////////////////////////////////////
          // Populate Dom elements with retrieved info
          /////////////////////////////////////////////////////
          var directionIn = respXML.getElementsByTagName("direction")[0].childNodes;
          //var tramTwo = directionIn[0].childNodes[0].getAttribute("dueMins");
  
          var destination = respXML.getElementsByTagName("tram")[0].getAttribute("destination");
          var destination2= respXML.getElementsByTagName("tram")[1].getAttribute("destination");
          var destination3= respXML.getElementsByTagName("tram")[2].getAttribute("destination");
          //var destination4= respXML.getElementsByTagName("tram")[3].getAttribute("destination");
          document.getElementsByClassName("destination")[0].innerHTML = destination;
          document.getElementsByClassName("destination")[1].innerHTML = destination2;
          document.getElementsByClassName("destination")[2].innerHTML = destination3;
          //document.getElementsByClassName("destination")[3].innerHTML = destination4;
  
          var tramOne = respXML.getElementsByTagName("tram")[0].getAttribute("dueMins");
          document.getElementById("currentLuasA").innerHTML = tramOne;

          var tramTwo = respXML.getElementsByTagName("tram")[1].getAttribute("dueMins");
          document.getElementById("nextLuasA").innerHTML = tramTwo;

          
          var tramThree = respXML.getElementsByTagName("tram")[2].getAttribute("dueMins");
          document.getElementById("currentLuasB").innerHTML = tramThree;

          //var tramFour = respXML.getElementsByTagName("tram")[3].getAttribute("dueMins");
          //document.getElementById("nextLuasB").innerHTML = tramFour;

//          console.log(tramThree);
//          console.log(tramFour);
  
          //var root = respXML.documentElement;
          //alert("root is typeof " + typeof(root));
          //alert(root);
          //alert(root.getElementsByTagName("stopInfo")[1].childNodes[0].nodeValue);
  
          /////////////////////////////////////////////////////
          // Xpath setup
          /////////////////////////////////////////////////////
          var txt = "";
          var path = '//direction[@name="Inbound"]/tram';
          var pathResult = respXML.evaluate(path, respXML, null, XPathResult.ANY_TYPE, null);
          var result = pathResult.iterateNext();
          while(result){
            txt += result.textContent;
            result = pathResult.iterateNext();
          }
          //alert(pathResult);
  
        } else {
          alert('There was a problem with the request\n');
          alert(httpRequest.responseText);
        }
      }
    }
    
  
  };



}
