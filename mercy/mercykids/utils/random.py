from uuid import uuid4


def generate_random_string(length=32):
    length = max(length, 32)
    return str(uuid4()).replace('-', '')[:length]


if __name__ == "__main__":
    pass
