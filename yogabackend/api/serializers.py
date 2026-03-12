from rest_framework import serializers
from .models import YogaPost, Article

class YogaPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = YogaPost
        fields = '__all__'


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'
