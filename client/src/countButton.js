import { ViewModuleSharp } from "@material-ui/icons";

    export const CountFun = () => {
        var cnt=0;
        cnt=parseInt(cnt)+parseInt(1);
        var divData=document.getElementById("showCount");
        divData.innerHTML="Number of Downloads: ("+cnt +")";//this part has been edited
    }
