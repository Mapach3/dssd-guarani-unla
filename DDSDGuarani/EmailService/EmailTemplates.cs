using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DDSDGuarani.EmailService
{
    public static class EmailTemplates
    {


        public static string GetRegistrationEmailBody(string name, string surname, string email, string password)
        {
            try
            {
                string messageBody = "<font>Hola "+name+" "+surname+". Te registraste exitosamente al sistema. </font><br><br>";
                messageBody += "<font>Estas credenciales son temporales y deberás cambiarlas en tu primer acceso al sistema: </font><br>";

                string htmlTableStart = "<table style=\"border-collapse:collapse; text-align:center;\" >";
                string htmlTableEnd = "</table>";
                string htmlHeaderRowStart = "<tr style=\"background-color:#6FA1D2; color:#ffffff;\">";
                string htmlHeaderRowEnd = "</tr>";
                string htmlTrStart = "<tr style=\"color:#555555;\">";
                string htmlTrEnd = "</tr>";
                string htmlTdStart = "<td style=\" border-color:#5c87b2; border-style:solid; border-width:thin; padding: 5px;\">";
                string htmlTdEnd = "</td>";
                
                messageBody += htmlTableStart;
                messageBody += htmlHeaderRowStart;
                messageBody += htmlTdStart + "Email" + htmlTdEnd;
                messageBody += htmlTdStart + "Contraseña" + htmlTdEnd;
                messageBody += htmlHeaderRowEnd;
                
                messageBody +=  htmlTrStart;
                messageBody +=  htmlTdStart + email + htmlTdEnd; 
                messageBody +=  htmlTdStart + password + htmlTdEnd; 
                messageBody +=  htmlTrEnd;
            
                messageBody +=  htmlTableEnd;
                
                return messageBody; 
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }


    }
}
