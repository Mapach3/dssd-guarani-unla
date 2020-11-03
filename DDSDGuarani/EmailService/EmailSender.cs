using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Net.Mail;



namespace DDSDGuarani.EmailService
{
    public static class EmailSender
    {

        public static void SendEmail(string emailTemplate)
        {
            try
            {
                MailMessage message = new MailMessage();
                SmtpClient smtp = new SmtpClient("smtp.gmail.com");
                message.From = new MailAddress("doguicontent@gmail.com");
                message.To.Add(new MailAddress("guidocontento@yopmail.com"));
                message.Subject = "Registración Exitosa";
                message.IsBodyHtml = true; //to make message body as html  
                message.Body = emailTemplate;
                smtp.Port = 587;
                smtp.EnableSsl = true;
                smtp.UseDefaultCredentials = true;
               // smtp.Credentials = new NetworkCredential("doguicontent@gmail.com", "");
                smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                smtp.Send(message);
            }
            catch (Exception e) {
                
            }
        }



    }
}
