from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from tasks import views

# api versioning (por si en algún momento queremos añadirle algo al proyecto final)
router = routers.DefaultRouter()
router.register(r'tasks', views.TView, 'tasks')

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('docs/', include_docs_urls(title='Tasks API'))
]

# Este código lo que me genera son las rutas:
# GET - POST - PUT - DELETE