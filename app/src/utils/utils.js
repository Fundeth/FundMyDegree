const ethers = require("ethers");

export function toEther(val) {
  return ethers.utils.parseEther(val);
}

export function fromWei(val) {
  return ethers.utils.formatEther(val);
}

export function formatAddress(address) {
  return `${address?.substr(0, 4 + 2)}${8 < 42 ? "..." : ""}${address?.substr(
    42 - 4,
    42
  )}`;
}

export function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
console.log(inputText);
console.log(mailformat);
if(inputText!== undefined ) { 
  if (inputText.match(mailformat))
  {
  return true;
  }
  else
  {
  return false;
  }
}
}

export function ValidateURL(inputText)
{
  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);
console.log(inputText);

if(inputText!== undefined ) {
if (inputText.match(regex))
{
return true;
}
else
{
return false;
}
}
}

export function ValidateForm(props)
{
  var flag = props.flag;  
  var errorMessage = props.errorMessage; 
  var errorMessage1 = props.errorMessage1; 
  //var propForm;  
  console.log("inside validate form");
  console.log("firstName"+props.firstName);
  console.log("website"+props.website);
  console.log("email"+props.email);
  console.log("school phone"+props.schoolphone);
  console.log(props.page);
  //console.log(errorMessage);
  if((props.page === 0) && ((props.firstName === undefined ) || (props.website === undefined ) || (props.email===undefined ) || (props.schoolphone===undefined ) || (ValidateEmail(props.email)===false)||(ValidateURL(props.website)===false))) {   
    console.log("inside logic");
      flag = false;
      errorMessage = "Please fill up ";
      //var errorMessage1 ="";
      if(props.firstName === undefined ){
        errorMessage = errorMessage+ "school name,";   
        console.log(errorMessage+ "inside school name");
        } 
      if(props.website === undefined ){
        errorMessage = errorMessage+ "website, ";  
        console.log(errorMessage+ "inside school website"); 
        }   
      if(props.email === undefined ){
        errorMessage = errorMessage+ "email, ";   
        console.log(errorMessage+ "inside school email");
        }   
      if(props.schoolphone === undefined ){
        errorMessage = errorMessage+ "school phone ";   
        console.log(errorMessage+ "inside school phone");
        } 
      if(ValidateURL(props.website)===false){
          errorMessage1 = errorMessage1+ "incorrect website, ";  
        }
      if(ValidateEmail(props.email) === false){            
        errorMessage1 = errorMessage1+ "incorrect email address ";    
        }                  
      //alert(errorMessage);
      //$('#div_element').load(errorMessage +  ' #div_element');
      
  } 
  if((props.page === 1) && ((props.address1 === undefined) || (props.city === undefined) || (props.state===undefined) || (props.postalCode=== undefined) || (props.country=== undefined))) {   
    //console.log(errorMessage+ "inside");
      flag = false;
      var errorMessage = "Please fill up ";
      if(props.address1 ===undefined){
        errorMessage = errorMessage+ "address, ";   
        } 
      if(props.city === undefined){
        errorMessage = errorMessage+ "city, ";   
        }   
      if(props.state === undefined){
        errorMessage = errorMessage+ "state, ";   
        }   
      if(props.postalCode === undefined){
        errorMessage = errorMessage+ "postal code, ";   
        }  
      if(props.country === undefined){
        errorMessage = errorMessage+ "country";   
        }                          
  } 
  if((props.page === 2) && ((props.schoolContact === undefined) || (props.schoolContactEmail === undefined) || (props.schoolContactPhone=== undefined)||(ValidateEmail(props.schoolContactEmail) === false))) {   
    //console.log(errorMessage+ "inside");
      flag = false;
      errorMessage = "Please fill up ";
      
      if(props.schoolContact === undefined){
        errorMessage = errorMessage+ "school contact person,";   
        } 
      if(props.schoolContactEmail === undefined){
        errorMessage = errorMessage+ "school contact person email, ";   
        }   
      if(props.schoolContactPhone === undefined){
        errorMessage = errorMessage+ "school contact person phone ";   
        }   
      if(ValidateEmail(props.schoolContactEmail) === false){            
          errorMessage1 = errorMessage1+ "incorrect email address ";   
      }                  
  }
  if((props.page === 3) && ((props.accreditation === undefined))) {   
    //console.log(errorMessage+ "inside");
      flag = false;
      errorMessage = "Please fill up ";
      if(props.accreditation === undefined){
        errorMessage = errorMessage+ "school accreditation";   
        }                
      
  }  

        //propForm = {errorMessage : errorMessage, errorMessage1: errorMessage1, flag: flag};  
        props.errorMessage = errorMessage; 
        props.errorMessage1 = errorMessage1;          
        props.flag = flag;    

  return props;
}
