from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        # fields = ('id', 'title', 'description', 'done') in this case we can just use __all__ because we r using all fields
        fields = '__all__'
