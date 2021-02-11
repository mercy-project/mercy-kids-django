# Mercy Kids API
![CI Lint](https://github.com/mercy-project/mercy-kids-django/workflows/Lint/badge.svg)
![Python 3.8](https://img.shields.io/badge/Python-3.8-blue.svg?logo=python)
![Django](https://img.shields.io/badge/Django-3.1.5-yellowgreen.svg?logo=django)

## virtualenv
```bat
%> .\env\Scripts\activate.bat
(env) %> deactivate
```
```bash
% source bin/activate
(env) % deactivate
```

## Database Migration
```bash
(env) % python manage.py makemigrations mercykids
(env) % python manage.py sqlmigrate mercykids 0001
(env) % python manage.py migrate
```

## Conventions / Style Guides
| Language | Following Convention |
| -------- | -------------------- |
| Python   | [PEP 8](https://www.python.org/dev/peps/pep-0008/) |

### Lint
| Language | Linter |
| -------- | ------ |
| Python   | [flake8](http://flake8.pycqa.org) |

### Unit test
| Language | Library |
| -------- | ------- |
| Python   | [unittest](https://docs.python.org/3/library/unittest.html) |