# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Album',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Photo',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('url', models.FilePathField(path=b'/static')),
                ('thumb_url', models.FilePathField(path=b'/static')),
                ('title', models.CharField(max_length=200)),
                ('date', models.DateTimeField()),
                ('location', models.CharField(max_length=200)),
            ],
        ),
    ]
