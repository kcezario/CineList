python3.12 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python movies/tools.py
python manage.py collectstatic --noinput