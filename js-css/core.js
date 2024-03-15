 function isMobileDevice() {
	return window
		.matchMedia("only screen and (max-width: 700px)").matches;
};
var arrDaysOfWeek = [];
if (isMobileDevice()) {
arrDaysOfWeek[0]="Sun,";
arrDaysOfWeek[1]="Mon,";
arrDaysOfWeek[2]="Tues,";
arrDaysOfWeek[3]="Wed,";
arrDaysOfWeek[4]="Thur,";
arrDaysOfWeek[5]="Fri,";
arrDaysOfWeek[6]="Sat,";
} else {
arrDaysOfWeek[0]="Sunday,";
arrDaysOfWeek[1]="Monday,";
arrDaysOfWeek[2]="Tuesday,";
arrDaysOfWeek[3]="Wednesday,";
arrDaysOfWeek[4]="Thursday,";
arrDaysOfWeek[5]="Friday,";
arrDaysOfWeek[6]="Saturday,";
}
var numDate;
function getDayOfWeek(strDate) {
   // <script>document.write(getDayOfWeek('December 7, 1941'));</script>
   numDate = new Date(strDate);
   numDate = numDate.getDay();
   return arrDaysOfWeek[numDate];
}
function getTodaysDate() {
   // <script>document.write(getTodaysDate());</script>
  
if (isMobileDevice()) {
   var dayNames = ["Sun, ","Mon, ","Tues, ","Wed, ","Thurs, ","Fri, ","Sat, "];
   var monthNames = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
} else {
   var dayNames = ["Sunday, ","Monday, ","Tuesday, ","Wednesday, ","Thursday, ","Friday, ","Saturday, "];
   var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
}
   var now = new Date();
   var numYear = now.getFullYear();
   var strWeekday = dayNames[now.getDay()];
   var strMonth = monthNames[now.getMonth()];
   var numDate = now.getDate();
   var strReturn = strWeekday+strMonth+" "+numDate+', '+numYear;
   return strReturn;
}