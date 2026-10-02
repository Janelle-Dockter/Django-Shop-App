from django.views.generic import TemplateView


class LoginView(TemplateView):
    template_name = "accounts/login.html"


class LogoutView(TemplateView):
    template_name = "accounts/logout.html"

class SignupView(TemplateView):
    template_name = "accounts/signup.html"

class ChangePasswordView(TemplateView):
    template_name = "accounts/password_change.html"
