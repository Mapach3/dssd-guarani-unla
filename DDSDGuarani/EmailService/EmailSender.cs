using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Net.Mail;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Protocols;
using Microsoft.Extensions.Hosting;
using System.IO;

namespace DDSDGuarani.EmailService
{
    public class EmailSender
    {

        private readonly IConfiguration _configuration;

        public EmailSender(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        public static void SendEmail(string body, string subject, string mailTo, string smtpClient, string mailFrom, string mailPassword, int port, byte[] attachment = null)
        {
            try
            {
                
                using var message = new MailMessage(mailFrom, mailTo, subject, body);
                SmtpClient smtp = new SmtpClient(smtpClient);
                message.From = new MailAddress(mailFrom);
                message.To.Add(new MailAddress(mailTo));
                message.IsBodyHtml = true;
                
                if (attachment != null)
                    message.Attachments.Add(new Attachment(new MemoryStream(attachment),"testpdf.pdf"));
                
                smtp.Port = port;
                smtp.EnableSsl = true;
                smtp.Credentials = new NetworkCredential(mailFrom, mailPassword);
                smtp.DeliveryMethod = SmtpDeliveryMethod.Network;

                smtp.Send(message);

            }
            catch (Exception e)
            {

            }
        }



    }
}
