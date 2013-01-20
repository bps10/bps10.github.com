from django.template import Context, loader
from django.http import HttpResponse
from django.template import RequestContext
from django.core.context_processors import csrf
from django.shortcuts import render_to_response

'''
    def my_view(request):
    c = {}
    c.update(csrf(request))
    # ... view code here
    return render_to_response("a_template.html", c)
    '''

def index(request):
    
    if request.method == 'POST':
        c = {}
        c.update(csrf(request))
        t = loader.get_template('submitted.html')
    
    if request.method == 'GET':
        t = loader.get_template('input.html')
        c = Context({})
    return HttpResponse(t.render(c))