from django.db import models




class YogaPost(models.Model):
    # yogaid = models.ForeignKey(Instructor, primary_key=True)
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    paragraph = models.TextField()
    p1 = models.CharField(max_length=100, null=True, blank=True)
    p2 = models.CharField(max_length=100, null=True, blank=True)
    p3 = models.CharField(max_length=100, null=True, blank=True)
    image = models.ImageField(upload_to="yoga_images/", blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    teacher = models.CharField(max_length=100, null=True, blank=True)
    catergory = models.CharField(max_length=200, null=True, blank=True)

    image2 = models.ImageField(upload_to="yoga_images/", blank=True, null=True)
    titles = models.CharField(max_length=100, null=True, blank=True)
    paragraphs = models.TextField(null=True, blank=True)
    paragraphs2 = models.TextField(null=True, blank=True)
    title2 = models.CharField(max_length=100, null=True, blank=True)



    title3 = models.CharField(max_length=100, null=True, blank=True)
    image3 = models.ImageField(upload_to="yoga_images/", blank=True, null=True)
    introduction3 = models.TextField(blank=True, null=True)
    paragraphs3 = models.TextField(null=True, blank=True)
    image4 = models.ImageField(upload_to="yoga_images/", blank=True, null=True)
    paragraphs = models.TextField(null=True, blank=True)







    def __str__(self):
        return self.title



class Article(models.Model):
    image1 = models.ImageField(upload_to="article_images/", blank=True, null=True)
    short1 = models.TextField(null=True, blank=True)
    short2 = models.TextField(null=True, blank=True)
    title1 = models.CharField(max_length=200)
    description1 = models.TextField(null=True)
    read = models.TextField(null=True, blank=True)
    created_at1 = models.DateTimeField(auto_now_add=True)
    updated_at1 = models.DateTimeField(auto_now=True)
    def __str__ (self):
        return f"{self.title1} - {self.short1}"
