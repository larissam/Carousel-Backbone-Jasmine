from rest_framework.serializers import ModelSerializer

from carousel.models import Album, Photo


class AlbumSerializer(ModelSerializer):
    class Meta:
        model = Album
        fields = ('id', 'name')

class PhotoSerializer(ModelSerializer):
    class Meta:
        model = Photo
        fields = ('id', 'url', 'thumb_url', 'title', 'date', 'location')
