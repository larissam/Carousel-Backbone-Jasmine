from rest_framework import generics, mixins

from carousel.models import Album, Photo
from carousel.serializers import AlbumSerializer, PhotoSerializer

# NOTE: for future directions, albums should contain a photolist
class AlbumList(mixins.ListModelMixin,
                generics.GenericAPIView):
    """
    List all albums
    """
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

class AlbumDetail(mixins.RetrieveModelMixin,
                    generics.GenericAPIView):
    """
    Retrieve album instance.
    """
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

class PhotoList(mixins.ListModelMixin,
                generics.GenericAPIView):
    """
    List all photos
    """
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

class PhotoDetail(mixins.RetrieveModelMixin,
                    generics.GenericAPIView):
    """
    Retrieve photo instance.
    """
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)
