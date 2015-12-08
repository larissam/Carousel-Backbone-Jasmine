from django.conf.urls import include, url
from carousel import views, api

urlpatterns = [
    url(r'^$', views.main, name='main'),
    url(r'^api/albums$', api.AlbumList.as_view()),
    url(r'^api/albums/(?P<pk>[0-9]+)/$', api.AlbumDetail.as_view()),
    url(r'^api/photos$', api.PhotoList.as_view()),
    url(r'^api/photos/(?P<pk>[0-9]+)/$', api.PhotoDetail.as_view()),
]
