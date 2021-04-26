import unittest

from regex import email_regex


class RegexTestCase(unittest.TestCase):

    def test_email_regex(self):
        email = 'johndoe@gmail.com'
        self.assertEqual(email_regex.search(email).group('id'), 'johndoe')


if __name__ == "__main__":
    unittest.main()
