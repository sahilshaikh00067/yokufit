from django.contrib import admin
from .models import YogaPost, Article


@admin.register(YogaPost)
class YogaPostAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description', 'created_at', 'updated_at')
    search_fields = ('title', 'description', 'paragraph', 'paragraphs2', 'introduction', 'paragraphs3', 'title3', 'paragraphs4')
    list_filter = ('created_at', 'updated_at')

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('id', 'title1', 'short1','short2', 'description1')
    search_fields = ('title1', 'short1','short2', 'description1')
 