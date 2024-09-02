from django.core.management.base import BaseCommand
import requests
from django.conf import settings
from .models import Genre

class Command(BaseCommand):
    help = 'Popula a tabela de gêneros no banco de dados'

    def handle(self, *args, **kwargs):
        url = f"https://api.themoviedb.org/3/genre/movie/list?api_key={settings.TMDB_API_KEY}&language=pt-BR"
        response = requests.get(url)

        if response.status_code == 200:
            genres = response.json().get('genres', [])
            for genre in genres:
                Genre.objects.create(id=genre['id'], name=genre['name'])
            self.stdout.write(self.style.SUCCESS(f"{len(genres)} gêneros foram salvos no banco de dados."))
        else:
            self.stdout.write(self.style.ERROR(f"Falha ao buscar gêneros: {response.status_code}"))
