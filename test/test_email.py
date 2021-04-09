#!/usr/bin/python3
# -*- coding: utf-8 -*-
import smtplib
import email
from email import encoders
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase

# https://support.google.com/mail/answer/7126229
# https://myaccount.google.com/u/2/
sender = ("<ADDRESS>", "<PASSWORD>")


def main():
    receivers = ["piono623@naver.com"]
    smtp = smtplib.SMTP('smtp.gmail.com', 587)
    smtp.ehlo()
    smtp.starttls()
    smtp.login(*sender)

    message = MIMEMultipart()
    message["Subject"] = "Python email test"
    part = MIMEText("Python smtplib/email")
    message.attach(part)
    part_html = MIMEText('<br><a href="https://github.com">link</a>', "html")
    message.attach(part_html)

    for addr in receivers:
        message["To"] = addr
        smtp.sendmail("<ADDRESS>", addr, message.as_string())
        print(addr)

    smtp.quit()


if __name__ == "__main__":
    main()
