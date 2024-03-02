var arrDaysOfWeek = new Array();
arrDaysOfWeek[0]="Sunday,";
arrDaysOfWeek[1]="Monday,";
arrDaysOfWeek[2]="Tuesday,";
arrDaysOfWeek[3]="Wednesday,";
arrDaysOfWeek[4]="Thursday,";
arrDaysOfWeek[5]="Friday,";
arrDaysOfWeek[6]="Saturday,";
var numDate;
function getDayOfWeek(strDate) {
   // <script>document.write(getDayOfWeek('December 7, 1941'));</script>
   numDate = new Date(strDate);
   numDate = numDate.getDay();
   return arrDaysOfWeek[numDate];
}
function getTodaysDate() {
   // <script>document.write(getTodaysDate());</script>
   var dayNames = new Array("Sunday, ","Monday, ","Tuesday, ","Wednesday, ","Thursday, ","Friday, ","Saturday, ");
   var monthNames = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
   var now = new Date();
   var numYear = now.getFullYear();
   var strWeekday = dayNames[now.getDay()];
   var strMonth = monthNames[now.getMonth()];
   var numDate = now.getDate();
   var strReturn = strWeekday+strMonth+" "+numDate+', '+numYear;
   return strReturn;
}
