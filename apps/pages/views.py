from django.shortcuts import render, redirect
from django.urls import reverse
from django.views import View
from django.views.generic import TemplateView


class HomePageView(TemplateView):
    template_name = 'pages/home.html'

    ### def get(self, request, *args, **kwargs):
    ###    form = self.form_class()
    ###    return render(request, self.template_name, {'form': form})

    ### def post(self, request, *args, **kwargs):
    ###    form = self.form_class(request.POST)
    ###    if form.is_valid():
    ###        form.save()
    ###        return redirect(reverse('list-view'))
    ###    return render(request, self.template_name, {'form': form})