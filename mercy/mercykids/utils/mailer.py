#!/usr/bin/python3
# -*- coding: utf-8 -*-
import smtplib
# import email
# from email import encoders
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
# from email.mime.base import MIMEBase

# https://support.google.com/mail/answer/7126229
# https://myaccount.google.com/u/2/
sender = ("<SENDER>", "<PASSWORD>")


class PyMailer:

    @classmethod
    def send_mail(cls, receivers, subject='', content=''):
        """
        Args:
            receivers: [str] | (str,)
            content: str (html format)
        """
        smtp = smtplib.SMTP('smtp.gmail.com', 587)
        smtp.ehlo()
        smtp.starttls()
        smtp.login(*sender)

        message = MIMEMultipart()
        message["Subject"] = subject
        part_html = MIMEText(content, "html")
        message.attach(part_html)

        for recv in receivers:
            message["To"] = recv
            smtp.sendmail('no-reply@mercy.org', recv, message.as_string())

        smtp.quit()


if __name__ == "__main__":
    pass
