from datetime import datetime

from django.db import models


# Create your models here.
class User(models.Model):
    # id = models.AutoField(primary_key=True)
    email = models.CharField(max_length=32, primary_key=True)
    password = models.CharField(max_length=64)
    name = models.CharField(max_length=10)
    nickname = models.CharField(max_length=10)
    birthdate = models.DateTimeField(default=datetime(1970, 1, 1, 9, 0))
    activation_code = models.CharField(max_length=32)
    registered_at = models.DateTimeField(default=datetime.now())
    authenticated_at = models.DateTimeField(default=datetime.now())
