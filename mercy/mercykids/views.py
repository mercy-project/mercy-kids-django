import json
from datetime import datetime

# from django.shortcuts import render
from django.http import JsonResponse

from mercykids.models import User

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
    # TODO: 1) 이메일 형태 검증 (regex)
    # TODO: 2) 이메일 중복 확인
    # TODO: 3) 비밀번호 해싱
    email = request.POST.get('email', None)
    password = request.POST.get('password', None)
    name = request.POST.get('name', None)
    nickname = request.POST.get('nickname', None)
    birthdate = request.POST.get('birthdate', None)
    user = User(
        email=email,
        password=password,
        name=name,
        nickname=nickname,
        birthdate=datetime(*map(int, birthdate.split('-')))
    )
    user.save()

    return BooleanJsonResponse(True)


def _is_email_registered(email: str) -> bool:
    query = User.objects.filter(email=email)
    try:
        _ = query.get()
        return True
    except User.DoesNotExist:
        return False
    except Exception:
        return False
