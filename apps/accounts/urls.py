from django.urls import path

from .views import LoginView, LogoutView, SignupView, ChangePasswordView

urlpatterns = [
    path("account_change_password/", ChangePasswordView.as_view(), name="account_change_password"),
    path("account_logout/", LogoutView.as_view(), name="account_logout"),
    path("account_login/", LoginView.as_view(), name="account_login"),
    path("account_signup/", SignupView.as_view(), name="account_signup")
]
