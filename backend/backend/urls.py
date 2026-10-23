from django.contrib import admin
from django.urls import path
from apps.core.views import ReactView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', ReactView.as_view(), name="react-view"),
]