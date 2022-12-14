from django.db import models
from ckedito.fields import RichTextField

class Post(models.Model):
    body=RichTextField(blank=True,null=True)

