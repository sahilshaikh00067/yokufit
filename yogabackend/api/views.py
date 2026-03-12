from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404, render
from .models import YogaPost, Article
from .serializers import YogaPostSerializer, ArticleSerializer


# -------------------------------------------------------
#                YOGA POST CRUD
# ---------------------------------------------------------

@api_view(['GET'])
def get_posts(request):
    posts = YogaPost.objects.all()
    serializer = YogaPostSerializer(posts, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_post(request, pk):
    post = get_object_or_404(YogaPost, pk=pk)
    serializer = YogaPostSerializer(post)
    return Response(serializer.data)


@api_view(['POST'])
def create_post(request):
    serializer = YogaPostSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(['PUT', 'PATCH'])
def update_post(request, pk):
    post = get_object_or_404(YogaPost, pk=pk)
    serializer = YogaPostSerializer(
        post,
        data=request.data,
        partial=(request.method == 'PATCH')
    )
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=200)
    return Response(serializer.errors, status=400)


@api_view(['DELETE'])
def delete_post(request, pk):
    post = get_object_or_404(YogaPost, pk=pk)
    post.delete()
    return Response({"message": "Post deleted successfully"}, status=204)


# ---------------------------------------------------------
#                ARTICLE CRUD
# ---------------------------------------------------------

@api_view(['GET'])
def get_articles(request):
    articles = Article.objects.all()
    serializer = ArticleSerializer(articles, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_article(request, pk):
    article = get_object_or_404(Article, pk=pk)
    serializer = ArticleSerializer(article)
    return Response(serializer.data)


@api_view(['POST'])
def create_article(request):
    serializer = ArticleSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(['PUT', 'PATCH'])
def update_article(request, pk):
    article = get_object_or_404(Article, pk=pk)
    serializer = ArticleSerializer(
        article,
        data=request.data,
        partial=(request.method == 'PATCH')
    )
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=200)
    return Response(serializer.errors, status=400)


@api_view(['DELETE'])
def delete_article(request, pk):
    article = get_object_or_404(Article, pk=pk)
    article.delete()
    return Response({"message": "Article deleted successfully"}, status=204)




def dashboard(request):
    """Dashboard page showing total posts & articles."""
    total_yoga_posts = YogaPost.objects.count()
    total_articles = Article.objects.count()

    context = {
        "total_yoga_posts": total_yoga_posts,
        "total_articles": total_articles,
    }

    return render(request, "dashboard.html", context)