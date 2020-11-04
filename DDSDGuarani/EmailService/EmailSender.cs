using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Net.Mail;
using Microsoft.Extensions.Configuration;

namespace DDSDGuarani.EmailService
{
    public static class EmailSender
    {

        public static void SendEmail(string emailTemplate, string mailTo)
        {
            try
            {

                MailMessage message = new MailMessage();
                SmtpClient smtp = new SmtpClient("smtp.gmail.com");             //TODO: Esconder en appsettings.json
                message.From = new MailAddress("guaraniunlamailing@gmail.com"); //TODO Reemplazar por appsetings.json EmailUserName
                message.To.Add(new MailAddress(mailTo));
                message.Subject = "Registración Exitosa";
                message.IsBodyHtml = true; //to make message body as html  
                message.Body = emailTemplate;
                smtp.Port = 587;
                smtp.EnableSsl = true;
                smtp.UseDefaultCredentials = false;
                smtp.Credentials = new NetworkCredential("guaraniunlamailing@gmail.com", "guaraniunla1234"); //TODO: No usar estos valores hardcodeados pero si los que estan appsettings.json
                smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                smtp.Send(message);
            }
            catch (Exception e)
            {

            }
        }



    }
}
