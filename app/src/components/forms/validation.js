import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/index";



const  FormValidation = (profile, page) => {
    //const dispatch = useDispatch();
    const { updateErrorMessage } = bindActionCreators(actionCreators, useDispatch);
    const { updateflag } = bindActionCreators(actionCreators, useDispatch);    
    //const [page, setPage] = useState(0);
    //const profile = useSelector((state) => state.profile); 

    function validation() {
    
        var flag = true;   
          
        
        //console.log(profile.firstName);
        //console.log(errorMessage);
        if((page === 0) && ((profile.firstName == "") || (profile.website == "") || (profile.email=="") || (profile.schoolphone==""))) {   
          //console.log(errorMessage+ "inside");
            flag = false;
            var errorMessage = "Please fill up ";
            if(profile.firstName == ""){
              errorMessage = errorMessage+ "school name,";   
              } 
            if(profile.website == ""){
              errorMessage = errorMessage+ "website, ";   
              }   
            if(profile.email == ""){
              errorMessage = errorMessage+ "email, ";   
              }   
            if(profile.schoolphone == ""){
              errorMessage = errorMessage+ "school phone ";   
              }          
            //alert(errorMessage);
            //$('#div_element').load(errorMessage +  ' #div_element');
            updateErrorMessage(errorMessage);  
            //document.getElementById('div_element').innerHTML = errorMessage;
        } 
        if((page === 1) && ((profile.address1 == "") || (profile.city == "") || (profile.state=="") || (profile.postalCode=="") || (profile.country==""))) {   
          //console.log(errorMessage+ "inside");
            flag = false;
            var errorMessage = "Please fill up ";
            if(profile.address1 == ""){
              errorMessage = errorMessage+ "address, ";   
              } 
            if(profile.city == ""){
              errorMessage = errorMessage+ "city, ";   
              }   
            if(profile.state == ""){
              errorMessage = errorMessage+ "state, ";   
              }   
            if(profile.postalCode == ""){
              errorMessage = errorMessage+ "postal code, ";   
              }  
            if(profile.country == ""){
              errorMessage = errorMessage+ "country";   
              }  
            updateErrorMessage(errorMessage);                    
            //document.getElementById('div_element').innerHTML = errorMessage;
        } 
        if((page === 2) && ((profile.schoolContact == "") || (profile.schoolContactEmail == "") || (profile.schoolContactPhone==""))) {   
          //console.log(errorMessage+ "inside");
            flag = false;
            var errorMessage = "Please fill up ";
            if(profile.schoolContact == ""){
              errorMessage = errorMessage+ "school contact person,";   
              } 
            if(profile.schoolContactEmail == ""){
              errorMessage = errorMessage+ "school contact person email, ";   
              }   
            if(profile.schoolContactPhone == ""){
              errorMessage = errorMessage+ "school contact person phone ";   
              } 
              updateErrorMessage(errorMessage);              
            //document.getElementById('div_element').innerHTML = errorMessage;
        }
        if((page === 3) && ((profile.schoolAccreditation == ""))) {   
          //console.log(errorMessage+ "inside");
            flag = false;
            var errorMessage = "Please fill up ";
            if(profile.schoolAccreditation == ""){
              errorMessage = errorMessage+ "school accreditation";   
              }          
              updateErrorMessage(errorMessage);        
            //document.getElementById('div_element').innerHTML = errorMessage;
        }  
       
        updateflag(flag);
        
    //return flag;
    }    
};

export default FormValidation;
