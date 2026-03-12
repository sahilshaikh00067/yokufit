from django.urls import path
from . import views

urlpatterns = [
    # YogaPost CRUD
    path('posts/', views.get_posts, name="get_posts"),
    path('postss/', views.get_posts, name="get_posts"),
    path('blogdis/', views.get_posts, name="get_posts"),
    path('yogatherapy/', views.get_posts, name="get_posts"),
    path('posts/<int:pk>/', views.get_post, name="get_post"),
    path('posts/create/', views.create_post, name="create_post"),
    path('posts/<int:pk>/update/', views.update_post, name="update_post"),
    path('posts/<int:pk>/delete/', views.delete_post, name="delete_post"),

    # Article CRUD
    path('articles/', views.get_articles, name="get_articles"),
    path('instructor/', views.get_articles, name="get_articles"),
    path('articles/<int:pk>/', views.get_article, name="get_article"),
    path('articles/create/', views.create_article, name="create_article"),
    path('articles/<int:pk>/update/', views.update_article, name="update_article"),
    path('articles/<int:pk>/delete/', views.delete_article, name="delete_article"),
    

]
