import json
from datetime import datetime

from django.http import JsonResponse

from mercykids.models import User
from mercykids.utils.regex import email_regex
from mercykids.utils.mailer import PyMailer
from mercykids.utils.random import generate_random_string

HTTP_OK = 200
HTTP_BAD_REQUEST = 400


class BooleanJsonResponse(JsonResponse):
    def __init__(self, data: bool, status=HTTP_OK):
        assert type(data) is bool
        data = {"value": data}
        super(BooleanJsonResponse, self).__init__(data, status=status)


# Create your views here.
def index(request):
    # token = request.headers.get('Authorization', None)
    # body = json.loads(request.body)
    return JsonResponse({})


def auth_verify_email(request):
    email = request.POST.get('email', None)
    if email is None:
        return JsonResponse({
            "message": "이메일(email)이 입력되지 않았습니다."
        },
        status=HTTP_BAD_REQUEST,
        json_dumps_params={'ensure_ascii': True})
    is_email_registered = _is_email_registered(email)
    return BooleanJsonResponse(is_email_registered)


def register_user(request):
    # TODO: django auth
    # TODO: 1) 이메일 형태 검증 (regex)
    # TODO: 2) 이메일 중복 확인
    # TODO: 3) 비밀번호 해싱
    email = request.POST.get('email', None)
    password = request.POST.get('password', None)
    name = request.POST.get('name', None)
    nickname = request.POST.get('nickname', None)
    birthdate = request.POST.get('birthdate', None)
    activation_code = generate_random_string()
    if _is_email_registered(email):
        return BooleanJsonResponse(False)

    user = User(
        email=email,
        password=password,
        name=name,
        nickname=nickname,
        birthdate=datetime(*map(int, birthdate.split('-'))),
        activation_code=activation_code
    )
    user.save()
    print('user:', user.email, user)

    PyMailer.send_mail(
        [email],
        subject='Welcome to MercyKids!',
        content=f'<br><a href="http://localhost:8000/kids/auth/activate?code={activation_code}">link</a>')

    return BooleanJsonResponse(True)


def auth_activate(request):
    code = request.GET.get('code', None)
    try:
        user = User.objects.filter(activation_code=code).get()
        user.authenticated_at = datetime.now()
        user.save()
        return BooleanJsonResponse(True)
    except:
        return BooleanJsonResponse(False)


def _is_email_registered(email: str) -> bool:
    query = User.objects.filter(email=email)
    try:
        _ = query.get()
        print(_)
        return True
    except User.DoesNotExist:
        return False
    except Exception:
        return False
