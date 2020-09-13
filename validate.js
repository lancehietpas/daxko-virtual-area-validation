//Note: Currently working on adding daxSignature validation. This version does not include it.
<script>

"use strict";

window.onload = function() {
    try {
    //Sets the fitAreaID variable to the area id you enter
    const fitAreaID = "ENTER THE AREA ID HERE";
    //Gets the the time in UTC milliseconds and then sets it to the utcNow variable.
    const utcNow = Date.now();
    //Sets the statSuc variable to success.
    const statSuc = "success";

    //Gets the URL Parameters and assigns them to their variables
    let url_string = (window.location.href).toLowerCase();
    let url = new URL(url_string);
    let logStat = url.searchParams.get("status");
    let daxExp = url.searchParams.get("daxexpiration");
    let areaId = url.searchParams.get("area_id");
    let daxSig = url.searchParams.get("daxsignature");

    //Daisy chained ternary statements to check parameters.
    let result =
    //Checks to see if the status parameter is equal to success, if not they get sent to error page.
    (logStat != statSuc) ? window.location.replace("ENTER YOUR ERROR PAGE URL HERE ") :
    //Checks to see if the time stored in utcNow is greater than the time stored in daxExp, if so they get sent to error page.
    (utcNow > daxExp) ? window.location.replace("ENTER YOUR ERROR PAGE URL HERE) : 
    //Checks to see if the areaId is not equal to value stored in fitAreaID, if they are not equal then send to error page.
    (areaId != fitAreaID) ? window.location.replace("ENTER YOUR ERROR PAGE URL HERE") :
     i = 0;

} catch (err) {
    console.log("Error - " +err)
    }   
}

</script>