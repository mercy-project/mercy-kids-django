# Generated by Django 3.1.6 on 2021-02-04 11:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uid', models.CharField(max_length=200)),
                ('email', models.CharField(max_length=32)),
                ('password', models.CharField(max_length=64)),
                ('name', models.CharField(max_length=10)),
                ('nickname', models.CharField(max_length=10)),
                ('registered_at', models.DateTimeField()),
            ],
        ),
    ]
