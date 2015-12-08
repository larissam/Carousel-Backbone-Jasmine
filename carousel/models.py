from django.db import models

class Album(models.Model):
    name = models.CharField(max_length=200)

class Photo(models.Model):
    url = models.FilePathField(path="static/")
    thumb_url = models.FilePathField(path="static/")
    title = models.CharField(max_length=200)
    date = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
