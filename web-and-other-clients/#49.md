### Question

Do you have a password reminder feature? Could it be used to enumerate user accounts?

### Answer

We can't assume the user to remember the password forever, but sometimes we do need to help people to recall the password to avoid send reset password email.  A password hint seems a not bad choice, user set up some texts and could remind the password if the text describes something, like when you log in to Windows.  But there will be a security risk, we must consider the time to show the hint to end user, if we only put a button in the login form, then let user fills the email address and click that button, then the hint will be displayed and will help hacker to guess the password.  It could be worse if the hacker prepares a list of email, and lots of hints will be collected.

Most time we don't recommend to have a password reminder, if your reset password progress is easy and safe, there is no reason to keep it (consider many users can't tell the difference between password hint and password).  Anyway, if you have a password reminder function, to prevent enumeration attack is important, a captcha or the other behavior-based authentication technology could help you to protect reboot and script, but that will only reduce the risk.

### Reference
- [Username Enumeration Attack](https://www.hacking-lab.com/cases/2100-web-security-username-enumeration/index.html)
- [Behavior Based Auth](https://whatis.techtarget.com/definition/behavior-based-security)
- [An example to guess password from hint](https://www.wikihow.com/Guess-a-Password)
