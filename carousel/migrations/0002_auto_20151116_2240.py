# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('carousel', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='photo',
            name='date',
            field=models.CharField(max_length=200),
        ),
    ]
